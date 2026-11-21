import React from "react";

export interface PageableSortParams {
  page: number;
  size: number;
  sort: string[];
}

export interface UsePaginationAndSortOptions<T extends string> {
  defaultPage?: number;
  defaultPageSize?: number;
  defaultSort?: SortState<T>;
  storageKey?: string;
}

type SortDir = "ASC" | "DESC";
type SortState<T extends string> = Partial<Record<T, SortDir>>;
type UsePaginationAndSortReturn<T extends string> = {
  page: { page: number; pageSize: number };
  handlePageChange: (model: { page: number; pageSize?: number }) => void;
  sortState: SortState<T>;
  handleSortChange: <K extends T>(field: K, direction: SortDir) => void;
  params: PageableSortParams;
};

interface StoredState<T extends string> {
  pageModel?: { page: number; pageSize: number };
  sortState?: SortState<T>;
  [k: string]: unknown;
}

function readStoredState<T extends string>(
  storageKey?: string,
): StoredState<T> | undefined {
  if (!storageKey) return undefined;
  try {
    const raw = sessionStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as StoredState<T>) : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Hook para paginação + ordenação no formato Spring Data Pageable.
 *
 * @typeParam T  as chaves válidas de ordenação (ex: 'nome'|'dataCriacao')
 */
export function usePaginationAndSort<T extends string = string>({
  defaultPage = 0,
  defaultPageSize = 10,
  defaultSort = {} as Record<T, SortDir>,
  storageKey,
}: UsePaginationAndSortOptions<T> = {}): UsePaginationAndSortReturn<T> {
  const stored = readStoredState<T>(storageKey);

  const [pageModel, setPageModel] = React.useState<{
    page: number;
    pageSize: number;
  }>(() => ({
    page: stored?.pageModel?.page ?? defaultPage,
    pageSize: stored?.pageModel?.pageSize ?? defaultPageSize,
  }));

  const [sortState, setSortState] = React.useState<SortState<T>>(
    stored?.sortState ?? defaultSort,
  );

  const handlePageChange = React.useCallback(
    (model: { page: number; pageSize?: number }) => {
      setPageModel({
        page: model.page,
        pageSize: model.pageSize ?? defaultPageSize,
      });
    },
    [defaultPageSize],
  );

  const handleSortChange = React.useCallback(
    <K extends T>(field: K, direction: SortDir) => {
      setSortState({ [field]: direction } as Record<T, SortDir>);
    },
    [],
  );

  const sort = React.useMemo<string[]>(() => {
    return (Object.entries(sortState) as [T, SortDir][])
      .filter(([, dir]) => dir !== null && dir !== undefined)
      .map(([field, dir]) => `${field},${dir.toLowerCase()}`);
  }, [sortState]);

  const params: PageableSortParams = React.useMemo(() => {
    return {
      page: pageModel.page,
      size: pageModel.pageSize,
      sort,
    };
  }, [pageModel, sort]);

  React.useEffect(() => {
    if (!storageKey) return;
    try {
      const prevRaw = sessionStorage.getItem(storageKey);
      const base = prevRaw ? JSON.parse(prevRaw) : {};
      sessionStorage.setItem(
        storageKey,
        JSON.stringify({ ...base, pageModel, sortState }),
      );
    } catch {
      return;
    }
  }, [storageKey, pageModel, sortState]);

  return {
    page: pageModel,
    handlePageChange,
    sortState,
    handleSortChange,
    params,
  };
}

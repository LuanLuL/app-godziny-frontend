import React from "react";
import Styles from "./ComplexTableStyles";
import { Typography } from "@mui/material";
import { MyTooltip } from "../myTooltip/MyTooltip";
import { SysCircularLoading } from "../sysLoading/sysCircularLoading/SysCircularLoading";
import { SysEmptyState } from "../sysEmptyState/SysEmptyState";
import { PaginationTable } from "../sysPagination/paginationTable/PaginationTable";

export type IRowComplexTableProps<T> = T & {
  index: number;
};

interface IComplexTableProps<T> {
  data: T[];
  labelColumns: Partial<Record<keyof T, string>>;
  widthColumns: Partial<Record<keyof T, string>>;
  onRowClick?: (row: IRowComplexTableProps<T>) => void;
  loading?: boolean;
  customEmptyState?: {
    imagePath: string;
    imageSize?: { height: number; width: number };
    title: string;
    description: string;
  };
}

export const ComplexTable = <T,>({
  data,
  labelColumns,
  widthColumns,
  onRowClick,
  loading = false,
  customEmptyState = {
    imagePath: "/assets/svgs/emptyState.svg",
    imageSize: { width: 190, height: 130 },
    title: "Nenhum resultado encontrado",
    description:
      "Tente ajustar a pesquisa ou os filtros para encontrar o que procura",
  },
}: IComplexTableProps<T>) => {
  const columns = Object.keys(labelColumns).filter(
    (column) => column in widthColumns,
  ) as Array<keyof T>;

  const gridTemplateColumns = columns
    .map((column) => {
      const minWidth = widthColumns[column]!;
      const flex = Number.parseFloat(minWidth);

      return `minmax(${minWidth}, ${flex}fr)`;
    })
    .join(" ");

  const minTableWidth =
    columns.reduce(
      (total, column) => total + Number.parseFloat(widthColumns[column]!),
      0,
    ) +
    (columns.length - 1) * 24 +
    2 * 16;

  const hasData = data.length > 0;
  const shouldShowEmptyState = !loading && !hasData;

  return (
    <Styles.Table>
      <Styles.Head
        sx={{
          width: `${minTableWidth}px`,
          minWidth: "100%",
          gridTemplateColumns,
        }}
      >
        {columns.map((column) => {
          const value = labelColumns[column] ?? "-";
          return (
            <MyTooltip
              customWidth="auto"
              title={String(value)}
              disableInteractive
              placement="bottom-start"
            >
              <Styles.Column key={String(column)}>
                <Typography variant="subtitle2">{value}</Typography>
              </Styles.Column>
            </MyTooltip>
          );
        })}
      </Styles.Head>

      {loading ? (
        <Styles.LoadingContainer>
          <SysCircularLoading />
        </Styles.LoadingContainer>
      ) : shouldShowEmptyState ? (
        <Styles.EmptyStateContainer>
          <SysEmptyState
            imagePath={customEmptyState.imagePath}
            imageSize={customEmptyState.imageSize}
            title={customEmptyState.title}
            description={customEmptyState.description}
            sxMap={{ container: { height: "312px" } }}
          />
        </Styles.EmptyStateContainer>
      ) : (
        data.map((item, index) => (
          <Styles.Line
            key={index}
            onClick={() => onRowClick?.({ ...item, index })}
            sx={{
              width: `${minTableWidth}px`,
              minWidth: "100%",
              gridTemplateColumns,
              cursor: onRowClick ? "pointer" : "default",
            }}
          >
            {columns.map((column) => {
              const value = item[column];
              return (
                <MyTooltip
                  customWidth="auto"
                  title={String(value)}
                  disabled={value == null || value === ""}
                  placement="bottom-start"
                >
                  <Styles.Column key={String(column)}>
                    <Typography
                      variant="body1"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {String(value ?? "-")}
                    </Typography>
                  </Styles.Column>
                </MyTooltip>
              );
            })}
          </Styles.Line>
        ))
      )}
      <Styles.Footer>
        <PaginationTable
          handlePageChange={() => {}}
          paginationModel={{
            page: 3,
            pageSize: 10,
          }}
          totalItens={35}
        />
      </Styles.Footer>
    </Styles.Table>
  );
};

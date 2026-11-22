import React from "react";
import Styles from "./ComplexTableStyles";
import { SxProps, Theme, Typography } from "@mui/material";
import { MyTooltip } from "../myTooltip/MyTooltip";
import { SysCircularLoading } from "../sysLoading/sysCircularLoading/SysCircularLoading";
import { SysEmptyState } from "../sysEmptyState/SysEmptyState";
import { PaginationTable } from "../sysPagination/paginationTable/PaginationTable";
import { PaginationModel } from "../sysPagination/SysPaginationSch";
import { BasicMenu, IoptionsToBasicMenu } from "../basicMenu/BasicMenu";
import SysIcon from "../sysIcon/SysIcons";

export type IRowComplexTableProps<T> = T & {
  index: number;
};

type ModifiedCellProps<T> =
  | {
      fieldsModifiedCell: Array<keyof T>;
      renderModifiedCell: (
        row: IRowComplexTableProps<T>,
        field: keyof T,
      ) => React.ReactNode;
    }
  | {
      fieldsModifiedCell?: never;
      renderModifiedCell?: never;
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
  custonPageControl?: {
    handlePageChange: (paginationModel: PaginationModel) => void;
    paginationModel: { page: number; pageSize: number };
    totalItens: number;
    pageSizeOptions: number[];
  };
  renderActions?: IoptionsToBasicMenu<[IRowComplexTableProps<T>]>[];
  sxMap?: {
    basicMenu?: React.ComponentProps<typeof BasicMenu>["sxMap"];
  };
}

type IUnionComplexTableProps<T> = IComplexTableProps<T> & ModifiedCellProps<T>;

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
  custonPageControl = undefined,
  fieldsModifiedCell = [],
  renderModifiedCell = undefined,
  renderActions = undefined,
  sxMap,
}: IUnionComplexTableProps<T>) => {
  const columns = Object.keys(labelColumns).filter(
    (column) => column in widthColumns,
  ) as Array<keyof T>;

  const gridTemplateColumns = [
    ...columns.map((column) => {
      const minWidth = widthColumns[column]!;
      const flex = Number.parseFloat(minWidth);

      return `minmax(${minWidth}, ${flex}fr)`;
    }),
    ...(renderActions ? ["32px"] : []),
  ].join(" ");

  const minTableWidth =
    columns.reduce(
      (total, column) => total + Number.parseFloat(widthColumns[column]!),
      0,
    ) +
    (columns.length - 1) * 24 +
    2 * 16 +
    (renderActions ? 32 + 24 : 0);

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
              key={String(column)}
            >
              <Styles.Column>
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
              if (fieldsModifiedCell.includes(column))
                return renderModifiedCell?.({ ...item, index }, column);

              return (
                <MyTooltip
                  customWidth="auto"
                  title={String(value)}
                  disabled={value == null || value === ""}
                  placement="bottom-start"
                  key={String(column)}
                >
                  <Styles.Column>
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
            {renderActions && (
              <BasicMenu<[IRowComplexTableProps<T>]>
                indexOfComponent={`renderActionLine${index}`}
                options={renderActions.map((action) => ({
                  ...action,
                  onClick: () => action.onClick({ ...item, index }),
                }))}
                sxMap={sxMap?.basicMenu}
                custonIcon={
                  <SysIcon
                    name="moreVert"
                    fontSize="small"
                    sx={{ color: (t) => t.palette.primary.main }}
                  />
                }
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "right",
                }}
              />
            )}
          </Styles.Line>
        ))
      )}
      {custonPageControl && (
        <Styles.Footer>
          <PaginationTable
            handlePageChange={custonPageControl?.handlePageChange}
            paginationModel={custonPageControl?.paginationModel}
            totalItens={custonPageControl?.totalItens}
            pageSizeOptions={custonPageControl?.pageSizeOptions}
          />
        </Styles.Footer>
      )}
    </Styles.Table>
  );
};

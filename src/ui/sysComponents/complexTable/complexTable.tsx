import React from "react";
import Styles from "./complexTableStyles";
import { Typography } from "@mui/material";

interface IComplexTableProps<T> {
  data: T[];
  labelColumns: Record<keyof T, string>;
  widthColumns: Record<keyof T, string>;
}

export const ComplexTable = <T,>({
  data,
  labelColumns,
  widthColumns,
}: IComplexTableProps<T>) => {
  const columns = Object.keys(widthColumns) as Array<keyof T>;

  const gridTemplateColumns = columns
    .map((column) => {
      const minWidth = widthColumns[column];
      const flex = Number.parseFloat(minWidth);

      return `minmax(${minWidth}, ${flex}fr)`;
    })
    .join(" ");

  const minTableWidth =
    columns.reduce(
      (total, column) => total + Number.parseFloat(widthColumns[column]),
      0,
    ) +
    (columns.length - 1) * 24 +
    2 * 16;

  return (
    <Styles.Table>
      <Styles.Head
        sx={{
          width: `${minTableWidth}px`,
          minWidth: "100%",
          gridTemplateColumns,
        }}
      >
        {columns.map((column) => (
          <Styles.Column key={String(column)}>
            <Typography variant="subtitle2">{labelColumns[column]}</Typography>
          </Styles.Column>
        ))}
      </Styles.Head>

      {data.map((item, index) => (
        <Styles.Line
          key={index}
          sx={{
            width: `${minTableWidth}px`,
            minWidth: "100%",
            gridTemplateColumns,
          }}
        >
          {columns.map((column) => (
            <Styles.Column key={String(column)}>
              <Typography variant="body1">
                {String(item[column] ?? "-")}
              </Typography>
            </Styles.Column>
          ))}
        </Styles.Line>
      ))}
    </Styles.Table>
  );
};

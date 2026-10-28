import React from "react";
import Styles from "./complexTableStyles";

interface IComplexTableProps<T> {
  data: T[];
}

export const ComplexTable = <T,>({ data }: IComplexTableProps<T>) => {
  return (
    <Styles.Table>
      <Styles.Head></Styles.Head>
      {data.map((item, index) => (
        <Styles.Line key={index}>
          {/* Vamos renderizar as colunas aqui */}
        </Styles.Line>
      ))}
    </Styles.Table>
  );
};

import React from "react";
import { PaginationModel } from "../SysPaginationSch";
import { MyTooltip } from "../../myTooltip/MyTooltip";
import { IconButton, Typography } from "@mui/material";
import SysIcon from "../../sysIcon/SysIcons";
import Styles from "./PaginationTableStyles";
import { MyDivider } from "../../myDivider/MyDivider";
import { SysPaginationMenu } from "../sysPaginationMenu/SysPaginationMenu";

interface IPaginationTableProps {
  handlePageChange: (paginationModel: PaginationModel) => void;
  paginationModel: { page: number; pageSize: number };
  totalItens: number;
  pageSizeOptions?: number[];
}

export const PaginationTable: React.FC<IPaginationTableProps> = ({
  handlePageChange,
  paginationModel,
  totalItens,
  pageSizeOptions = [10, 20, 30],
}) => {
  const totalPages = Math.ceil(
    totalItens / (paginationModel.pageSize ?? pageSizeOptions[0]),
  );

  const handlePageSizeChange = (newPageSize: number) => {
    handlePageChange({ ...paginationModel, pageSize: newPageSize, page: 0 });
  };

  const handlePageNumberChange = (newPage: number) => {
    handlePageChange({ ...paginationModel, page: newPage - 1 });
  };

  const from = paginationModel.page * paginationModel.pageSize + 1;
  const to = (paginationModel.page + 1) * paginationModel.pageSize;
  const count = totalItens;

  if (totalItens < paginationModel.pageSize) return null;

  return (
    <Styles.Container>
      <Styles.ActionItensBody>
        <Typography variant="body1" noWrap>
          Itens por página:
        </Typography>
        <Styles.BoxFlex>
          <Styles.BoxTexto>
            <Typography variant="body1" noWrap>
              {paginationModel.pageSize ?? pageSizeOptions[0]}
            </Typography>
          </Styles.BoxTexto>
          <SysPaginationMenu
            indexOfComponent="controlItensPerPage"
            value={paginationModel.pageSize ?? pageSizeOptions[0]}
            options={pageSizeOptions}
            onChange={handlePageSizeChange}
          />
        </Styles.BoxFlex>
        <MyDivider orientation="vertical" flexItem />
        <Typography
          variant="body1"
          noWrap
        >{`${count !== 0 ? from : 0} - ${to > count ? count : to} de ${count}`}</Typography>
      </Styles.ActionItensBody>
      {totalItens !== paginationModel.pageSize && (
        <Styles.ActionItensBody>
          <Typography variant="body1" noWrap>
            Página
          </Typography>
          <Styles.BoxFlex>
            <Styles.BoxTexto>
              <Typography variant="body1" noWrap>
                {totalPages === 0
                  ? "-"
                  : Math.min((paginationModel.page ?? 0) + 1, totalPages)}
              </Typography>
            </Styles.BoxTexto>
            <SysPaginationMenu
              indexOfComponent="controlPageNumber"
              value={
                totalPages === 0
                  ? ""
                  : Math.min((paginationModel.page ?? 0) + 1, totalPages)
              }
              options={
                totalPages === 0
                  ? []
                  : Array.from({ length: totalPages }, (_, i) => i + 1)
              }
              onChange={handlePageNumberChange}
              disabled={totalPages === 0}
            />
          </Styles.BoxFlex>
          <MyDivider orientation="vertical" flexItem />
          <Styles.BoxNavegacao>
            <MyTooltip customWidth="auto" title="Anterior">
              <IconButton
                disabled={paginationModel.page === 0}
                onClick={() =>
                  handlePageChange({
                    ...paginationModel,
                    page: Math.max(0, paginationModel.page - 1),
                  })
                }
              >
                <SysIcon
                  name="muiChevronLeft"
                  fontSize="small"
                  sx={{
                    color: (t) =>
                      paginationModel.page === 0
                        ? t.palette.text.disabled
                        : t.palette.primary.main,
                  }}
                />
              </IconButton>
            </MyTooltip>
            <MyTooltip customWidth="auto" title="Próxima">
              <IconButton
                disabled={paginationModel.page >= totalPages - 1}
                onClick={() =>
                  handlePageChange({
                    ...paginationModel,
                    page: Math.min(totalPages - 1, paginationModel.page + 1),
                  })
                }
              >
                <SysIcon
                  name="muiChevronRight"
                  fontSize="small"
                  sx={{
                    color: (t) =>
                      paginationModel.page >= totalPages - 1
                        ? t.palette.text.disabled
                        : t.palette.primary.main,
                  }}
                  transformProp="translate(-80, 0)"
                />
              </IconButton>
            </MyTooltip>
          </Styles.BoxNavegacao>
        </Styles.ActionItensBody>
      )}
    </Styles.Container>
  );
};

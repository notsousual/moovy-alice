import { SxProps } from "@mui/material";

export const tableStyles: SxProps = {
  borderRadius: 4,
  "& .MuiDataGrid-cell:hover": {
    background: "none",
    backgroundColor: "none",
  },
  "& .MuiDataGrid-row:hover": {
    background: "none",
    backgroundColor: "none",
  },

  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: 700,
  },
  fontSize: 16,
}
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../theme/tableColumns";
import { tableStyles } from "../theme/tableStyles";

export const MovieTable = ({ rows }: { rows: any[] }) => {
  //any[] is used because MUI specifies Datagrid's rows type like this

  return (
    <Box width={"100%"} height={"100%"} maxWidth={1000} my={4}>
      <DataGrid
        sx={tableStyles}
        rows={rows}
        columns={columns}
        rowHeight={120}
        autoPageSize
        disableSelectionOnClick
      />
    </Box>
  );
};

import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { MovieRating } from "../components/MovieRating";

export const columns: GridColDef[] = [
  {
    field: "Poster",
    headerName: "Poster",
    align: "center",
    headerAlign: "left",

    renderCell: (params) => {
      return params.value !== "N/A" ? (
        <img
          style={{
            maxHeight: 120,
            maxWidth: 120,
            padding: 15,
            borderRadius: 20,
          }}
          alt={"Movie poster"}
          src={params.value}
        />
      ) : (
        <VisibilityOffIcon />
      );
    },
  },

  {
    field: "Title",
    flex: 1,
    headerName: "Title",
    headerAlign: "left",
  },
  {
    field: "Year",
    flex: 0.7,
    minWidth: 150,
    headerName: "Year Of Release",
    headerAlign: "left",
  },
  {
    field: "Rating",
    minWidth: 200,
    headerName: "Rate me!",
    headerAlign: "center",
    align: "center",

    renderCell: (params) => {
      return <MovieRating row={params.row} />;
    },
  },
  {
    field: "name",
    minWidth: 150,
    headerName: "",
    headerAlign: "center",
    align: "center",

    renderCell: (params) => {
      return (
        <Button
          variant="outlined"
          component={Link}
          to={"/detail/" + params.row.id}
        >
          Read More
        </Button>
      );
    },
  },
];

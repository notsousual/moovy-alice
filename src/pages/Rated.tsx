import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { MovieTable } from "../components/MovieTable";

export const Rated = () => {
  const rated = useSelector((state: any) => state.rated.rated);

  return (
    <Stack
      alignItems={"center"}
      height={"100%"}
      justifyContent={"center"}
      width={"100%"}
    >
      {rated.length > 0 ? (
        <MovieTable rows={rated} />
      ) : (
        <Typography variant="h3">No rated movies yet!</Typography>
      )}
    </Stack>
  );
};

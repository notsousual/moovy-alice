import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addRated } from "../redux/RatedSlice";
import { useState } from "react";

export const MovieRating = ({ row }: any) => {
  //any is used because MUI specifies Datagrid's rows type like this
  const rated = useSelector((state: any) => state.rated.rated);
  const ourMovie = rated.find((x: any) => x.id === row.id);

  const dispatch = useDispatch();
  const handleAddition = (movie: any) => {
    dispatch(addRated(movie));
  };

  const [value, setValue] = useState<number | null>(
    ourMovie ? ourMovie.Rating ?? null : null
  );

  return (
    <>
      <Rating
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleAddition({ ...row, Rating: newValue });
        }}
      />
    </>
  );
};

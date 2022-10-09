import { Stack, MenuItem, Tooltip } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

export const Header = () => {
  const rated = useSelector((state: any) => state.rated.rated);

  return (
    <Stack
      direction={"row"}
      spacing={1}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Link to="/">
        <img alt={'Moovy logo'} src={"/Group.png"}></img>
      </Link>
      <Tooltip
        title={
          rated.length === 0 ? "Rate movies to view your personal list" : ""
        }
      >
        <MenuItem
          component={Link}
          to="/rated"
          disabled={rated.length === 0 ? true : false}
        >
          Rated movies
        </MenuItem>
      </Tooltip>
    </Stack>
  );
};

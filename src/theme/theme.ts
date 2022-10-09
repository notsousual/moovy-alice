import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
      },
    },
  },
});

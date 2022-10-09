import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Header } from "./components/Header";
import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Rated } from "./pages/Rated";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack height={"100vh"} px={2} pt={1} pb={2}>
        <BrowserRouter>
          <Header />
          <Stack height={"100%"} alignItems={"center"}>
            <Routes>
              <Route path={`/search`} element={<Main />} />
              <Route path={`/search/:movieTitle`} element={<Main />} />
              <Route
                path={`/search/:movieTitle/:movieYear`}
                element={<Main />}
              />
              <Route path="/detail/:movieId" element={<Detail />} />
              <Route path="/rated" element={<Rated />} />
              <Route path="*" element={<Navigate to="/search" replace />} />
            </Routes>
          </Stack>
        </BrowserRouter>
      </Stack>
    </ThemeProvider>
  );
}

export default App;

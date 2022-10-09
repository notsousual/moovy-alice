import { CircularProgress, TextField } from "@mui/material";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MovieTable } from "../components/MovieTable";
import { Link, useParams } from "react-router-dom";

export const Main = () => {
  const { movieTitle, movieYear } = useParams();

  const [content, setContent] = useState<{
    Response?: string;
    Error?: string;
    Search?: any;
  }>({});

  const [rows, setRows] = useState<any[]>();
  const [title, setTitle] = useState<string>(movieTitle ?? "");
  const [year, setYear] = useState<string | number>(
    isNaN(Number(movieYear)) ? "" : Number(movieYear)
  );
  const [search, setSearch] = useState<{
    title: string;
    year?: string | number;
  }>({
    title: movieTitle ?? "",
    year: isNaN(Number(movieYear)) ? "" : Number(movieYear),
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieTitle) {
      setSearch({ title: movieTitle, year: movieYear ?? "" });
      setTitle(movieTitle);
      setYear(movieYear ?? "");
    }
  }, [movieTitle, movieYear]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        fetch(
          `https://www.omdbapi.com/?apikey=4811b5b3&s=${search.title}${
            search.year ? `&y=${search.year}` : ""
          }`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setContent(data);
            if (data["Response"] === "True" && data["Search"]) {
              for (let i in data["Search"]) {
                data["Search"][i]["imdbID"]
                  ? (data["Search"][i]["id"] = data["Search"][i]["imdbID"])
                  : (data["Search"][i]["id"] = i);
              }

              // ^^^ Because the response status is always 200 (OK) if you use the right API key,
              // even if the service can't find the movie by its name, doesn't return larger JSONs, there are too many results, etc.
              // you can test it out by yourself

              setRows(data["Search"]);
              setError(false);
            } else {
              setError(true);
            }
            setLoading(false);
          });
      } catch (e) {
        console.log("error!");
        setError(true);
      } finally {
      }
    };
    if (search.title) fetchData();
  }, [search]);

  return (
    <>
      <Stack
        direction="row"
        width={"100%"}
        maxWidth={1000}
        spacing={4}
        mt={4}
        alignItems={"center"}
      >
        <TextField
          fullWidth
          label={"Title"}
          variant={"filled"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label={"Year of release"}
          variant={"filled"}
          type={"number"}
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <Button
          variant={"contained"}
          color={"secondary"}
          size="large"
          disabled={title === undefined || title === ""}
          onClick={() => {
            setSearch({ title, year });
          }}
          endIcon={<SearchIcon />}
          sx={{ minWidth: "min-content" }}
          component={Link}
          to={`/search${title ? "/" + title : ""}${year ? "/" + year : ""}`}
        >
          Search
        </Button>
      </Stack>

      <Stack
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
      >
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <>
            <Typography
              textAlign={"center"}
              variant={"h3"}
              my={2}
              fontWeight={700}
            >
              Oops. Error!
            </Typography>

            {content.Error && (
              <Typography textAlign={"center"} variant={"h3"} my={2}>
                {content.Error}
              </Typography>
            )}
          </>
        ) : rows ? (
          <MovieTable rows={rows} />
        ) : null}
      </Stack>
    </>
  );
};

import { Box, CircularProgress } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieRating } from "../components/MovieRating";

export const Detail = () => {
  const { movieId } = useParams();

  const [content, setContent] = useState<any>();
  //any is used because https://www.omdbapi.com/ API doesnt provide schemes for typing the JSON

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`https://www.omdbapi.com/?apikey=4811b5b3&i=${movieId}&plot=full`)
          .then((response) => response.json())
          .then((data) => {
            setContent({ ...data, id: movieId });
            setError(false);
            if (data["Response"] !== "True") setError(true);

            // ^^^ Because the response status is always 200 (OK) if you use the right API key,
            // even if the service can't find the movie by its name, doesn't return larger JSONs, there are too many results, etc.
            // you can test it out by yourself
          });
      } catch (e) {
        console.log("error!");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });

  return (
    <Stack mt={4}>
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
      ) : content ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 1000,
            borderRadius: 1,
            gap: 4,
            justifyContent: "center",
          }}
        >
          {content.Poster !== "N/A" && (
            <img
              style={{
                maxHeight: 400,
              }}
              src={content.Poster}
              alt={"Movie poster"}
            />
          )}

          <Box maxWidth={500} mb={4}>
            {content.Title && (
              <Typography variant="h4" fontWeight={700}>
                {content.Title}
              </Typography>
            )}
            <MovieRating row={content}></MovieRating>

            <Typography variant="h6" fontWeight={700}>
              About the movie
            </Typography>

            {content.Year && (
              <Typography textAlign={"left"}>
                <b>Year of release:</b> {content.Year}
              </Typography>
            )}

            {content.Country && (
              <Typography textAlign={"left"}>
                <b>Country:</b> {content.Country}
              </Typography>
            )}

            {content.Genre && (
              <Typography textAlign={"left"}>
                <b>Genre:</b> {content.Genre}
              </Typography>
            )}

            {content.Director && (
              <Typography textAlign={"left"}>
                <b>Director:</b> {content.Director}
              </Typography>
            )}

            {content.Writer && (
              <Typography textAlign={"left"}>
                <b>Scenario:</b> {content.Writer}
              </Typography>
            )}

            {content.Actors && (
              <Typography textAlign={"left"}>
                <b>Actors:</b> {content.Actors}
              </Typography>
            )}

            <br />

            {content.Plot && <Typography>{content.Plot}</Typography>}
          </Box>
        </Box>
      ) : null}
    </Stack>
  );
};

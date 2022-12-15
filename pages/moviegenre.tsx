import { createStyles, Flex, Text } from "@mantine/core";
import MovieComp from "../components/MovieComp";
import { useQuery } from "@tanstack/react-query";
import { getGenreMovie } from "../api/genreApi";
import { Fragment } from "react";

const useStyles = createStyles((theme) => ({
  div: {
    width:'80%',
    marginLeft: "auto",
    marginRight: "auto",
    justify: "center",
    marginTop:10
  },
}));

const Movies = () => {
  const { classes, cx } = useStyles();
  const {
    data: genreData,
    isLoading: genreIsLoading,
    isSuccess: genreIsSuccess,
  } = useQuery(["genreMovie"], getGenreMovie);

  {
    genreIsSuccess && console.log("🥥", genreData);
  }
  return (
    <div className={classes.div}>
      <Flex direction='row' wrap='wrap' justify={{ sm: 'center' }}>
        {genreIsSuccess &&
          //@ts-ignore
          genreData.genres.map((data) => {
            return (
              <Fragment key={data.id}>
                <MovieComp title={data.name} color={true} />
              </Fragment>
            );
          })}
      </Flex>
      {/* <Flex direction='row' wrap='wrap'>
        <Flex direction='column' wrap='wrap'>
        <MovieComp title={"Action"} color={true} />
        <MovieComp title={"Drama"} color={true} />
        <MovieComp title={"Mystery"} color={true} />
        </Flex>
        <Flex direction='column' wrap='wrap'>
        <MovieComp title={"Adventure"} color={true} />
        <MovieComp title={"Family"} color={false} />
        <MovieComp title={"Romance"} color={true} />
        </Flex>
      </Flex> */}
    </div>
  );
};

export default Movies;

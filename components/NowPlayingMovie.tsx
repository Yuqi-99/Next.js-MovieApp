import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Grid,
  Image,
  BackgroundImage,
  Box,
} from "@mantine/core";
import MovieSecHeader from "./MovieSecHeader";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getNowPlaying } from "../api/movieApi";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const useStyles = createStyles((theme) => ({
  div: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    justify: "center",
    marginTop: "2%",
    height: "100%",
  },

  div2: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    justify: "center",
    height: "100%",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: "#FFFFFF",
    lineHeight: 1.2,
    fontSize: 18,
    marginBottom: 3,
    // marginTop: theme.spacing.xs,
  },

  category: {
    color: "#FFFFFF",
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
    marginTop: "4%",
  },

  grid: {
    marginTop: "3%",
  },

  movie: {
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.lg,
      backgroundColor: "#979797",
      borderRadius: 7,
    },
  },
}));
const NowPlayingMovie = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const {
    data: NowPlayingData,
    isLoading: nPIsLoading,
    isSuccess: nPIsSuccess,
  } = useQuery(["nowPlaying"], ()=> getNowPlaying(1));

  // {
  //   nPIsSuccess && console.log("🥥", NowPlayingData);
  // }

  return (
    <div className={classes.div}>
      <div className={classes.div2}>
        <MovieSecHeader title={"Now Playing"} link={"/movies/nowPlaying/1"}/>
      </div>
      <Grid grow gutter='md' className={classes.grid}>
        {nPIsSuccess &&
          //@ts-ignore
          NowPlayingData.results.slice(0, 7).map((item) => {
            return (
              <Grid.Col span={3} key={item.id} className={classes.movie}>
                <Box component='a' href='#'>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    radius='sm'
                    withPlaceholder
                    height='auto'
                  ></Image>
                </Box>
                <div style={{ marginTop: "auto" }}>
                  <Text className={classes.category} size='xs'>
                    {item.release_date.slice(0, 4)} . Movie
                  </Text>
                  <Title order={3} className={classes.title}>
                    {item.title}
                  </Title>
                </div>
              </Grid.Col>
            );
          })}
      </Grid>
    </div>
  );
};

export default NowPlayingMovie;

import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
} from "@mantine/core";
import MovieSecHeader from "./MovieSecHeader";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../api/trendingApi";

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

  carousel: {
    marginTop: "3%",
  },

  card: {
    height: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: "#FFFFFF",
    lineHeight: 1.2,
    fontSize: 26,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: "#FFFFFF",
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const TrendingMovie = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const {
    data: trendingData,
    isLoading: trdIsLoading,
    isSuccess: trdIsSuccess,
  } = useQuery(["trending"], () => getTrending(1));

  // {
  //   trdIsSuccess && console.log("🥥", trendingData);
  // }

  return (
    <div className={classes.div}>
      <div className={classes.div2}>
        <MovieSecHeader title={"Trending"} link={"/movies/trending/1"}/>
      </div>
      <Carousel
        className={classes.carousel}
        dragFree
        withIndicators
        slideSize='40%'
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap='xl'
        align='start'
        slidesToScroll={mobile ? 1 : 2}
      >
        {trdIsSuccess &&
          //@ts-ignore
          trendingData.results.map((item) => {
            return (
              <Carousel.Slide key={item.id}>
                <Paper
                  shadow='md'
                  p='xl'
                  radius='md'
                  sx={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
                  }}
                  className={classes.card}
                >
                  <div style={{ marginTop: "auto" }}>
                    <Text className={classes.category} size='xs'>
                      {item.release_date.slice(0, 4)} . {item.media_type}
                    </Text>
                    <Title order={3} className={classes.title}>
                      {item.title}
                    </Title>
                  </div>
                </Paper>
              </Carousel.Slide>
            );
          })}
      </Carousel>
    </div>
  );
};

export default TrendingMovie;

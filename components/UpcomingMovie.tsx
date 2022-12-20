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
import { getUpcoming } from "../api/movieApi";

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
}));
const UpcomingMovie = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const {
    data: UpcomingData,
    isLoading: upIsLoading,
    isSuccess: upIsSuccess,
  } = useQuery(["upcoming"], getUpcoming);

  // {
  //   upIsSuccess && console.log("🥥", UpcomingData);
  // }

  return (
    <div className={classes.div}>
      <div className={classes.div2}>
        <MovieSecHeader title={"Upcoming"} />
      </div>
      <Grid grow gutter='sm' className={classes.grid}>
        {upIsSuccess &&
          //@ts-ignore
          UpcomingData.results.slice(0,7).map((item) => {
            return (
              <Grid.Col span={3} key={item.id}>
                <Box>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    radius='sm'
                    withPlaceholder
                    height={200}
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

export default UpcomingMovie;

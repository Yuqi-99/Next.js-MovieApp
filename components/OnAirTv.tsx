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
import { getPopular } from "../api/movieApi";
import { getAiringToday, getOnAir, getPopularTv } from "../api/tvApi";
import TvSecHeader from "./TvSecHeader";

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
    // backgroundColor: "#FFFFFF",
    marginTop: "3%",
  },

  tv: {
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.lg,
      backgroundColor: "#979797",
      borderRadius: 7,
    },
  },
}));

const OnAirTv = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const {
    data: onAirTvData,
    isLoading: onAirTvIsLoading,
    isSuccess: onAirTvIsSuccess,
  } = useQuery(["OnAirTv"], () => getOnAir(1));

  return (
    <div className={classes.div}>
      <div className={classes.div2}>
        <TvSecHeader title={"On Air"} link={"/tv/onAir/1"}/>
      </div>
      <Grid grow gutter='md' className={classes.grid}>
        {onAirTvIsSuccess &&
          //@ts-ignore
          onAirTvData.results.slice(0, 7).map((item) => {
            return (
              <Grid.Col span={3} key={item.id} className={classes.tv}>
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
                    {item.first_air_date.slice(0, 4)} . TV
                  </Text>
                  <Title order={3} className={classes.title}>
                    {item.name}
                  </Title>
                </div>
              </Grid.Col>
            );
          })}
      </Grid>
    </div>
  );
};

export default OnAirTv;

import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTVTrending } from "../api/trendingApi";
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
//   const { classes } = useStyles();

//   return (
//     <Paper
//       shadow='md'
//       p='xl'
//       radius='md'
//       sx={{ backgroundImage: `url(${image})` }}
//       className={classes.card}
//     >
//       <div>
//         <Text className={classes.category} size='xs'>
//           {category}
//         </Text>
//         <Title order={3} className={classes.title}>
//           {title}
//         </Title>
//       </div>
//       <Button variant='white' color='dark'>
//         Read article
//       </Button>
//     </Paper>
//   );
// }

// const data = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best forests to visit in North America",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Hawaii beaches review: better than you think",
//     category: "beach",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Mountains at night: 12 best locations to enjoy the view",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Aurora in Norway: when to visit for best experience",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best places to visit this winter",
//     category: "tourism",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Active volcanos reviews: travel at your own risk",
//     category: "nature",
//   },
// ];

const TrendingTv = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const {
    data: trendingTvData,
    isLoading: trTvIsLoading,
    isSuccess: trTvIsSuccess,
  } = useQuery(["trendingTV"], getTVTrending);

  // {
  //   trTvIsSuccess && console.log("🥥", trendingTvData);
  // }

  // const slides = () => {
  //   trdIsSuccess &&
  //     //@ts-ignore
  //     trendingData.map((item) => (
  //       <Carousel.Slide key={item.title}>
  //         <Card {...item} />
  //       </Carousel.Slide>
  //     ));
  // };

  return (
    <div className={classes.div}>
      <div className={classes.div2}>
        <TvSecHeader title={"Trending"} />
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
        {trTvIsSuccess &&
          //@ts-ignore
          trendingTvData.results.map((item) => {
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
                      {item.first_air_date.slice(0, 4)} . {item.media_type}
                    </Text>
                    <Title order={3} className={classes.title}>
                      {item.name}
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

export default TrendingTv;

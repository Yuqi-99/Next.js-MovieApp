import {
  AspectRatio,
  Box,
  Button,
  Card,
  Code,
  Container,
  createStyles,
  Flex,
  Grid,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { ButtonGroup } from "@mantine/core/lib/Button/ButtonGroup/ButtonGroup";
import Link from "next/link";
import { usePagination } from "@mantine/hooks";
import { getPopularTv, getTopRatedTv } from "../../../api/tvApi";
// import ErrorPage from "../../../components/error/errorPage";
const useStyles = createStyles((theme) => ({
  div: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    justify: "center",
    marginTop: "5%",
    height: "100%",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.2,
    fontSize: 26,
    marginBottom: 3,
  },

  grid: {
    // backgroundColor: "#FFFFFF",
    marginTop: "3%",
  },

  movie: {
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.lg,
      borderRadius: 7,
      backgroundColor: "#979797",
    },
  },

  category: {
    color: "#FFFFFF",
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
    marginTop: "4%",
  },

  movieTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.2,
    fontSize: 20,
    marginBottom: 3,
  },

  button: {
    cursor: "none",
  },
}));

export default function TopRatedTv() {
  const [activePage, setActivePage] = useState<any[]>([]);
  const router = useRouter();
  const page = Number(router.query.id);
  const { classes } = useStyles();
  const {
    data: TopTvData,
    isLoading: topTvIsLoading,
    isSuccess: topTvIsSuccess,
  } = useQuery(["topRatedTv", page], () => getTopRatedTv(page));

  {
    topTvIsSuccess && console.log("🍋", TopTvData);
  }

  if (page < 1 || page > 1000) {
    return null;
  }

  return (
    <div className={classes.div}>
      <Text className={classes.title}>Popular TV</Text>

      <Grid grow gutter='md' className={classes.grid}>
        {topTvIsSuccess &&
          //@ts-ignore
          TopTvData.results.map((item) => {
            return (
              <Grid.Col span={3} key={item.id} className={classes.movie}>
                <Box component='a' href='#'>
                  <Image
                    loader={() =>
                      `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
                    }
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    // radius='sm'
                    layout='responsive'
                    objectFit='cover'
                    width={0}
                    height={0}
                    alt='pic'
                  ></Image>
                </Box>
                <div style={{ marginTop: "auto" }}>
                  <Text className={classes.category} size='xs'>
                    {item.first_air_date.slice(0, 4)} . TV
                  </Text>
                  <Title order={3} className={classes.movieTitle}>
                    {item.name}
                  </Title>
                </div>
              </Grid.Col>
            );
          })}
      </Grid>
      <Box style={{ borderWidth: 10, borderColor: "#FFFFFF" }}>
        <Flex
          justify='center'
          dir='row'
          align='center'
          style={{ marginTop: "5%" }}
        >
          <Link href={`/tv/topRated/${page - 1}`}>
            {page === 1 ? (
              <Button
                disabled
                style={{ marginRight: 10, width: 95 }}
                className={classes.button}
              >
                Previous
              </Button>
            ) : (
              <Button style={{ marginRight: 10, width: 95 }}>Previous</Button>
            )}
          </Link>
          <Text style={{ fontSize: 14, color: "white", marginRight: 10 }}>
            Page {page} of {TopTvData?.total_pages}
          </Text>

          <Link href={`/tv/topRated/${page + 1}`}>
            <Button disabled={page === 1000} style={{ width: 95 }}>
              Next
            </Button>
          </Link>
        </Flex>
      </Box>
    </div>
  );
}

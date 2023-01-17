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
import { getTopRated } from "../../../api/movieApi";
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

export default function TopRated() {
  const [activePage, setActivePage] = useState<any[]>([]);
  const router = useRouter();
  const page = Number(router.query.id);
  const { classes } = useStyles();
  const {
    data: TopRatedData,
    isLoading: tRIsLoading,
    isSuccess: tRIsSuccess,
  } = useQuery(["TopRated", page], () => getTopRated(page));

  {
    tRIsSuccess && console.log("🍋", TopRatedData);
  }

  if (page < 1 || page > 1000) {
    return null;
  }

  return (
    <div className={classes.div}>
      <Text className={classes.title}>Top Rated Movies</Text>

      <Grid grow gutter='md' className={classes.grid}>
        {tRIsSuccess &&
          //@ts-ignore
          TopRatedData.results.map((item) => {
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
                    {item.release_date.slice(0, 4)} . Movie
                  </Text>
                  <Title order={3} className={classes.movieTitle}>
                    {item.title}
                  </Title>
                </div>
              </Grid.Col>
            );
          })}
      </Grid>

      {/* <div style={{ borderWidth: 10, borderColor: "#FFFFFF", marginTop: "5%" }}>
        <tr>
          <td>
            <div>
              <a href={`/movies/trending/${page - 1}`}>
                <Button disabled={page === 1} style={{ marginRight: 10 }}>
                  Previous
                </Button>
              </a>
            </div>
          </td>
          <td>
            <p style={{ fontSize: 14, color: "white", marginRight: 10 }}>
              Page {page} of {trendingData?.total_pages}
            </p>
          </td>
          <td>
            <a href={`/movies/trending/${page + 1}`}>
              <Button
                disabled={page === trendingData?.total_pages}
                style={{ marginRight: 10 }}
              >
                Next
              </Button>
            </a>
          </td>
        </tr> */}

      {/* <div style={{ marginTop: "5%" }}>
          <div>
            <Button disabled={page === 1} style={{ marginRight: 10 }}>
              Previous
            </Button>
          </div>
          <div>
            <p style={{ fontSize: 14, color: "white", marginRight: 10 }}>
              Page {page} of {trendingData?.total_pages}
            </p>
          </div>
          <div>
            <Button
              disabled={page === trendingData?.total_pages}
              style={{ marginRight: 10 }}
            >
              Next
            </Button>
          </div>
        </div> */}
      {/* </div>e */}

      <Box style={{ borderWidth: 10, borderColor: "#FFFFFF" }}>
        <Flex
          justify='center'
          dir='row'
          align='center'
          style={{ marginTop: "5%" }}
        >
          <Link href={`/movies/topRated/${page - 1}`}>
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
            Page {page} of {TopRatedData?.total_pages}
          </Text>

          <Link href={`/movies/topRated/${page + 1}`}>
            <Button disabled={page === 1000} style={{ width: 95 }}>
              Next
            </Button>
          </Link>
        </Flex>
      </Box>
    </div>
  );
}

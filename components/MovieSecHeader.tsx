import { Badge, Box, Button, createStyles, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

interface TextProps {
  title: string;
  link?: string;
}

const useStyles = createStyles((theme) => ({
  movie_box: {
    width: "100%",
    borderRadius: 4,
    marginLeft: 10,
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
  movie_text: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    fontSize: "10px",
    marginTop: 15,
  },
  text: {
    alignSelf: "end",
  },
}));

const MovieSecHeader: FC<TextProps> = ({ title, link }) => {
  const { classes, cx } = useStyles();

  return (
    <div style={{ width: "100%" }}>
      <Flex
        direction='row'
        style={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Flex>
          <Text fz='26px' fw={700} c='white'>
            {title}
          </Text>
          <div>
            <Box className={classes.movie_box}>
              <Badge variant='outline' className={classes.movie_text}>
                MOVIE
              </Badge>
            </Box>
          </div>
        </Flex>
        <Button
          radius='lg'
          fz='11px'
          color='gray'
          variant='subtle'
          opacity={0.7}
          className={classes.text}
          component={Link}
          href={`${link}`}
        >
          SEE MORE
        </Button>
      </Flex>
    </div>
  );
};

export default MovieSecHeader;

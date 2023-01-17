import { Badge, Box, Button, createStyles, Flex, Text } from "@mantine/core";
import { FC } from "react";
import Link from "next/link";
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
    color: "#000000",
    fontSize: "10px",
    marginTop:15
  },
  text: {
    alignSelf: "end",
  },
}));

const TvSecHeader: FC<TextProps> = ({ title, link }) => {
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
              <Badge color='white' className={classes.movie_text}>
                TV SERIES
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

export default TvSecHeader;

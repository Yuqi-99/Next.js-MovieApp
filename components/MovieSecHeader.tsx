import { Badge, Box, Button, createStyles, Flex, Text } from "@mantine/core";
import { FC } from "react";

interface TextProps {
  title: string;
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
  },
  text: {
    marginLeft:700
  },
}));

const MovieSecHeader: FC<TextProps> = ({ title }) => {
  const { classes, cx } = useStyles();

  return (
    <Flex
      direction='row'
      style={{ alignItems: "center", justifyContent: "center" }}
    >
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
      <Button radius='lg' fz='11px' color="gray" variant="subtle" opacity={0.7} className={classes.text}>
        SEE MORE
      </Button>
    </Flex>
  );
};

export default MovieSecHeader;

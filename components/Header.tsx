import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  createStyles,
  Button,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

const useStyles = createStyles(() => ({
  div: {
    width: "60%",
    // paddingLeft:'10%',
    // paddingRight:'10%',
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    justify: "center",
    marginTop: "3%",
    height: "100%",
  },
  input: {
    width: "100%",
    marginRight: "2%",
    // marginTop: "5%",
    color: "#FFFFFF",
    input: { color: "#FFFFFF", backgroundColor: "#171E31" },
  },

  btn: {
    // backgroundColor: "#5A6A90",
    // padding: 7,

    "&:hover": {
      opacity: 1,
      backgroundColor: "#FFFFFF",
      color: "#000000",
    },
  },
}));

const Header = (props: TextInputProps) => {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  return (
    <>
      <div className={classes.div}>
        <TextInput
          className={classes.input}
          icon={<IconSearch size={25} stroke={1.5} />}
          radius='xl'
          size='md'
          placeholder='Search for movies or TV series'
          rightSectionWidth={42}
          {...props}
        />
        <Button className={classes.btn} size='md' radius='lg' variant='gradient' opacity={0.7}>
          Search
        </Button>
      </div>
    </>
  );
};

export default Header;

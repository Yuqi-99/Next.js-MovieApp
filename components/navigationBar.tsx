import { FC, useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Box,
  MediaQuery,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconCategory,
  IconMovie,
  IconDeviceTv,
} from "@tabler/icons";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  navbar: {
    position: "fixed",
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 10,
    marginTop: "4%",
    backgroundColor: "#171E31",
    width: 60,
    // height: 600,
    borderWidth: 0,
  },

  navbar2: {
    alignItems: "center",
    // paddingTop: 10,
    borderRadius: 10,
    // marginTop: "4%",
    backgroundColor: "#171E31",
    width: "100%",
    height: 60,
    borderWidth: 0,
  },

  link: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#5A6A90",

    "&:hover": {
      opacity: 1,
      color: "#FE1818",
    },
  },

  br: {
    borderRadius: 20,
  },

  active: {
    color: "#FFFFFF",
    opacity: 1,
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

const NavLink: FC<NavbarLinkProps> = ({
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position='right' transitionDuration={0} key={label}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon />
      </UnstyledButton>
    </Tooltip>
  );
};

const mockdata = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconCategory, label: "Category", path: "/" },
  { icon: IconMovie, label: "Movie", path: "/moviegenre" },
  { icon: IconDeviceTv, label: "TV", path: "/tvgenre" },
];

const NavigationBar = () => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);
  const router = useRouter();
  const nav = mockdata.map((link, index) => (
    <NavLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        router.push(link.path);
      }}
    />
  ));

  return (
    <>
      {/* <MediaQuery smallerThan="sm" styles={{ display: 'none' }}> */}
      <Navbar className={classes.navbar}>
        <Navbar.Section grow>
          <Stack spacing={210}>{nav}</Stack>
        </Navbar.Section>
      </Navbar>
      {/* </MediaQuery> */}
    </>
  );
};

export default NavigationBar;

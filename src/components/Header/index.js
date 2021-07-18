import Image from "next/image";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

import marvelLogo from "../../assets/images/marvelLogo.svg";

export const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar variant="dense">
        <Link href="/">
          <Image
            src={marvelLogo}
            width={70}
            height={60}
            className={styles.homeLink}
          ></Image>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

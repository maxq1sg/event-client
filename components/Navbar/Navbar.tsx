import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../../styles/materialStyles";
import Link from "next/link";

//todo jsx
export default function Navbar() {
  const styles = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={styles["flex-container"]}>
            <Typography variant="h6">
              <Link href="/">
                <a className="link">Events</a>
              </Link>
            </Typography>
            <ul>
              <Button>
                <Link href="/search">
                  <a className="link">search</a>
                </Link>
              </Button>
              <Button>
                <Link href="/login">
                  <a className="link">login</a>
                </Link>
              </Button>
              <Button>
                <Link href="/register">
                  <a className="link">register</a>
                </Link>
              </Button>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
      <style jsx>{`
        .link {
          text-decoration: none;
          color: white;
        }

        .link:focus,
        .link:hover,
        .link:visited,
        .link:link,
        .link:active {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

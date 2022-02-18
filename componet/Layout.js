import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import useStyles from "../utils/Style";

export default function Layout({ title, children, description }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> {title ? `${title}- DhakaShop` : "Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/card" passHref>
              <Link>Card</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography className={classes.bar}>
          All rights reserved . Next Amazona
        </Typography>
      </footer>
    </div>
  );
}

import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../componet/Layout";
import data from "../../utils/data";
import NextLink from "next/link";
import Image from "next/image";
import useStyles from "../../utils/Style";
export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug == slug);
  if (!product) {
    return <div>product not found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.secttion}>
        <NextLink href="/" passHref>
          <Link
            style={{
              color: "#f0c000",
              marginTop: "20px",
              fontWeight: 500,
              fontSize: "25px",
            }}
          >
            back to home page
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            Layout="responsive"
          ></Image>
        </Grid>
        {/* product description */}
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography
                component="h1"
                variant="h4"
                style={{ fontWeight: 700 }}
              >
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Catogory:{product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand:{product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Reating:{product.rating} start ( {product.numReviews} Review))
              </Typography>
            </ListItem>
            <ListItem>
              <Typography> Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        {/* product card section and status */}
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{product.price}$</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#f0c000" }}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

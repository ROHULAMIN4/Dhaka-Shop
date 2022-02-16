const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
  bar: {
    fontSize: 30,
  },
  navbar: {
    backgroundColor: "#203040",
    color: "white",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
  brand: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
});
export default useStyles;

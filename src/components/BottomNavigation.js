import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Card, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 50,
  },
  selected: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "30px",

    margin: "5px 5px 5px 5px",
  },
  card: {
    position: "fixed",
    bottom: "1%",
    zIndex: 10,
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "35px",
    backgroundColor: '#d4d1cb'
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Card className={classes.card} elevation={10}>
      <Box maxWidth={400}>
        <BottomNavigation
        style={{    backgroundColor: '#d4d1cb'
    }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            classes={{ selected: classes.selected }}
          />
          <BottomNavigationAction
            label="Gallery"
            classes={{ selected: classes.selected }}
          />
        </BottomNavigation>
      </Box>
    </Card>
  );
}

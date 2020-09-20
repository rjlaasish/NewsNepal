import React from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Sports from "../Sports";
import Entertainment from "../Entertainment";
import "./style.scss";
import AllNews from "../AllNews";
=======
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LatestPost from "../LatestPost";
import FeaturedPost from "../FeaturedPost";
import Sports from "../Sports";
import Entertainment from "../Entertainment";
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

<<<<<<< HEAD
export default function ScrollableTabsButtonAuto() {
=======
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
<<<<<<< HEAD
        indicatorColor="primary"
=======
        indicatorColor='primary'
        textColor="white"
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498
        variant="scrollable"
        scrollButtons="auto"
        style={{
          color: "#fff",
          indicatorColor: "#fffff",
<<<<<<< HEAD
          position: "absolute",
          top: "115px",
          left: "5px",
          right: "5px",
          zIndex: "999",
          justifyContent: "space-between",
=======
          position:"absolute",
          top:"115px",
          left:"5px",
          right:"5px",
          zIndex:"999",
          justifyContent:"space-between" 
          
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498
        }}
        className="tabs"
      >
        <Tab label="All News" {...a11yProps(0)} />
        <Tab label="Sports" {...a11yProps(1)} />
        <Tab label="Entertainment" {...a11yProps(2)} />
        <Tab label="Global News" {...a11yProps(3)} />
        <Tab label="Educational News" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
<<<<<<< HEAD
        <AllNews />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sports />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Entertainment />
=======
        <LatestPost />
        <FeaturedPost />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sports/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Entertainment/>
>>>>>>> 3c9846a0c2dc748a749e753aec0c401e9d60e498
      </TabPanel>
    </div>
  );
}

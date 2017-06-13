import React, { Component } from "react";
import HomeScreen from "./Home.js";
import Transfer from "./Transfer";
import SideBar from "./SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: {screen: HomeScreen},
        Transfer: {screen: Transfer}
    },

    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;

import React, { Component } from "react";
import HomeScreen from "./Home.js";
import Transfer from "./Transfer";
import SideBar from "./SideBar.js";
import Pay from "./Pay";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: {screen: HomeScreen},
        Transfer: {screen: Transfer},
        Pay: {screen: Pay}
    },

    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;

import React, { Component } from "react";
import HomeScreen from "./Home.js";
import Transfer from "./Transfer";
import SideBar from "./SideBar.js";
import Pay from "./Pay";
import Budgets from "./Budget";
import Promotion from "./Promotion";
import Settings from "./Settings";
import PersonalFinance from "./PersonalFinance";

import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: {screen: HomeScreen},
        Transfer: {screen: Transfer},
        Pay: {screen: Pay},
        Budgets: {screen: Budgets},
        Promotion: {screen: Promotion},
        Settings:{screen: Settings},
        "Personal Finance": {screen: PersonalFinance}
    },

    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;

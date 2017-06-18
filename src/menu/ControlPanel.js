import React, { Component } from "react";
import HomeScreen from "../home/HomeIndex.js";
import Transfer from "../transfer/Transfer";
import SideBar from "./SideBar.js";
import Pay from "../pay/Pay";
import Budgets from "../budgets/Budget";
import Promotion from "../promotion/Promotion";
import Settings from "../settings/Settings";
import PersonalFinance from "../personalfinance/PersonalFinance";

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

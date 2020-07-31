import React from 'react';
import { Route, Switch } from "react-router-dom";
import { GetData } from "./hook/hook";
import Loader from "./components/common/Loader";
import Users from "./pages/Users/Users";
import SortedByMonth from "./pages/Month/SortedByMonth";

function Routes() {
    const {data} = GetData();
    if (!data.length) {
        return <Loader/>
    }
    return (
        <Switch>
            <Route path="/users"><Users data={data}/></Route>
            <Route path="/data"><SortedByMonth data={data}/></Route>
        </Switch>
    );
}

export default Routes;
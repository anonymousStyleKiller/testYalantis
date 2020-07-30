import React from 'react';
import { Route, Switch } from "react-router-dom";
import { GetData } from "./hook/hook";
import Loader from "./components/common/Loader";
import Users from "./pages/Users/Users";
import Month from "./pages/Month/Month";

function Routes() {
    const {data} = GetData();
    if (!data.length) {
        return <Loader/>
    }
    return (
        <Switch>
            <Route path="/users"><Users data={data}/></Route>
            <Route path="/data"><Month data={data}/></Route>
        </Switch>
    );
}

export default Routes;
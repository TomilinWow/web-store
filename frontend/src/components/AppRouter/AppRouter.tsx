import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes, RouteNames} from "../../router";

const AppRouter: React.FC = () => {
    return (
        <Switch>
            {publicRoutes.map(route =>
                <Route path={route.path}
                       component={route.component}
                       exact={route.exact}
                       key={route.path}/>
            )}
            <Redirect to={RouteNames.HOME} />
        </Switch>
    );
};

export default AppRouter;
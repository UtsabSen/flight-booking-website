import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';

import {isAdmin} from './Functions';

const CheckAdminRoute=({component:Component,...rest})=>(
    <Route {...rest} render={props=>isAdmin() ? (
        <Component {...props} />
    ):(
        <Redirect to={{pathname:"/user-dashboard",state:{from:props.location}}} />
    ) }/>
)

export default CheckAdminRoute;

import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from "reactstrap";
import {Link} from 'react-router-dom'

import ButtonAdd from "../Articlee/ButtonAdd";

 const DashboardAdmin=() =>{
    return (
    <div>


 <Card>
<CardHeader title="WELCOME ADMIN" />
 
 <Link to="/listusers">
          {" "}
          <Button outline color="success">List Users</Button>
        </Link>
        <Link to="/adduser">
          {" "}
          <Button outline color="success">Create user</Button>
        </Link>

        <ButtonAdd/>
      
        </Card>
</div>)
}
export default DashboardAdmin
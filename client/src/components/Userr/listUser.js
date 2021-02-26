import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Button } from "reactstrap";
import {Link} from 'react-router-dom'
import UserCard from "./UserCard";
import { getAllUsers } from "../../js/actions/AdminAction";

const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch( getAllUsers());
  }, []);

const users = useSelector((state)=>state.adminReducer.users.users);
  return (

    <div >
    <Card>
<CardHeader title="WELCOME TO THE ADMINISTRATION" />
 
 <Link to="/listusers">
          
          <Button outline color="success">List Users</Button>
        </Link>
        <Link to="/adduser">
         
          <Button outline color="success">Create user</Button>
        </Link>
        </Card>
      { users &&
        users.map((user)=>(<UserCard key={user._id} user={user} />))
      }
          

       
    </div>
  );
};

export default UserList;
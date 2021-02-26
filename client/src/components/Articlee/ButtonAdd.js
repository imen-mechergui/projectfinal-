import React from 'react'
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function ButtonAdd() {
    return (
        <div className="App">
        <Link to="/list">
          <Button color="info">Article list</Button>
        </Link>
        <Link to="/Add">
          <Button color="info">Add Article </Button>
        </Link>
      </div>
    )
}

export default ButtonAdd

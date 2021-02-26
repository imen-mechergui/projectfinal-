import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { editUser } from "../../js/actions/AdminAction";

const EditUser = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(user.name);
  const [lastName, setLastName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [rule, setRule] = useState(user.rule);
  const toggle = () => {
    setModal(!modal);
    setName(user.name);
    setLastName(user.lastName);
    setEmail(user.email);
    setRule(user.rule);
  };
  const dispatch = useDispatch();
  const editt = () => {
    dispatch( editUser(user._id, {name,lastName,email,rule }));
    toggle();
  };
  return (
    <div>
      <Button color="success" onClick={toggle}>
        Edit user{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
              <Label for="examplePassword">name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="Enter name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Last Name</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="Enter Last Name"
              />
            </FormGroup>
           
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter Email"
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="examplePassword">Role</Label>
              <Input
                value={rule}
                onChange={(e) => setRule(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="Enter Role"
              />
            </FormGroup>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button  outline color="success" onClick={editt}>
            save
          </Button>{" "}
          <Button  outline color="success" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditUser;
import React, { useState } from 'react';
import { addComment } from '../../../js/actions/authActions';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {useDispatch} from 'react-redux'

const CommentForm = ({ article}) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch()
  const add =()=>{
    dispatch(addComment(article._id,{comment}))
  setComment('')}



  return (<div>
     <Form>
    <FormGroup>
        <Label for="examplecommentaire">Comment</Label>
        <Input
          value={comment}
        onChange={(e) => setComment(e.target.value)}
          type="name"
          placeholder="Enter your text"
        />
      </FormGroup>
      
      <Button onClick={add}>leave a comment</Button>
      </Form> 
      </div>
    
  );
};



export default CommentForm;
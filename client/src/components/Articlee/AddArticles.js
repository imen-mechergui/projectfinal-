import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useDispatch } from "react-redux";
import { articleService } from "../../js/actions/authActions";
import { Redirect } from "react-router-dom";
const AddArticle = () => {
  const [description,setDescription]=useState('');
 const [title,setTitle]=useState('');
 const [image, setImage] = useState("");
 const [cancel, setCancel] = useState(false);

const dispatch=useDispatch()
const add=()=>
{
    dispatch(articleService({description,title,image}));
    setCancel(!cancel);

}
return(
    <>
    {cancel?
    (<Redirect to='/list'/>)
    :(<div style={{ margin: "100px" }}>
       <FormGroup>
        <Label for="exampletitle">title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="title"
          placeholder="Enter your Title"
        />
      </FormGroup>
    <Form>
      <FormGroup>
        <Label for="exampletext">Description</Label>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="description"
          placeholder="Enter description"
        />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampletitle">Image</Label>
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="Enter your image"
        />
      </FormGroup>
            
      <Button onClick={add}>Add your article</Button>
      <Button onClick={()=>setCancel(!cancel)}>Cancel</Button>

    </Form>
  </div>)}
  </>
)
}

export default AddArticle;
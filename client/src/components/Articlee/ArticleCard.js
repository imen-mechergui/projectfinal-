import React from 'react';
import { useDispatch} from 'react-redux';
import {Card, CardImg, CardText, CardBody, CardTitle,Button} from 'reactstrap';
import { deleteArticle } from '../../js/actions/authActions';
import EditArticle from './EditArticles';


const ArticleCard = ({article}) => {
  const dispatch = useDispatch();
  const delet = () => {
    dispatch(deleteArticle(article._id));
  };
  

  return (

    <div style={{ minWidth: "300px", margin: "10px" }}>
      <Card  body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}>
        <CardImg top width="100%" src={article.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{article.title}</CardTitle>
              <CardText>{article.description}</CardText>
               <Button color="warning" onClick={delet}>delete</Button> 
              <EditArticle article={article}/>
                </CardBody>
                  

      </Card>
 
</div>
  )

}


export default ArticleCard;
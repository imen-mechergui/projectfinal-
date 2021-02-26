import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../../js/actions/authActions";
import Cardd from "./Card";
const List = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, []);

const articles = useSelector((state)=>state.articleReducer.articles.articles);
  return (
    <div>
        { articles &&
        articles.map((article)=>(<Cardd key={article._id} article={article} />))
      }
    
    </div>
  );
};


export default  List;
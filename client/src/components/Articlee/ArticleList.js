import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles} from "../../js/actions/authActions";
import ArticleCard from "./ArticleCard";
const ArticleList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, []);

const articles = useSelector((state)=>state.articleReducer.articles.articles);
  return (
    <div>
        { articles &&
        articles.map((article)=>(<ArticleCard key={article._id} article={article} />))
      }
    
    </div>
  );
};


export default  ArticleList;
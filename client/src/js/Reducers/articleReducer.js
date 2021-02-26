
import {ARTICLE_USER} from "../constants/ActionsTypes";
import { ADD_COMMENT,REMOVE_COMMENT} from "../constants/ActionsTypes";

const initState = {
  articles: [],
};
function articleReducer(state = initState, { type, payload }) {
   
        switch (type) {
            case ARTICLE_USER:
              return {
                ...state,
                articles: payload,
              };
              case ADD_COMMENT:

                        return {
                         ... state ,articles : state.articles.articles.map(el=>el._id !== payload._id ? el : ({...el,comments:payload }) )
                         
                        };
                        case REMOVE_COMMENT:

                          let newstate  ={ ...state, articles:  state.articles.articles.filter( art => art._id !== payload.idArticle)}
                          return {
                        ... newstate.articles.comments.filter(el=>el._id!== payload.idComment)
                            }
    

            default:
              return state;
          }
    
}

export default articleReducer



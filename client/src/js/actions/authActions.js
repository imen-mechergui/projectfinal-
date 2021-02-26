import axios from 'axios';
import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  PROFILE_USER,
  ARTICLE_USER,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_PROFILE
} from '../constants/ActionsTypes';

//Set the user loading
const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};

// Register USer
export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post('/api/auth/register', formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data, // { msg: 'User registred with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Login User
export const loginUser = (formData) => async (dispatch) => {
  dispatch(userLoading());

  try {
    const res = await axios.post('/api/auth/login', formData);
    dispatch({
      type: LOGIN_USER,
      payload: res.data, // { msg: 'Logged in with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Get auth user
export const getAuthUser = () => async (dispatch) => {
  dispatch(userLoading());

  try {
    //headers
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    const res = await axios.get('/api/auth/user', config);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};



export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};



// create profile
export const profileUser = (formData) => async (dispatch) => {
  

  try {
    const res = await axios.post('/api/auth/inscription', formData);
    dispatch({
      type: PROFILE_USER,
      payload: res.data, // { msg: 'profile creacted with success'}
    });
  } catch (error) {
    console.dir(error);
  }
}

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
     'x-auth-token': localStorage.getItem('token'),
    },
  };
  try {
      const res = await axios.get( '/api/profile/me',config);
  
      dispatch({
        type: GET_PROFILE,
        payload:res.data
      });
    } catch (err) {
  
       console.log(err)
     
    }
  };



//Get all article
export const getArticles = (formData) => (dispatch) => {
  
  axios.get('/api/auth/getArt', formData)
    // .then(res=>  console.log(res.data) )
    .then((res) => dispatch({ type: ARTICLE_USER, payload: res.data }))
  
    .catch((err) => console.log(err));
};

// Add Artticle
export const articleService=(formData)=>async (dispatch) =>{
  try{
    const config = {
      headers: {
        'Content-Type': 'application/json',
       'x-auth-token': localStorage.getItem('token'),
      },
    };
      
  const res= await axios.post('/api/article/',formData,config);
  dispatch(getArticles());
  }
  catch (err){
      console.dir(err);
      }
  }  

export const deleteArticle = (idArticle) => (dispatch) => {
  axios
    .delete(`/api/auth//deletearticle/${idArticle}`)
    .then((res) => dispatch(getArticles()))
    .catch((err) => console.log(err));
};
export const editArticle = (idArticle, editedArticle) => (dispatch) => {
  axios
    .put(`/api/auth/editarticle/${idArticle}`, editedArticle)
    .then((res) => dispatch(getArticles()))
    .catch((err) => console.log(err));





    
};
 // add comment

 export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
     'x-auth-token': localStorage.getItem('token'),
    },
  };
 
  try {
    const res = await axios.put(
      `/api/auth/newcomment/${postId}`,formData,config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    } && getArticles());
    
   
  } catch (err) {
    console.dir(err);
  }
};


//delete comment
export const DeleteComment = (idArticle,idComment) => async (dispatch) => {
  const config = {
    headers: {
     'x-auth-token': localStorage.getItem('token'),
    },
  };
  try {
    const res = await axios.put(`/api/auth/deletecomment/${idArticle}/${idComment}`,config);
    dispatch({
      type: REMOVE_COMMENT,
      payload: {idArticle,idComment} // { msg: 'comment  deleted with success'}
    }   && getArticles());
  } catch (error) {
    console.dir(error);
  }
}

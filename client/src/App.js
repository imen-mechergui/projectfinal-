import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect,createContext, Profiler } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from 'reactstrap';

import { getAuthUser } from './js/actions/authActions';



import PrivateRoute from './components/routess/PrivateRoute';

import CardUser from './components/Profile/CardUser';
import AddArticle from './components/Articlee/AddArticles';
import ArticleList from './components/Articlee/ArticleList'

import Home from './components/pages/Home'
import DashboardAdmin from './components/pages/AdminDash';
import UserList from './components/Userr/listUser';
import AddUsers from './components/Userr/AddUserr';
import List from './components/Articlee/Comment/ArticleVisiteurs/List';
import NavBar from './components/Navbar/NavBar';


export const UserContext = createContext();


function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
   
       <NavBar/>   
      <Switch>
      <Route exact path='/' component={Home}/>
              
      
      <Route path='/listusers' render={()=><UserList/>} />
      <Route path='/list' render={()=><ArticleList/>} />
      <Route path='/adduser' render={()=><AddUsers/>} />

 
 <Route exact path="/list"  component={ArticleList} />
 <Route path="/Add"  component={AddArticle} />

 <Route  path="/listvisiteurs"  component={List} />


 <PrivateRoute path="/admin"  component={DashboardAdmin} />

    
    
    
    


        <Route path="/profile" component={CardUser} />

      
    
      
      </Switch> 
      
    
    </BrowserRouter>
  );
}





export default App;
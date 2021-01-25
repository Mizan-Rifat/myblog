import { Container, } from '@material-ui/core';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home';
import Users from './pages/allUsers';
import User from './pages/user';
import Post from './pages/post'

function Routes() {
  return (
    <>

      <BrowserRouter>

        <Container maxWidth='md'>

          <Switch>

            <Route path='/' exact component={Homepage} />
            <Route path='/post/:id' component={Post} />
            <Route path='/profile' component={User} />
            <Route path='/users' component={Users} />
            <Route path='/user/:id' component={User} />

          </Switch>
      
        </Container>
      
      </BrowserRouter>

    </>
  );
}

export default Routes;

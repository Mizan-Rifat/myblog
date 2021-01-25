import { Container, } from '@material-ui/core';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home';
import Post from './pages/Post/Post';

function Routes() {
  return (
    <>

      <BrowserRouter>

        <Container maxWidth='md'>

          <Switch>

            <Route path='/' exact component={Homepage} />
            <Route path='/post/:id' component={Post} />
            
          </Switch>
      
        </Container>
      
      </BrowserRouter>

    </>
  );
}

export default Routes;

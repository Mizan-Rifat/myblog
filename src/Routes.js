import { Container, } from '@material-ui/core';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home';

function Routes() {
  return (
    <>

      <BrowserRouter>

        <Container maxWidth='md'>

          <Switch>

            <Route path='/' exact component={Homepage} />

          </Switch>
      
        </Container>
      
      </BrowserRouter>

    </>
  );
}

export default Routes;

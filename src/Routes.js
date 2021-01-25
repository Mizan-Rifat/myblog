import { Container, } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home';
import Post from './pages/Post/Post';
import Users from './pages/AllUsers';
import User from './pages/User';
import { SnackbarProvider } from 'notistack';


const useStyles = makeStyles((theme) => ({
  topClass: {
    top: '20px',
    ['@media (max-width:480px)']: { 
      top:0
  },
  },
}));



function Routes() {
  const classes = useStyles();
  return (
    <>

      <BrowserRouter>

          <SnackbarProvider
            classes={{
              anchorOriginTopRight: classes.topClass
            }}
          >

            <Container maxWidth='md'>

              <Switch>

                <Route path='/' exact component={Homepage} />
                <Route path='/post/:id' component={Post} />
                <Route path='/users' component={Users} />
                <Route path='/user/:id' component={User} />
                <Route path='/profile' component={User} />
                
              </Switch>
          
            </Container>
          </SnackbarProvider>
      </BrowserRouter>

    </>
  );
}

export default Routes;

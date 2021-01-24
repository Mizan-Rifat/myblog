import React,{createContext} from 'react';
import './App.css';
import Appbar from './components/Appbar'
import useUser from './customHooks/useUser';
import Routes from './Routes';

export const currentUserContext = createContext();

function App() {

  const currentUserId = 2;

  const [currentUser] = useUser(currentUserId);

  return (
    <currentUserContext.Provider value={currentUser}>

      {
        currentUser.fetching ?

        'loading'

        :

        <>
          <Appbar />

          <Routes />
        </>
      }

    </currentUserContext.Provider>
  );
}

export default App;

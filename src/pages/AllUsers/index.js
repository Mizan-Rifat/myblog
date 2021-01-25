import React, { useEffect, useState } from 'react';
import CompContainer from '../../components/CompContainer';
import LoadingCircle from '../../components/LoadingCircle';
import Table from './table/Table';
import useUsers from '../../customHooks/useUsers';


export default function Users() {


  const [users] = useUsers();


    return (


        <>

          {
            users.fetching ?

            <LoadingCircle />

            :
          
            <CompContainer title='Users'>
              <Table 

                data={users.users}

              />
            </CompContainer>

          }
        </>
    )
}



import React, { useEffect, useState } from 'react';
import CompContainer from '../../components/CompContainer';
import Table from './table/Table';
import useUsers from '../../customHooks/useUsers';


export default function Users() {


  const [users] = useUsers();


    return (
        <CompContainer title='Users'>

          {
            users.fetching ?

            <p>Fetching</p>

            :
          

            <Table 

              data={users.users}

            />

          }
        </CompContainer>
    )
}



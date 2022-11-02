import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/DashBoardLayout/Main';
import {Suspense} from 'react'
const Contacts=React.lazy(()=>import('../Pages/Contacts')) ;
const AddNewContact=React.lazy(()=>import('../Pages/AddNewContact')) ;
const Todo= React.lazy(()=>import( '../Pages/Todo'));
const router =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {
            index:true,
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Contacts/>
                </React.Suspense>
            )
        },
        {
            path:"/todo",
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Todo/>
                </React.Suspense>
            )

        },
        {
            path:"/addcontact",
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <AddNewContact/>
                </React.Suspense>)
        },
        {
            path:"/contactinfo/:ContactId",
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <AddNewContact/>
                </React.Suspense>)
        },
    ],
}]);

export default router
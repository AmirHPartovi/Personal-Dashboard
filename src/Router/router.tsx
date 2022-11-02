import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/DashBoardLayout/Main';
import {Suspense} from 'react'
const Contacts=React.lazy(()=>import('../Pages/Contacts')) ;
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

        }
    ],
}]);

export default router
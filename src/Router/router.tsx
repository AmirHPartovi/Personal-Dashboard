import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/DashBoardLayout/Main';
import {Suspense} from 'react'
const Dashboard=React.lazy(()=>import('../Pages/Dashboard')) ;
const Table= React.lazy(()=>import( '../Pages/Table/Table'));
const router =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {
            index:true,
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Dashboard/>
                </React.Suspense>
            )
        },
        {
            path:"/table",
            element:(
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Table/>
                </React.Suspense>
            )

        }
    ],
}]);

export default router
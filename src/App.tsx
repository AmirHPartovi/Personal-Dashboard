
import { Provider } from 'react-redux';
import  {RouterProvider}  from 'react-router-dom';
import router from 'Router/router';

import {store} from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    
  );
}

export default App;

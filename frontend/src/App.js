import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes/allroutes';
 
const App = () => {
    return (
        <Router>
         <AllRoutes/>
        </Router>
    );
}

export default App;

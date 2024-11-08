import './App.css';

import { useState } from 'react';

import Layout from './components/Layout';
import { AuthProvider } from './components/AuthContext';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('token'));


  return (
    
    <div className="App">
      <AuthProvider>
        <Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      </AuthProvider>
    </div>
    
  );
}

export default App;

import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import AuthPage from './pages/Auth/Auth.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login">
          <AuthPage></AuthPage>
        </Route>
        <Route path="/signup">
          <AuthPage></AuthPage>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

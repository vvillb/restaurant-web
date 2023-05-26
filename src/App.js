import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import AppTheme from './ThemeLayout/AppTheme';

function App() {
  return (
    < >
     <BrowserRouter>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </BrowserRouter>
    </>
  );
}

export default App;

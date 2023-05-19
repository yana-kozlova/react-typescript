import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'assets/styles/globalStyles';
import { Router } from 'router/Router';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  );
}

export default App;

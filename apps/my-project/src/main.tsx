import * as ReactDOM from 'react-dom/client';
import './main.css';
import App from './app/app';
import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@my-project/redux';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Suspense>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { setupIonicReact } from '@ionic/react';
import * as serviceWorker from './serviceWorker';

import App from './App';

const startIonic = () => {
  setupIonicReact();
  ReactDOM.render(<App />, document.getElementById('root'));
};

startIonic();

serviceWorker.unregister();

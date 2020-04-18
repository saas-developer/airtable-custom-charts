import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';

function HelloWorldBlock() {
    return (
        <Provider store={store}>
          <div>
            <App />
          </div>
        </Provider>
    )
}

initializeBlock(() => <HelloWorldBlock />);

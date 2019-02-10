import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import StoryTellerService from './services/storyteller-service';
import { StoryTellerServiceProvider } from './components/storyteller-service-context';

const storyTellerService = new StoryTellerService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoryTellerServiceProvider value={storyTellerService}>
                <Router>
                    <App />
                </Router>
            </StoryTellerServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
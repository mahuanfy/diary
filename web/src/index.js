import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import ExcellentDiaryPageBody from './components/excellentDiary/ExcellentDiaryPageBody';
import MyAttentionPageBody from './components/attention/MyAttentionPageBody';
import MyDiaryPageBody from './components/diary/MyDiaryPageBody';
import FollowerDiaryList from './components/attention/FollowerDiaryList';

import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={MyDiaryPageBody}/>
                <Route path="/diary" component={MyDiaryPageBody}/>
                <Route path="/excellent-diary" component={ExcellentDiaryPageBody}/>
                <Route path="/personal-diary/:id" component={FollowerDiaryList}/>
                <Route path="/attention" component={MyAttentionPageBody}/>
            </App>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

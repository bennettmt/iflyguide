import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import SearchPage from './search/SearchPage';
import SubmitPage from './submit/SubmitPage';
import PageNotFound from './PageNotFound';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/submit" component={SubmitPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;

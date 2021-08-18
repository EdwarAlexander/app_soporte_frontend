import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './pages/login';


function MainRouter(){
    return(
        <Router>
            <Switch>
                <Route exact path='/login' component={Login}>

                </Route>
            </Switch>
        </Router>
    );
}

export default MainRouter;
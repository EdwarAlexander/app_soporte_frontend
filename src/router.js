import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Equipo from './pages/equipo';
import Estado from './pages/estado';
import Login from './pages/login';
import Nivel from './pages/nivel';
import Sede from './pages/sede';
import Soporte from './pages/soporte';
import Ticket from './pages/ticket';


function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exect path='/equipo' component={Equipo}></Route>
                <Route exect path='/estado' component={Estado}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exect path='/nivel' component={Nivel}></Route>
                <Route exact path='/sede' component={Sede}></Route>
                <Route exect path='/soporte' component={Soporte}></Route>
                <Route exect path='/ticket' component={Ticket}></Route>
            </Switch>
        </Router>
    );
}

export default MainRouter;
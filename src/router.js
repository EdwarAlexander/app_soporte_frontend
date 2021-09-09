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
                <Route exact path='/equipo' component={Equipo}></Route>
                <Route exact path='/estado' component={Estado}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/nivel' component={Nivel}></Route>
                <Route exact path='/sede' component={Sede}></Route>
                <Route exact path='/soporte' component={Soporte}></Route>
                <Route exact path='/ticket' component={Ticket}></Route>
            </Switch>
        </Router>
    );
}

export default MainRouter;
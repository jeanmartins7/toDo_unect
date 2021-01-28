import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Inicio from './pages/Inicio';
import Pos from './pages/Pos';

function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/Pos" component={Pos}/>
        </Switch>
    );
}

export default Routes;
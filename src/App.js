import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
// import Services from './pages/Services/Services';
// import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import Admin from './pages/Admin/admin';
import User from './pages/User/user';
import Cover from './pages/particlles';
import Features from './components/Feature/feature';

import Hearder from './pages/hearder';
import Frame from './pages/Frame/Frame';
function App() {
    return (

        <Router>
            <Cover />
            <GlobalStyles />
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                {/* {/* <Route path='/services' component={Services} /> */}
                <Route path='/feature' component={Features} />
                {/* <Route path='/products' component={Products} /> */}
                <Route path='/admin' exact component={Admin} />
                <Route path='/user' exact component={User} />
                {/* <Route path='/sign-up' component={SignUp} /> */}
                <Route exact path="/frame" component={Frame}/>
            </Switch>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;

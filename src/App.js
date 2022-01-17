import React from 'react';
import LoginForm from './page/Signup - Signin/LoginForm'
import {Home} from "./page/Home/Home.page";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Dashboard} from "./page/Dashboard/Dashboard.page";
import {PublicRoute} from "./routes/components/PublicRoute/PublicRoute.component";
import {NotFoundPage} from "./page/NotFound/NotFound.page";

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path={'/sign-in'}
                               element={<PublicRoute component={(props) => <LoginForm {...props} />}/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export {App};


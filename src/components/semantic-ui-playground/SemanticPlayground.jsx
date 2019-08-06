import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer';
import Main from './Main'
import SignUp from './SignUp'
import SignIn from './SignIn'
import NotFound from './NotFound'
import ProfileInformation from './ProfileInformation'
import TaskList from './TaskList'
import Settings from './Settings'
import AuthenticatedRoute from './AuthenticatedRoute'

export class SemanticPlayground extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <NavigationBar/>
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route path="/register" component={SignUp} />
                            <Route path="/login" component={SignIn} />
                            <Route path="/error" component={NotFound} />
                            <AuthenticatedRoute path="/profile/:name" component={ProfileInformation} />
                            <AuthenticatedRoute path="/tasks/:name" component={TaskList} />
                            <AuthenticatedRoute path="/settings/:name" component={Settings} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />
                    </>
               </Router> 
            </>
        )
    }
}

export default SemanticPlayground

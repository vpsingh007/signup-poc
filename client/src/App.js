import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container} from 'reactstrap';
import store from './store';
// import Spinner from './components/shared/Spinner';
import CreateUser from './components/signup/CreateUser';
import EditUser from './components/signup/EditUser';
import PrivateRoute from './routes/PrivateRoute';
import UserProfileView from './components/signup/UserProfileView';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
            <Switch>
              <Route exact path="/" component={CreateUser} />
              <Route exact path="/user-profile-view" component={UserProfileView} />
              <PrivateRoute exact path="/edit-user-details" component={EditUser} />
            </Switch>
        </Router>
      </Container> 
    </Provider>         
  );
}

export default App;

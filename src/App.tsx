import Nav from './components/nav';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import TodoPage from './pages/todo-page';
import InformationPage from './pages/information-page';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" exact component={TodoPage} />
          <Route path="/about" exact component={InformationPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

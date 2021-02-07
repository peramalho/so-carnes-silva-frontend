import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

import { Wrapper } from './styles';

function App() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Wrapper>
  );
}

export default App;

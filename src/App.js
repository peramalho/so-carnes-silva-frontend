import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Redirect />
    </Switch>
  );
}

export default App;

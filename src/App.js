import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './components/Navigation/container';
import CalendarBoard from './components/CalendarBoard/container';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store} className="App">
      <Navigation />
      <CalendarBoard />
    </Provider>
  );
}

export default App;

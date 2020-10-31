import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CalendarBoard from './components/CalendarBoard/container';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store} className="App">
      <h1>Calendar App</h1>
      <CalendarBoard />
    </Provider>
  );
}

export default App;

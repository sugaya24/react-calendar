import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigation from './components/Navigation/container';
import CalendarBoard from './components/CalendarBoard/container';
import AddScheduleDialog from './components/AddScheduleDialog/container';
import rootReducer from './redux/rootReducer';

import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store} className="App">
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Navigation />
        <CalendarBoard />
        <AddScheduleDialog />
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;

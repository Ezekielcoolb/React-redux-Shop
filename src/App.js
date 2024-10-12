
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from "react-redux"
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake/>
      <ItemContainer />
      <HookCakeContainer/>
      <CakeContainer />
      <IceCreamContainer />
      <HookIceCreamContainer />
      <NewCakeContainer /> */}
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;

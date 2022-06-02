
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

import './App.css';
import Header from './common-components/Header/Header';
import ListUserComponent from './components/list-user/ListUserComponent';
import UserFormComponent from './components/user-form/UserFormComponent';
import Footer from './common-components/Footer/Footer';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ListUserComponent />} />
            <Route path="/user-form/:userId" element={<UserFormComponent />} />
            <Route path="/user-form" element={<UserFormComponent />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

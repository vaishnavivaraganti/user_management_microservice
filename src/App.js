import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './components/login_page/login';

function App() {
  return (
    <div className="App">
      <header>
          <LoginPage />
      </header>
    </div>
  );
}

export default App;

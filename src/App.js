import logo from './logo.svg';
import './App.css';  
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './components/login_page/login';
import ForgotPasswordPage from './components/Forgot_password_page/Forgot_password';
import Password_reset from './components/Reset_password/reset_password';

function App() {
  return (
    <div className="App">
      <header>
          <LoginPage />
          <ForgotPasswordPage />
          <Password_reset />
      </header>
    </div>
  );
}

export default App;

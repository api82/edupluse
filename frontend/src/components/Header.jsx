import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../services/usersApiSlice';
import { logout } from '../services/authSlice';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <nav className="pure-g navbar">
        <div className="pure-u-1 nav-container">
          <div className="nav-left">
            <a href="/" className="brand">
              <h3>EduPulse</h3>
            </a>
          </div>

          <div className="nav-content">
            <div className="nav-center">
              <ul className="pure-menu-list">
                <li className="pure-menu-item">
                  <a href="/" className="pure-menu-link">Home</a>
                </li>
                <li className="pure-menu-item">
                  <a href="/services" className="pure-menu-link">Our Services</a>
                </li>
                <li className="pure-menu-item">
                  <a href="/contact" className="pure-menu-link">Contact Us</a>
                </li>
                <li className="pure-menu-item">
                  <a href="/about" className="pure-menu-link">About Us</a>
                </li>
                <li className="pure-menu-item">
                  <a href="/feedback" className="pure-menu-link">Feedback</a>
                </li>
              </ul>
            </div>

            <div className="nav-right">
              { userInfo ? (
                <div className="user-menu">
                  <button className="pure-button user-button">
                    <FaUser />
                  </button>
                  <div className="dropdown-menu">
                    <a href="/profile" className="pure-menu-link">Profile</a>
                    <button className='pure-button pure-button-danger' style={{ marginTop: '10px' }} onClick={ logoutHandler }>Logout</button>
                  </div>
                </div>
              ) : (
                <div className="auth-buttons">
                  <a href="/login" className="pure-button">Login</a>
                  <a href="/register" className="pure-button pure-button-primary">Register</a>
                </div>
              ) }
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer';

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <form className="pure-form pure-form-stacked">
        <div className="pure-control-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={userInfo.name}
            disabled
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={userInfo.email}
            disabled
          />
        </div>
      </form>
    </FormContainer>
  );
};

export default ProfileScreen;

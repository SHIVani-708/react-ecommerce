
import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const navigate = useNavigate();
  const profileref = useRef();
  const authCtx = useContext(AuthContext);

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const enteredNewPassword = profileref.current.value;

    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCT4_G_2Tz3DLAMGjkzoeG7uH43eiJXnTQ', // Replace with your API key
        {
          method: 'POST',
          body: JSON.stringify({
            idToken: authCtx.token,
            password: enteredNewPassword,
            returnSecureToken: false,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message);
      }
      navigate('/');
      console.log('Password changed successfully!');
    } catch (error) {
      console.error('Password change failed:', error.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={4} ref={profileref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;

import React from 'react';
import './LoginControl.css';

const UserGreeting = (props) => {
  return <h1>Welcome back!</h1>;
}

const GuestGreeting = (props) => {
  return <h1>Please sign in.</h1>;
}

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

const LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

// returning null will hide the WarningBanner
const WarningBanner = (props) => {
  return !props.warn ? null : (
    <div className="warning__show">
      Warning!
    </div>
  )
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleWarningClick = this.handleWarningClick.bind(this);
    this.state = { 
      isLoggedIn: false, 
      showWarning: true,
    }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  handleWarningClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const number = 2;

    let button = null;
    isLoggedIn ?
      button = <LogoutButton onClick={this.handleLogoutClick} /> :
      button = <LoginButton onClick={this.handleLoginClick} /> 

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <p>
          You are {isLoggedIn ? '' : 'not'} logged in
        </p>
        {button}
    
        {/* This will conditionally render the h2 and h3 if number > 0 */}
        {number > 0 &&
          <div className="conditional">
            <h2>This is rendered conditionally if <em>number > 0</em></h2>
            <h3>The number is {number}</h3>
          </div>
        }

        {/* Warning will hide when showWarning = false. Returns null. */}
        <div className="warning">
          <button onClick={this.handleWarningClick} >
            {this.state.showWarning ? 'Hide Warning' : 'Show Warning'}
          </button>
          <WarningBanner warn={this.state.showWarning} />
        </div>
      </div>
    );
  }
}

export default LoginControl;
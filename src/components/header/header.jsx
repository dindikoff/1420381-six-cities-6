import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {authorizationStatus, userEmail} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"/>
                  <span className="header__login">{isAuthorized ? userEmail : `Sign In`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userInfo.email,
});


export {Header};
export default connect(mapStateToProps)(Header);

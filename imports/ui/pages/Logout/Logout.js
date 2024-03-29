import React from 'react';
import Icon from '../../components/Icon/Icon';

import './Logout.scss';

class Logout extends React.Component {
  componentDidMount() {
    Meteor.logout();
  }

  render() {
    return (
      <div className="Logout">
        <img
          src=""
          alt="Clove"
        />
        <h1>Stay safe out there.</h1>
        <p>{'Don\'t forget to like and follow Clove elsewhere on the web:'}</p>
        <ul className="FollowUsElsewhere">
          <li><a href="https://facebook.com/clovebooks"><Icon icon="facebook-official" /></a></li>
          <li><a href="https://twitter.com/clovebooks"><Icon icon="twitter" /></a></li>
          <li><a href="https://github.com/clovebooks"><Icon icon="github" /></a></li>
        </ul>
      </div>
    );
  }
}

Logout.propTypes = {};

export default Logout;

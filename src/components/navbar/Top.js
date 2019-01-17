import React, { Component } from 'react';

class Top extends Component {

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <a className="navbar-brand" href="/">Time and Space</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">시간</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">공간</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">기록</a>
              </li>
            </ul>
          </div>


        </nav>
      </div>
    );
  }
}

export default Top;

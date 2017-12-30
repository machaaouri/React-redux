import React from 'react';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';


const Header = ({loading,authors,courses}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/authors" activeClassName="active">Authors ({authors.length})</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses ({courses.length})</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  authors: React.PropTypes.array.isRequired,
  courses: React.PropTypes.array.isRequired
};


export default Header;

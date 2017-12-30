// This Component handles the app Template used on every HomePage
import React,{PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component{
  render() {
    return(
      <div className="container-fluid">
        <Header loading={this.props.loading} authors={this.props.authors} courses={this.props.courses} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    authors: state.authors,
    courses: state.courses
  };
}

export default connect(mapStateToProps)(App);

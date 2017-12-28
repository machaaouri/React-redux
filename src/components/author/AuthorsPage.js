import React from 'react';
import AuthorList from './AuthorList';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';


class AuthorsPage extends React.Component {

    constructor(props,context){
      super(props,context);
      this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    
    }

    redirectToAddAuthorPage(){
      browserHistory.push('/author');
    }

    render(){

      return (
        <div>
            <h1>Authors</h1>
            <input type="submit"
                 value="Add Author"
                 className="btn btn-primary"
                 onClick={this.redirectToAddAuthorPage}/>
            <AuthorList authors={this.props.authors} />
        </div>
      );
    }
  }

  AuthorsPage.propTypes = {
    authors : React.PropTypes.array.isRequired
  };

  function mapStateToProps(state,ownProps){
    return{
      authors: state.authors
    };
  }
  
  export default connect(mapStateToProps)(AuthorsPage);
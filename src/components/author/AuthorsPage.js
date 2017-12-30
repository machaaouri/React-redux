import React from 'react';
import AuthorList from './AuthorList';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import toastr from 'toastr';


class AuthorsPage extends React.Component {

    constructor(props,context){
      super(props,context);
      this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
      this.deleteAuthor = this.deleteAuthor.bind(this);
    }

    redirectToAddAuthorPage(){
      browserHistory.push('/author');
    }

    deleteAuthor(event){
      debugger;
      let authorId = event;
      let hasCourse = this.props.courses.filter(courses => courses.authorId == authorId);
      if(hasCourse.length == 0)
      {
        this.props.actions.deleteAuthor(authorId)
        .then(() => toastr.success('Author deleted.'))
        .catch(error =>{
              toastr.error(error);
        });
      } else {
        toastr.error("Author has course: " + hasCourse[0].title);
      }
    }

    render(){

      return (
        <div>
            <h1>Authors</h1>
            <input type="submit"
                 value="Add Author"
                 className="btn btn-primary"
                 onClick={this.redirectToAddAuthorPage}/>
            <AuthorList authors={this.props.authors} onClick={this.deleteAuthor} />
        </div>
      );
    }
  }

  AuthorsPage.propTypes = {
    authors : React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  function mapStateToProps(state,ownProps){
    return{
      authors: state.authors,
      courses: state.courses
    };
  }

  function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(authorActions,dispatch)
    };
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(AuthorsPage);
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component {
  constructor(props,context){
    super(props,context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  deleteCourse(event){
        let courseId = event;
        this.props.actions.deleteCourse(courseId)
        .then(() => toastr.success('Course deleted.'))
        .catch(error =>{
            toastr.error(error);
      });
  }

  render(){
    const {courses} = this.props; // destructuring

    return (
      
      <div>
          <h1>Courses</h1>
          <input type="submit"
                 value="Add Course"
                 className="btn btn-primary"
                 onClick={this.redirectToAddCoursePage}/>
          <CourseList courses={courses} onClick={this.deleteCourse}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};


function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function mapStateToProps(state,ownProps){
   let courses = state.courses;
   return {
      courses: courses.sort(dynamicSort('title'))
   };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);

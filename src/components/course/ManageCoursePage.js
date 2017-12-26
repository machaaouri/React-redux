import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coureActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
    constructor(props,context){
        super(props,context);

        this.state = {
            course: Object.assign({},this.props.course),
            errors: {}
        };
    }

    render(){
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
    let course ={id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    // transform the data that comes from the api into something useful for  populating the drop-down

    const authorsFormattedForDropDown = state.authors.map(author =>{

        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropDown
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(coureActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
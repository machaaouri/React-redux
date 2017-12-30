import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course,onClick}) => {
    return (
        <tr>
            <td><input className="btn btn-danger" type="button" value="Delete" onClick={onClick.bind(this,course.id)} /></td>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/'+ course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CourseListRow;
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses,onClick}) => {
    return (
        <table className="table">
                {courses.length > 0 && <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </tr>
                </thead>}
                <tbody>
                    {courses.map(course =>
                        <CourseListRow key={course.id} course={course} onClick={onClick}/>
                    )}
                </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CourseList;
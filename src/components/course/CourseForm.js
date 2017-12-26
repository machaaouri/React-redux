import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const CourseForm =({course, allAuthors, onSave, onChange, loading, errors}) => {

    return (
        <form>
            <h1>Manage course</h1>
            <TextInput
                name="title"
                lable="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>
            
            <SelectInput
                name="authorId"
                lable="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.title}/>

            <TextInput
                name="category"
                lable="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="length"
                lable="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}/>

            <TextInput
                name="title"
                lable="title"
                value={course.title}
                onChange={onChange}
                error={errors.title}/>
            
            <input
                type="submit"
                disable={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>

    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func,
    onChange: React.PropTypes.func,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;
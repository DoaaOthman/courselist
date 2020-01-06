import React from 'react';
const CourseForm = (props) => {
    return(
        <form onSubmit={props.addCourse}>
           <input type='text' value={props.current} onChange={props.updateCourse} />
           <button>Add Course</button> 
        </form>
    )
}

export default CourseForm
import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
// CruD App ====> is an acronym for the four basic types 
// of SQL commands: Create , Read , Update , Delete
class App extends Component {
  state ={
    courses :[
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'Javascript'},
      {name : 'Jquery'}
    ],
    current : ''
  }
//update Course
  updateCourse =(e) =>{
    this.setState({
      current : e.target.value
    })
  }
//Add Course 
addCourse =(e) =>{
  e.preventDefault();
  let current = this.state.current;
  let courses = this.state.courses;
  return (current !=='' ? (courses.push({name : current}) ,this.setState({ courses,  current : ''})) : (alert('please add course^__^')  ))
  // if(current!==''){
  //   courses.push({name : current});
  //   this.setState({
  //   courses,
  //   current : ''
  // })
  // }else{
  //   return false
  // }
  
}
//Delete Course 
deleteCourse =(index) =>{
  let courses = this.state.courses;
  courses.splice(index,1)
  this.setState({
    courses
  })

}
//edit Course
editCourse =(index,value) =>{
  let courses = this.state.courses;
  let course =courses[index];
  course['name']= value;
  this.setState({
    courses
  })
}

  render() { 
    const {courses} = this.state;
    const courseList = courses.map((course,index) => {
      return <CourseList details={course} key={index} index ={index} courses = {this.state.courses} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    }) 
    
    return ( 
      <section className='App'>
          <h2>Add Course</h2>
          <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
         
          <ul>{this.state.courses.length>0 ? courseList : <p className='message'>No Courses To Show! Please Add New Course.</p>}</ul>
      </section>
     );
  }
}
 
export default App;
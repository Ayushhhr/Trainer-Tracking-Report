package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.model.Course;
import com.model.Topic;
import com.service.CourseService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/courses")
public class CourseController 
{
	@Autowired
	CourseService courseService;
	
	@PostMapping("/add")
	public ResponseEntity<Course>saveCourses(@RequestBody Course c)
	{
		Course cou = courseService.addCourse(c);
		return ResponseEntity.status(HttpStatus.CREATED).header("Add", "Courses Created").body(cou);
	}
	
	@GetMapping("/getOne/{id}")
	public ResponseEntity<Course>findOneCourse(@PathVariable("id") int id )
	{
		Course cou = courseService.getOneCourse(id);
		return ResponseEntity.ok(cou);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List <Course> >findAllCourses()
	{
		List<Course> cou = courseService.getAllCourses();
		return ResponseEntity.ok(cou);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Course> updateCourse(@RequestBody Course s)
	{
		Course updatedCourseEntity = courseService.updateCourse(s);
		return ResponseEntity.ok(updatedCourseEntity);
	}
 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <List<Course>> deleteCourse(@PathVariable("id") int id)
	{
		List<Course> cou = courseService.deleteCourse(id);
		return ResponseEntity.ok(cou);
	}
	
	@GetMapping("/findByName/{name}")
	public ResponseEntity <List<Course>> findByName(@PathVariable("name") String cname)
	{
		List<Course> cou = courseService.findByName(cname);
		return ResponseEntity.ok(cou);
	}

}

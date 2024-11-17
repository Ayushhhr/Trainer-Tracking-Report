package com.service;

import java.util.List;
import com.model.Course;

public interface CourseService 
{
	Course addCourse(Course course);

	public Course getOneCourse(int id);

	public List<Course> getAllCourses();
	
	public Course updateCourse(Course s);

	public List<Course> deleteCourse(int id);
	
	public List<Course> findByName(String cname);
}

package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.CourseRepository;
import com.model.Course;
import com.model.SubTopic;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Service
public class CourseServiceImpt implements CourseService {

	@Autowired
	CourseRepository courseRepo;
	
	@Autowired
    EntityManager entityManager; 
	
	@Override
	public Course addCourse(Course c) 
	{
		
		/*
		 // Make sure to set the relationship on both sides
        for (Batch batch : c.getBatch()) {
            batch.getCourses().add(c);
        }
		*/
		return courseRepo.save(c);
	}
	
	public Course getOneCourse(int id)
	{
		return courseRepo.findById(id).orElse(null);
	}
	
	public List<Course> getAllCourses()
	{
		return courseRepo.findAll();
	}
	
	public List<Course> findByName(String cname)
	{
		return courseRepo.findByName(cname);
	}
	
	public Course updateCourse(Course c)
	{
		Course existingCourse = courseRepo.findById(c.getCid()).orElse(null);
		 // Check if the existing subtopic exists
	    if(existingCourse != null) 
	    {
	        // Update the name of the existing subtopic
	        existingCourse.setCname(c.getCname());
	        existingCourse.setTopic(c.getTopic());
	        
	        // Save the existingSubTopic entity
	        return courseRepo.save(existingCourse);
	    } 
	    else 
	    {
	        // Handle the case where the existing subtopic is not found
	        return null; // or throw an exception, depending on requirements
	    }
	}
	
	@Transactional //
	public List<Course> deleteCourse(int id)
	{
		// Deleting related records from the topic_subtopic table using native SQL query
        Query query = entityManager.createNativeQuery("DELETE FROM trainer_course WHERE course_cid = :id");
        query.setParameter("id", id);
        query.executeUpdate();
		
        Course course = courseRepo.findById(id).orElse(null);
        if (course != null) {
         
        	courseRepo.delete(course);
        }

        return courseRepo.findAll();
        
       /* 
		subtopicRepo.deleteById(id); 
		return subtopicRepo.findAll();
	  */
	}

}

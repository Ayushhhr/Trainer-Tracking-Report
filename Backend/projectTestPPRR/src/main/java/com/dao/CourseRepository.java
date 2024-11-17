package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Course;
import com.model.Trainer;

public interface CourseRepository extends JpaRepository <Course,Integer>
{
	
	@Query("select c from Course c where c.cname =:n")
	public List<Course> findByName(@Param("n")String cname);
	
}

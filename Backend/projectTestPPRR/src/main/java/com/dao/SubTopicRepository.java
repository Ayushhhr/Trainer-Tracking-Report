package com.dao;

import java.util.List;

//import org.springframework.data.jdbc.repository.query.Query; 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.SubTopic;

public interface SubTopicRepository extends JpaRepository<SubTopic, Integer> 
{
	//@Query("select s from sub_topic s where s.sname =:sname")
	//public List<SubTopic> findByName(String sname);
	
	
}

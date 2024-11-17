package com.service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.SubTopicRepository;
import com.model.SubTopic;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Service
public class SubTopicServiceImpt implements SubTopicService{

	@Autowired
	SubTopicRepository subtopicRepo;
	
	@Autowired
    EntityManager entityManager; 
	
	@Override
	public SubTopic addSubTopic(SubTopic s) {
		
		return subtopicRepo.save(s);
	}
	
	public SubTopic getOneSubTopic(int id)
	{
		return subtopicRepo.findById(id).orElse(null);
	}
	
	public List<SubTopic> getAllSubTopics()
	{
		return subtopicRepo.findAll();
	}
	
	public SubTopic updateSubTopic(SubTopic s)
	{
		SubTopic existingSubTopic = subtopicRepo.findById(s.getSid()).orElse(null);
		 // Check if the existing subtopic exists
	    if(existingSubTopic != null) 
	    {
	        // Update the name of the existing subtopic
	        existingSubTopic.setSname(s.getSname());
	        existingSubTopic.setShours(s.getShours());
	        
	        // Save the existingSubTopic entity
	        return subtopicRepo.save(existingSubTopic);
	    } 
	    else 
	    {
	        // Handle the case where the existing subtopic is not found
	        return null; // or throw an exception, depending on requirements
	    }
	}
	
	@Transactional //
	public List<SubTopic> deleteSubTopic(int id)
	{
		// Deleting related records from the topic_subtopic table using native SQL query
        Query query = entityManager.createNativeQuery("DELETE FROM topic_subtopic WHERE subtopic_sid = :id");
        query.setParameter("id", id);
        query.executeUpdate();
		
        SubTopic subTopic = subtopicRepo.findById(id).orElse(null);
        if (subTopic != null) {
         
            subtopicRepo.delete(subTopic);
        }

        return subtopicRepo.findAll();
        
       /* 
		subtopicRepo.deleteById(id); 
		return subtopicRepo.findAll();
	  */
	}
	
	/*
	@Override
	public List<SubTopic> findByName(String sname) 
	{
		return subtopicRepo.findByName(sname);
	}
	*/
}

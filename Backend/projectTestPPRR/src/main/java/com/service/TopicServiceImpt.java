package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.BatchRepository;
import com.dao.TopicRepository;
import com.model.Batch;
import com.model.Topic;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Service
public class TopicServiceImpt implements TopicService {

	@Autowired
	TopicRepository topicRepo;
	
	@Autowired
    EntityManager entityManager; 
	
	@Override
	public Topic addTopic(Topic t) {
		
		return topicRepo.save(t);
	}
	
	public Topic getOneTopic(int id)
	{
		return topicRepo.findById(id).orElse(null);
	}
	
	public List<Topic> getAllTopics()
	{
		return topicRepo.findAll();
	}
	
	public Topic updateTopic(Topic t)
	{
		Topic existingTopic = topicRepo.findById(t.getTid()).orElse(null);
		 // Check if the existing subtopic exists
	    if(existingTopic != null) 
	    {
	        // Update the name of the existing subtopic
	        existingTopic.setTname(t.getTname());
	        existingTopic.setHours(t.getHours());
	        existingTopic.setSubtopic(t.getSubtopic());
	        
	        // Save the existingSubTopic entity
	        return topicRepo.save(existingTopic);
	    } 
	    else 
	    {
	        // Handle the case where the existing subtopic is not found
	        return null; // or throw an exception, depending on requirements
	    }
	}
	
	@Transactional //
	public List<Topic> deleteTopic(int id)
	{
		// Deleting related records from the topic_subtopic table using native SQL query
        Query query = entityManager.createNativeQuery("DELETE FROM course_topic WHERE topic_tid = :id");
        query.setParameter("id", id);
        query.executeUpdate();
		
        Topic Topic = topicRepo.findById(id).orElse(null);
        if (Topic != null) {
         
            topicRepo.delete(Topic);
        }

        return topicRepo.findAll();
        
       /* 
		subtopicRepo.deleteById(id); 
		return subtopicRepo.findAll();
	  */
	}

}

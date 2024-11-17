package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.SubTopicRepository;
import com.dao.TsaRepository;
import com.model.SubTopic;
import com.model.TrainerSubTopicAssociation;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Service
public class TsaServiceImpt implements TsaService
{
	@Autowired
	TsaRepository tsaRepo;
	
	@PersistenceContext
    private EntityManager entityManager;

	
	@Override
	public TrainerSubTopicAssociation addTsa(TrainerSubTopicAssociation tsa) {
		
		return tsaRepo.save(tsa);
	}
	
	public TrainerSubTopicAssociation getOneTsa(int id)
	{
		return tsaRepo.findById(id).orElse(null);
	}
	
	public List<TrainerSubTopicAssociation> getAllTsa()
	{
		return tsaRepo.findAll();
	}
	
	public TrainerSubTopicAssociation updateTsa(TrainerSubTopicAssociation tsa)
	{
		TrainerSubTopicAssociation existingTsa = tsaRepo.findById(tsa.getId()).orElse(null);
		 // Check if the existing subtopic exists
	    if(existingTsa != null) 
	    {
	        // Update the name of the existing subtopic
	    	existingTsa.setTakenHours(tsa.getTakenHours());
	        
	        // Save the existingSubTopic entity
	        return tsaRepo.save(existingTsa);
	    } 
	    else 
	    {
	        // Handle the case where the existing subtopic is not found
	        return null; // or throw an exception, depending on requirements
	    }
	}
	/*	
	public List<TrainerSubTopicAssociation> getTaughtHoursForBatchAndSubtopic(int bid, int sid) 
	{
	    return tsaRepo.findByBatchIdAndSubtopicId(bid, sid);
	}
	*/
	public int getTaughtHoursForBatchAndSubtopic(int batchId, int subtopicId)
	{
	    Query query = entityManager.createQuery(
	        "SELECT tsa.takenHours FROM TrainerSubTopicAssociation tsa " +
	        "WHERE tsa.batch.bid = :batchId AND tsa.subtopic.sid = :subtopicId"
	    );
	    query.setParameter("batchId", batchId);
	    query.setParameter("subtopicId", subtopicId);
	    List<Integer> result = query.getResultList();
	    return result.isEmpty() ? 0 : result.get(0);
	}
}

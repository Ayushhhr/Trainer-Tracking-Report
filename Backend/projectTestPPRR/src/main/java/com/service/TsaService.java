package com.service;

import java.util.List;

import com.model.TrainerSubTopicAssociation;

public interface TsaService 
{
	public TrainerSubTopicAssociation addTsa(TrainerSubTopicAssociation tsa);
	
	public TrainerSubTopicAssociation getOneTsa(int id);

	public List<TrainerSubTopicAssociation> getAllTsa();
	
	public TrainerSubTopicAssociation updateTsa(TrainerSubTopicAssociation tss);

	public int getTaughtHoursForBatchAndSubtopic(int batchId, int subtopicId);

}

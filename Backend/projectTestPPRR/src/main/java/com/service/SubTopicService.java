package com.service;

import java.util.List;

import com.model.SubTopic;

public interface SubTopicService 
{
	public SubTopic addSubTopic(SubTopic subtopics);
	
	public SubTopic getOneSubTopic(int id);

	public List<SubTopic> getAllSubTopics();
	
	public SubTopic updateSubTopic(SubTopic s);

	public List<SubTopic> deleteSubTopic(int id);
	
	//public List<SubTopic> findByName(String sname);
}

package com.service;

import java.util.List;
import com.model.Topic;

public interface TopicService 
{
	Topic addTopic(Topic topic);
	
	public Topic getOneTopic(int id);

	public List<Topic> getAllTopics();
	
	public Topic updateTopic(Topic s);

	public List<Topic> deleteTopic(int id);
	
}

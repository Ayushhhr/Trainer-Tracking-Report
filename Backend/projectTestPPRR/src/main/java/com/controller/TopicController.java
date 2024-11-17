package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.SubTopic;
import com.model.Topic;
import com.service.TopicService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/topic")
public class TopicController 
{
	@Autowired
	TopicService topicService;
	

	@PostMapping("/add")
	public ResponseEntity<Topic>saveTopic(@RequestBody Topic t)
	{
		Topic top = topicService.addTopic(t);
		return ResponseEntity.status(HttpStatus.CREATED).header("Add", "Topic Created").body(top);
	}
	
	@GetMapping("/getOne/{id}")
	public ResponseEntity<Topic>findOneUser(@PathVariable("id") int id )
	{
		Topic top = topicService.getOneTopic(id);
		return ResponseEntity.ok(top);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List <Topic> >findAllTopics()
	{
		List<Topic> top = topicService.getAllTopics();
		return ResponseEntity.ok(top);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Topic> updateTopic(@RequestBody Topic s)
	{
		Topic updatedTopicEntity = topicService.updateTopic(s);
		return ResponseEntity.ok(updatedTopicEntity);
	}
 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <List<Topic>> deleteTopic(@PathVariable("id") int id)
	{
		List<Topic> top = topicService.deleteTopic(id);
		return ResponseEntity.ok(top);
	}

}

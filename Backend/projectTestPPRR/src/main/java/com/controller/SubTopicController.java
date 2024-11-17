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
import com.service.SubTopicService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/subtopic")
public class SubTopicController 
{
	@Autowired
	SubTopicService subtopicsService;

	@PostMapping("/add")
	public ResponseEntity<SubTopic>saveSubTopics(@RequestBody SubTopic s)
	{
		SubTopic sub = subtopicsService.addSubTopic(s);
		return ResponseEntity.status(HttpStatus.CREATED).header("Add", "Courses Created").body(sub);
	}
	
	@GetMapping("/getOne/{id}")
	public ResponseEntity<SubTopic>findOneUser(@PathVariable("id") int id )
	{
		SubTopic sub = subtopicsService.getOneSubTopic(id);
		return ResponseEntity.ok(sub);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List <SubTopic> >findAllSubTopics()
	{
		List<SubTopic> sub = subtopicsService.getAllSubTopics();
		return ResponseEntity.ok(sub);
	}
	
	@PutMapping("/update")
	public ResponseEntity<SubTopic> updateSubTopic(@RequestBody SubTopic s)
	{
		SubTopic updatedSubTopicEntity = subtopicsService.updateSubTopic(s);
		return ResponseEntity.ok(updatedSubTopicEntity);
	}
 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <List<SubTopic>> deleteSubTopic(@PathVariable("id") int id)
	{
		List<SubTopic> sub = subtopicsService.deleteSubTopic(id);
		return ResponseEntity.ok(sub);
	}
	
	/*
	@GetMapping("/findByName/{sname}")
	public List<SubTopic> findByName(@PathVariable("n") String sname)
	{
		return subtopicsService.findByName(sname);
	}
	*/
}

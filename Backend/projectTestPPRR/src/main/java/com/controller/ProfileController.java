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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.model.Profile;
import com.model.Topic;
import com.service.ProfileService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/profile")
public class ProfileController 
{
	@Autowired
	ProfileService profileservice;
	
	@PostMapping("/add")
	public ResponseEntity<Profile>saveProfile(@RequestBody Profile p)
	{
		Profile pro = profileservice.addProfile(p);
		return ResponseEntity.status(HttpStatus.CREATED).header("Add", "Profile  Created").body(pro);
	}

	@GetMapping("/getOne/{id}")
	public ResponseEntity<Profile>findOneProfile(@PathVariable("id") int id )
	{
		Profile pro = profileservice.getOneProfile(id);
		return ResponseEntity.ok(pro);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List <Profile> >findAllProfile()
	{
		List<Profile> pro = profileservice.getAllProfile();
		return ResponseEntity.ok(pro);
	}
	
	@GetMapping("/search/{email}")
	public List<Profile> find(@PathVariable("email") String email)
	{
		return profileservice.find(email);
		
	}
/*	
	@GetMapping("/findByName/{name}")
	public ResponseEntity <List<Profile>> findByName(@PathVariable("name") String name)
	{
		List<Profile> pro = profileservice.findByName(name);
		return ResponseEntity.ok(pro);
	}
*/	
	@PutMapping("/update")
	public ResponseEntity<Profile> updateProfile(@RequestBody Profile p)
	{
		Profile updatedProfileEntity = profileservice.updateProfile(p);
		return ResponseEntity.ok(updatedProfileEntity);
	}
 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <List<Profile>> deleteProfile(@PathVariable("id") int id)
	{
		List<Profile> pro = profileservice.deleteProfile(id);
		return ResponseEntity.ok(pro);
	}
	
	 @PutMapping("/addTopics")
	 public ResponseEntity<Profile> addTopicsToProfile(@RequestParam int id, @RequestBody List<Topic> topics)
	 {
	     Profile pro = profileservice.addTopicsToProfile(id, topics);
	     if (pro != null) 
	     {
	          return new ResponseEntity<>(pro, HttpStatus.OK);
	     }
	     else 
	     {
	          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	     }
	  }
	 
	 @GetMapping("/getBatch")
	 public ResponseEntity<List<Object[]>> getAllBatchProfiles() 
	 {
	        List<Object[]> batchProfiles = profileservice.getAllBatchProfiles();
	        if (batchProfiles.isEmpty())
	        {
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	        }
	    return new ResponseEntity<>(batchProfiles, HttpStatus.OK);
	 }
}

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
import com.model.Trainer;
import com.service.TrainerService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/trainer")
public class TrainerController 
{
	@Autowired
	TrainerService trainerservice;
	
	@PostMapping("/add")
	public ResponseEntity<Trainer>saveTrainer(@RequestBody Trainer t)
	{
		Trainer tr = trainerservice.addTrainer(t);
		return ResponseEntity.status(HttpStatus.CREATED).header("Add", "Trainer  Created").body(tr);
	}

	@GetMapping("/getOne/{id}")
	public ResponseEntity<Trainer>findOneTrainer(@PathVariable("id") int id )
	{
		Trainer tra = trainerservice.getOneTrainer(id);
		return ResponseEntity.ok(tra);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List <Trainer> >findAllTrainer()
	{
		List<Trainer> tra = trainerservice.getAllTrainers();
		return ResponseEntity.ok(tra);
	}
/*	
	@GetMapping("/search/{email}")
	public List<Trainer> find(@PathVariable("email") String email)
	{
		return trainerservice.find(email);
		
	}
*/	
/*	
	@GetMapping("/findByName/{name}")
	public ResponseEntity <List<Trainer>> findByName(@PathVariable("name") String name)
	{
		List<Trainer> tra = trainerservice.findByName(name);
		return ResponseEntity.ok(tra);
	}
*/
	@PutMapping("/update")
	public ResponseEntity<Trainer> updateTrainer(@RequestBody Trainer s)
	{
		Trainer updatedTrainerEntity = trainerservice.updateTrainer(s);
		return ResponseEntity.ok(updatedTrainerEntity);
	}
 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <List<Trainer>> deleteTrainer(@PathVariable("id") int id)
	{
		List<Trainer> tra = trainerservice.deleteTrainer(id);
		return ResponseEntity.ok(tra);
	}
	
	@GetMapping("/authenticate/{username}/{password}")
	public ResponseEntity<Trainer> authenticateTrainer(@PathVariable("username") String username, @PathVariable("password") String password) 
	{
	    Trainer authenticatedTrainer = trainerservice.authenticateTrainer(username, password);
	    if (authenticatedTrainer != null) {
	        return ResponseEntity.ok(authenticatedTrainer);
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	    }
	}
}

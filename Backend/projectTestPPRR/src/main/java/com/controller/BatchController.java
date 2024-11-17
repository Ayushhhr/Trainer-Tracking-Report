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

import com.model.Batch;
import com.model.Profile;
import com.model.Topic;
import com.service.BatchService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/batch")
public class BatchController 
{
	@Autowired
	BatchService batchservice;
	
	@PostMapping("/add")
	public ResponseEntity<Batch>saveBatch(@RequestBody Batch b)
	{
		Batch bch = batchservice.addBatch(b);
		return ResponseEntity.status(HttpStatus.CREATED).header("Add", "Batch Created").body(bch);
	}	
	
	@GetMapping("/getOne/{id}")
	public ResponseEntity<Batch>findOneBatch(@PathVariable("id") int id )
	{
		Batch bch = batchservice.getOneBatch(id);
		return ResponseEntity.ok(bch);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List <Batch> >findAllBatch()
	{
		List<Batch> bch = batchservice.getAllBatch();
		return ResponseEntity.ok(bch);
	}
	
	@GetMapping("/findByName/{bname}")
	public ResponseEntity<List <Batch> >findByName(@PathVariable("bn")String bn)
	{
		List<Batch> bch = batchservice.findByName(bn);
		return ResponseEntity.ok(bch);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Batch> updateBatch(@RequestBody Batch s)
	{
		Batch updatedBatchEntity = batchservice.updateBatch(s);
		return ResponseEntity.ok(updatedBatchEntity);
	}
 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <List<Batch>> deleteBatch(@PathVariable("id") int id)
	{
		List<Batch> bch = batchservice.deleteBatch(id);
		return ResponseEntity.ok(bch);
	}
	
	@GetMapping("/profile/getBatch/{profileId}")
    public List<Batch> getBatchesByProfileId(@PathVariable Long profileId)
	{
        return batchservice.getAssociatedBatches(profileId);
    }
}

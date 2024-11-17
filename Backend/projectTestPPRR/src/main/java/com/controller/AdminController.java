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
import com.model.Admin;
import com.service.AdminService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/admin")
public class AdminController 
{
	@Autowired
	AdminService adminservice;
	
	@PostMapping("/add")
	public ResponseEntity<Admin>saveAdmin(@RequestBody Admin a)
	{
		Admin am = adminservice.addAdmin(a);
		return ResponseEntity.status(HttpStatus.CREATED).header("Add", "Admin  Created").body(am);
	}

	@GetMapping("/getOne/{id}")
	public ResponseEntity<Admin>findOneAdmin(@PathVariable("id") int id )
	{
		Admin am = adminservice.getOneAdmin(id);
		return ResponseEntity.ok(am);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List <Admin> >findAllAdmin()
	{
		List<Admin> am = adminservice.getAllAdmins();
		return ResponseEntity.ok(am);
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
	public ResponseEntity<Admin> updateAdmin(@RequestBody Admin a)
	{
		Admin updatedAdminEntity = adminservice.updateAdmin(a);
		return ResponseEntity.ok(updatedAdminEntity);
	}
 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <List<Admin>> deleteAdmin(@PathVariable("id") int id)
	{
		List<Admin> am = adminservice.deleteAdmin(id);
		return ResponseEntity.ok(am);
	}
	
	@GetMapping("/authenticate/{username}/{password}")
	public ResponseEntity<Admin> authenticateAdmin(@PathVariable("username") String username, @PathVariable("password") String password) 
	{
		Admin authenticatedAdmin = adminservice.authenticateAdmin(username, password);
	    if (authenticatedAdmin != null) {
	        return ResponseEntity.ok(authenticatedAdmin);
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	    }
	}
}

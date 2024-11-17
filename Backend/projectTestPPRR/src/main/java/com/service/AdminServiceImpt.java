package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dao.AdminRepository;
import com.dao.BatchRepository;
import com.model.Admin;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@Service
public class AdminServiceImpt implements AdminService 
{
	@Autowired
	AdminRepository adminRepo;
	
	@Autowired
	BatchRepository batchRepo;
	
	@Autowired
    EntityManager entityManager; 
	
	@Override
	public Admin addAdmin(Admin a) 
	{
		return adminRepo.save(a);
	}
	
	public Admin getOneAdmin(int id)
	{
		return adminRepo.findById(id).orElse(null);
	}
	
	public List<Admin> getAllAdmins()
	{
		return adminRepo.findAll();
	}
	
	public Admin updateAdmin(Admin a)
	{
		Admin existingAdmin = adminRepo.findById(a.getId()).orElse(null);
		 // Check if the existing subtopic exists
	    if(existingAdmin != null) 
	    {
	        // Update the name of the existing subtopic
	        existingAdmin.setUsername(a.getUsername());
	        existingAdmin.setPassword(a.getPassword());
	        // Save the existingSubTopic entity
	        return adminRepo.save(existingAdmin);
	    } 
	    else 
	    {
	        // Handle the case where the existing subtopic is not found
	        return null; // or throw an exception, depending on requirements
	    }
	}
	
	@Transactional //
	public List<Admin> deleteAdmin(int id)
	{
		Admin admin = adminRepo.findById(id).orElse(null);
        if (admin != null) {
         
        	adminRepo.delete(admin);
        }

        return adminRepo.findAll();
        
	}
	 // Method to authenticate a trainer
    public Admin authenticateAdmin(String username, String password) {
        // Fetch the trainer data from the database based on the provided username
    	Admin admin = adminRepo.findByUsername(username);

        // Check if a trainer with the provided username exists
        if (admin != null) {
            // Compare the provided password with the password stored in the database
            if (admin.getPassword().equals(password)) {
                // Authentication successful, return the trainer object
                return admin;
            }
        }

        // Authentication failed, return null or throw an exception
        return null;
    }
	
}

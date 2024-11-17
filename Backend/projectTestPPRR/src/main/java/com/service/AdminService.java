package com.service;

import java.util.List;

import com.model.Admin;

public interface AdminService
{
	Admin addAdmin(Admin admin);
	
	public Admin getOneAdmin(int id);
	
	public Admin updateAdmin(Admin a);

	public List<Admin> deleteAdmin(int id);

	public List<Admin> getAllAdmins();
	
	public Admin authenticateAdmin(String username, String password);

}

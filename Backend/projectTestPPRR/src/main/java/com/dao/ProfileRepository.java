package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Profile;

public interface ProfileRepository extends JpaRepository <Profile,Integer>
{

	@Query("select p from Profile p where p.email =:e")
	public List<Profile> find(@Param("e")String email);
	
	
	//List<Profile> findByFirstName(String firstName);

}

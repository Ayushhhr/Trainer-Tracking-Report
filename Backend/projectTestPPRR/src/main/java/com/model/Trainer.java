package com.model;
 
import java.util.List;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Trainer 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Column(unique=true)
	private String username;
	@Column(unique=true)
	private String password;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JsonIgnore
	private List<Batch> batch;
	
	@ManyToMany(fetch=FetchType.EAGER)
	private List<Course> course;
/*
	Adding a new field to hold batch names
	@ElementCollection
    private List<String> batches;
*/	
/*	
	@ManyToMany(fetch=FetchType.EAGER)
	private List<Topic> topic;
*/	
	@OneToOne
	@JoinColumn(name = "profile_id", referencedColumnName = "id")
	private Profile profile;
	
	public Trainer() 
	{
		super();
	}
	public Trainer(int id, String username,String password, List<Course> course /*,List<Batch> batch */) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	//	this.batch = batch;
		this.course = course; 
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
/*		
	public List<Batch> getBatch() {
		return batch;
	}
	public void setBatch(List<Batch> batch) {
		this.batch = batch;
	}
*/	
	
	
	
	/*
	public void setBatches(List<String> batches) 
	{
	    this.batches = batches;
	}
	  
	public List<String> getBatches()
	{
	    return batches;
    }
*/    
				
	public List<Course> getCourse() {
		return course;
	}
	public void setCourse(List<Course> course) {
		this.course = course;
	}
	
	public Profile getProfile() {
		return profile;
	}
	public void setProfile(Profile profile) {
		this.profile = profile;
	}
	@Override
	public String toString() {
		return "Trainer [id=" + id + ", username=" + username + ", password=" + password +  ", Course=" + course +", batch=" + batch
				+"]";
	}	

}

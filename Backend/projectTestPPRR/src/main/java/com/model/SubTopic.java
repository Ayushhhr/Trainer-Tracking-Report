package com.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class SubTopic
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int sid;

	private String sname;

	private int shours;
	
	//private int hours_taken; 
		
	@JsonBackReference
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnore // Add this annotation to break the cyclic reference
    private TrainerSubTopicAssociation tsa;
	
	public SubTopic() {
		super();
	}


	public SubTopic(int sid, String sname, int shours) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.shours = shours;
		//this.hours_taken = hours_taken;
	}


	public int getSid() {
		return sid;
	}


	public void setSid(int sid) {
		this.sid = sid;
	}


	public String getSname() {
		return sname;
	}


	public void setSname(String sname) {
		this.sname = sname;
	}


	public int getShours() {
		return shours;
	}


	public void setShours(int shours) {
		this.shours = shours;
	}
	
	
	public TrainerSubTopicAssociation getTrainerSubTopicAssociations() {
		return tsa;
	}


	public void setTrainerSubTopicAssociations(TrainerSubTopicAssociation tsa) {
		this.tsa= tsa;
	}


	/*
	public Topic getTopic() {
		return topic;
	}


	public void setTopic(Topic topic) {
		this.topic = topic;
	}

*/
	@Override
	public String toString() {
		return "SubTopics [sid=" + sid + ", sname=" + sname + ", shours=" + shours +  "]";
	}
}

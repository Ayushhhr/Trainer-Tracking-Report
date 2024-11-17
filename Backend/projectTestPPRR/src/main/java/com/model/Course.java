package com.model;

import java.util.List;  
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Course 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int cid;
	
	@Column(name = "cname")
	private String cname;
/*	
	@ManyToMany(fetch = FetchType.EAGER)
	private List<Batch> batches;
*/
	@OneToMany(fetch=FetchType.EAGER)
	private List<Topic> topic;
	
	//@ManyToOne(/*mappedBy = "courses"*/)
	//private List<SubBatch> subBatch;

	public Course() {
		super();
	}
	public Course(int cid, String cname, List<Topic> topic) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.topic = topic;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}

	public List<Topic> getTopic() {
		return topic;
	}
	public void setTopic(List<Topic> topic) {
		this.topic = topic;
	}
/*
	public List<Trainer> getTrainers() {
		return trainers;
	}
	public void setTrainers(List<Trainer> trainers) {
		this.trainers = trainers;
	}
*/
	@Override
	public String toString() {
		return "Courses [cid=" + cid + ", cname=" + cname + ", topics=" + topic + "]";
	}
}

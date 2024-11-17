package com.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class TrainerSubTopicAssociation 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	//@JsonManagedReference
    @JoinColumn(name = "bid")
	private Batch batch;
	
	
	@OneToOne(fetch = FetchType.EAGER)
	//@JsonManagedReference
    @JoinColumn(name = "sid")
    private SubTopic subtopic;

    private int takenHours;

	public TrainerSubTopicAssociation() 
	{
		super();
	}

	public TrainerSubTopicAssociation(int id, Batch batch, SubTopic subtopic, int takenHours) 
	{
		super();
		this.id = id;
		this.batch = batch;
		this.subtopic = subtopic;
		this.takenHours = takenHours;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Batch getBatch() {
		return batch;
	}

	public void setBatch(Batch batch) {
		this.batch = batch;
	}

	public SubTopic getSubTopic() {
		return subtopic;
	}

	public void setSubTopic(SubTopic subtopic) {
		this.subtopic = subtopic;
	}

	public int getTakenHours() {
		return takenHours;
	}

	public void setTakenHours(int takenHours) {
		this.takenHours = takenHours;
	}

	@Override
	public String toString() 
	{
		return "TrainerSubTopicAssociation [id=" + id + ", batch=" + batch + ", subtopic=" + subtopic + ", takenHours="
				+ takenHours + "]";
	}
    
}

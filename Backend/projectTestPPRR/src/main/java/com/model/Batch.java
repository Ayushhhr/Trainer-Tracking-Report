package com.model;

import java.util.Date;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Batch 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int bid;
	
	@Column(name = "bname",unique=true)
	private String bname;
	
	@CreationTimestamp
	@Temporal(TemporalType.DATE)
	private Date creation_date;

	@JsonBackReference	
	@OneToMany(mappedBy = "batch", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<TrainerSubTopicAssociation> trainerTopicAssociations;

	
/*
	@ManyToMany(fetch=FetchType.EAGER)
	//@JsonBackReference
	@JoinTable(name = "batch_trainer",
    joinColumns = @JoinColumn(name = "batch_id"),
    inverseJoinColumns = @JoinColumn(name = "trainer_id"))
	private List<Trainer> trainers;
*/
	@ManyToMany(fetch = FetchType.EAGER)
	private List<Profile> profiles;
	
	public Batch() {
		super();
	}

	public Batch(int bid, String bname, List<Profile> profiles, Date creation_date) {
		super();
		this.bid = bid;
		this.bname = bname;
		this.profiles = profiles;
		this.creation_date = creation_date;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
	}

	public String getBname() {
		return bname;
	}

	public void setBname(String bname) {
		this.bname = bname;
	}
	
	public Date getCreation_date() {
		return creation_date;
	}

	public void setCreation_date(Date creation_date) {
		this.creation_date = creation_date;
	}

	public void setProfiles(List<Profile> profiles) {
		this.profiles = profiles;
	}

	public List<Profile> getProfiles() {
		return profiles;
	}
	public List<TrainerSubTopicAssociation> getTrainerTopicAssociations() {
		return trainerTopicAssociations;
	}
	public void setTrainerTopicAssociations(List<TrainerSubTopicAssociation> trainerTopicAssociations) {
		this.trainerTopicAssociations = trainerTopicAssociations;
	}

	@Override
	public String toString() {
		return "Batch [bid=" + bid + ", bname=" + bname + ", profiles=" + profiles + "]";
	}

}

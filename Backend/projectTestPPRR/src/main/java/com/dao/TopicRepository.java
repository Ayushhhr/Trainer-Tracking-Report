package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Topic;

public interface TopicRepository extends JpaRepository<Topic,Integer> 
{

}

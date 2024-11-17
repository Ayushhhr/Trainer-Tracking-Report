package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.TrainerSubTopicAssociation;

public interface TsaRepository extends JpaRepository<TrainerSubTopicAssociation,Integer>
{
   // List<TrainerSubTopicAssociation> findByBatchIdAndSubtopicId(int bid, int sid);
}

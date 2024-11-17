package com.dao;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.model.Batch;

public interface BatchRepository extends JpaRepository<Batch, Integer>
{
	@Query("select b from Batch b where b.bname =:bn")
	public List<Batch> findByName(@Param("bn")String bn);
	
	@Query("SELECT b FROM Batch b JOIN b.profiles p WHERE p.id = :profileId")
	List<Batch> findBatchesByProfileId(Long profileId);
	
	//List<Batch> findByTrainersId(int trainerId);
	
/*	
	@Query("select b.bname from Batch b join b.trainers t where t.id = :trainerId")
	// @Query("select b.bname from Batch b ( select  where t.id = :trainerId") )
	 List<String> findBatchNamesByTrainerId(@Param("trainerId") int trainerId);
*/	 
}

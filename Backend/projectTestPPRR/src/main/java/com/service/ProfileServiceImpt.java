package com.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ProfileRepository;
import com.dao.TopicRepository;
import com.model.Profile;
import com.model.Topic;

import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.Query;
import jakarta.persistence.StoredProcedureQuery;
import jakarta.transaction.Transactional;

@Service
public class ProfileServiceImpt implements ProfileService
{
	@Autowired
	ProfileRepository profileRepo;

	@Autowired
	private TopicRepository topicRepo;

	
	@Autowired
    EntityManager entityManager; 
	
	public Profile addProfile(Profile p) 
	{
		return profileRepo.save(p);
	}
	
	public Profile getOneProfile(int id)
	{
		return profileRepo.findById(id).orElse(null);
	}
	
	public List<Profile> getAllProfile()
	{
		return profileRepo.findAll();
	}
	
	public Profile updateProfile(Profile p)
	{
		Profile existingProfile = profileRepo.findById(p.getId()).orElse(null);
		 // Check if the existing subtopic exists
	    if(existingProfile != null) 
	    {
	        // Update the name of the existing subtopic
	        existingProfile.setFirstName(p.getFirstName());
	        existingProfile.setLastName(p.getLastName());
	        existingProfile.setMobNum(p.getMobNum());
	        existingProfile.setEmail(p.getEmail());
	        existingProfile.setAddress(p.getAddress());
	        existingProfile.setTopics(p.getTopics());	        // Save the existingSubTopic entity
	        return profileRepo.save(existingProfile);
	    } 
	    else 
	    {
	        // Handle the case where the existing subtopic is not found
	        return null; // or throw an exception, depending on requirements
	    }
	}
	public Profile addTopicsToProfile(int id, List<Topic> topics) 
	{
        // Retrieve the profile from the database
        Profile profile = profileRepo.findById(id).orElse(null);
        
        // Check if the profile exists
        if (profile == null) {
            throw new IllegalArgumentException("Profile with ID " + id + " not found");
        }

        // Extract the IDs of the provided topics
        List<Integer> topicIds = topics.stream()
                                      .map(topic -> topic.getTid())
                                      .collect(Collectors.toList());

        // Retrieve the topics from the database using the extracted IDs
        List<Topic> topicsToAdd = topicRepo.findAllById(topicIds);

        // Add the retrieved topics to the profile
        List<Topic> existingTopics = profile.getTopics();
        existingTopics.addAll(topicsToAdd);
        profile.setTopics(existingTopics);

        // Save the updated profile back to the database
        return profileRepo.save(profile);
    }

	@Transactional //
	public List<Profile> deleteProfile(int id)
	{
	/*	// Deleting related records from the batch_trainer table using native SQL query
        Query query = entityManager.createNativeQuery("DELETE FROM trainer WHERE profile_id = :id DELETE FROM batch_profiles WHERE  profiles_id = :id");
        query.setParameter("id", id);
        query.executeUpdate();
	*/
		StoredProcedureQuery storedProcedure = entityManager.createStoredProcedureQuery("delete_profile_and_remove_profile_from_trainer");
		storedProcedure.registerStoredProcedureParameter("profile_id", Integer.class, ParameterMode.IN);
		storedProcedure.setParameter("profile_id", id);
		storedProcedure.execute();
		
		Profile profile = profileRepo.findById(id).orElse(null);
        if (profile != null) {
         
        	profileRepo.delete(profile);
        }

        return profileRepo.findAll();
        
	}

	public List<Profile> find(String email) 
	{
		return profileRepo.find(email);
	}
	
	public List<Object[]> getAllBatchProfiles() 
	 {
		  String queryString = "SELECT b.*, GROUP_CONCAT(CONCAT(p.first_name,' ', p.last_name)) AS profiles " +
                  "FROM batch_profiles bp " +
                  "JOIN batch b ON bp.batch_bid = b.bid " +
                  "JOIN profile p ON bp.profiles_id = p.id " +
                  "GROUP BY bp.batch_bid";
	        Query query = entityManager.createNativeQuery(queryString);
	        return query.getResultList();
	 }
/*	
	@Overrides
	public List<Trainer> findByName(String name) 
	{
		//return trainerRepo.findByName(name);
		 List<Trainer> trainers = trainerRepo.findByName(name);
		// Fetch batches for each trainer
        for (Trainer trainer : trainers) {
            List<Batch> batches = batchRepo.findByTrainersId(trainer.getId());
            trainer.setBatch(batches);
        }
        return trainers;
	}
 */
	
	  /*	public List<Profile> findByName(String name) {
      "JOIN batch_trainer bt ON t.id = bt.trainer_id " +
                "JOIN batch b ON bt.batch_id = b.bid " +
                "WHERE t.name = :name", Trainer.class);
                query.setParameter("name", name);
                return query.getResultList();
	    return profileRepo.findByName(name);
	}
	*/
	
}

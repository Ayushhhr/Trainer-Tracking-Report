package com.symbiosis;

import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan({"com.symbiosis","com.controller","com.dao","com.model","com.service"})
@EntityScan("com.model")
@EnableJpaRepositories(basePackages="com.dao")
@SpringBootApplication
public class ProjectTestPprrApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectTestPprrApplication.class, args);
	}

}

package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.EmailRequest;
import com.service.EmailService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmailController {

	@Autowired
	private EmailService emailService;
	
	@PostMapping("/sendMail/{mail}")
	public ResponseEntity<?> sendEmail(@PathVariable String mail ,@RequestBody EmailRequest request)
	{
		emailService.sendEmail(mail, request);
		System.out.println(request);
		return ResponseEntity.ok("{\"message\": \"Mail Successfully sent\"}");
	}
}
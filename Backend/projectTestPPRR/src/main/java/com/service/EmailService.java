package com.service;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.model.EmailRequest;

import java.util.Properties;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender mailsender; 
	
	@Value("${spring.mail.username}")
	private String fromMail;
	
    public void sendEmail(String mail, EmailRequest request) 
    {
    	SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
    	simpleMailMessage.setFrom(fromMail);
    	simpleMailMessage.setSubject(request.getSubject());
    	simpleMailMessage.setText(request.getMsgString());
    	simpleMailMessage.setTo(mail);
    	
    	mailsender.send(simpleMailMessage);
    }
}

package com.model;

public class EmailRequest 
{

	private String subject;
	private String msgString;
	
	public EmailRequest() {
		super();
	}

	public EmailRequest(String subject, String msgString) {
		super();
		this.subject = subject;
		this.msgString = msgString;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMsgString() {
		return msgString;
	}

	public void setMsgString(String msgString) {
		this.msgString = msgString;
	}

	@Override
	public String toString() {
		return "EmailRequest [ subject=" + subject + ", msgString=" + msgString + "]";
	}
	
	
	
	
	
}
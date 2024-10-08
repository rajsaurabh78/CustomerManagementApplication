package com.sunbase.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbase.model.Admin;
import com.sunbase.repository.AdminRepo;

@RestController
public class LoginController {
	
	@Autowired
	private AdminRepo adminRepo;
	
	@GetMapping("/signIn")
	public ResponseEntity<Admin> getLoggedInCustomerDetailsHandler(Authentication auth){
	
		 Admin admin= adminRepo.findByEmail(auth.getName()).orElseThrow(() -> new BadCredentialsException("Invalid Username or password"));
		 return new ResponseEntity<>(admin, HttpStatus.ACCEPTED);
		
		
	}
}
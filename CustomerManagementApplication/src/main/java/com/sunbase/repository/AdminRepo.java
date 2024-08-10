package com.sunbase.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbase.model.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer>{
	
	Optional<Admin> findByEmail(String email);
	
}

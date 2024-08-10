package com.sunbase.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbase.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer,String>{
	
	@Query(value = "SELECT * FROM customer WHERE first_name LIKE %?%", nativeQuery = true)
	Page<Customer> getCustomerByFirstNameContaining(String search,Pageable pageable);
	Page<Customer> findByEmailContaining(String email,Pageable pageable);
	Page<Customer> findByPhoneContaining(String phone,Pageable pageable);
	Page<Customer> findByCityContaining(String city,Pageable pageable);
	
}

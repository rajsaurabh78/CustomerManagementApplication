package com.sunbase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sunbase.DTO.UpdateCustomerDTO;
import com.sunbase.model.Admin;
import com.sunbase.model.Customer;
import com.sunbase.service.AdminService;

import jakarta.validation.Valid;
@RestController
@RequestMapping("/admin")
public class AdminSideController {
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/register/admin")
	public ResponseEntity<Admin> addAdminController(@Valid @RequestBody Admin admin){
		
		Admin res=adminService.addAdmin(admin);
		return new ResponseEntity<>(res,HttpStatus.CREATED);
		
	}
	
	@PostMapping("/register/customer")
	public ResponseEntity<String> addCustomerController(@Valid @RequestBody Customer customer){
		
		String res=adminService.addCustomer(customer);
		return new ResponseEntity<>(res,HttpStatus.CREATED);
		
	}
		
	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getCustomerByIdController(@Valid @PathVariable("id") String id){
		Customer res=adminService.getCustomerById(id);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	
	@GetMapping("/customer/list")
	public ResponseEntity<List<UpdateCustomerDTO>> getAllCustomerListController(@Valid @RequestParam String token){
		List<UpdateCustomerDTO> res=adminService.getCustomerList(token);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	@PatchMapping("/customer/update")
	public ResponseEntity<String> updateCustomerController(@Valid @RequestBody UpdateCustomerDTO updateCustomerDTO){
		String res=adminService.updateCustomer(updateCustomerDTO);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	@DeleteMapping("/customers/{id}")
	public ResponseEntity<String> deleteCustomerController(@Valid @PathVariable("id")String id){
		String res=adminService.deleteCustomer(id);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	@GetMapping("/customers/search")
	public ResponseEntity<List<Customer>> getAllCustomersPaginationController(@Valid @RequestParam(required = false, defaultValue = "ASC")String direction
			,@Valid @RequestParam(required = false, defaultValue = "1")Integer pageNo,@Valid @RequestParam(required = false, defaultValue = "10")Integer noOfItem
			,@Valid @RequestParam(required = false, defaultValue = "uuid")String sortBy,@Valid @RequestParam(required = false, defaultValue = "")String search
			,@Valid @RequestParam(required = false, defaultValue = "")String serchBy){
		List<Customer> res=adminService.getAllCustomer(search, pageNo, noOfItem, sortBy, direction, serchBy);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
	@PostMapping("/sync/customers")
	public ResponseEntity<String> addCustomerSyncController(@Valid @RequestBody List<UpdateCustomerDTO> customer){
		String res=adminService.addCustomerSync(customer);
		return new ResponseEntity<>(res,HttpStatus.OK);
	}
	
}

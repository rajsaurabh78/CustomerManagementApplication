package com.sunbase.service;

import java.util.List;

import com.sunbase.DTO.UpdateCustomerDTO;
import com.sunbase.exception.LoginException;
import com.sunbase.model.Admin;
import com.sunbase.model.Customer;

public interface AdminService{

	public String addCustomer(Customer customer);
	public Admin addAdmin(Admin admin);
	public String updateCustomer(UpdateCustomerDTO updateUserDTO) throws LoginException;
	public List<Customer> getAllCustomer(String search,Integer pageNo,Integer noOfItem,String fieldForSort,String direction,String fieldSerch);
	public Admin getOwnProfile();
	public String deleteCustomer(String id);
	public String deleteAdmin(Integer id);
	public Customer getCustomerById(String id);
	public List<Customer> getAllCustomer();
	public List<UpdateCustomerDTO> getCustomerList(String token);
}

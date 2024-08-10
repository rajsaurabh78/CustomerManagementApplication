package com.sunbase.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.sunbase.model.Admin;
import com.sunbase.model.Authority;
import com.sunbase.repository.AdminRepo;
@Service
public class UserUserDetailsService implements UserDetailsService{

	@Autowired
	private AdminRepo adminRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<Admin> opt= adminRepo.findByEmail(username);

		if(opt.isPresent()) {
			
			Admin admin= opt.get();
			
			List<GrantedAuthority> authorities = new ArrayList<>();
		
			
			
			List<Authority> auths= admin.getAuthorities();
			
			for(Authority auth:auths) {
				SimpleGrantedAuthority sga=new SimpleGrantedAuthority(auth.getRole().toString());
//				System.out.println("siga "+sga);
				authorities.add(sga);
			}
			
//			System.out.println("granted authorities "+authorities);
			
			
			return new User(admin.getEmail(), admin.getPassword(), authorities);
			
			
		}else
			throw new BadCredentialsException("User Details not found with this username: "+username);
	}
	
	


}

package com.sunbase.DTO;

import java.time.LocalDate;

import com.sunbase.model.Gender;

import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCustomerDTO {
	
	private String uuid;
	private String first_name;
	private String last_name;
	private String email;
	private String phone;
	private String photo;
	@Past
	private LocalDate dob;
	private String street;
	private String address;
	private String city;
	private String state;
	private Gender gender;

}

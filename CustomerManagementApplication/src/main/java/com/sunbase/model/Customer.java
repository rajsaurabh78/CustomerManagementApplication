package com.sunbase.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Customer {
	@Id
	private String uuid;
	@Column(name = "first_name")
	private String firstName;
	private String last_name;
	private String email;
	private String phone;
	@Past
	private LocalDate dob;
	@Lob
	@Size(max = 65535)
	private String photo;
	private String street;
	private String address;
	private String city;
	private String state;
	private Gender gender;


	
}

package com.sunbase.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
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
public class Admin {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator ="admin_seq")
	@SequenceGenerator(name="admin_seq", sequenceName="admin_seq",allocationSize=1, initialValue=1)
	private Integer id;
	
	private String name;
	@Column(unique = true)
	private String email;
	@JsonProperty(access =JsonProperty.Access.WRITE_ONLY)
	private String password;
	
	@OneToMany(mappedBy = "admin",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private List<Authority> authorities=new ArrayList<>();
	
}

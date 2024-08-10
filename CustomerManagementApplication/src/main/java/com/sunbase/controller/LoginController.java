package com.sunbase.controller;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.crypto.SecretKey;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sunbase.DTO.loginDTO;
import com.sunbase.config.SecurityConstants;
import com.sunbase.exception.AdminException;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.validation.Valid;

@RestController
public class LoginController {

    private final AuthenticationManager authenticationManager;

    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/signIn")
    public ResponseEntity<Map<String, String>> login(@Valid @RequestBody loginDTO loginDTO) {
        try {
            Authentication authentication = new UsernamePasswordAuthenticationToken(
                loginDTO.getLogin_id(), loginDTO.getPassword());

            Authentication auth = authenticationManager.authenticate(authentication);
            SecurityContextHolder.getContext().setAuthentication(auth);

            SecretKey key = Keys.hmacShaKeyFor(SecurityConstants.JWT_KEY.getBytes());
            String jwt = Jwts.builder()
                    .setIssuer("Sunbase")
                    .setSubject("JWT Token")
                    .claim("username", auth.getName())
                    .claim("authorities", populateAuthorities(auth.getAuthorities()))
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(new Date().getTime() + 30000000)) // expiration time
                    .signWith(key).compact();

            return ResponseEntity.ok(Map.of("access_token", jwt));
        } catch (Exception e) {
            throw new AdminException("Invalid username or password");
        }
    }

    private String populateAuthorities(Collection<? extends GrantedAuthority> collection) {
        Set<String> authoritiesSet = new HashSet<>();
        for (GrantedAuthority authority : collection) {
            authoritiesSet.add(authority.getAuthority());
        }
        return String.join(",", authoritiesSet);
    }
}
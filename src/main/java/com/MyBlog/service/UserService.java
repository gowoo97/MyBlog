package com.MyBlog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MyBlog.dao.UserDAO;
import com.MyBlog.dto.UserDTO;



@Service
public class UserService {
	
	@Autowired
	private UserDAO userDAO;

	public List<UserDTO> getAllUsers(){
		final List<UserDTO> userList = userDAO.findAll();
		return userList;
	}
	
}

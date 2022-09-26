package com.MyBlog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.MyBlog.dto.UserDTO;
import com.MyBlog.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	@GetMapping("/members")
	@ResponseBody
	public List<UserDTO> findMembers(){
		return userService.getAllUsers();
	}
}

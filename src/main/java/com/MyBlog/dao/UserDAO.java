package com.MyBlog.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.MyBlog.dto.UserDTO;

@Repository
public interface UserDAO {
	
	@Select("SELECT * FROM users")
	List<UserDTO> findAll();
}

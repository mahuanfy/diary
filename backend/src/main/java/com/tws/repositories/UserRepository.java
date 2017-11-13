package com.tws.repositories;

import com.tws.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
    User findByNameAndPassword(String name, String password);
}

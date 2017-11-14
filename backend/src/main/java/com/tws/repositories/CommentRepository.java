package com.tws.repositories;

import com.tws.entities.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment,Long>{

}

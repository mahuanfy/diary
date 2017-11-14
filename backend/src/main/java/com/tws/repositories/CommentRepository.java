package com.tws.repositories;

import com.tws.entities.Comment;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface CommentRepository extends CrudRepository<Comment,Long>{
    @Modifying
    @Transactional
    @Query("delete from Comment where diaryId=?1")
    void deleteByDiaryId(long diaryId);

    List<Comment> findByUserId(long id);
}

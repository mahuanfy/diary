package com.tws.repositories;

import com.tws.entities.Follow;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface FollowerRepository extends CrudRepository<Follow,Long>{
    @Query("select followerId from Follow where userId=?1")
    List<Long> findFollowerIdByUserId(long id);

    @Modifying
    @Transactional
    @Query("delete from Follow where userId=?1 and  followerId=?2")
    void deleteFollow(Long userId, Long followerId);
}

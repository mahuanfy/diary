package com.tws.repositories;

import com.tws.entities.Diary;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DiaryRepository extends CrudRepository<Diary,Long> {
    List<Diary> findByUserIdOrderByTimeDesc(Long userId);

    List<Diary> findByUserId(long userId);
}

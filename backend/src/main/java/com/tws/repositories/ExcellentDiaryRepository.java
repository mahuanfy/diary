package com.tws.repositories;

import com.tws.entities.ExcellentDiary;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

public interface ExcellentDiaryRepository extends CrudRepository<ExcellentDiary, Long> {

    @Modifying
    @Transactional
    @Query("delete from ExcellentDiary where id=?1")
    void deleteByExcellentId(long id);

}

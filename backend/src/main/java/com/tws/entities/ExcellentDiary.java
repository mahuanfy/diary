package com.tws.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "t_excellent_diary")
public class ExcellentDiary {
    @Id
    @GeneratedValue
    private long id;
    private long operatorId;
    private Date time;
    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn(name = "excellentDiaryId")
    private List<Comment> comments;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public long getOperatorId() {
        return operatorId;
    }

    public void setOperatorId(long operatorId) {
        this.operatorId = operatorId;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

}

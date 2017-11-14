package com.tws.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "t_comment")
public class Comment {
    @Id
    @GeneratedValue
    private long id;
    private String comment;
    private Date commentTime;
    private long diaryId;
    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "userId")
    private User user;

    public long getDiaryId() {
        return diaryId;
    }

    public void setDiaryId(long diaryId) {
        this.diaryId = diaryId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(Date commentTime) {
        this.commentTime = commentTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

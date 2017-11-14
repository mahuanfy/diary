package com.tws.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "t_follow")
public class Follow {
    @Id
    @GeneratedValue
    private long id;
    private long userId;
    private long followerId;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getFollowerId() {
        return followerId;
    }

    public void setFollowerId(long followerId) {
        this.followerId = followerId;
    }
}

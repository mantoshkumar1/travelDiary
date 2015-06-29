package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import play.data.validation.Constraints;
import util.RatingSerializer;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Review {

    @Id
    private int id;

    @Constraints.Required
    private String title;

    @Constraints.Required
    private String description;

    @Enumerated(EnumType.ORDINAL)
    @JsonSerialize(using = RatingSerializer.class)
    private Rating rating;

    @ManyToOne
    @JoinColumn(name = "userId")
    @JsonBackReference
    private User user;

    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    @Transient
    @JsonSerialize
    @JsonProperty("userId")
    public int getUserId() {
        return user.getId();
    }
}
package models;

import play.data.validation.Constraints;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
public class Review {

    @Id
    @GeneratedValue
    private long id;

    @Constraints.Required
    private String title;

    @Constraints.Required
    private String description;

    @Enumerated(EnumType.STRING)
    private EnumRating rating;

    @ManyToOne
    @JoinColumn(name = "userId")
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public EnumRating getRating() { return rating; }

    public void setRating(EnumRating rating) {
        this.rating = rating;
    }
}
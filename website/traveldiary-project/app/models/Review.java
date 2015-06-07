package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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

    public Rating getRating() { return rating; }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public static List<Review> findAll() {
        TypedQuery<Review> query = JPA.em().createQuery("SELECT m FROM Review m", Review.class);

        return query.getResultList();
    }
}
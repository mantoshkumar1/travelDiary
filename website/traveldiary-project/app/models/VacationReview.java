package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import play.data.validation.Constraints;
import util.RatingDeserializer;
import util.RatingSerializer;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by albert on 27.06.15.
 */
@Entity
@JsonIgnoreProperties({"vacation"})
public class VacationReview {

    @Id
    @GeneratedValue
    private int id;

    @Constraints.Required
    private String title;

    @Constraints.Required
    private String description;

    @Enumerated(EnumType.ORDINAL)
    @JsonSerialize(using = RatingSerializer.class)
    @JsonDeserialize(using = RatingDeserializer.class)
    private Rating rating;

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

    @JsonIgnore
    @JsonProperty("userId")
    public void setUserId(int id) {}

    @ManyToOne
    @JoinColumn(name = "vacationId")
    private Vacation vacation;

    @Transient
    @JsonSerialize
    @JsonProperty("vacationId")
    public int getVacationId() {
        return vacation.getId();
    }

    @JsonIgnore
    @JsonProperty("vacationId")
    public void setVacationId(int id) {}

    public void setVacation(Vacation vacation) {
        this.vacation = vacation;
    }

    public Vacation getVacation() {
        return vacation;
    }
}

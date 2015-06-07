package models;

import play.data.validation.Constraints;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by Rike on 06.06.2015.
 */

@Entity
public class Activity {

    @Id
    @GeneratedValue
    private long id;

    @Constraints.Required
    private String name;

    @Constraints.Required
    private String description;

    @ManyToOne
    @JoinColumn(name = "locationId")
    private Location location;

    @OneToMany
    @JoinTable
            (
                    name = "ActivityReviews",
                    joinColumns = {@JoinColumn(name = "activityId", referencedColumnName = "id")},
                    inverseJoinColumns = {@JoinColumn(name = "reviewId", referencedColumnName = "id", unique = true)}
            )
    private List<Review> reviews;
    private Date startTime;
    private Date endTime;

    @ManyToOne
    @JoinColumn(name = "creatorId")
    private User creator;

    @ManyToMany
    @JoinTable(name = "ActivityKeywords",
            joinColumns = {@JoinColumn(name = "activityId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "keywordId", referencedColumnName = "id")})
    private List<Keyword> activityKeywords;

    public List<Keyword> getActivityKeywords() {
        return activityKeywords;
    }

    public void setActivityKeywords(List<Keyword> activityKeywords) {
        this.activityKeywords = activityKeywords;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
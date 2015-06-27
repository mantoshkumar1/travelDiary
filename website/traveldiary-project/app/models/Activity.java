package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private int id;

    @Constraints.Required
    private String name;

    @Constraints.Required
    private String description;

    @ManyToOne
    @JoinColumn(name = "locationId")
    private Location location;

    @Transient
    private int locationId;

    @OneToMany
    @JoinColumn(name = "activityId")
    private List<ActivityReview> reviews;
    private Date startTime;
    private Date endTime;

    @ManyToOne
    @JoinColumn(name = "creatorId")
    @JsonBackReference
    private User creator;

    @Transient
    private long creatorId;

    @ManyToMany
    @JoinTable(name = "ActivityKeywords",
            joinColumns = {@JoinColumn(name = "activityId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "keywordId", referencedColumnName = "id")})
    private List<Keyword> keywords;

    @OneToMany
    @JoinColumn(name = "activityId")
    private List<ActivityImage> images;

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public List<ActivityImage> getImages() {
        return images;
    }

    public void setImages(List<ActivityImage> images) {
        this.images = images;
    }

    public List<Keyword> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<Keyword> keywords) {
        this.keywords = keywords;
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

    public List<ActivityReview> getReviews() {
        return reviews;
    }

    public void setReviews(List<ActivityReview> reviews) {
        this.reviews = reviews;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    @PostLoad
    private void onLoad() {
        creatorId = creator.getId();
        locationId = location.getId();
    }
}
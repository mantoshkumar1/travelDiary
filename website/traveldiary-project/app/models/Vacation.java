package models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Vacation {

    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String description;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="userID")
    private User creator;
    private List<Activity> activitiesList;
    private List<Review> reviewsList;
    private double budget;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="locationId")
    private Location locationId;
    private Date startDate;
    private Date endDate;

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Location getLocationId() {
        return locationId;
    }

    public void setLocationId(Location locationId) {
        this.locationId = locationId;
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

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public List<Activity> getActivitiesList() {
        return activitiesList;
    }

    public void setActivitiesList(List<Activity> activitiesList) {
        this.activitiesList = activitiesList;
    }

    public List<Review> getReviewsList() {
        return reviewsList;
    }

    public void setReviewsList(List<Review> reviewsList) {
        this.reviewsList = reviewsList;
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }
}
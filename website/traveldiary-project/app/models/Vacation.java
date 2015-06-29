package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import play.data.validation.Constraints;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
public class Vacation {

    @Id
    @GeneratedValue
    private int id;

    @Constraints.Required
    private String name;
    @Constraints.Required
    private String description;

    @ManyToOne
    @JoinColumn(name = "creatorId")
    @JsonManagedReference
    private User creator;

    @Transient
    private int creatorId;

    @ManyToMany
    @JoinTable(name = "VacationActivities",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "activityId", referencedColumnName = "id")})
    private List<Activity> activities;

    @OneToMany
    @JoinColumn(name = "vacationId")
    private List<VacationReview> reviews;

    @Column(precision = 5, scale = 2)
    private BigDecimal budget;

    @ManyToOne
    @JoinColumn(name = "locationId")
    private Location location;

    @Transient
    private int locationId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;
    @Temporal(TemporalType.TIMESTAMP)
    private Date endDate;

    @ManyToMany
    @JoinTable(name = "VacationKeywords",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "keywordId", referencedColumnName = "id")})
    private List<Keyword> keywords;

    @OneToMany
    @JoinColumn(name = "vacationId")
    private List<VacationImage> images;

    public List<VacationImage> getImages() {
        return images;
    }

    public void setImages(List<VacationImage> images) {
        this.images = images;
    }


    public List<Keyword> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<Keyword> vacationKeywords) {
        this.keywords = vacationKeywords;
    }

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

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public BigDecimal getBudget() {
        return budget;
    }

    public void setBudget(BigDecimal budget) {
        this.budget = budget;
    }

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activitiesList) {
        this.activities = activitiesList;
    }

    public List<VacationReview> getReviews() {
        return reviews;
    }

    public void setReviews(List<VacationReview> reviewsList) {
        this.reviews = reviewsList;
    }

    @PostLoad
    private void onLoad() {
        creatorId = creator.getId();
        locationId = location.getId();
    }
}
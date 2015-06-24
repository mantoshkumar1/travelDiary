package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import play.data.validation.Constraints;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
public class Vacation {

    @Id
    @GeneratedValue
    private long id;

    @Constraints.Required
    private String name;
    @Constraints.Required
    private String description;

    @ManyToOne
    @JoinColumn(name = "creatorId")
    @JsonBackReference
    private User creator;

    @ManyToMany
    @JoinTable(name = "VacationActivities",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "activityId", referencedColumnName = "id")})
    private List<Activity> activitiesList;

    @OneToMany
    @JoinTable
            (
                    name = "VacationReviews",
                    joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
                    inverseJoinColumns = {@JoinColumn(name = "reviewId", referencedColumnName = "id", unique = true)}
            )
    private List<Review> reviewsList;

    @Column(precision = 5, scale = 2)
    private BigDecimal budget;

    @ManyToOne
    @JoinColumn(name = "locationId")
    private Location locationId;

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
    @JoinTable(name = "VacationImages",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "imageId", referencedColumnName = "id", unique = true)})
    private List<Image> images;

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
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

    public BigDecimal getBudget() {
        return budget;
    }

    public void setBudget(BigDecimal budget) {
        this.budget = budget;
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
}
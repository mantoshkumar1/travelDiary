package models;

import play.data.validation.Constraints;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
public class Vacation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Constraints.Required
    private String name;
    @Constraints.Required
    private String description;

    @ManyToOne
    @JoinColumn(name = "creatorId")
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

    private Date startDate;
    private Date endDate;

    @ManyToMany
    @JoinTable(name = "VacationKeywords",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "keywordId", referencedColumnName = "id")})
    private List<Keyword> vacationKeywords;

    public List<Keyword> getVacationKeywords() {
        return vacationKeywords;
    }

    public void setVacationKeywords(List<Keyword> vacationKeywords) {
        this.vacationKeywords = vacationKeywords;
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
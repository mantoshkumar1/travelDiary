package models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * Created by Rike on 06.06.2015.
 */

@Entity
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long activityId;
    private String name;
    private String description;
    @OneToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="locationId")
    private Location location;
    private List<Review> reviewsList;
    private Date startTime;
    private Date endTime;
    @ManyToMany
    @JoinTable(name = "Activity_Keywords",
            joinColumns = {@JoinColumn(name="activityId")},
            inverseJoinColumns = {@JoinColumn(name="keywordId")})
    private List<Keywords> activityKeywordsList;

    public List<Keywords> getActivityKeywordsList() {
        return activityKeywordsList;
    }

    public void setActivityKeywordsList(List<Keywords> activityKeywordsList) {
        this.activityKeywordsList = activityKeywordsList;
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

    public List<Review> getReviewsList() {
        return reviewsList;
    }

    public void setReviewsList(List<Review> reviewsList) {
        this.reviewsList = reviewsList;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public long getActivityId() {
        return activityId;
    }

    public void setActivityId(long activityId) {
        this.activityId = activityId;
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
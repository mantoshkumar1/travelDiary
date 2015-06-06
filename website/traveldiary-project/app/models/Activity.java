package models;

import javax.persistence.*;
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
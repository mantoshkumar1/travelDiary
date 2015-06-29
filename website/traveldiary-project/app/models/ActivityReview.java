package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;

/**
 * Created by albert on 27.06.15.
 */
@Entity
@JsonIgnoreProperties({"activity"})
public class ActivityReview extends Review {

    @ManyToOne
    @JoinColumn(name = "activityId")
    private Activity activity;

    @Transient
    @JsonSerialize
    @JsonProperty("activityId")
    public int getActivityId() {
        return activity.getId();
    }

}

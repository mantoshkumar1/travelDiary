package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
    private long activityId;

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    @PostLoad
    private void onLoad() {
        activityId = activity.getId();
    }

}

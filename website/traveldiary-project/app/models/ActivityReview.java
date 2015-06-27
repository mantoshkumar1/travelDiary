package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import play.data.validation.Constraints;
import util.RatingSerializer;

import javax.persistence.*;
import java.util.Date;

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

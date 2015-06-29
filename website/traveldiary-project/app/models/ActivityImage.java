package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

/**
 * Created by albert on 27.06.15.
 */
@Entity
@JsonIgnoreProperties({"activity"})
public class ActivityImage extends Image {

    @ManyToOne
    @JoinColumn(name = "activityId")
    private Activity activity;

    @Transient
    private int activityId;

    @PostLoad
    private void onLoad() {
        activityId = activity.getId();
    }
}

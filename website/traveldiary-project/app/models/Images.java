package models;

import play.data.validation.Constraints;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by JOY on 6/15/2015.
 */
public class Images {
    @Id
    @GeneratedValue
    private long imageId;

    @Constraints.Required
    private String URL;

    public long getId() {
        return imageId;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }
}

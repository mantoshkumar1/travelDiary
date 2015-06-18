package models;

import javax.persistence.*;
import play.data.validation.Constraints;

/**
 * Created by Chetan on 6/15/2015.
 */
@Entity
public class Image {
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

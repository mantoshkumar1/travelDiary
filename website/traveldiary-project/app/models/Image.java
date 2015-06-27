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
    private int id;

    @Constraints.Required
    private String url;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url
        ;
    }
}

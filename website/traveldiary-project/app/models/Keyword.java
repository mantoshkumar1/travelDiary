package models;

/**
 * Created by JOY on 6/6/2015.
 */

import play.data.validation.Constraints;
import javax.persistence.*;

@Entity
public class Keyword {

    @Id
    @GeneratedValue
    private long id;

    @Constraints.Required
    private String keyword;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
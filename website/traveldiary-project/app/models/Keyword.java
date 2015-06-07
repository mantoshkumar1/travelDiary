package models;

/**
 * Created by JOY on 6/6/2015.
 */

import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.TypedQuery;
import java.util.List;

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

    public static List<Keyword> findAll() {
        TypedQuery<Keyword> query = JPA.em().createQuery("SELECT m FROM Keyword m", Keyword.class);

        return query.getResultList();
    }
}
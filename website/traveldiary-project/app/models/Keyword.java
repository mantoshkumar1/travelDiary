package models;

/**
 * Created by JOY on 6/6/2015.
 */

import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.*;
import java.util.ArrayList;
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

    public static List<Keyword> findKeyWordsFor(String[] keywords) {

        if (keywords == null) {
            return new ArrayList<Keyword>();
        }

        String keywordQuery;

        // Add filter for all keywords. Keywords referenced by :keyword<id>
        if (keywords.length > 0) {

            keywordQuery = " k.keyword LIKE :keyword0";

            for (int i = 1; i < keywords.length; i++) {
                keywordQuery += " OR k.keyword LIKE :keyword" + i;
            }
        } else {
            keywordQuery = "";
        }


        String query = "SELECT * FROM Keyword k WHERE " + keywordQuery;

        Query searchQquery = JPA.em().createNativeQuery(query, Keyword.class);

        // Fill statement with corresponding keywords values
        for (int i = 0; i < keywords.length; i++) {
            if (keywords[i] != null) {
                searchQquery.setParameter("keyword" + i, keywords[i]);
            }
        }

        return (List<Keyword>) searchQquery.getResultList();
    }
}
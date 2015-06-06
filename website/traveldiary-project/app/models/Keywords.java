package models;

/**
 * Created by JOY on 6/6/2015.
 */

// import net.sf.ehcache.config.PersistenceConfiguration;

import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.*;

//@Entity
public class Keywords {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private long keywordId;
    private String keyword;

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public long getKeywordId() {
        return keywordId;
    }

    public void setKeywordId(long keywordId) {
        this.keywordId = keywordId;
    }
}
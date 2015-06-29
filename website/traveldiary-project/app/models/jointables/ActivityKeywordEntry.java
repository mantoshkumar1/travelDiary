package models.jointables;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by albert on 27.06.15.
 */
@Entity
@Table(name = "ActivityKeywords")
public class ActivityKeywordEntry implements Serializable {
    @Id
    @GeneratedValue
    private int activityId;

    @Id
    @GeneratedValue
    private int keywordId;
}

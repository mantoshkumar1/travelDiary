package dao;

import models.jointables.ActivityKeywordEntry;
import models.jointables.VacationKeywordEntry;
import play.db.jpa.JPA;

import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by albert on 27.06.15.
 */
public class JoinTableDAO {

    public static List<VacationKeywordEntry> findAllVacationKeywordsEntries() {
        TypedQuery<VacationKeywordEntry> query =
                JPA.em().createQuery("SELECT e FROM VacationKeywords e", VacationKeywordEntry.class);

        return query.getResultList();
    }

    public static List<ActivityKeywordEntry> findAllActivityKeywordsEntries() {
        TypedQuery<ActivityKeywordEntry> query =
                JPA.em().createQuery("SELECT e FROM ActivityKeywords e", ActivityKeywordEntry.class);

        return query.getResultList();
    }

    public static VacationKeywordEntry findVacationKeywordEntry(int vid, int kid) {
        Query query = JPA.em().createNativeQuery("SELECT e FROM VacationKeywords WHERE vacationId=:vId AND keywordId=:kId", VacationKeywordEntry.class);

        query.setParameter("vid", vid);
        query.setParameter("kid", kid);

        List results = query.getResultList();

        if (results.size() == 0) {
            return null;
        } else {
            Object result = results.get(0);
            if (result instanceof VacationKeywordEntry) {
                return (VacationKeywordEntry) result;
            } else {
                System.out.print("No instance of KeywordEntry recieved");
                return null;
            }
        }
    }

    public static ActivityKeywordEntry findActivityKeywordEntry(int aid, int kid) {
        Query query = JPA.em().createNativeQuery("SELECT e FROM VacationKeywords WHERE vacationId=:aId AND keywordId=:kId", ActivityKeywordEntry.class);

        query.setParameter("aid", aid);
        query.setParameter("kid", kid);

        List results = query.getResultList();

        if (results.size() == 0) {
            return null;
        } else {
            Object result = results.get(0);
            if (result instanceof ActivityKeywordEntry) {
                return (ActivityKeywordEntry) result;
            } else {
                System.out.print("No instance of KeywordEntry recieved");
                return null;
            }
        }
    }
}

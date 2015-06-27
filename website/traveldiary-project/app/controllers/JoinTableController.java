package controllers;

import dao.JoinTableDAO;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by albert on 27.06.15.
 */
public class JoinTableController extends Controller {

    @Transactional(readOnly = true)
    public static Result getAllVacationKeywordsEntries() {
        return ok(Json.toJson(JoinTableDAO.findAllVacationKeywordsEntries()));
    }

    @Transactional(readOnly = true)
    public static Result getAllActivityKeywordsEntries() {
        return ok(Json.toJson(JoinTableDAO.findAllActivityKeywordsEntries()));
    }

    @Transactional(readOnly = true)
    public static Result getVacationKeywordEntry(int vid, int kid) {
        return ok(Json.toJson(JoinTableDAO.findVacationKeywordEntry(vid, kid)));
    }

    @Transactional(readOnly = true)
    public static Result getActivityKeywordEntry(int vid, int kid) {
        return ok(Json.toJson(JoinTableDAO.findActivityKeywordEntry(vid, kid)));
    }
}

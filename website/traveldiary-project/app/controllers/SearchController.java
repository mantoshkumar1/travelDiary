package controllers;

import models.Keyword;
import models.Vacation;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;


public class SearchController extends Controller {

    public static Result index() {
        return ok(views.html.main.render());
    }

    @Transactional(readOnly = true)
    public static Result getAllVacations() {
        List<Vacation> vacations = Vacation.findAll();

        return ok(Json.toJson(vacations));
    }

   @Transactional(readOnly = true)
    public static Result getAllKeywords() {
        List<Keyword> keywords = Keyword.findAll();
        return ok(Json.toJson(keywords));
    }

}

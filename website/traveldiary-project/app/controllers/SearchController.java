package controllers;

import models.Vacation;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

/**
 * Created by albert on 07.06.15.
 */
public class SearchController extends Controller {


    @Transactional(readOnly = true)
    public static Result getVacationsFor(String keyString) {

        String[] keywords = keyString.split("\\+");

        List<Vacation> matchingVacations = Vacation.findVacationsFor(keywords);

        return ok(Json.toJson(matchingVacations));
    }
}

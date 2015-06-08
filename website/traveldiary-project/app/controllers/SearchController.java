package controllers;

import models.Keyword;
import models.Vacation;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.ArrayList;
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

    @Transactional(readOnly = true)
    public static Result getKeywordsFor(String keyString) {
        String keyStr = keyString.trim();

        List<Keyword> matchingKeywords;

        if (keyStr == null || keyStr.equals("")) {
            matchingKeywords = new ArrayList<Keyword>();
        } else {
            String[] keywords = keyStr.split("\\+");

            matchingKeywords = Keyword.findKeyWordsFor(keywords);
        }

        return ok(Json.toJson(matchingKeywords));
    }
}

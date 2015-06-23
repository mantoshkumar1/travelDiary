package controllers;

import models.Vacation;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;

/**
 * Created by mk on 23.06.15.
 */
public class RegisterController extends Controller {

    @Transactional(readOnly = true)
    public static Result createUser(String keyString) {

        String[] keywords = keyString.split("\\+");

        List<Vacation> matchingVacations = Vacation.findVacationsFor(keywords);

        return ok(Json.toJson(matchingVacations));
    }

}

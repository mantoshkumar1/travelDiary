package controllers;

import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by mk on 23.06.15.
 */
public class RegisterController extends Controller {

    @Transactional(readOnly = true)
    public static Result createUser(String username, String firstname, String lastname, String email, String passwordhash) {

        //List<Vacation> matchingVacations = Vacation.findVacationsFor(keywords);

        System.out.println("hello");
        return ok("hello");
        //return ok(Json.toJson(matchingVacations));

    }

}

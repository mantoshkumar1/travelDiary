package controllers;

import models.*;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import java.util.List;


public class MainController extends Controller {

    public static Result index() {
        return ok(views.html.main.render());
    }

    @Transactional(readOnly = true)
    public static Result getAllVacations() {
        List<Vacation> vacations = Vacation.findAll();
        Vacation[] vacArray = vacations.toArray(new Vacation[vacations.size()]);
        return ok(Json.toJson(vacArray));
    }

   @Transactional(readOnly = true)
    public static Result getAllKeywords() {
        List<Keyword> keywords = Keyword.findAll();
       Keyword[] keyArray = keywords.toArray(new Keyword[keywords.size()]);
        return ok(Json.toJson(keyArray));
    }

    @Transactional(readOnly = true)
    public static Result getAllActivities() {
        List<Activity> activities = Activity.findAll();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllLocations() {
        List<Location> activities = Location.findAll();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllUsers() {
        List<User> activities = User.findAll();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllRoles() {
        List<Role> activities = Role.findAll();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllReviews() {
        List<Review> activities = Review.findAll();
        return ok(Json.toJson(activities));
    }
}

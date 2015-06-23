package controllers;

import dao.TravelDiaryDAO;
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
        List<Vacation> vacations = TravelDiaryDAO.findAllVacations();
        Vacation[] vacArray = vacations.toArray(new Vacation[vacations.size()]);
        return ok(Json.toJson(vacArray));
    }

   @Transactional(readOnly = true)
    public static Result getAllKeywords() {
        List<Keyword> keywords = TravelDiaryDAO.findAllKeywords();
       Keyword[] keyArray = keywords.toArray(new Keyword[keywords.size()]);
        return ok(Json.toJson(keyArray));
    }

    @Transactional(readOnly = true)
    public static Result getAllActivities() {
        List<Activity> activities = TravelDiaryDAO.findAllActivities();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllLocations() {
        List<Location> activities = TravelDiaryDAO.findAllLocations();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllUsers() {
        List<User> activities = TravelDiaryDAO.findAllUsers();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllRoles() {
        List<Role> activities = TravelDiaryDAO.findAllRoles();
        return ok(Json.toJson(activities));
    }

    @Transactional(readOnly = true)
    public static Result getAllReviews() {
        List<Review> activities = TravelDiaryDAO.findAllReviews();
        return ok(Json.toJson(activities));
    }
}

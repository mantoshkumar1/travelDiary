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

        return ok(Json.toJson(vacations));
    }

    @Transactional(readOnly = true)
    public static Result getAllKeywords() {
        List<Keyword> keywords = TravelDiaryDAO.findAllKeywords();

        return ok(Json.toJson(keywords));
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
    public static Result getAllVacationReviews() {
        List<VacationReview> reviews = TravelDiaryDAO.findAllVacationReviews();
        return ok(Json.toJson(reviews));
    }

    @Transactional(readOnly = true)
    public static Result getAllActivityReviews() {
        List<ActivityReview> reviews = TravelDiaryDAO.findAllActivityReviews();
        return ok(Json.toJson(reviews));
    }

    @Transactional(readOnly = true)
    public static Result getVacation(int id) {
        Vacation vacation = TravelDiaryDAO.getVacation(id);
        return ok(Json.toJson(vacation));
    }

    @Transactional(readOnly = true)
    public static Result getActivity(int id) {

        return ok(Json.toJson(TravelDiaryDAO.getActivity(id)));
    }

    @Transactional(readOnly = true)
    public static Result getKeyword(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getKeyword(id)));
    }

    @Transactional(readOnly = true)
    public static Result getLocation(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getLocation(id)));
    }

    @Transactional(readOnly = true)
    public static Result getRole(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getRole(id)));
    }

    @Transactional(readOnly = true)
    public static Result getUser(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getUser(id)));
    }

    @Transactional(readOnly = true)
    public static Result getActivityReview(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getActivityReview(id)));
    }

    @Transactional(readOnly = true)
    public static Result getVacationReview(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getVacationReview(id)));
    }

    @Transactional(readOnly = true)
    public static Result getAllVacationImages() {
        return ok(Json.toJson(TravelDiaryDAO.findAllVacationImages()));
    }

    @Transactional(readOnly = true)
    public static Result getVacationImage(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getVacationImage(id)));
    }

    @Transactional(readOnly = true)
    public static Result getAllActivityImages() {
        return ok(Json.toJson(TravelDiaryDAO.findAllActivityImages()));
    }

    @Transactional(readOnly = true)
    public static Result getActivityImage(int id) {
        return ok(Json.toJson(TravelDiaryDAO.getActivityImage(id)));
    }
}

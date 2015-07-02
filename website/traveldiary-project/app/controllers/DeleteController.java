package controllers;

import models.ActivityReview;
import models.VacationReview;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by albert on 02.07.15.
 */
public class DeleteController extends Controller {


    @Transactional
    public static Result deleteVacationReview(int id) {

        VacationReview review = JPA.em().find(VacationReview.class, id);

        String sessionEmail = session(LoginController.LOGIN_SESSION);

        if (review.getUser().getEmail().equals(sessionEmail)) {
            JPA.em().remove(review);
            return ok();
        } else {
            return unauthorized("Can't delete review you haven't created.");
        }
    }

    @Transactional
    public static Result deleteActivityReview(int id) {
        ActivityReview review = JPA.em().find(ActivityReview.class, id);

        String sessionEmail = session(LoginController.LOGIN_SESSION);

        if (review.getUser().getEmail().equals(sessionEmail)) {
            JPA.em().remove(review);
            return ok();
        } else {
            return unauthorized("Can't delete review you haven't created.");
        }
    }
}

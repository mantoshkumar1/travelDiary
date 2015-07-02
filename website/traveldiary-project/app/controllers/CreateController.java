package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import dao.InsertDAO;
import models.User;
import models.Vacation;
import models.VacationReview;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by albert on 02.07.15.
 */
public class CreateController extends Controller {

    @Transactional
    public static Result createVacationReview() {
        JsonNode json = request().body().asJson();
        int userId = json.findValue("userId").intValue();
        User creator = JPA.em().find(User.class, userId);

        String sessionMail = session(LoginController.LOGIN_SESSION);

        if (sessionMail.equals(creator.getEmail())) {
            VacationReview review = Json.fromJson(json, VacationReview.class);

            int vacationId = json.findValue("vacationId").intValue();


            Vacation vacation = JPA.em().find(Vacation.class, vacationId);


            review.setVacation(vacation);
            review.setUser(creator);

            JPA.em().persist(review);

            return ok(Json.toJson(review));
        } else {
            return unauthorized("Can't insert review.");
        }
    }
}

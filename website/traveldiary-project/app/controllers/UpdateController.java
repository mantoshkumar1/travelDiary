package controllers;

import com.fasterxml.jackson.databind.JsonNode;
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
public class UpdateController extends Controller {



    @Transactional
    public static Result updateVacationReview(int id) {
        JsonNode json = request().body().asJson();

        int userId = json.findValue("userId").intValue();
        User creator = JPA.em().find(User.class, userId);

        VacationReview reviewInDb = JPA.em().find(VacationReview.class, id);
        String sessionMail = session(LoginController.LOGIN_SESSION);

        if (sessionMail.equals(creator.getEmail()) &&
                reviewInDb.getUser() == creator) {
            int vacationId = json.findValue("vacationId").intValue();

            Vacation vacation = JPA.em().find(Vacation.class, vacationId);

            if (vacation == reviewInDb.getVacation()) {
                VacationReview updatedReview = Json.fromJson(json, VacationReview.class);

                reviewInDb.setDescription(updatedReview.getDescription());
                reviewInDb.setTitle(updatedReview.getTitle());
                reviewInDb.setDate(updatedReview.getDate());
                reviewInDb.setRating(updatedReview.getRating());

                JPA.em().merge(reviewInDb);

                return ok(Json.toJson(reviewInDb));
            }
        }

        return unauthorized("You're not authorized to update this");
    }
}


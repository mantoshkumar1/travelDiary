package controllers;

import dao.InsertDAO;
import models.Location;
import models.User;
import models.Vacation;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class VacationController extends Controller {

    @Transactional(readOnly = false)
    public static Result createVacation() {
        Vacation newVacation = Json.fromJson(request().body().asJson(), Vacation.class);
        InsertDAO.insertVacation(newVacation);
        return created(Json.toJson(newVacation));
    }
}


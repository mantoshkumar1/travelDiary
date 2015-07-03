package dao;

import models.Location;
import models.User;
import models.Vacation;
import models.VacationReview;
import play.db.jpa.JPA;

import javax.persistence.TypedQuery;

/**
 * Created by albert on 27.06.15.
 */
public class InsertDAO {

    public static void insertLocation(Location newLocation) {
        JPA.em().persist(newLocation);
    }

    public static void insertUser(User newUser) {
        JPA.em().persist(newUser);
    }

    public static void insertVacation(Vacation newVacation) {
        JPA.em().persist(newVacation);
    }
}

package controllers;

import dao.TravelDiaryDAO;
import models.User;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import util.Credentials;
import util.PasswordUtil;

public class LoginController extends Controller {

    public static final String LOGIN_SESSION = "user";

    @Transactional
    public static Result login() {
        Credentials credentials = Json.fromJson(request().body().asJson(), Credentials.class);

        User user = TravelDiaryDAO.getUserByMail(credentials.email);

        /**
         * Calculate the hash on the server side. If this is done on the client side
         * an adversary that has obtained the hash from the db can just login using the
         * hash. That defeats the purpose of hashing.
         */
        String providedPasswordHash = PasswordUtil.calculateHashString(credentials.password);

        if (user != null &&
                user.getPasswordHash().equals(PasswordUtil.calculateHashString(credentials.password))) {
            // Success. Create new session
            session(LOGIN_SESSION, credentials.email);

            // Return user
            return ok(Json.toJson(user));
        } else {
            // Fail
            return unauthorized("Oops, invalid email/password");
        }
    }

    // Clears the session(client cookie)
    @Transactional
    public static Result logout() {
        session().clear();
        flash("success", "Successfully Logout");
        redirect("/");
        return ok("Bye");
    }
}

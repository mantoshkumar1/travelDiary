package controllers;

import play.db.jpa.Transactional;
import play.mvc.Controller;
import play.mvc.Result;

public class LoginController extends Controller {

    @Transactional
    public static Result login(String email, String passwordHash) {
        models.User user = null;

        user = models.User.findByEmail(email);
        System.out.println("inside login controller");
        System.out.println(user);
        if(user != null){
            if(passwordHash == user.getPasswordHash()) {
                String temp =  user.getId()+ "";
                session("user", temp);
                //String userId = session("user");
                flash("success", "Welcome to your account");
                redirect("/");
                return ok("Welcome");
            }
        }
        return unauthorized("Oops, invalid email/password");
    }

    // Clears the session(client cookie)
    @Transactional
    public static Result logout() {
        session("user", null);
        flash("success", "Successfully Logout");
        redirect("/");
        return ok("Bye");
    }
}

package controllers;

import models.User;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by mk on 23.06.15.
 */
public class RegisterController extends Controller {

    //public static Result createUser(String username, String firstname, String lastname, String email, String passwordhash)

    @Transactional(readOnly = true)
    public static Result createUser() {
        User newUser = Json.fromJson(request().body().asJson(), User.class);
        newUser.save();
        System.out.println("hello"); //for debugging purpose...delete it later on
        return created(Json.toJson(newUser));
    }

    @Transactional(readOnly = true)
    public static Result getUser(long id) {
        User user = User.findById(id);
        return user == null ? notFound() : ok(Json.toJson(user));
    }

}


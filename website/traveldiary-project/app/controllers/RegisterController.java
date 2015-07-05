package controllers;

import dao.InsertDAO;
import models.Location;
import models.User;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import util.PasswordUtil;

import javax.persistence.EntityExistsException;

/**
 * Created by mk on 23.06.15.
 */
public class RegisterController extends Controller {

    @Transactional(readOnly = false)
    public static Result createUser() {
        User newUser = Json.fromJson(request().body().asJson(), User.class);

        String username = newUser.getUsername();
        boolean validUsername = false;
        try {
            User.findByUsername(username);
        }
        catch(Exception e) {
            validUsername = true;
        }

        if(!validUsername) {
            return forbidden("Username already exists!");
        }


        String email = newUser.getEmail();
        boolean validEmail = false;
        try {
            User.findByEmail(email);
        }
        catch(Exception e) {
            validEmail = true;
        }

        if(!validEmail) {
            return forbidden("Email already exists!");
        }

        // Convert plaintext password to hash
        newUser.setPasswordHash(PasswordUtil.calculateHashString(newUser.getPasswordHash()));

        try {
            InsertDAO.insertUser(newUser);
        } catch (EntityExistsException e) {
            return forbidden("User already exists!");
        }

        return created(Json.toJson(newUser));
    }

    @Transactional(readOnly = false)
    public static Result createLocation() {
        Location newLocation = Json.fromJson(request().body().asJson(), Location.class);

        InsertDAO.insertLocation(newLocation);

        return created(Json.toJson(newLocation));
    }
}


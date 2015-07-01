package controllers;

import play.mvc.Controller;

public class LoginController extends Controller {
    public static void login(String email, String password) {
        models.User user = null;
        user = models.User.findByEmail(email);
        if(user != null){
            if(password == user.getPasswordHash()) {
                String temp =  user.getId()+ "";
                session("user", temp);
                //String userId = session("user");
                redirect("/");
            }
        }
    }

    // Clears the session(client cookie)
    public static void logout(){
        session("user", null);
        redirect("/");
    }
}

package controllers;

import play.mvc.Controller;
import play.mvc.Result;


public class SearchController extends Controller {

    public static Result index() {
        return ok(views.html.main.render());
    }

}

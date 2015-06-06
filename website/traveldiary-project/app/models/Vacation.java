package models;

import play.*;
import play.mvc.*;

public class Vacation {

    private String name;
    private String description;
    private User creator;
    private Double budget;

    public Vacation(String name, String description, Double budget) {
        this.name = name;
        this.description = description;
        this.budget = budget;
    }

    public Double getBudget() {
        return budget;
    }

    public void setBudget(Double budget) {
        this.budget = budget;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
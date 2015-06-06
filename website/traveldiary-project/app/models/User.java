package models;

/**
 * Created by Rike on 06.06.2015.
 */
public class User {

    private String name;
    private Vacation[] vacations;

    public Vacation[] getVacations() {
        return vacations;
    }

    public void setVacations(Vacation[] vacations) {
        this.vacations = vacations;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}

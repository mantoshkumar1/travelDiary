package models;

/**
 * Created by Rike on 06.06.2015.
 */
public class User extends Account {

    private Vacation[] vacations;

    public User(String username, String firstName, String lastName, String email, String passwordHash, Vacation[] vacations) {
        super(username, firstName, lastName, email, passwordHash);
        this.vacations = vacations;
    }

    public Vacation[] getVacations() {
        return vacations;
    }

    public void setVacations(Vacation[] vacations) {
        this.vacations = vacations;
    }

}

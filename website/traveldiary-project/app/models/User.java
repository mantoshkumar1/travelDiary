package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
public class User extends Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private Vacation[] vacations;


    public User(String username, String firstName, String lastName, String email, String passwordHash, Vacation[] vacations) {
        super(username, firstName, lastName, email, passwordHash);
        this.vacations = vacations;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setVacations(Vacation[] vacations) {
        this.vacations = vacations;
    }

    public Vacation[] getVacations() {
        return vacations;
    }

}

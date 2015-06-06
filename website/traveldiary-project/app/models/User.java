package models;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Rike on 06.06.2015.
 */
//@Entity
public class User {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userId;
    private String username;
    private String firstName;
    private String lastName;
    private String email;
//    @OneToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="roleId")
    private Role role;
    private String passwordHash;
    private List<Vacation> vacationsList;
//    @OneToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="locationID")
    private Location location;

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    public String getFirstName() {
        return firstName;
    }


    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getLastName() {
        return lastName;
    }


    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getPasswordHash() {
        return passwordHash;
    }


    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long id) {
        this.userId = id;
    }

    public void setVacationsList(List<Vacation> vacationsList) {
        this.vacationsList = vacationsList;
    }

    public List<Vacation> getVacationsList() {
        return vacationsList;
    }
}
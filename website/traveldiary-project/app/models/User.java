package models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
public class User {

    @Id
    @GeneratedValue
    private int id;

    @Constraints.Required
    private String username;

    @Constraints.Required
    private String firstName;

    private String lastName;

    @Constraints.Required
    private String email;

    private String profilePicture;

    @Constraints.Required
    private String passwordHash;

    @OneToMany
    @JoinColumn(name = "creatorId")
    @JsonManagedReference
    private List<Activity> createdActivites;

    @OneToMany
    @JoinColumn(name = "creatorId")
    @JsonManagedReference
    private List<Vacation> createdVacations;

    @ManyToOne
    @JoinColumn(name = "locationId")
    private Location location;

    @Transient
    private long locationId;

    @ManyToOne
    @JoinColumn(name = "roleId")
    private Role role;

    @Transient
    private long roleId;

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

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

    public int getId() { return id; }

    public void setId(int id) {
        this.id = id;
    }

    public List<Activity> getCreatedActivites() {
        return createdActivites;
    }

    public void setCreatedActivites(List<Activity> createdActivites) {
        this.createdActivites = createdActivites;
    }

    public List<Vacation> getCreatedVacations() {
        return createdVacations;
    }

    public void setCreatedVacations(List<Vacation> createdVacations) {
        this.createdVacations = createdVacations;
    }

    public void save() {
        JPA.em().persist(this);
    }

    public static User findById(long id) {
        return JPA.em().find(User.class, id);
    }

    @PostLoad
    private void onLoad() {
        roleId = role.getId();
        locationId = location.getId();
    }
}

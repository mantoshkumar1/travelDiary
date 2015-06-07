package models;

import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.TypedQuery;
import java.util.List;

/**
 * Created by JOY on 6/6/2015.
 */

@Entity
public class Role {

    @Id
    @GeneratedValue
    private long id;
    @Constraints.Required
    private String roleName;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public static List<Role> findAll() {
        TypedQuery<Role> query = JPA.em().createQuery("SELECT m FROM Role m", Role.class);

        return query.getResultList();
    }
}

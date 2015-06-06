package models;

import play.data.validation.Constraints;

import javax.persistence.*;
import javax.persistence.GeneratedValue;

/**
 * Created by JOY on 6/6/2015.
 */

@Entity
public class Role {

    @Id
    @GeneratedValue
    private long roleId;
    @Constraints.Required
    private String roleName;

    public long getRoleId() {
        return roleId;
    }

    public void setRoleId(long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}

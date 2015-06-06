package models;

import javax.persistence.Entity;

/**
 * Created by JOY on 6/6/2015.
 */
//@Entity
public class Role {
    private long roleId;
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

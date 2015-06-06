package models;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
public class User extends Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private List<Vacation> vacationsList;
    @OneToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="LOCATION_ID")
    private Location locationId;

    public Location getLocationId() {
        return locationId;
    }

    public void setLocationId(Location locationId) {
        this.locationId = locationId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setVacationsList(List<Vacation> vacationsList) {
        this.vacationsList = vacationsList;
    }

    public List<Vacation> getVacationsList() {
        return vacationsList;
    }
}

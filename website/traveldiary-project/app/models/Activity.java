package models;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Rike on 06.06.2015.
 */

@Entity
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String description;
    @OneToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="LOCATION_ID")
    private Location location;
    private List<Review> reviewsList;

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

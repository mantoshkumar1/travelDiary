package models;

import play.data.validation.Constraints;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
public abstract class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Constraints.Required
    private String name;

    @Constraints.Required
    private String description;

    private double longitude;
    private double latitude;

    //@OneToOne(fetch= FetchType.LAZY)
    //@JoinColumn(name="addressId")
    //private Address address;

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

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

//    public Address getAddress() {
//        return address;
//    }
//
//    public void setAddress(Address address) {
//        this.address = address;
//    }
}
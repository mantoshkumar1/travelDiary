package models;

import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
public class Location {

    @Id
    @GeneratedValue
    private long id;

    @Constraints.Required
    private String name;

    @Constraints.Required
    private String description;

    private double longitude;
    private double latitude;
    private String address;
    private String googleMapsLink;

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGoogleMapsLink() {
        return googleMapsLink;
    }

    public void setGoogleMapsLink(String googleMapsLink) {
        this.googleMapsLink = googleMapsLink;
    }

    public static List<Location> findAll() {
        TypedQuery<Location> query = JPA.em().createQuery("SELECT m FROM Location m", Location.class);
        return query.getResultList();
    }
}
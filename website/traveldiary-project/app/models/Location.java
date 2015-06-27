package models;

import play.data.validation.Constraints;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Rike on 06.06.2015.
 */
@Entity
public class Location {

    @Id
    @GeneratedValue
    private int id;

    @Constraints.Required
    private String name;

    @Constraints.Required
    private String description;

    private double longitude;
    private double latitude;
    private String address;
    private String googleMapsLink;

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    //default values
    public Location(){
        this.name = "Mysore Palace";
        this.description = "Beautiful Laser show";
        this.longitude = 12;
        this.latitude = 76;
        this.address = "Mysore";
        this.googleMapsLink = "https://www.google.de/maps/dir/''/Mysore+Palace";
    }
}
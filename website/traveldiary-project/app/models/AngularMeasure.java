package models;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**
 * Created by Rike on 06.06.2015.
 */
public class AngularMeasure{

    private double latitude;
    private double longtitude;
    @OneToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="LOCATION_ID")
    private Location locationId;

    public Location getLocationId() {
        return locationId;
    }

    public void setLocationId(Location locationId) {
        this.locationId = locationId;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongtitude() {
        return longtitude;
    }

    public void setLongtitude(double longtitude) {
        this.longtitude = longtitude;
    }
}
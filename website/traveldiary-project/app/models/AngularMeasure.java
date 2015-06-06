package models;

/**
 * Created by Rike on 06.06.2015.
 */
public class AngularMeasure extends Location {

    private double latitude;
    private double longtitude;

    public AngularMeasure(String name, String description, double latitude, double longtitude) {
        super(name, description);
        this.latitude = latitude;
        this.longtitude = longtitude;
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

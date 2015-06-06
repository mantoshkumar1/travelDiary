package models;

/**
 * Created by Rike on 06.06.2015.
 */
public class Review {

    private String title;
    private String content;
    private EnumRating rating;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public EnumRating getRating() {
        return rating;
    }

    public void setRating(EnumRating rating) {
        this.rating = rating;
    }
}

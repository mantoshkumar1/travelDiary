package models;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Rike on 06.06.2015.
 */
//@Entity
public class Review {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private long reviewId;
    private String title;
    private String vacationReview;
    private String activityReview;
    private EnumRating rating;
//    @OneToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="activityId")
    private Activity activity;
//    @OneToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="vacationId")
    private Vacation vacation;
//    @OneToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="userId")
    private User user;
    private Date reviewDate;

    public String getActivityReview() {
        return activityReview;
    }

    public void setActivityReview(String activityReview) {
        this.activityReview = activityReview;
    }

    public String getVacationReview() {
        return vacationReview;
    }

    public void setVacationReview(String vacationReview) {
        this.vacationReview = vacationReview;
    }

    public long getReviewId() {
        return reviewId;
    }

    public void setReviewId(long reviewId) {
        this.reviewId = reviewId;
    }

    public Vacation getVacation() {
        return vacation;
    }

    public void setVacation(Vacation vacation) {
        this.vacation = vacation;
    }

    public Date getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(Date reviewDate) {
        this.reviewDate = reviewDate;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public EnumRating getRating() {
        return rating;
    }

    public void setRating(EnumRating rating) {
        this.rating = rating;
    }
}
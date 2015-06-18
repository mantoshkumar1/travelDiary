package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import play.data.validation.Constraints;
import play.db.jpa.JPA;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Vacation {

    @Id
    @GeneratedValue
    private long id;

    @Constraints.Required
    private String name;
    @Constraints.Required
    private String description;

    @ManyToOne
    @JoinColumn(name = "creatorId")
    @JsonBackReference
    private User creator;

    @ManyToMany
    @JoinTable(name = "VacationActivities",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "activityId", referencedColumnName = "id")})
    private List<Activity> activitiesList;

    @OneToMany
    @JoinTable
            (
                    name = "VacationReviews",
                    joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
                    inverseJoinColumns = {@JoinColumn(name = "reviewId", referencedColumnName = "id", unique = true)}
            )
    private List<Review> reviewsList;

    @Column(precision = 5, scale = 2)
    private BigDecimal budget;

    @ManyToOne
    @JoinColumn(name = "locationId")
    private Location locationId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;
    @Temporal(TemporalType.TIMESTAMP)
    private Date endDate;

    @ManyToMany
    @JoinTable(name = "VacationKeywords",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "keywordId", referencedColumnName = "id")})
    private List<Keyword> vacationKeywords;

    @OneToMany
    @JoinTable(name = "VacationImages",
            joinColumns = {@JoinColumn(name = "vacationId", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "imageId", referencedColumnName = "imageId", unique = true)})
    private List<Images> images;

    public List<Images> getImages() {
        return images;
    }

    public void setImages(List<Images> images) {
        this.images = images;
    }


    public List<Keyword> getVacationKeywords() {
        return vacationKeywords;
    }

    public void setVacationKeywords(List<Keyword> vacationKeywords) {
        this.vacationKeywords = vacationKeywords;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

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

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public BigDecimal getBudget() {
        return budget;
    }

    public void setBudget(BigDecimal budget) {
        this.budget = budget;
    }

    public List<Activity> getActivitiesList() {
        return activitiesList;
    }

    public void setActivitiesList(List<Activity> activitiesList) {
        this.activitiesList = activitiesList;
    }

    public List<Review> getReviewsList() {
        return reviewsList;
    }

    public void setReviewsList(List<Review> reviewsList) {
        this.reviewsList = reviewsList;
    }

    public static List<Vacation> findAll() {
        TypedQuery<Vacation> query = JPA.em().createQuery("SELECT m FROM Vacation m", Vacation.class);

        return query.getResultList();
    }

    public static List<Vacation> findVacationsFor(String[] keywords) {

        if (keywords == null) {
            return new ArrayList<Vacation>();
        }

        String keywordQuery;

        // Add filter for all keywords. Keywords referenced by :keyword<id>
        if (keywords.length > 0) {

            //commented by Chetan
            //keywordQuery = " AND (k.keyword LIKE :keyword0";
            //changed by Chetan to ckeck the new search
            keywordQuery = " k.keyword LIKE :keyword0";

            for (int i = 1; i < keywords.length; i++) {
                keywordQuery += " OR k.keyword LIKE :keyword" + i;
            }

            //commented by Chetan
            //keywordQuery += ")";
        } else {
            keywordQuery = "";
        }



        String query = "SELECT * from Vacation v inner JOIN" +
                "VacationKeywords vkw on v.id = vkw.vacationId" +
                "inner join Keyword k on vkw.keywordId = k.keywordId" +
                "inner join ActivityKeywords akw on k.keyworkId = akw.keywordId" +
                "where " + keywordQuery;

        System.out.println("*************************************");
        System.out.println(query);
        System.out.println("*************************************");

                /*"SELECT * FROM Vacation v WHERE " +
                "(SELECT COUNT(vkw.vacationId) FROM VacationKeywords vkw JOIN Keyword k on vkw.keywordId = k.id " +
                "WHERE v.id = vkw.vacationId" + keywordQuery + ") = " + keywords.length;*/


        Query searchQquery = JPA.em().createNativeQuery(query, Vacation.class);

        // Fill statement with corresponding keywords values
        for (int i = 0; i < keywords.length; i++) {
            if (keywords[i] != null) {
                searchQquery.setParameter("keyword" + i, keywords[i]);
            }
        }

        return (List<Vacation>) searchQquery.getResultList();
    }
}
package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import play.data.validation.Constraints;

import javax.persistence.*;

/**
 * Created by albert on 27.06.15.
 */
@Entity
@JsonIgnoreProperties({"vacation"})
public class VacationImage {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "vacationId")
    private Vacation vacation;

    @Constraints.Required
    private String url;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url
        ;
    }

    @Transient
    @JsonSerialize
    @JsonProperty("vacationId")
    public int getVacationId() {
        return vacation.getId();
    }

}

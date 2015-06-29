package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;

/**
 * Created by albert on 27.06.15.
 */
@Entity
@JsonIgnoreProperties({"vacation"})
public class VacationImage extends Image {

    @ManyToOne
    @JoinColumn(name = "vacationId")
    private Vacation vacation;

    @Transient
    @JsonSerialize
    @JsonProperty("vacationId")
    public int getVacationId() {
        return vacation.getId();
    }

}

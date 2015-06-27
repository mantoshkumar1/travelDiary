package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

/**
 * Created by albert on 27.06.15.
 */
@Entity
@JsonIgnoreProperties({"vacation"})
public class VacationReview extends Review {

    @ManyToOne
    @JoinColumn(name = "vacationId")
    private Vacation vacation;

    @Transient
    private long vacationId;


    public Vacation getVacation() {
        return vacation;
    }

    public void setVacation(Vacation vacation) {
        this.vacation = vacation;
    }

    @PostLoad
    private void onLoad() {
        vacationId = vacation.getId();
    }
}

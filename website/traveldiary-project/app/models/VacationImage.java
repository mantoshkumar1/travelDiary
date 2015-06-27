package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
    private int vacationId;

    @PostLoad
    private void onLoad() {
        vacationId = vacation.getId();
    }
}

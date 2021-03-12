package br.edu.ifpb.geocoder.model;

import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class InstituicaoPK implements Serializable {
    private int codIes;
    private String codMunicipio;
}

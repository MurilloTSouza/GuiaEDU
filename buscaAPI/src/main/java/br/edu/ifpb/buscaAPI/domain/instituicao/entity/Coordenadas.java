package br.edu.ifpb.buscaAPI.domain.instituicao.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Coordenadas {
    private Float latitude;
    private Float longitude;
}

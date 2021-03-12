package br.edu.ifpb.buscaAPI.domain.curso.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Data
@Embeddable
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ConceitoEnade {
    @Column(name = "conceito_enade_faixa")
    private Integer faixa;

    @Column(name = "conceito_enade_continuo")
    private Float continuo;

    @Column(name = "conceito_enade_ano")
    private Integer ano;
    private Integer inscritos;
    private Integer participantes;
}
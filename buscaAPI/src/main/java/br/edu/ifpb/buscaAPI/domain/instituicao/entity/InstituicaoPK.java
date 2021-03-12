package br.edu.ifpb.buscaAPI.domain.instituicao.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class InstituicaoPK implements Serializable {

    @Column(nullable = false)
    private Integer codIes;

    @Column(nullable = false)
    private String codMunicipio;
}

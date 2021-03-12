package br.edu.ifpb.buscaAPI.domain.curso.entity;

import br.edu.ifpb.buscaAPI.domain.instituicao.entity.Instituicao;
import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Curso {

    @Id
    private Integer codCurso;

    private Integer codArea;
    @Column(nullable = false)
    private String area;
    private String modalidade;

    @Embedded
    private ConceitoEnade conceitoEnade;

    @Embedded
    private ConceitoCurso conceitoCurso;

    @JsonIgnoreProperties("cursos") // avoid nest looping
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumns({
            @JoinColumn(name = "cod_ies", referencedColumnName = "codIes"),
            @JoinColumn(name = "cod_municipio", referencedColumnName = "codMunicipio")
    })
    private Instituicao instituicao;
}
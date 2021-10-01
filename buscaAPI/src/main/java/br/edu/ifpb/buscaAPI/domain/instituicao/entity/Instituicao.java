package br.edu.ifpb.buscaAPI.domain.instituicao.entity;

import br.edu.ifpb.buscaAPI.domain.curso.entity.Curso;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;

@Data
@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Instituicao {

    @EmbeddedId
    private InstituicaoPK id;

    @Column(name = "nome_ies", nullable = false)
    private String nome;
    @Column(name = "sigla_ies")
    private String sigla;

    private String organizacao;
    private String rede;
    private String administracao;

    @Embedded
    private Endereco endereco;

    private String telefones;
    private String emails;
    private String site;

    @Embedded
    private Coordenadas coordenadas;

    @JsonIgnoreProperties("instituicao") // avoid nest looping
    @OneToMany(mappedBy = "instituicao", fetch = FetchType.EAGER)
    private List<Curso> cursos;

    public List<String> getTelefones() {
        return telefones == null ? null : Arrays.asList(telefones.split(","));
    }
    public List<String> getEmails() {
        return emails == null ? null : Arrays.asList(emails.split(",", -1));
    }
}

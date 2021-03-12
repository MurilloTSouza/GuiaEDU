package br.edu.ifpb.geocoder.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Instituicao {

    @EmbeddedId
    private InstituicaoPK pk;

    @Column(name = "nome_ies", nullable = false)
    private String nome;
    @Column(name =  "sigla_ies")
    private String sigla;

    @Column(nullable = false)
    private String municipio;
    private String regiao;
    private String estado;
    private String siglaEstado;

    private String endereco;
    @Column(name = "numero_endereco")
    private String numero;
    @Column(name = "complemento_endereco")
    private String complemento;
    private String bairro;
    private String cep;

    private String telefones;
    private String emails;
    private String site;

    private Float latitude;
    private Float longitude;
    @Column(name = "local_coordenada")
    @Enumerated(EnumType.STRING)
    private LocalCoordenada localCoordenada;

    public String[] getTelefones(){ return telefones != null ? telefones.split(";") : null; }
    public String[] getEmails(){ return emails != null ? emails.split(";") : null; }
}

package br.edu.ifpb.buscaAPI.domain.instituicao.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Data
@Embeddable
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Endereco {
    private String regiao;
    private String estado;
    private String siglaEstado;

    @Column(nullable = false)
    private String municipio;
    private String endereco;
    private String bairro;
    @Column(name = "numero_endereco")
    private String numero;
    @Column(name = "complemento_endereco")
    private String complemento;
    private String cep;
}
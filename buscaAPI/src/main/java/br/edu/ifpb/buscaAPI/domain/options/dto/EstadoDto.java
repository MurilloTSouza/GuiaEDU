package br.edu.ifpb.buscaAPI.domain.options.dto;

import lombok.Data;

import java.util.List;

@Data
public class EstadoDto {
    private String estado;
    private List<String> municipios;

    public EstadoDto(String estado) {
        this.estado = estado;
    }
}

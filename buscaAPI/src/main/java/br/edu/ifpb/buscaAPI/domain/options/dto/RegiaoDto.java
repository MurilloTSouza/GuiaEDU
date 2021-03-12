package br.edu.ifpb.buscaAPI.domain.options.dto;

import lombok.Data;

import java.util.List;

@Data
public class RegiaoDto {
    private String regiao;
    private List<EstadoDto> estados;

    public RegiaoDto(String regiao) {
        this.regiao = regiao;
    }
}

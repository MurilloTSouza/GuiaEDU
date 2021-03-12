package br.edu.ifpb.buscaAPI.domain.options.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class AllDto {
    private List<RegiaoDto> regioes;
    private List<String> organizacoes;
    private List<String> redes;
    private List<String> administracoes;
    private List<String> areas;
    private List<String> modalidades;
}

package br.edu.ifpb.buscaAPI.domain.options.service;

import br.edu.ifpb.buscaAPI.domain.options.dto.AllDto;
import br.edu.ifpb.buscaAPI.domain.options.dto.EstadoDto;
import br.edu.ifpb.buscaAPI.domain.options.dto.RegiaoDto;
import br.edu.ifpb.buscaAPI.domain.options.repository.OptionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OptionsService {

    @Autowired
    OptionsRepository optRepo;

    // Regioes
    public List<String> findRegioes(){ return optRepo.findDistinctRegiao(); }
    public List<RegiaoDto> findRegioesDto(){ return mapToRegiao(findRegioes()); }

    // Estados
    public List<String> findEstados(){ return optRepo.findDistinctEstado(); }
    public List<String> findEstados(String regiao){ return optRepo.findDistinctEstado(regiao); }
    public List<EstadoDto> findEstadosDto(){ return mapToEstado(findEstados()); }
    public List<EstadoDto> findEstadosDto(String regiao){ return mapToEstado(findEstados(regiao)); }

    // Municipios
    public List<String> findMunicipios(){ return optRepo.findDistinctMunicipio(); }
    public List<String> findMunicipios(String estado){ return optRepo.findDistinctMunicipio(estado); }

    // Organizacao
    public List<String> findOrganizacoes(){ return optRepo.findDistinctOrganizacao(); }

    // Rede
    public List<String> findRedes(){ return optRepo.findDistinctRede(); }

    // Administracao
    public List<String> findAdministracoes(){ return optRepo.findDistinctAdministracao(); }

    // Area
    public List<String> findAreas(){ return optRepo.findDistinctArea(); }

    // Modalidade
    public List<String> findModalidades(){ return optRepo.findDistinctModalidade(); }

    // All
    public AllDto findAllDto(){
        return AllDto.builder()
                .regioes(findRegioesDto())
                .organizacoes(findOrganizacoes())
                .redes(findRedes())
                .administracoes(findAdministracoes())
                .areas(findAreas())
                .modalidades(findModalidades())
                .build();
    }

    // To Dto
    private List<RegiaoDto> mapToRegiao(List<String> regioes){
        return regioes.stream().map( regiao -> {
            RegiaoDto r = new RegiaoDto(regiao);
            r.setEstados(findEstadosDto(regiao));
            return r;
        }).collect(Collectors.toList());
    }
    private List<EstadoDto> mapToEstado(List<String> estados){
        return estados.stream().map( estado -> {
            EstadoDto e = new EstadoDto(estado);
            e.setMunicipios(findMunicipios(estado));
            return e;
        }).collect(Collectors.toList());
    }
}

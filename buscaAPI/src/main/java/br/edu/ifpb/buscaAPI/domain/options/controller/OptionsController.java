package br.edu.ifpb.buscaAPI.domain.options.controller;

import br.edu.ifpb.buscaAPI.domain.options.dto.AllDto;
import br.edu.ifpb.buscaAPI.domain.options.dto.EstadoDto;
import br.edu.ifpb.buscaAPI.domain.options.dto.RegiaoDto;
import br.edu.ifpb.buscaAPI.domain.options.service.OptionsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/options")
@Api("API Rest com informações sobre opções para cada campo.")
public class OptionsController {

    @Autowired
    OptionsService optionsService;

    // All Options
    @ApiOperation("Retorna lista com todas as opções para cada campo")
    @GetMapping(produces = "application/json")
    public ResponseEntity<AllDto> findAllDto(){
        return ResponseEntity.ok(optionsService.findAllDto());
    }

    // Regiao
    @ApiOperation("Retorna lista String de possiveis Regiões.")
    @GetMapping(value = "/regiao", produces = "application/json")
    public ResponseEntity<List<String>> findRegioes(){
        return ResponseEntity.ok(optionsService.findRegioes());
    }

    @ApiOperation("Retorna lista de Objetos de possíveis Regiões, Estados e Municipios.")
    @GetMapping(value = "/regiao/dto", produces = "application/json")
    public ResponseEntity<List<RegiaoDto>> findRegioesDto(){
        return ResponseEntity.ok(optionsService.findRegioesDto());
    }

    // Estado
    @ApiOperation("Retorna lista String de possiveis Estados.")
    @GetMapping(value = "/estado", produces = "application/json")
    public ResponseEntity<List<String>> findEstados(){
        return ResponseEntity.ok(optionsService.findEstados());
    }

    @ApiOperation("Retorna lista String de possiveis Estados de determinada Região.")
    @GetMapping(value = "/estado", params = "regiao", produces = "application/json")
    public ResponseEntity<List<String>> findEstados(
            @ApiParam(value = "Nome da Região", allowableValues = "norte,nordeste,centro oeste,sul,sudeste")
            @RequestParam String regiao){
        return ResponseEntity.ok(optionsService.findEstados(regiao));
    }

    @ApiOperation("Retorna lista de Objetos de possiveis Estados e Municipios.")
    @GetMapping(value = "/estado/dto", produces = "application/json")
    public ResponseEntity<List<EstadoDto>> findEstadosDto(){
        return ResponseEntity.ok(optionsService.findEstadosDto());
    }

    @ApiOperation("Retorna lista de Objetos de possiveis Estados e Municipios de determinada Região.")
    @GetMapping(value = "/estado/dto", params = "regiao", produces = "application/json")
    public ResponseEntity<List<EstadoDto>> findEstadosDto(
            @ApiParam(value = "Nome da Região", allowableValues = "norte,nordeste,centro oeste,sul,sudeste")
            @RequestParam String regiao){
        return ResponseEntity.ok(optionsService.findEstadosDto(regiao));
    }

    // Municipio
    @ApiOperation("Retorna lista de possiveis Municipios.")
    @GetMapping(value = "/municipio", produces = "application/json")
    public ResponseEntity<List<String>> findMunicipios(){
        return ResponseEntity.ok(optionsService.findMunicipios());
    }

    @ApiOperation("Retorna lista de possiveis Municipios de determinado Estado.")
    @GetMapping(value = "/municipio", params = "estado", produces = "application/json" )
    public ResponseEntity<List<String>> findMunicipios(
            @ApiParam(value = "Veja opções em api/options/estado")
            @RequestParam String estado){
        return ResponseEntity.ok(optionsService.findMunicipios(estado));
    }

    // Organizacao
    @ApiOperation("Retorna lista de possiveis Organizações.")
    @GetMapping(value = "/organizacao", produces = "application/json")
    public ResponseEntity<List<String>> findOrganizacoes(){
        return ResponseEntity.ok(optionsService.findOrganizacoes());
    }

    // Rede
    @ApiOperation("Retorna lista de possiveis Redes de ensino.")
    @GetMapping(value = "/rede", produces = "application/json")
    public ResponseEntity<List<String>> findRedes(){
        return ResponseEntity.ok(optionsService.findRedes());
    }

    // Administracao
    @ApiOperation("Retorna lista de possiveis Administrações.")
    @GetMapping(value = "/administracao", produces = "application/json")
    public ResponseEntity<List<String>> findAdministracoes(){
        return ResponseEntity.ok(optionsService.findAdministracoes());
    }

    // Area
    @ApiOperation("Retorna lista de possiveis Areas de curso.")
    @GetMapping(value = "/area", produces = "application/json")
    public ResponseEntity<List<String>> findAreas(){
        return ResponseEntity.ok(optionsService.findAreas());
    }

    // Modalidade
    @ApiOperation("Retorna lista de possiveis Modalidades de ensino.")
    @GetMapping(value = "/modalidade", produces = "application/json")
    public ResponseEntity<List<String>> findModalidades(){
        return ResponseEntity.ok(optionsService.findModalidades());
    }


}

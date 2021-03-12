package br.edu.ifpb.buscaAPI.domain.instituicao.controller;

import br.edu.ifpb.buscaAPI.domain.instituicao.entity.InstituicaoPK;
import br.edu.ifpb.buscaAPI.domain.instituicao.entity.Instituicao;
import br.edu.ifpb.buscaAPI.domain.instituicao.service.InstituicaoSerivce;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ies")
@Api("API Rest para busca de Instituição.")
public class InstituicaoController {

    @Autowired
    private InstituicaoSerivce iesService;

    @ApiOperation("Retorna Instituicao com determinado codIes e codMunicipio.")
    @GetMapping(value = "/{codIes}/{codMunicipio}", produces = "application/json")
    public ResponseEntity<Instituicao> findById(
            @ApiParam("Código da Instituição. (codIes)")
            @PathVariable Integer codIes,
            @ApiParam("Código do Municipio. (codMunicipio)")
            @PathVariable String codMunicipio){

        Optional<Instituicao> ies = iesService.findById(
                new InstituicaoPK(codIes, codMunicipio));

        if(ies.isPresent()) { return ResponseEntity.ok(ies.get()); }
        else { return ResponseEntity.notFound().build(); }
    }

    @ApiOperation("Retorna todas as Instituições.")
    @GetMapping(produces = "application/json")
    public ResponseEntity<List<Instituicao>> findAll(){
        return ResponseEntity.ok(iesService.findAll());
    }

    @ApiOperation("Retorna todas as Instituições com paginação.")
    @GetMapping(value="/page", produces = "application/json")
    public ResponseEntity<Page<Instituicao>> findAllPage(Pageable p){
        return ResponseEntity.ok(iesService.findAll(p));
    }
}
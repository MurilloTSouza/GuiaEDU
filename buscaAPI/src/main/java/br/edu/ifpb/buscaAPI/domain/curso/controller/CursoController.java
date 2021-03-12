package br.edu.ifpb.buscaAPI.domain.curso.controller;

import br.edu.ifpb.buscaAPI.domain.curso.entity.Curso;
import br.edu.ifpb.buscaAPI.domain.curso.service.CursoService;
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
@RequestMapping("/api/curso")
@Api("API Rest para busca de Cursos.")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @ApiOperation("Retorna Curso com determinado ID.")
    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<Curso> findById(
            @ApiParam("ID do Curso. (cod_curso)")
            @PathVariable Integer id ){
        Optional<Curso> curso = cursoService.findById(id);

        if(curso.isPresent()) { return ResponseEntity.ok(curso.get()); }
        else { return ResponseEntity.notFound().build(); }
    }

    @ApiOperation("Retorna todos os Cursos.")
    @GetMapping(produces = "application/json")
    public ResponseEntity<List<Curso>> findAll(){
        return ResponseEntity.ok(cursoService.findAll());
    }

    @ApiOperation("Retorna todos os Cursos com paginação.")
    @GetMapping(value="/page", produces = "application/json")
    public ResponseEntity<Page<Curso>> findAllPage(Pageable p){
        return ResponseEntity.ok(cursoService.findAll(p));
    }

}

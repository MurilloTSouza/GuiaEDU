package br.edu.ifpb.buscaAPI.domain.search.controller;

import br.edu.ifpb.buscaAPI.domain.curso.entity.Curso;
import br.edu.ifpb.buscaAPI.domain.curso.service.CursoService;
import br.edu.ifpb.buscaAPI.domain.instituicao.entity.Instituicao;
import br.edu.ifpb.buscaAPI.domain.instituicao.service.InstituicaoSerivce;
import io.swagger.annotations.*;
import net.kaczmarzyk.spring.data.jpa.domain.*;
import net.kaczmarzyk.spring.data.jpa.web.annotation.And;
import net.kaczmarzyk.spring.data.jpa.web.annotation.Spec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/search")
@Api(value = "API Rest com query de busca.")
public class SearchController {

    @Autowired private InstituicaoSerivce iesService;
    @Autowired private CursoService cursoService;

    @ApiImplicitParams({
            @ApiImplicitParam(name = "cod_ies", paramType = "query",  value = "Código da instituição."),
            @ApiImplicitParam(name = "cod_municipio", paramType = "query",  value = "Código do município."),
            @ApiImplicitParam(name = "nome", paramType = "query",  value = "Nome da instituiçao."),
            @ApiImplicitParam(name = "sigla", paramType = "query",  value = "Sigla da instituiçao."),

            @ApiImplicitParam(name = "regiao", paramType = "query",  allowableValues = "norte,nordeste,centro oeste,sul,sudeste"),
            @ApiImplicitParam(name = "estado", paramType = "query",  value = "Veja opções em api/options/estado"),
            @ApiImplicitParam(name = "municipio", paramType = "query",  value = "Veja opções em api/options/municipio."),

            @ApiImplicitParam(name = "organizacao", paramType = "query",  allowableValues = "faculdade,instituto,universidade,centro universitário,centro federal"),
            @ApiImplicitParam(name = "rede", paramType = "query",  allowableValues = "pública,privada,especial"),
            @ApiImplicitParam(name = "administracao", paramType = "query",  allowableValues = "municipal,federal,estadual,privada,especial")
    })
    @ApiOperation(value = "Fornece uma busca por Instituições baseado nos parâmetros de busca.")
    @GetMapping(path = "/ies", produces = "application/json")
    public ResponseEntity<List<Instituicao>> searchIes(
            @And({
                    @Spec(path = "id.codIes", params = "cod_ies", spec = Equal.class),
                    @Spec(path = "id.codMunicipio", params = "cod_municipio", spec = Equal.class),
                    @Spec(path = "nome", spec = LikeIgnoreCase.class),
                    @Spec(path = "sigla", spec = LikeIgnoreCase.class),

                    @Spec(path = "endereco.regiao", params = "regiao", spec = EqualIgnoreCase.class),
                    @Spec(path = "endereco.estado", params = "estado", spec = EqualIgnoreCase.class),
                    @Spec(path = "endereco.municipio", params = "municipio", spec = EqualIgnoreCase.class),

                    @Spec(path = "organizacao", spec = LikeIgnoreCase.class),
                    @Spec(path = "rede", spec = LikeIgnoreCase.class),
                    @Spec(path = "administracao", spec = LikeIgnoreCase.class)
            }) Specification<Instituicao> iesSpec){

        return ResponseEntity.ok(iesService.search(iesSpec));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "cod_ies", paramType = "query",  value = "Código da instituição."),
            @ApiImplicitParam(name = "cod_municipio", paramType = "query",  value = "Código do município."),
            @ApiImplicitParam(name = "nome", paramType = "query",  value = "Nome da instituiçao."),
            @ApiImplicitParam(name = "sigla", paramType = "query",  value = "Sigla da instituiçao."),

            @ApiImplicitParam(name = "regiao", paramType = "query",  allowableValues = "norte,nordeste,centro oeste,sul,sudeste"),
            @ApiImplicitParam(name = "estado", paramType = "query",  value = "Veja opções em api/options/estado"),
            @ApiImplicitParam(name = "municipio", paramType = "query",  value = "Veja opções em api/options/municipio."),

            @ApiImplicitParam(name = "organizacao", paramType = "query",  allowableValues = "faculdade,instituto,universidade,centro universitário,centro federal"),
            @ApiImplicitParam(name = "rede", paramType = "query",  allowableValues = "pública,privada,especial"),
            @ApiImplicitParam(name = "administracao", paramType = "query",  allowableValues = "municipal,federal,estadual,privada,especial")
    })
    @ApiOperation(value = "Fornece uma busca por Instituições baseado nos parâmetros de busca com paginação.")
    @GetMapping(path = "/ies/page", produces = "application/json")
    public ResponseEntity<Page<Instituicao>> searchIesPage(
            @And({
                    @Spec(path = "id.codIes", params = "cod_ies", spec = Equal.class),
                    @Spec(path = "id.codMunicipio", params = "cod_municipio", spec = Equal.class),
                    @Spec(path = "nome", spec = LikeIgnoreCase.class),
                    @Spec(path = "sigla", spec = LikeIgnoreCase.class),

                    @Spec(path = "endereco.regiao", params = "regiao", spec = EqualIgnoreCase.class),
                    @Spec(path = "endereco.estado", params = "estado", spec = EqualIgnoreCase.class),
                    @Spec(path = "endereco.municipio", params = "municipio", spec = EqualIgnoreCase.class),

                    @Spec(path = "organizacao", spec = LikeIgnoreCase.class),
                    @Spec(path = "rede", spec = LikeIgnoreCase.class),
                    @Spec(path = "administracao", spec = LikeIgnoreCase.class)
            }) Specification<Instituicao> iesSpec, Pageable p){

        return ResponseEntity.ok(iesService.search(iesSpec, p));
    }

    @ApiImplicitParams({
            // Curso
            @ApiImplicitParam(name = "cod_curso", paramType = "query",  value = "Código do curso."),
            @ApiImplicitParam(name = "area", paramType = "query",  value = "Veja opções em api/options/area"),
            @ApiImplicitParam(name = "modalidade", paramType = "query", allowableValues = "presencial, distância"),

            @ApiImplicitParam(name = "enade", paramType = "query",  value = "Retorna cursos com esse valor conceito Enade."),
            @ApiImplicitParam(name = "min_enade", paramType = "query",  value = "Retorna cursos com conceito Enade maior ou igual a esse valor"),
            @ApiImplicitParam(name = "max_enade", paramType = "query",  value = "Retorna cursos com conceito Enade menor ou igual a esse valor"),

            @ApiImplicitParam(name = "curso", paramType = "query",  value = "Retorna cursos com esse valor conceito Curso."),
            @ApiImplicitParam(name = "min_curso", paramType = "query",  value = "Retorna cursos com conceito Curso maior ou igual a esse valor"),
            @ApiImplicitParam(name = "max_curso", paramType = "query",  value = "Retorna cursos com conceito Curso menor ou igual a esse valor"),

            // Instituicao
            @ApiImplicitParam(name = "cod_ies", paramType = "query",  value = "Código da instituição."),
            @ApiImplicitParam(name = "cod_municipio", paramType = "query",  value = "Código do município."),
            @ApiImplicitParam(name = "nome", paramType = "query",  value = "Nome da instituiçao."),
            @ApiImplicitParam(name = "sigla", paramType = "query",  value = "Sigla da instituiçao."),

            @ApiImplicitParam(name = "regiao", paramType = "query",  allowableValues = "norte,nordeste,centro oeste,sul,sudeste"),
            @ApiImplicitParam(name = "estado", paramType = "query",  value = "Veja opções em api/options/estado"),
            @ApiImplicitParam(name = "municipio", paramType = "query",  value = "Veja opções em api/options/municipio."),

            @ApiImplicitParam(name = "organizacao", paramType = "query",  allowableValues = "faculdade,instituto,universidade,centro universitário,centro federal"),
            @ApiImplicitParam(name = "rede", paramType = "query",  allowableValues = "pública,privada,especial"),
            @ApiImplicitParam(name = "administracao", paramType = "query",  allowableValues = "municipal,federal,estadual,privada,especial")
    })
    @ApiOperation(value = "Fornece uma busca por Cursos baseado nos parâmetros de busca.")
    @GetMapping(path = "/curso", produces = "application/json")
    public ResponseEntity<List<Curso>> searchCurso(
            @And({
                    @Spec(path = "codCurso", params = "cod_curso", spec = Equal.class),
                    @Spec(path = "area", spec = Equal.class),
                    @Spec(path = "modalidade", spec = LikeIgnoreCase.class),

                    @Spec(path = "conceitoEnade.faixa", params = "enade", spec = Equal.class),
                    @Spec(path = "conceitoEnade.faixa", params = "min_enade", spec = GreaterThanOrEqual.class),
                    @Spec(path = "conceitoEnade.faixa", params = "max_enade", spec = LessThanOrEqual.class),

                    @Spec(path = "conceitoCurso.faixa", params = "curso", spec = Equal.class),
                    @Spec(path = "conceitoCurso.faixa", params = "min_curso", spec = GreaterThanOrEqual.class),
                    @Spec(path = "conceitoCurso.faixa", params = "max_curso", spec = LessThanOrEqual.class),

                    // Instituicao params
                    @Spec(path = "instituicao.id.codIes", params = "cod_ies", spec = Equal.class),
                    @Spec(path = "instituicao.id.codMunicipio", params = "cod_municipio", spec = Equal.class),
                    @Spec(path = "instituicao.nome", params = "nome", spec = LikeIgnoreCase.class),
                    @Spec(path = "instituicao.sigla", params = "sigla", spec = LikeIgnoreCase.class),

                    @Spec(path = "instituicao.endereco.regiao", params = "regiao", spec = EqualIgnoreCase.class),
                    @Spec(path = "instituicao.endereco.estado", params = "estado", spec = EqualIgnoreCase.class),
                    @Spec(path = "instituicao.endereco.municipio", params = "municipio", spec = EqualIgnoreCase.class),

                    @Spec(path = "instituicao.organizacao", params = "organizacao", spec = LikeIgnoreCase.class),
                    @Spec(path = "instituicao.rede", params = "rede", spec = LikeIgnoreCase.class),
                    @Spec(path = "instituicao.administracao", params = "administracao", spec = LikeIgnoreCase.class)
            })
            Specification<Curso> cursoSpec){
        return ResponseEntity.ok(cursoService.search(cursoSpec));
    }

    @ApiImplicitParams({
            // Curso
            @ApiImplicitParam(name = "cod_curso", paramType = "query",  value = "Código do curso."),
            @ApiImplicitParam(name = "area", paramType = "query",  value = "Veja opções em api/options/area"),
            @ApiImplicitParam(name = "modalidade", paramType = "query", allowableValues = "presencial, distância"),

            @ApiImplicitParam(name = "enade", paramType = "query",  value = "Retorna cursos com esse valor conceito Enade."),
            @ApiImplicitParam(name = "min_enade", paramType = "query",  value = "Retorna cursos com conceito Enade maior ou igual a esse valor"),
            @ApiImplicitParam(name = "max_enade", paramType = "query",  value = "Retorna cursos com conceito Enade menor ou igual a esse valor"),

            @ApiImplicitParam(name = "curso", paramType = "query",  value = "Retorna cursos com esse valor conceito Curso."),
            @ApiImplicitParam(name = "min_curso", paramType = "query",  value = "Retorna cursos com conceito Curso maior ou igual a esse valor"),
            @ApiImplicitParam(name = "max_curso", paramType = "query",  value = "Retorna cursos com conceito Curso menor ou igual a esse valor"),

            // Instituicao
            @ApiImplicitParam(name = "cod_ies", paramType = "query",  value = "Código da instituição."),
            @ApiImplicitParam(name = "cod_municipio", paramType = "query",  value = "Código do município."),
            @ApiImplicitParam(name = "nome", paramType = "query",  value = "Nome da instituiçao."),
            @ApiImplicitParam(name = "sigla", paramType = "query",  value = "Sigla da instituiçao."),

            @ApiImplicitParam(name = "regiao", paramType = "query",  allowableValues = "norte,nordeste,centro oeste,sul,sudeste"),
            @ApiImplicitParam(name = "estado", paramType = "query",  value = "Veja opções em api/options/estado"),
            @ApiImplicitParam(name = "municipio", paramType = "query",  value = "Veja opções em api/options/municipio."),

            @ApiImplicitParam(name = "organizacao", paramType = "query",  allowableValues = "faculdade,instituto,universidade,centro universitário,centro federal"),
            @ApiImplicitParam(name = "rede", paramType = "query",  allowableValues = "pública,privada,especial"),
            @ApiImplicitParam(name = "administracao", paramType = "query",  allowableValues = "municipal,federal,estadual,privada,especial")
    })
    @ApiOperation(value = "Fornece uma busca por Cursos baseado nos parâmetros de busca com paginação.")
    @GetMapping(path = "/curso/page", produces = "application/json")
    public ResponseEntity<Page<Curso>> searchCursoPage(
            @And({
                    @Spec(path = "codCurso", params = "cod_curso", spec = Equal.class),
                    @Spec(path = "area", spec = Equal.class),
                    @Spec(path = "modalidade", spec = LikeIgnoreCase.class),

                    @Spec(path = "conceitoEnade.faixa", params = "enade", spec = Equal.class),
                    @Spec(path = "conceitoEnade.faixa", params = "min_enade", spec = GreaterThanOrEqual.class),
                    @Spec(path = "conceitoEnade.faixa", params = "max_enade", spec = LessThanOrEqual.class),

                    @Spec(path = "conceitoCurso.faixa", params = "curso", spec = Equal.class),
                    @Spec(path = "conceitoCurso.faixa", params = "min_curso", spec = GreaterThanOrEqual.class),
                    @Spec(path = "conceitoCurso.faixa", params = "max_curso", spec = LessThanOrEqual.class),

                    // Instituicao params
                    @Spec(path = "instituicao.id.codIes", params = "cod_ies", spec = Equal.class),
                    @Spec(path = "instituicao.id.codMunicipio", params = "cod_municipio", spec = Equal.class),
                    @Spec(path = "instituicao.nome", params = "nome", spec = LikeIgnoreCase.class),
                    @Spec(path = "instituicao.sigla", params = "sigla", spec = LikeIgnoreCase.class),

                    @Spec(path = "instituicao.endereco.regiao", params = "regiao", spec = EqualIgnoreCase.class),
                    @Spec(path = "instituicao.endereco.estado", params = "estado", spec = EqualIgnoreCase.class),
                    @Spec(path = "instituicao.endereco.municipio", params = "municipio", spec = EqualIgnoreCase.class),

                    @Spec(path = "instituicao.organizacao", params = "organizacao", spec = LikeIgnoreCase.class),
                    @Spec(path = "instituicao.rede", params = "rede", spec = LikeIgnoreCase.class),
                    @Spec(path = "instituicao.administracao", params = "adminsitracao", spec = LikeIgnoreCase.class)
            })
                    Specification<Curso> cursoSpec, Pageable p){
        return ResponseEntity.ok(cursoService.search(cursoSpec, p));
    }
}

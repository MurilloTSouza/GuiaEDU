package br.edu.ifpb.buscaAPI.domain.curso.repository;

import br.edu.ifpb.buscaAPI.domain.curso.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CursoRepository extends
        JpaRepository<Curso, Integer>,
        PagingAndSortingRepository<Curso, Integer>,
        JpaSpecificationExecutor<Curso> {
}

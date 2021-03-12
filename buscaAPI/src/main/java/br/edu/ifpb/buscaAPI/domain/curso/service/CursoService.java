package br.edu.ifpb.buscaAPI.domain.curso.service;

import br.edu.ifpb.buscaAPI.domain.curso.entity.Curso;
import br.edu.ifpb.buscaAPI.domain.curso.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepo;

    public Optional<Curso> findById(Integer id){ return cursoRepo.findById(id); }

    public List<Curso> findAll(){ return cursoRepo.findAll(); }

    public Page<Curso> findAll(Pageable p){ return cursoRepo.findAll(p); }

    public List<Curso> search(Specification<Curso> spec){ return cursoRepo.findAll(spec); }

    public Page<Curso> search(Specification<Curso> spec, Pageable p){ return cursoRepo.findAll(spec, p); }
}

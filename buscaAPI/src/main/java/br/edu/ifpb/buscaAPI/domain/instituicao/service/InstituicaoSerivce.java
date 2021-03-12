package br.edu.ifpb.buscaAPI.domain.instituicao.service;

import br.edu.ifpb.buscaAPI.domain.instituicao.repository.InstituicaoRepository;
import br.edu.ifpb.buscaAPI.domain.instituicao.entity.Instituicao;
import br.edu.ifpb.buscaAPI.domain.instituicao.entity.InstituicaoPK;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstituicaoSerivce {

    @Autowired
    private InstituicaoRepository iesRepo;

    public Optional<Instituicao> findById(InstituicaoPK id){ return iesRepo.findById(id); }

    public List<Instituicao> findAll(){ return iesRepo.findAll(); }

    public Page<Instituicao> findAll(Pageable p){ return iesRepo.findAll(p); }

    public List<Instituicao> search(Specification<Instituicao> spec){
        return iesRepo.findAll(spec);
    }

    public Page<Instituicao> search(Specification<Instituicao> spec, Pageable p){ return iesRepo.findAll(spec, p); }
}

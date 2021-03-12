package br.edu.ifpb.geocoder.service;

import br.edu.ifpb.geocoder.model.Instituicao;
import br.edu.ifpb.geocoder.repository.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstituicaoService {

    @Autowired
    private InstituicaoRepository iesRepository;

    public List<Instituicao> findAll(){ return iesRepository.findAll(); }

    public Instituicao save(Instituicao ies){ return iesRepository.save(ies); }
}

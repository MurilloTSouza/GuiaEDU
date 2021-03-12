package br.edu.ifpb.geocoder.repository;

import br.edu.ifpb.geocoder.model.Instituicao;
import br.edu.ifpb.geocoder.model.InstituicaoPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituicaoRepository extends JpaRepository<Instituicao, InstituicaoPK> { }

package br.edu.ifpb.buscaAPI.domain.instituicao.repository;

import br.edu.ifpb.buscaAPI.domain.instituicao.entity.Instituicao;
import br.edu.ifpb.buscaAPI.domain.instituicao.entity.InstituicaoPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituicaoRepository extends
        JpaRepository<Instituicao, InstituicaoPK>,
        PagingAndSortingRepository<Instituicao, InstituicaoPK>,
        JpaSpecificationExecutor<Instituicao> {
}

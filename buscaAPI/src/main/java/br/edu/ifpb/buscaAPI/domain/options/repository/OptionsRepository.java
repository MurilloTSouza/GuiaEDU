package br.edu.ifpb.buscaAPI.domain.options.repository;

import br.edu.ifpb.buscaAPI.domain.instituicao.entity.Instituicao;
import br.edu.ifpb.buscaAPI.domain.instituicao.entity.InstituicaoPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OptionsRepository extends JpaRepository<Instituicao, InstituicaoPK> {

    // Regiao
    @Query("SELECT DISTINCT endereco.regiao FROM Instituicao ORDER BY regiao")
    public List<String> findDistinctRegiao();

    // Estado
    @Query("SELECT DISTINCT endereco.estado FROM Instituicao ORDER BY estado")
    public List<String> findDistinctEstado();
    @Query("SELECT DISTINCT endereco.estado FROM Instituicao WHERE upper(regiao)=upper(?1) ORDER BY estado")
    public List<String> findDistinctEstado(String regiao);

    // Municipio
    @Query("SELECT DISTINCT endereco.municipio FROM Instituicao ORDER BY municipio")
    public List<String> findDistinctMunicipio();
    @Query("SELECT DISTINCT endereco.municipio FROM Instituicao WHERE upper(estado)=upper(?1) ORDER BY municipio")
    public List<String> findDistinctMunicipio(String estado);

    // Organizacao
    @Query("SELECT DISTINCT organizacao FROM Instituicao ORDER BY organizacao")
    public List<String> findDistinctOrganizacao();

    // Rede
    @Query("SELECT DISTINCT rede FROM Instituicao ORDER BY rede")
    public List<String> findDistinctRede();

    // Administracao
    @Query("SELECT DISTINCT administracao FROM Instituicao ORDER BY administracao")
    public List<String> findDistinctAdministracao();

    // Area
    @Query("SELECT DISTINCT area FROM Curso ORDER BY area")
    public List<String> findDistinctArea();

    // Modalidade
    @Query("SELECT DISTINCT modalidade FROM Curso ORDER BY modalidade")
    public List<String> findDistinctModalidade();
}

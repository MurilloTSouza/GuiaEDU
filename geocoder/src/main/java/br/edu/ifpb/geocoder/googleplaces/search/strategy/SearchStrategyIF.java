package br.edu.ifpb.geocoder.googleplaces.search.strategy;

import br.edu.ifpb.geocoder.model.Instituicao;

public interface SearchStrategyIF {
    String buildQuery(Instituicao ies);
}

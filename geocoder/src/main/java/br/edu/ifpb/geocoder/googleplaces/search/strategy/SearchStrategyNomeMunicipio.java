package br.edu.ifpb.geocoder.googleplaces.search.strategy;

import br.edu.ifpb.geocoder.model.Instituicao;

public class SearchStrategyNomeMunicipio implements SearchStrategyIF{

    @Override
    public String buildQuery(Instituicao ies) {
        StringBuilder queryBuilder = new StringBuilder();

        queryBuilder.append(ies.getNome());
        queryBuilder.append(" "+ies.getMunicipio());

        return queryBuilder.toString();
    }
}

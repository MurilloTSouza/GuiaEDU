package br.edu.ifpb.geocoder.googleplaces.search.strategy;

import br.edu.ifpb.geocoder.model.Instituicao;

public class SearchStrategyMunicipioEstado implements SearchStrategyIF{

    @Override
    public String buildQuery(Instituicao ies) {
        StringBuilder queryBuilder = new StringBuilder();

        queryBuilder.append(ies.getMunicipio());
        queryBuilder.append(" "+ies.getEstado());

        return queryBuilder.toString();
    }
}

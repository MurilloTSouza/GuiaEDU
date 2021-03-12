package br.edu.ifpb.geocoder.googleplaces.search.strategy;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum SearchStrategy {

    NOME_MUNICIPIO(new SearchStrategyNomeMunicipio()),
    MUNICIPIO_ESTADO(new SearchStrategyMunicipioEstado());

   @Getter
   private SearchStrategyIF strategy;
}

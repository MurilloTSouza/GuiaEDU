package br.edu.ifpb.geocoder.googleplaces.search;

import br.edu.ifpb.geocoder.googleplaces.GoogleKey;
import br.edu.ifpb.geocoder.googleplaces.search.strategy.SearchStrategy;
import br.edu.ifpb.geocoder.googleplaces.search.strategy.SearchStrategyIF;
import br.edu.ifpb.geocoder.model.Instituicao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class RequestSearch {

    private static final String URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&key={key}&input={query}&region=br&language=pt-BR";

    @Autowired private GoogleKey googleKey;
    @Autowired private RestTemplate restTemplate;

    public SearchResult get(Instituicao ies, SearchStrategy strategy){
        return restTemplate.getForObject(
                URL,
                SearchResult.class,
                googleKey.getKEY(),
                strategy.getStrategy().buildQuery(ies));
    }

    public List<String> getPlaceIds(Instituicao ies, SearchStrategy strategy){
        return get(ies, strategy)
                .getCandidates().stream()
                .map(place -> {return place.getPlace_id(); })
                .collect(Collectors.toList());
    }

    /*
    // search for place based on query
    public SearchResult get(String query){
        return restTemplate.getForObject(
                URL,
                SearchResult.class,
                KEY,
                query);
    }

    // return list of PlaceIds found with this query
    public List<String> getPlaceIds(String query){
        return get(query)
                .getCandidates().stream()
                .map(place -> {return place.getPlace_id(); })
                .collect(Collectors.toList());
    }

    // search for place building a query based on Instituicao
    public SearchResult get(Instituicao ies){
        return get(buildQuery(ies));
    }

    // get list of PlaceIds return for the search using Instituicao
    public List<String> getPlaceIds(Instituicao ies){
        return getPlaceIds(buildQuery(ies));
    }

    // build text query used to search the Instituicao
    // using nome + municipio
    public static String buildQuery(Instituicao ies){
        StringBuilder queryBuilder = new StringBuilder();

        queryBuilder.append(ies.getNome());
        queryBuilder.append(" "+ies.getMunicipio());

        return queryBuilder.toString();
    }
    */
}

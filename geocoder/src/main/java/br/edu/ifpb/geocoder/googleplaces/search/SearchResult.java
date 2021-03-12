package br.edu.ifpb.geocoder.googleplaces.search;

import br.edu.ifpb.geocoder.googleplaces.search.fields.PlaceId;
import lombok.Data;

import java.util.Arrays;
import java.util.List;

// Object used to map the JSON return from Google Places Search
@Data
public class SearchResult {
    private PlaceId[] candidates;

    public List<PlaceId> getCandidates(){ return Arrays.asList(candidates); }
}

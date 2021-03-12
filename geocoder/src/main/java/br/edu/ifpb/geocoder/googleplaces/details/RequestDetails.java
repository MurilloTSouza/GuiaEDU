package br.edu.ifpb.geocoder.googleplaces.details;

import br.edu.ifpb.geocoder.googleplaces.GoogleKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class RequestDetails {

    private static final String URL = "https://maps.googleapis.com/maps/api/place/details/json?key={key}&place_id={placeId}&language=pt-BR";
    @Autowired private GoogleKey googleKey;
    @Autowired private RestTemplate restTemplate;

    // Return the details of the locality based on the place id
    public DetailResult get(String placeId){
        return restTemplate.getForObject(
                URL,
                DetailResult.class,
                googleKey.getKEY(),
                placeId);
    }
}

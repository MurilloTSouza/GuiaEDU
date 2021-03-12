package br.edu.ifpb.geocoder.googleplaces;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GoogleKey {

    @Getter private final String KEY;

    @Autowired
    public GoogleKey(@Value("${custom.maps_api_key}") String key){
        this.KEY = key;
    }
}

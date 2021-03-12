package br.edu.ifpb.geocoder.googleplaces.details.fields;

import lombok.Data;

@Data
public class Result {
    private String place_id;
    private String name;

    private AddressComponent[] address_components;
    private String formatted_address;
    private String formatted_phone_number;

    private Geometry geometry;

    private String website;

    public AddressComponent getComponent(AddressType type){
        for(AddressComponent component : address_components){
            if (component.isType(type)) return component;
        }
        return null;
    }
}
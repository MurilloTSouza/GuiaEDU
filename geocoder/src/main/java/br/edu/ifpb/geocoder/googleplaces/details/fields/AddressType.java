package br.edu.ifpb.geocoder.googleplaces.details.fields;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

@AllArgsConstructor
public enum AddressType implements Serializable {

    administrative_area_level_1("administrative_area_level_1"),
    administrative_area_level_2("administrative_area_level_2"),
    administrative_area_level_3("administrative_area_level_3"),
    administrative_area_level_4("administrative_area_level_4"),
    administrative_area_level_5("administrative_area_level_5"),

    sublocality("sublocality"),
    sublocality_level_1("sublocality_level_1"),
    sublocality_level_2("sublocality_level_2"),
    sublocality_level_3("sublocality_level_3"),
    sublocality_level_4("sublocality_level_4"),
    sublocality_level_5("sublocality_level_5"),

    country("country"),
    route("route"),
    street_address("street_address"),
    street_number("street_number"),
    geocode("geocode"),

    post_box("post_box"),
    postal_code("postal_code"),
    postal_code_prefix("postal_code_prefix"),
    postal_code_suffix("postal_cod_suffix"),
    postal_town("postal_town"),
    room("room"),
    premise("premise"),
    subpremise("subpremise"),
    town_square("town_square"),

    archipelago("archipelado"),
    colloquial_area("colloquial_area"),
    locality("locality"),
    establishment("establishment"),
    finance("finance"),
    floor("floor"),
    food("food"),
    general_contractor("general_contractor"),
    health("health"),
    intersection("intersection"),
    landmark("landmark"),
    natural_feature("natural_feature"),
    neighborhood("neighborhood"),
    place_of_worship("place_of_worship"),
    plus_code("plus_code"),
    point_of_interest("point_of_interest"),
    political("political");

    @Getter private String value;
}
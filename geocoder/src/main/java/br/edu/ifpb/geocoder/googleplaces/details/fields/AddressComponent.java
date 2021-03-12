package br.edu.ifpb.geocoder.googleplaces.details.fields;

import lombok.Data;

@Data
public class AddressComponent {
    private String long_name;
    private String short_name;
    private AddressType[] types;

    public boolean isType(AddressType checkType){
        for( AddressType type : types){ if(type == checkType) return true; }
        return false;
    }
}

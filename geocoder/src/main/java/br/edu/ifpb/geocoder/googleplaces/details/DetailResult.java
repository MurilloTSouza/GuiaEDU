package br.edu.ifpb.geocoder.googleplaces.details;

import br.edu.ifpb.geocoder.googleplaces.details.fields.AddressComponent;
import br.edu.ifpb.geocoder.googleplaces.details.fields.AddressType;
import br.edu.ifpb.geocoder.googleplaces.details.fields.Result;
import lombok.Data;
import lombok.ToString;

// Object used to map the JSON return from Google Places Details
@Data
@ToString
public class DetailResult {
    private Result result;

    public String getBairro(){ return getComponent(AddressType.sublocality_level_1); }

    public String getMunicpio(){ return getComponent(AddressType.administrative_area_level_2); }

    public String getEstado(){ return getComponent(AddressType.administrative_area_level_1); }

    public float getLatitude(){ return  result.getGeometry().getLocation().getLat(); }
    public float getLongitude(){ return result.getGeometry().getLocation().getLng(); }

    public String getComponent(AddressType type){
        AddressComponent component = result.getComponent(type);
        return component != null ? component.getLong_name() : "" ;
    }
}

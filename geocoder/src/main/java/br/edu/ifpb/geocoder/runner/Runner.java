package br.edu.ifpb.geocoder.runner;

import br.edu.ifpb.geocoder.googleplaces.GoogleKey;
import br.edu.ifpb.geocoder.googleplaces.search.strategy.SearchStrategy;
import br.edu.ifpb.geocoder.model.Instituicao;
import br.edu.ifpb.geocoder.googleplaces.details.DetailResult;
import br.edu.ifpb.geocoder.googleplaces.details.RequestDetails;
import br.edu.ifpb.geocoder.googleplaces.search.RequestSearch;
import br.edu.ifpb.geocoder.model.LocalCoordenada;
import br.edu.ifpb.geocoder.service.InstituicaoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class Runner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(Runner.class);

    @Autowired private InstituicaoService iesService;
    @Autowired private RequestSearch requestSearch;
    @Autowired private RequestDetails requestDetails;

    @Autowired private GoogleKey googleKey;

    // Will run on the start of application
    @Override
    public void run(String... args) throws Exception {
        iesService.findAll().forEach(ies -> {
            // set coordinates of Instituicao and save it
            iesService.save(setCoordinates(ies));
        });

        logger.info("DONE!!!");
    }

    // Search for the Instituicao and set coordinates to it
    // if none has found, then search for the city (Municipio)
    private Instituicao setCoordinates(Instituicao ies){

        logger.info("Searching for "+SearchStrategy.NOME_MUNICIPIO.getStrategy().buildQuery(ies)+" ...");

        // Search for Instituicao using Nome and Municipio
        searchDetails(ies, SearchStrategy.NOME_MUNICIPIO).ifPresentOrElse(
                // if Instituicao has found, set the coordinates
                details -> {
                    logger.info("INSTITUICAO found, setting "+details);
                    setLatLong(ies, details, LocalCoordenada.INSTITUICAO);},

                // if no match has found, try to set coordinates of the city (Municipio)
                () -> {
                    logger.info("INSTITUICAO not found, trying MUNICIPIO instead...");
                    tryMunicipioCoordinates(ies); });

        return ies;
    }

    // Set coordinates of the city (Municipio) to Instituicao
    private Instituicao tryMunicipioCoordinates(Instituicao ies){
        logger.info("Searching for "+SearchStrategy.MUNICIPIO_ESTADO.getStrategy().buildQuery(ies)+" ...");
        searchDetails(ies, SearchStrategy.MUNICIPIO_ESTADO)
                .ifPresentOrElse(
                        // if found Municipio
                        details -> {
                            logger.info("MUNICIPIO found, setting "+details);
                            setLatLong(ies, details, LocalCoordenada.MUNICIPIO);
                        },

                        // if nothing found
                        () -> {
                            logger.info("MUNICIPIO not found, leaving INSTITUICAO with no coordinates.");
                            ies.setLocalCoordenada(LocalCoordenada.NOT_FOUND);
                        });
        return ies;
    }

    // Search for the details of a Instituicao
    // Return Detail if has found place, and the result and Instituicao have the same Municipio
    // Return empty if nothing has found, or result has not the same Municipio as Instituicao
    private Optional<DetailResult> searchDetails(Instituicao ies, SearchStrategy strategy){

        // search for place and return list of candidates Place Ids
        List<String> placeIds = requestSearch.getPlaceIds(ies, strategy);

        // return empty if none has found
        if(placeIds.isEmpty()) return Optional.empty();

        // if first result match Instituicao, set return it
        DetailResult firstResult = requestDetails.get(placeIds.get(0));
        if(firstResult.getMunicpio().equalsIgnoreCase(ies.getMunicipio())
            && firstResult.getEstado().equalsIgnoreCase(ies.getEstado())){
            return Optional.of(firstResult);
        }
        // if not the same Municipio, return empty
        else { return Optional.empty(); }
    }

    private Instituicao setLatLong(Instituicao ies, DetailResult details, LocalCoordenada local){
        ies.setLatitude(details.getLatitude());
        ies.setLongitude(details.getLongitude());
        ies.setLocalCoordenada(local);
        return ies;
    }
}

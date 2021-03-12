package br.edu.ifpb.buscaAPI.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket getDocket(){
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("br.edu.ifpb.buscaAPI"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(getApiInfo());
    }

    public ApiInfo getApiInfo(){
        ApiInfoBuilder apiInfoBuilder = new ApiInfoBuilder();
        apiInfoBuilder
                .title("Busca API")
                .description("API Rest utilizada para fornecer dados e buscas sobre as" +
                        " instituições de ensino superior brasileiras, seus cursos e" +
                        " os conceitos de curso e Enade. Mais detalhes em https://github.com/MurilloTSouza/IES-GeoCoder.")
                .version("1.0")
                .contact("murillo.tavares@academico.ifpb.edu.br");
        return apiInfoBuilder.build();
    }
}

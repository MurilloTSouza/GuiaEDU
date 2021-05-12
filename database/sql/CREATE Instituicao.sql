CREATE TABLE Instituicao
(
  cod_ies integer NOT NULL,
  cod_municipio character varying(8) NOT NULL,

  nome_ies character varying(100) NOT NULL,
  sigla_ies character varying(50),

  municipio character varying(100) NOT NULL,
  regiao character varying(20),
  estado character varying(30),
  sigla_estado character(2),

  organizacao character varying(100),
  rede character varying(20),
  administracao character varying(50),

  endereco character varying(200),
  numero_endereco character varying(30),
  complemento_endereco character varying(200),
  bairro character varying(100),
  cep character(8),

  telefones character varying(200),
  emails character varying(200),
  site character varying(200),

  latitude double precision,
  longitude double precision,
  local_coordenada character varying(20),

  CONSTRAINT pk_instituicao PRIMARY KEY (cod_ies, cod_municipio)
)

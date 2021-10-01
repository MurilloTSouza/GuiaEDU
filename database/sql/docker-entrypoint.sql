/* --- CREATING TABLES --- */
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
);

CREATE TABLE Curso
(
  cod_curso integer NOT NULL,
  cod_ies integer NOT NULL,

  cod_municipio character varying(8) NOT NULL,
  cod_area smallint,
  area character varying(100) NOT NULL,
  modalidade character varying(20),

  conceito_enade_faixa smallint,
  conceito_enade_continuo numeric(7,5),
  conceito_enade_ano smallint,
  inscritos smallint,
  participantes smallint,

  conceito_curso_faixa smallint,
  conceito_curso_continuo numeric(7,5),
  conceito_curso_ano smallint,

  CONSTRAINT pk_curso PRIMARY KEY (cod_curso),
  CONSTRAINT fk_instituicao FOREIGN KEY (cod_ies, cod_municipio)
      REFERENCES instituicao (cod_ies, cod_municipio)
);

/* --- POPULATING --- */
\COPY Instituicao FROM '/csv/instituicao.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8';
\COPY Curso FROM '/csv/curso.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8';


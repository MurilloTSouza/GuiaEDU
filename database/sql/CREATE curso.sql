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
)

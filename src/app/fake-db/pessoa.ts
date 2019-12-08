export class PessoaFakeDb {

    public static motoristas = [
        {
            "id": 1,
            "funcionario": {
                "id": 4,
                "nome": "Rogerio Silva",
                "tipoPessoa": "F",
                "cpfOuCnpj": "06160044001",
                "endereco": {
                    "id": 5,
                    "logradouro": {
                        "id": 6,
                        "cep": "09980243",
                        "nome": "Antônio Bispo José dos Reis",
                        "tipoLogradouro": {
                            "id": 3,
                            "nome": "Travessa"
                        },
                        "complemento": null,
                        "local": null,
                        "bairro": {
                            "id": 11,
                            "nome": "Serraria",
                            "cidade": {
                                "id": 13,
                                "nome": "Diadema",
                                "estado": {
                                    "id": 26,
                                    "sigla": "SP",
                                    "nome": "São Paulo",
                                    "pais": {
                                        "id": 3,
                                        "nome": "Brasil",
                                        "sigla": "BR"
                                    }
                                }
                            }
                        }
                    },
                    "numero": "1800",
                    "complemento": null
                },
                "telefones": [
                    {
                        "id": 8,
                        "tipo": "Celular",
                        "ddd": "11",
                        "numero": "996959630",
                        "enable": true
                    },
                    {
                        "id": 9,
                        "tipo": "Fixo",
                        "ddd": "11",
                        "numero": "37284341",
                        "enable": true
                    }
                ],
                "email": "rogerio.silva@outlook.com",
                "empresa": {
                    "id": 1,
                    "nome": "RGB Locações de Automóveis",
                    "tipoPessoa": "J",
                    "cpfOuCnpj": "72907711000155",
                    "endereco": {
                        "id": 1,
                        "logradouro": {
                            "id": 1,
                            "cep": "01308040",
                            "nome": "São Miguel",
                            "tipoLogradouro": {
                                "id": 1,
                                "nome": "Rua"
                            },
                            "complemento": null,
                            "local": null,
                            "bairro": {
                                "id": 6,
                                "nome": "Bela Vista",
                                "cidade": {
                                    "id": 8,
                                    "nome": "Sao Paulo",
                                    "estado": {
                                        "id": 26,
                                        "sigla": "SP",
                                        "nome": "São Paulo",
                                        "pais": {
                                            "id": 3,
                                            "nome": "Brasil",
                                            "sigla": "BR"
                                        }
                                    }
                                }
                            }
                        },
                        "numero": "201",
                        "complemento": null
                    },
                    "telefones": [
                        {
                            "id": 1,
                            "tipo": "Fixo",
                            "ddd": "11",
                            "numero": "41414141",
                            "enable": true
                        }
                    ],
                    "email": "sac@rgb.com",
                    "inscricaoEstadual": "775085384078",
                    "enable": true
                },
                "cargo": {
                    "id": 4,
                    "nome": "Motorista",
                    "enable": false
                },
                "usuario": {
                    "id": 5,
                    "username": "rogerio.silva",
                    "password": "$2a$10$zLCvjMZFutW1WcCV16LCfuYplD5ej.YHEEkV4mBA78nl1pgFpc3ku",
                    "roles": [
                        {
                            "id": 3,
                            "name": "ROLE_GUEST",
                            "privileges": [
                                {
                                    "id": 1,
                                    "name": "READ_PRIVILEGE"
                                }
                            ]
                        }
                    ],
                    "enable": true
                },
                "sexo": "M",
                "enable": true
            },
            "cnh": {
                "id": 1,
                "numero": "77378246452",
                "renovaEm": "2019-01-01",
                "categoria": "A"
            },
            "enable": false
        }
    ];
}

export class PessoaFakeDb {

    public static motoristas = [
        {
            "id": 1,
            "pessoa": {
                "id": 4,
                "nome": "Rogerio Silva",
                "tipoPessoa": "FISICA",
                "cpfOuCnpj": "06160044001",
                "enderecos": [
                    {
                        "id": 4,
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
                    }
                ],
                "contatos": [
                    {
                        "id": 4,
                        "tipo": "Pessoal",
                        "telefones": [
                            {
                                "id": 6,
                                "tipo": "Celular",
                                "ddd": "11",
                                "numero": "996959630",
                                "enable": true
                            },
                            {
                                "id": 7,
                                "tipo": "Fixo",
                                "ddd": "11",
                                "numero": "37284341",
                                "enable": true
                            }
                        ],
                        "email": "rogerio.silva@outlook.com"
                    }
                ],
                "foto": null,
                "cpfOuCnpjSemFormatacao": "06160044001"
            },
            "cnh": {
                "id": 1,
                "numero": "77378246452",
                "renovaEm": "2019-01-01",
                "categoria": "A"
            },
            "enable": true
        }
    ];
}

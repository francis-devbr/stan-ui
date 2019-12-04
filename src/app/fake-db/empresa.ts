export class EmpresaFakeDb {

    public static empresas = 
        {
            "id": 1,
            "pessoa": {
                "id": 1,
                "nome": "RGB Locações de Automóveis",
                "tipoPessoa": "JURIDICA",
                "cpfOuCnpj": "72907711000155",
                "enderecos": [
                    {
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
                    }
                ],
                "contatos": [
                    {
                        "id": 1,
                        "tipo": "Comercial",
                        "telefones": [
                            {
                                "id": 1,
                                "tipo": "Fixo",
                                "ddd": "11",
                                "numero": "41414141",
                                "enable": true
                            }
                        ],
                        "email": "sac@rgb.com"
                    }
                ],
                "foto": null,
                "cpfOuCnpjSemFormatacao": "72907711000155"
            },
            "inscricaoEstadual": "775085384078",
            "enable": true
        }
    ;

}

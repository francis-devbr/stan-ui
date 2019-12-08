export class FrotaFakeDb {
    public static veiculos = [
        {
            "id": 1,
            "placa": "XPT4122",
            "chassi": "fsgafsgasfg",
            "renavam": "sasasasasasas",
            "marca": {
                "id": 1,
                "nome": "Fiat",
                "modelos": [
                    {
                        "id": 1,
                        "nome": "Uno fire",
                        "enable": true
                    }
                ],
                "enable": true
            },
            "anoFabricacao": 2018,
            "anoModelo": 2018,
            "cor": "branco",
            "tipoCombustivel": {
                "id": 1,
                "nome": "Gasolina",
                "enable": true
            },
            "categoria": {
                "id": 1,
                "nome": "Passeio",
                "enable": true
            },
            "valorPago": 30000.00,
            "kmInicial": 0.00,
            "kmAtual": 10.00,
            "pneuTrocadoEm": null,
            "mesIpva": 1,
            "empresa": {
                "id": 2,
                "nome": "CLARO S.A.",
                "tipoPessoa": "J",
                "cpfOuCnpj": "40432544082950",
                "endereco": {
                    "id": 2,
                    "logradouro": {
                        "id": 5,
                        "cep": "09990104",
                        "nome": "Mãe Rainha",
                        "tipoLogradouro": {
                            "id": 4,
                            "nome": "Passagem"
                        },
                        "complemento": null,
                        "local": null,
                        "bairro": {
                            "id": 10,
                            "nome": "Serraria",
                            "cidade": {
                                "id": 12,
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
                    "numero": "171",
                    "complemento": null
                },
                "telefones": [
                    {
                        "id": 2,
                        "tipo": "Fixo",
                        "ddd": "11",
                        "numero": "66291009",
                        "enable": true
                    }
                ],
                "email": "ltorres@claro.com.br",
                "inscricaoEstadual": null,
                "enable": true
            },
            "enable": true
        }
    ];

    public static abastecimentos = [
        {
            'id': '1',
            'name': '',
            'handle': '',
            'categories': [
                'Canvas Print',
                'Nature'
            ],
            'tags': [
                'canvas-print',
                'nature'
            ],
            'featuredImageId': 1,
            'images': [
                {
                    'id': 0,
                    'url': 'assets/images/frota/abastecimento-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/abastecimento-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/frota/abastecimento-image-placeholder',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 9.309,
            'priceTaxIncl': 10.24,
            'taxRate': 10,
            'comparedPrice': 19.90,
            'quantity': 3,
            'sku': 'A445BV',
            'width': '22',
            'height': '24',
            'depth': '15',
            'weight': '3',
            'extraShippingFee': 3.00,
            'active': true
        },
    ];

    public static manutencoes = [
        {
            'id': '1',
            'name': '',
            'handle': '',            
            'categories': [
                'Canvas Print',
                'Nature'
            ],
            'tags': [
                'canvas-print',
                'nature'
            ],
            'featuredImageId': 1,
            'images': [
                {
                    'id': 0,
                    'url': 'assets/images/frota/manutencao-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/manutencao-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/frota/manutencao-image-placeholder',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 9.309,
            'priceTaxIncl': 10.24,
            'taxRate': 10,
            'comparedPrice': 19.90,
            'quantity': 3,
            'sku': 'A445BV',
            'width': '22',
            'height': '24',
            'depth': '15',
            'weight': '3',
            'extraShippingFee': 3.00,
            'active': true
        },

    ];

    public static viagens = [
        {
            'id': '1',
            'name': '',
            'handle': '',
            'categories': [
                'Canvas Print',
                'Nature'
            ],
            'tags': [
                'canvas-print',
                'nature'
            ],
            'featuredImageId': 1,
            'images': [
                {
                    'id': 0,
                    'url': 'assets/images/frota/manutencao-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/manutencao-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/frota/manutencao-image-placeholder',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 9.309,
            'priceTaxIncl': 10.24,
            'taxRate': 10,
            'comparedPrice': 19.90,
            'quantity': 3,
            'sku': 'A445BV',
            'width': '22',
            'height': '24',
            'depth': '15',
            'weight': '3',
            'extraShippingFee': 3.00,
            'active': true
        },
    ];

}

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
            "enable": true
        }
    ];
    
    public static abastecimentos = [
        {
            'id': '1',
            'name': 'A Walk Amongst Friends - Canvas Print',
            'handle': 'a-walk-amongst-friends-canvas-print',
            'description': 'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
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
                    'url': 'assets/images/frota/carros.jpg',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/carros.jpg',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/frota/carros.jpg',
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
        {
            'id': '2',
            'name': 'Braies Lake - Canvas Print',
            'handle': 'braies-lake-canvas-print',
            'description': 'Duis anim est non exercitation consequat. Ullamco ut ipsum dolore est elit est ea elit ad fugiat exercitation. Adipisicing eu ad sit culpa sint. Minim irure Lorem eiusmod minim nisi sit est consectetur.',
            'categories': [
                'Canvas Print',
                'Nature'
            ],
            'tags': [
                'canvas-print',
                'nature'
            ],
            'featuredImageId': 2,
            'images': [
                {
                    'id': 0,
                    'url': 'assets/images/frota/a-walk-amongst-friends.jpg',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/braies-lake.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 22.381,
            'priceTaxIncl': 24.62,
            'taxRate': 10,
            'comparedPrice': 29.90,
            'quantity': 92,
            'sku': 'A445BV',
            'width': '22',
            'height': '24',
            'depth': '15',
            'weight': '3',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '3',
            'name': 'Fall Glow - Canvas Print',
            'handle': 'fall-glow-canvas-print',
            'description': 'Sit ipsum esse eu consequat veniam sit consectetur consectetur anim. Ut Lorem dolor ullamco do. Laboris excepteur consectetur tempor nisi commodo amet deserunt duis.',
            'categories': [
                'Canvas Print',
                'Nature'
            ],
            'tags': [
                'canvas-print',
                'nature'
            ],
            'featuredImageId': 3,
            'images': [
                {
                    'id': 0,
                    'url': 'assets/images/frota/a-walk-amongst-friends.jpg',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/braies-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/frota/fall-glow.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 44.809,
            'priceTaxIncl': 49.29,
            'taxRate': 10,
            'comparedPrice': 59.90,
            'quantity': 60,
            'sku': 'A445BV',
            'width': '22',
            'height': '24',
            'depth': '15',
            'weight': '3',
            'extraShippingFee': 3.00,
            'active': true
        }
    ];

    public static manutencoes = [
        {
            'id': '1',
            'name': 'A Walk Amongst Friends - Canvas Print',
            'handle': 'a-walk-amongst-friends-canvas-print',
            'description': 'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
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
                    'url': 'assets/images/frota/carros.jpg',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/carros.jpg',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/frota/carros.jpg',
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
        {
            'id': '2',
            'name': 'Braies Lake - Canvas Print',
            'handle': 'braies-lake-canvas-print',
            'description': 'Duis anim est non exercitation consequat. Ullamco ut ipsum dolore est elit est ea elit ad fugiat exercitation. Adipisicing eu ad sit culpa sint. Minim irure Lorem eiusmod minim nisi sit est consectetur.',
            'categories': [
                'Canvas Print',
                'Nature'
            ],
            'tags': [
                'canvas-print',
                'nature'
            ],
            'featuredImageId': 2,
            'images': [
                {
                    'id': 0,
                    'url': 'assets/images/frota/a-walk-amongst-friends.jpg',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/braies-lake.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 22.381,
            'priceTaxIncl': 24.62,
            'taxRate': 10,
            'comparedPrice': 29.90,
            'quantity': 92,
            'sku': 'A445BV',
            'width': '22',
            'height': '24',
            'depth': '15',
            'weight': '3',
            'extraShippingFee': 3.00,
            'active': true
        },
        {
            'id': '3',
            'name': 'Fall Glow - Canvas Print',
            'handle': 'fall-glow-canvas-print',
            'description': 'Sit ipsum esse eu consequat veniam sit consectetur consectetur anim. Ut Lorem dolor ullamco do. Laboris excepteur consectetur tempor nisi commodo amet deserunt duis.',
            'categories': [
                'Canvas Print',
                'Nature'
            ],
            'tags': [
                'canvas-print',
                'nature'
            ],
            'featuredImageId': 3,
            'images': [
                {
                    'id': 0,
                    'url': 'assets/images/frota/a-walk-amongst-friends.jpg',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/braies-lake.jpg',
                    'type': 'image'
                },
                {
                    'id': 2,
                    'url': 'assets/images/frota/fall-glow.jpg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl': 44.809,
            'priceTaxIncl': 49.29,
            'taxRate': 10,
            'comparedPrice': 59.90,
            'quantity': 60,
            'sku': 'A445BV',
            'width': '22',
            'height': '24',
            'depth': '15',
            'weight': '3',
            'extraShippingFee': 3.00,
            'active': true
        }
    ];

}

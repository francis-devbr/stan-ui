export class FrotaFakeDb {
    public static veiculos = [
        {
            "id": 1,
            "placa": "XPT4122",
            "handle": "fsgafsgasfg",
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
            "enable": true
        },
        {
            "id": 2,
            "placa": "DPT4123",
            "handle": "dsgafsgasfg",
            "chassi": "dsgafsgasfg",
            "renavam": "dasasasasasas",
            "marca": {
                "id": 1,
                "nome": "Fiat",
                "modelos": [
                    {
                        "id": 2,
                        "nome": "Palio",
                        "enable": true
                    }
                ],
                "enable": true
            },
            "anoFabricacao": 2017,
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
            "enable": true,
            'images': [
                {
                    'id': 1,
                    'url': 'assets/images/frota/veiculo-image-placeholder',
                    'type': 'image'
                },
            ]
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
                    'url': 'assets/images/frota/abastecimento-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/abastecimento-image-placeholder',
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
                    'url': 'assets/images/frota/manutencao-image-placeholder',
                    'type': 'image'
                },
                {
                    'id': 1,
                    'url': 'assets/images/frota/manutencao-image-placeholder',
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

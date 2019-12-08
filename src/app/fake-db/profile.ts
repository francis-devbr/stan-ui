export class ProfileFakeDb
{
    public static about = {
        'general': {
            'gender'   : 'Masculino',
            'birthday' : '30 de Março, 1984',
            'locations': [
                'São Paulo, SP'
            ],
            'about'    : 'Sou programador de linguagens para internet há uns 19 anos, atualmente trabalho como desenvolvedor JAVA na Pim Dev e faço uns freelancers por ai. :)'
        },
        'work'   : {
            'occupation': 'Desenvolvedor',
            'skills'    : 'C#, PHP, Javascript, Angular, JS, HTML, CSS',
            'jobs'      : [
                {
                    'company': 'Pim Dev',
                    'date'   : ' - Novembro - 2019'
                },
                {
                    'company': 'Google',
                    'date'   : '2005 - 2018'
                }
            ]
        },
        'contact': {
            'tel'     : [
                '+55 11 99999 9999',
                '+55 11 2222 2222'
            ],
            'websites': [
                'stan.com'
            ],
            'emails'  : [
                'jose.alfredo@gmail.com',
                'jose.alfredo@outlook.com'
            ]
        }
    };
}

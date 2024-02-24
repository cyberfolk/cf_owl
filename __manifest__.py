# -*- coding: utf-8 -*-
# Powered by cyberfolk

{
    'name': 'Cyberfolk | Owl',
    'icon': 'cf_owl/static/description/icon.png',
    'license': 'AGPL-3',
    'sequence': -100,
    'version': '1.0.0',
    'category': 'Learning',
    'author': "cyberfolk",
    'summary': 'App per testare i rudimenti di OWL e QWeb',
    'description': "-",
    'depends': [
        'base',
        'web'
    ],

    'data': [
        'views/menu_root.xml',
        'views/menu_qweb.xml',
    ],

    'assets': {
        'web.assets_backend': [
            'cf_owl/static/src/menu_qweb/*',
        ],
    },

    'demo': [],
    'application': True,
    'installable': True,
    'auto_install': False,
}

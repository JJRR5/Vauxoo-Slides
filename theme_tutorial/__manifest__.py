{
    'name': "theme_tutorial",

    'summary': "A theme tutorial app",

    'description': "A theme tutorial app",

    'author': "Vauxoo",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Theme/Creative',
    'version': '11.0',

    # any module necessary for this one to work correctly
    'depends': [
        'website',
    ],

    # always loaded
    'data': [
        'views/assets.xml',
        'views/image_gallery.xml',
        'views/snippets.xml',
        'views/options.xml',
        'views/layout.xml',
        'views/pages.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
    ],
}

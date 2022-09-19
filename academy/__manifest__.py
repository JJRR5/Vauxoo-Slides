{
    'name': "academy",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Vauxoo",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '11.0',

    # any module necessary for this one to work correctly
    'depends': [
        'website_sale',
    ],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/assets.xml',
        'views/templates.xml',
        'views/academy_teachers_views.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}

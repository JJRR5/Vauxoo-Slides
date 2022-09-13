from odoo import http
from odoo.addons.website_sale.controllers.main import WebsiteSale


class Academy(http.Controller):

    @http.route('/academy/get_teachers/', auth='public', website=True)
    def get_teachers(self, **kw):
        """Renders all the teachers of the academy.teacher model

        :return: a render with all the teacher's info
        :rtype: <class 'odoo.http.Response'>
        """
        teachers = http.request.env['academy.teacher']
        return http.request.render('academy.index', {
            'teachers': teachers.search([])
        })

    @http.route('/academy/teacher/<name>', auth='public', website=True)
    def teacher(self, name):
        """Creates a h1 tag with a given name.

        :param name: the name that is going to be render
        :type name: str
        :return: a string with h1 tags
        :rtype: str
        """
        return '<h1>%s</h1>' % name

    @http.route('/academy/<int:id>', auth='public', website=True)
    def int_teacher(self, id):
        """Creates a h1 tag with a given id 

        :param id: the id number 
        :type id: int
        :return: the id and it's type
        :rtype: str
        """
        return '<h1>{%s} ({%s})</h1>' % (id, type(id).__name__)

    @http.route('/academy/render_teacher/<model("academy.teacher"):teacher>', auth='public', website=True)
    def render_teacher(self, teacher):
        """Renders a template with the a given teacher name or id

        :param teacher: the teacher of interest
        :type teacher: academy.teacher
        :return: a render with all the info of the biography teacher
        :rtype: <class 'odoo.http.Response'>
        """
        return http.request.render('academy.biography', {'person': teacher})

class WebsiteSaleInherit(WebsiteSale):

    @http.route()
    def shop(self, page=0, category=None, search='', ppg=False, **post):
        res = super().shop(page=page, category=category, search=search, ppg=ppg, **post)
        res.qcontext['search'] = 'ipad'
        res.qcontext['categories'] = res.qcontext['categories'].sorted(key= lambda product: product.name)
        return res
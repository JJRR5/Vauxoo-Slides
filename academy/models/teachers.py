from odoo import models, fields


class Teacher(models.Model):
    _name = 'academy.teacher'

    name = fields.Char()
    biography = fields.Html()

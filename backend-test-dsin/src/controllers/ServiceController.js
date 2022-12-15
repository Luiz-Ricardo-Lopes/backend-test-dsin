const knex = require('../database/knex')

class ServiceController {
    async create(request, response) {
        const { name, value } = request.body

        if(!name || !value ) {
            throw new AppError('Faltam campos obrigatórios para o serviço', 400)
        }

        await knex('services').insert({
           name,
           value
        })

        return response.status(201).json()
    }

    async index(request, response) {
        const services = await knex('services')
        
        return response.status(201).json(services)
    }

    async update(request, response) {
        const { value, id} = request.body

        await knex('services').update({ value }).where({ id })

        return response.status(201).json()
    }

    async delete(request, response) {
        const { id } = request.params
    
        await knex('services').where({ id }).delete()
    
        return response.status(201).json()
    }
}

module.exports = ServiceController
const knex = require('../database/knex')

class SchedulesController {

    async create(request, response) {
        const { date, id_service, name, phone } = request.body

        if(!date || !id_service || !name  || !phone) {
            throw new AppError('Faltam campos obrigatórios para o agendamento', 400)
        }

        //todo: Realizar 2 chamadas a primeira verifica se possui 2 agendamentos e sugere a alteração, a segunda efetua a inserção.
        // const sameWeekScheduledFinded = await this.findSameWeekSchedule(date, phone)

        await knex('schedules').insert({
            date,
            id_service,
            name,
            phone
        })

        return response.status(201).json({sameWeekScheduledFinded})
    }

    async index(request, response) {
        const { dateFrom, dateTo } = request.query

        
        if(!dateFrom || !dateTo) {
            throw new AppError('Faltam datas obrigatórias', 400)
        }

        const schedules = await knex('schedules')
                .select()
                .whereBetween('created_at', [dateFrom, dateTo])
                
        return response.status(201).json(schedules)
    }

    async update(request, response) {
        const { id_service, date , id} = request.body

        await knex('schedules').update({ id_service, date }).where({ id })

        return response.status(201).json()
    }

    //Verifica se possui agendamento para a mesma semana
    //retorna true ou false
    async findSameWeekSchedule(date, phone) {
        var lastDayOfweek = new Date();
        lastDayOfweek.setDate(date.getDate() + 7);

        const findSchedule = await knex('schedules')
            .select()
            .whereBetween('created_at', [date, lastDayOfweek])
            .andWhere('phone', '=', phone )

        if(!findSchedule) {
            return false;
        }

        return true;
    }

    async delete(request, response) {
        const { id } = request.params
    
        await knex('schedules').where({ id }).delete()
    
        return response.status(201).json()
    }
}

module.exports = SchedulesController
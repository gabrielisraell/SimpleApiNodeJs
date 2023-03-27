const ClientModel =  require('../Models/ClientModel');

class ClientController {
    async store(req, res) {
        const createClient = await ClientModel.create(req.body);
        return res.status(200).json(createClient);
    }

    async index(req, res) {
        const clients =  await ClientModel.find();
        return res.status(200).json(clients);
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const client = await ClientModel.findById(id);
            if(!client){
                return res.status(404).json({ message: 'client does not exist' });
            }
            return res.status(200).json(client);
        } catch(error) {
            return res.status(404).json({ message: 'Verify the client id'})
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await ClientModel.findByIdAndUpdate(id, req.body);
            
            return res.status(200).json({ message: 'Client updated'}) 
        } catch (error) {
            return res.status(404).json({ message: 'Failed to update client'})
        }
    }

    async destroy(req, res) {
     try {
        const {id} = req.params;
        const clientDeleted = await ClientModel.findByIdAndDelete(id);
        if(!clientDeleted) {
            return res.status(404).json({ message: 'Client does not exist'})
        }
        return res.status(200).json({message: 'Client deleted'})
     } catch (error) {
        return res.status(404).json({message: 'Failed to deleted client'})
     }
    }
}

module.exports = new ClientController();




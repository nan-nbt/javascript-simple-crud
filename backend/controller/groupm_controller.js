const GroupmService = require("../service/groupm_service");

const GroupmController = {
    getAll: async (req, res) => {
        const result = await GroupmService.getAll();
        res.json({ code: 200, status: "OK", data: result });
    },
    getOne: async (req, res) => {
        const result = await GroupmService.getOne(req.params.id);
        res.json({ code: 200, status: "OK", data: result });
    },
    create: async (req, res) => {
        console.log(req.body);
        const result = await GroupmService.create(req.body);
        res.json({ code: 201, status: "CREATED", data: result });
    },
    update: async (req, res) => {
        const result = await GroupmService.update(req.body, req.params.id);
        res.json({ code: 200, status: "OK", data: result });
    },
    delete: async (req, res) => {
        const result = await GroupmService.delete(req.params.id);
        res.json({ code: 204, status: "NO CONTENT", data: result });
    }
}

module.exports = GroupmController;
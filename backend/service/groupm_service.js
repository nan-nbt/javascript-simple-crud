const GroupmRepository = require("../repository/groupm_repository");
const GroupmModel = require("../model/groupm_model");
const crypto = require('crypto');

const GroupmService = {
    getAll: async () => {
        return await GroupmRepository.getAll();
    },
    getOne: async (id) => {
        return await GroupmRepository.getOne(id);
    },
    create: async (data) => {
        const groupm = new GroupmModel(crypto.randomUUID().replace(/-/g, "").slice(0, 22), data.groupm_no, data.groupm_name, data.groupm_name_en, data.enabled, data.create_user, Date.now(), data.update_user, Date.now());
        return await GroupmRepository.create(groupm);
    },
    update: async (data, id) => {
        let groupm = await GroupmRepository.getOne(id);
        if (groupm) {
            groupm.groupm_no = data.groupm_no;
            groupm.groupm_name = data.groupm_name;
            groupm.groupm_name_en = data.groupm_name_en;
            groupm.enabled = data.enabled;
            groupm.update_user = data.update_user;
            groupm.update_time = Date.now();
            return await GroupmRepository.update(groupm, id);
        }
    },
    delete: async (id) => {
        let groupm = await GroupmRepository.getOne(id);
        if (groupm) {                        
            return await GroupmRepository.delete(groupm.groupm_id);
        } 
    }
}

module.exports = GroupmService;
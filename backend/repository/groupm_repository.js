const pool = require("../config/db");

const GroupmRepository = {
    getAll: async () => {
        const result = await pool.query('SELECT * FROM basic_groupm ORDER BY groupm_no ASC;');
        return result.rows;
    },
    getOne: async (groupm_id) => {
        const result = await pool.query('SELECT * FROM basic_groupm WHERE groupm_id = $1;', [groupm_id]);
        return result.rows[0];
    },
    create: async (groupm) => {
        const result = await pool.query('INSERT INTO basic_groupm (groupm_id, groupm_no, groupm_name, groupm_name_en, enabled, create_user, create_time, update_user, update_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;', [groupm.groupm_id, groupm.groupm_no, groupm.groupm_name, groupm.groupm_name_en, groupm.enabled, groupm.create_user, Date.now(), groupm.update_user, Date.now()]);
        return result.rows[0];
    },
    update: async (groupm, groupm_id) => {
        const result = await pool.query('UPDATE basic_groupm SET groupm_no = $1, groupm_name = $2, groupm_name_en = $3, enabled = $4, update_user = $5, update_time = $6 WHERE groupm_id = $7 RETURNING *;', [groupm.groupm_no, groupm.groupm_name, groupm.groupm_name_en, groupm.enabled, groupm.update_user, Date.now(), groupm_id]);
        return result.rows[0];
    },
    delete: async (groupm_id) => {
        const result = await pool.query('DELETE FROM basic_groupm WHERE groupm_id = $1 RETURNING *;', [groupm_id]);
        return result.rows[0];
    }

}

module.exports = GroupmRepository;
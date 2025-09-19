class Groupm {
    constructor(groupm_id, groupm_no, groupm_name, groupm_name_en, enabled, create_user, create_time, update_user, update_time) {
        this.groupm_id = groupm_id;
        this.groupm_no = groupm_no;
        this.groupm_name = groupm_name;
        this.groupm_name_en = groupm_name_en;
        this.enabled = enabled;
        this.create_user = create_user;
        this.create_time = create_time;
        this.update_user = update_user;
        this.update_time = update_time;
    }
}

module.exports = Groupm;
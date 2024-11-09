const BaseController = require('../../common-services/BaseController');

module.exports = class UserController extends BaseController {
    constructor(req, res, next) {
        super(req, res);
        this.req = req;
        this.res = res;
        this.next = next;
    }
}
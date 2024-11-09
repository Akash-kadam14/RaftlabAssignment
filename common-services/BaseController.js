const logger = require('../core/logger');

module.exports = class BaseController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.logger = logger;
  }

  async sendresponse(result) {
    let data = {
      data: result,
    };
    if (data == null) {
      data = {};
    }
    const code = 200;
    data.code = code;
    data.error = false;
    return this.res.status(code).json(data);
  }

  async throwError(error) {
    let code = 400;
    let data = {};
    if (error != null) {
      let message = error.message || error.statusMessage;
      if (error.code === 11000) {
        message = 'Email/Mobile/userName already registered';
      }
      code = (error.code || error.statusCode) ? (error.code || error.statusCode) : 400;
      data = { code, message };
      if (error.retry) {
        data.retry = error.retry;
      }
      if (error.updateCode) {
        data.updateCode = error.updateCode;
        data.bookingsAffected = error.bookingsAffected;
      }
      data.error = true;
    }
    return this.res.status(code >= 100 && code < 600 ? code : 500).json(data);
  }
};

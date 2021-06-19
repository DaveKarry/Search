const basicInfo = require('./basicinfo');
const servers = require('./servers');
const components = require('./components');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
};
const basicInfo = require('./basicinfo');
const servers = require('./servers');
const components = require('./components');
const apis = require('./apis');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...apis
};
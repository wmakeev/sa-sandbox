/**
 * index.js
 * Date: 11.11.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var Sandbox = function(core, instanceId, options, moduleId) {
    var _props = {};

    // e.g. provide the Mediator methods 'on', 'emit', etc.
    core._mediator.installTo(this);

    // maybe you'd like to expose the instance ID
    this.id = instanceId;

    this.get = function (name, def) {
        return _props[name] === undefined
            ? def
            : _props[name];
    };

    this.set = function (name, value) {
        _props[name] = value;
    };

    return this;
};

module.exports = Sandbox;

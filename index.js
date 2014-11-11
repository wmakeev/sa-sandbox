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

Sandbox.prototype.setModuleInfo = function (info) {
    this.set('__module_info', info);
};

Sandbox.prototype.getModuleInfo = function (fieldName) {
    if (fieldName) {
        var info = this.get('__module_info');
        return info.__module_info
            ? info.__module_info[fieldName]
            : undefined;
    } else {

        return this.get('__module_info');
    }
};

module.exports = Sandbox;

(function(window, document) {

"use strict";

if (typeof window.jbmo != "undefined") {
    return;
}

var _addEvent = (function () {
    var _elem = document.createElement("div");
    if (_elem.addEventListener) {
        return function (event, elem, func) {
            elem.addEventListener(event, func, false);
        };
    } else if (_elem.attachEvent) {
        return function (event, elem, func) {
            elem.attachEvent("on" + event, func);
        };
    }
}());

var _classExp = function (className) {
    return new RegExp("(^|\\b)" + className + "(\\b|$)", "ig");
};

var _addClass = function (elem, className) {
    if (!elem.className.match(_classExp(className))) {
        elem.className += " "  + className;
    }
};

var _removeClass = function (elem, className) {
    elem.className = elem.className.replace(_classExp(className), "");
};

var _extend = function (object1, object2) {
    var _newObject = {};
    for (var i in object1) {
        if (typeof object2 != "undefined" && typeof object2[i] != "undefined") {
            _newObject[i] = object2[i];
        } else {
            _newObject[i] = object1[i];
        }
    }
    return _newObject;
};

var _domReady = function (func) {
    _addEvent("readystatechange", document, function () {
        if (document.readyState === "interactive") {
            func();
        }
    });
};

var _init = function () {
    // variables
    var _jbmos = [],
        _activeClassname = "actived",
        _noScrollClassname = "jbmo-noscroll",
        _modalIdName = "jbmo-modal",
        _containerClassname = "jbmo-container",
        _closeButtonClassname = "jbmo-close",
        _bodyElem = document.body,
        _modalElem = document.createElement("div");

    // create modal element
    _modalElem.id = _modalIdName;
    _bodyElem.appendChild(_modalElem);
    _modalElem.onclick = function (event) {
        if (event.target == _modalElem) {
            window.jbmoApi.closeAll(true);
        }
    };

    // what modal close need to do
    var _closeModal = function () {
        _removeClass(_modalElem, _activeClassname);
        _removeClass(_bodyElem, _noScrollClassname);
    };

    // get all actived modal containers
    var _getActivedContainers = function () {
        return document.querySelectorAll("." + _containerClassname + "." + _activeClassname);
    };

    var _defaultSetting = {
        closeButton: true,
        modalLock: false,
        onShow: null,
        onDestroy: null,
        onClose: null,
        containerClassname: ""
    };

    window.jbmo = function (content, setting) {
        var _containerElem = document.createElement("div"),
            _setting = _extend(_defaultSetting, setting),
            _api;

        // make a container
        _containerElem.className = _containerClassname + " " + _setting.containerClassname;
        if (typeof content == "string") {
            _containerElem.innerHTML = content;
        } else if (typeof content.tagName != "undefined") {
            _containerElem.appendChild(content);
        } else {
            throw new "jbmo: invalid content."
        }
        _modalElem.appendChild(_containerElem);

        if (_setting.closeButton) {
            var _closeButtonElem = document.createElement("div");
            _closeButtonElem.className = _closeButtonClassname;
            _closeButtonElem.onclick = function () {
                _close();
            };
            _containerElem.appendChild(_closeButtonElem);
        }

        var _show = function () {
            _addClass(_containerElem, _activeClassname);
            _addClass(_modalElem, _activeClassname);
            _addClass(_bodyElem, _noScrollClassname);

            if (typeof _setting.onShow == "function") {
                _setting.onShow();
            }
        };

        var _close = function (closeByModal) {
            if (_setting.modalLock && closeByModal) {
                return;
            }

            _removeClass(_containerElem, _activeClassname);

            if (typeof _setting.onClose == "function") {
                _setting.onClose();
            }

            if (!_getActivedContainers().length) {
                _closeModal();
            }
        };

        var _destroy = function () {
            var apiIndex = _jbmos.indexOf(_api);

            // remove from dom
            _modalElem.removeChild(_containerElem);

            // remove from caches
            if (apiIndex !== -1) {
                _jbmos.splice(apiIndex, 1);
            }

            if (typeof _setting.onDestroy == "function") {
                _setting.onDestroy();
            }

            if (!_getActivedContainers().length) {
                _closeModal();
            }
        };

        _api = {
            show: _show,
            close: _close,
            destroy: _destroy
        };

        _jbmos.push(_api);
        return _api;

    };

    window.jbmoApi = {
        getAll: function () {
            return _jbmos;
        },
        showAll: function () {
            for (var i = 0, len = _jbmos.length; i < len; i += 1) {
                _jbmos[i].show();
            }
        },
        closeAll: function (closeByModal) {
            for (var i = 0, len = _jbmos.length; i < len; i += 1) {
                _jbmos[i].close(closeByModal);
            }
        },
        destroy: function () {
            for (var i = 0, len = _jbmos.length; i < len; i += 1) {
                _jbmos[i].destroy();
            }
        }
    };
};

_domReady(_init);

}(window, document));
(function($, window, document) {

"use strict";

$(function () {

    if (typeof $.jbmo !== "undefined") {
        return;
    }

    // variables
    var _jbmos = [],
        _version = "0.0.1",
        _activeClassname = "actived",
        _noScrollClassname = "jbmo-noscroll",
        _modalIdName = "jbmo-modal",
        _containerClassname = "jbmo-container",
        _closeButtonClassname = "jbmo-close",
        _modalLockClassname = "jbmo-lock",
        _$body = $("body"),
        _$modal = $("#" + _modalIdName);

    // create modal element
    _$modal = $(document.createElement("div")).attr("id", _modalIdName).appendTo("body");
    _$modal.click(function (event) {
        if (event.target == _$modal.get(0)) {
            $.jbmo.closeAll(true);
        }
    });

    // what modal close need to do
    var _closeModal = function () {
        _$modal.removeClass(_activeClassname);
        _$body.removeClass(_noScrollClassname);
    };

    // get all actived modal containers
    var _getActivedContainers = function () {
        return _$modal.find("." + _containerClassname + "." + _activeClassname);
    };

    $.jbmo = {

        // create a modal, and return its api
        create: function (content, setting) {

            var _defaultSetting = {
                    closeButton: true,
                    modalLock: false,
                    onShow: null,
                    onDestroy: null,
                    onClose: null,
                    containerClassname: ""
                },
                _$container = null,
                _setting = $.extend(true, _defaultSetting, setting);

            // make a container
            var container = document.createElement("div");
            container.className = _containerClassname + " " + _setting.containerClassname;
            if (_setting.closeButton) {
                var closeButton = document.createElement("div");
                closeButton.className = _closeButtonClassname;
                container.appendChild(closeButton);
                $(closeButton).click(function () {
                    api.close();
                });
            }
            _$container = $(container).append(content);
            _$modal.append(_$container);

            var api = {

                show: function () {
                    _$container.addClass(_activeClassname);
                    _$modal.addClass(_activeClassname);
                    _$body.addClass(_noScrollClassname);

                    if (typeof _setting.onShow == "function") {
                        _setting.onShow();
                    }
                },

                close: function (closeByModal) {
                    if (_setting.modalLock && closeByModal) {
                        return;
                    }

                    _$container.removeClass(_activeClassname);
                    if (typeof _setting.onClose == "function") {
                        _setting.onClose();
                    }

                    if (!_getActivedContainers().length) {
                        _closeModal();
                    }
                },

                destroy: function () {
                    _$container.remove();
                    _jbmos = $.grep(_jbmos, function (_api, _index) {
                        return _api !== api;
                    });

                    if (typeof _setting.onDestroy == "function") {
                        _setting.onDestroy();
                    }

                    if (!_getActivedContainers().length) {
                        _closeModal();
                    }
                }

            };

            _jbmos.push(api);

            return api;
        },

        // get all api in jbmo modal list
        getAll: function () {
            return _jbmos;
        },

        // show all modal
        showAll: function () {
            $(_jbmos).each(function () {
                this.show();
            });
        },

        // close all modal
        closeAll: function (closeByModal) {
            $(_jbmos).each(function () {
                this.close(closeByModal);
            });
        },

        // destroy all modal
        destroyAll: function () {
            $(_jbmos).each(function () {
                this.destroy();
            });
        }

    };

});

}(jQuery, window, document));
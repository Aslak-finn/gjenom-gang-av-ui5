sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller,
	MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.Controller.App", {
        onShowHello : function () {
            // Show a native or vanilla JS alert
            MessageToast.show("Hello there")
         }
	});
});
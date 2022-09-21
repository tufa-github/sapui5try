sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("tufa.ui5.try.controller.main", {
		onPress : function () {
			MessageToast.show("Hello App!");
		}
	});

});
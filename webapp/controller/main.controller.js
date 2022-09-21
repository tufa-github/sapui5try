sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("tufa.ui5.try.controller.main", {
		
		onInit: function(){
			var myData = {
				person:{
					name:"tufa",
					age:16
				}
			};
			var oModel = new JSONModel(myData);
			this.getView().setModel(oModel);

			var i18nModel = new ResourceModel({
				bundleName:"tufa.ui5.try.i18n.i18n"

			});
			this.getView().setModel(i18nModel, "tufai18n");
		},

		onPress : function () {
			//MessageToast.show("Hello App!");

			var oBundle = this.getView().getModel("tufai18n").getResourceBundle();
			var sPerson = this.getView().getModel().getProperty("/person/name");

			MessageToast.show(oBundle.getText("helloMsg", [sPerson]));
		}
	});

});
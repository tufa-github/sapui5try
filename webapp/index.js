/*
sap.ui.define([
	"sap/m/Text",
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Text, Button, MessageToast) {
	"use strict";

	var myText = new Text({
		text: "Hello Tufa",
		tooltip: "Tooltip"
	});

	myText.placeAt("content");

	var myButton = new Button({
		text: "How are you",
		press: function(){
			MessageToast.show("Hello World!");
		}
	});

	myButton.placeAt("content1");

});
*/

sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "tufa.ui5.try.view.main"
	}).then(function(oView){
		oView.placeAt("content");
	})
});
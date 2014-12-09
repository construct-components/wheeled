/* Custom Element API */
(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

		// initialize
		this.view = new APP.Group.Component();
		this.$3d = false;

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {

		// render instead of initialize?
		//view = new APP.Group.Component();

	};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		this.view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {};

	document.registerElement('construct-component', {
		prototype: el
	});
}());

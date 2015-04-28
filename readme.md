# jbmo

### a simple modal plugin

### Step by Step

#### insert this html

```html
<!-- then load jbmo.js and jbmo.css -->
<script type="text/javascript" src="jbmo.js"></script>
<link type="text/css" rel="stylesheet" href="jbmo.css">
```

#### Then create jbmo object by string or dom element

```js

// create jbmo modal object
var jbmoObj = new jbmo("Just a string.");

// and show it on your screen
jbmoObj.show();

```

### Options

```js

var jbmoObj = new jbmo("LIKE A BOUSE", {

	// decide jbmo modal will generate a close button or not
	closeButton: true,

	// decide jbmo modal will close by click on black mask or not
	modalLock: false,

	// do something when jbmo modal is show
	onShow: function () {
		// do something...
	},

	// do something when jbmo modal is destroy
	onDestroy: function () {
		// do something...
	},

	// do something when jbmo modal is close
	onClose: function () {
		// do something...
	},

	// will add this classname on jbmo modal container
	containerClassname: "specific-classname"
});

```

### API

```js

// create a jbmo object, you can create by element or just string
var jbmoSTRING = new jbmo("I am a string...");
var jbmoELEMENT = new jbmo(document.getElementById("element-id"));

// use .show() to show modal
jbmoSTRING.show();

// use .close() to close modal
jbmoSTRING.close();

// use .destroy() to destroy jbmo object
jbmoSTRING.destroy();

```

### Methods

```js

// this will return all created jbmo objects
var allJbmos = jbmoApi.getAll();

// this will show all jbmo modal
jbmoApi.showAll();

// this will close all jbmo modal
jbmoApi.closeAll();

// this will destroy all jbmo modal
jbmoApi.destroyAll();

```

### LICENSE

MIT
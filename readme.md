# jbmo

### a super normal javascript modal plugin depend on jQuery

### Step by Step

#### insert this html

```html
<!-- first, load jQuery -->
<script type="text/javascript" src="//code.jquery.com/jquery-1.8.3.min.js"></script>

<!-- then load jbmo.js and jbmo.css -->
<script type="text/javascript" src="jbmo.js"></script>
<link type="text/css" rel="stylesheet" href="jbmo.css">
```

#### Then use jbmo LIKE A BOUSE

```js

// create jbmo modal object
var likeabouse = $.jbmo.create("LIKE A BOUSE");

// and show it on your screen LIKE A BOUSE
likeabouse.show();

```

### Options

```js

var likeabouse = $.jbmo.create("LIKE A BOUSE", {

	// decide jbmo modal will generate a close button or not
	closeButton: true,

	// decide jbmo modal will close by click on black mask or not
	modalLock: false,

	// do something when jbmo modal is show
	onShow: function () {
		// do something...
	},

	// do something when jbmo modal is close
	onClose: function () {
		// do something...
	},

	// will add this classname on jbmo modal container
	containerClassname: "LIKEABOUSE" 
});

```

### API

```js

// create a jbmo object by $.jbmo.create, you can create by element, string or jQuery object
var likeabouseSTRING = $.jbmo.create("I am a string... but LIKE A BOUSE");
var likeabouseELEMENT = $.jbmo.create(document.getElementById("like-a-bouse"));
var likeabouseJQUERY = $.jbmo.create($(".like-a-BOUSE"));

// use .show() to show modal
likeabouseSTRING.show();

// use .close() to close modal
likeabouseSTRING.close();

// use .destroy() to destroy jbmo object
likeabouseSTRING.destroy();

```

### Methods

```js

// this will return all created jbmo objects
var allJbmos = $.jbmo.getAll();

// this will show all jbmo modal
$.jbmo.showAll();

// this will close all jbmo modal
$.jbmo.closeAll();

// this will destroy all jbmo modal
$.jbmo.destroyAll();

```

### LICENSE

MIT
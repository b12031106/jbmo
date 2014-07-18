# jbmo

### a super normal modal plugin depend on jQuery

### Step by Step

#### insert this html

```html
<!-- first, load jQuery -->
<script type="text/javascript" src="//code.jquery.com/jquery-1.8.3.min.js"></script>

<!-- then load jbmo.js and jbmo.css -->
<script type="text/javascript" src="jbmo.js"></script>
<link type="text/css" rel="stylesheet" href="jbmo.css">
```

#### Then use jbmo like a boss

```js

// create jbmo modal object
var likeaboss = $.jbmo.create("I am like a BOSS!");

// and show it on your screen like a boss
likeaboss.show();

```

### Options

```js

var likeaboss = $.jbmo.create("LIKE A BOSS!", {

	// decide jbmo will generate a close button or not
	closeButton: true,

	// decide modal will close by click on black mask or not
	modalLock: false,

	// do something when modal is show
	onShow: function () {
		// do something...
	},

	// do something when modal is close
	onClose: function () {
		// do something...
	},

	// will add this classname on jbmo container
	containerClassname: "likeaboss" 
});

```

### API

```js

// create a jbmo object by $.jbmo.create, you can create by element, string or jQuery object
var likeabossSTRING = $.jbmo.create("I am a string");
var likeabossELEMENT = $.jbmo.create(document.getElementById("like-a-boss"));
var likeabossJQUERY = $.jbmo.create($(".like-a-BOSS"));

// use .show() to show modal
likeabossSTRING.show();

// use .close() to close modal
likeabossSTRING.close();

// use .destroy() to destroy jbmo object
likeabossSTRING.destroy();

```

### Methods

```js

// this will return all created jbmo objects
var allJbmos = $.jbmo.getAll();

// this will close all jbmo modal
$.jbmo.closeAll();

```

### LICENSE

MIT
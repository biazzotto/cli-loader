# cli-loader

### Install

```sh
npm install cli-loader [--save|--save-dev]
```

### Example

```javascript
var loader = require('cli-loader')();

loader.start();

setTimeout(function() {
	loader.stop();
}, 3000);
```
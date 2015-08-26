# cli-loader

### Example

```javascript
var loader = require('./cli-loader')();

loader.start();

setTimeout(function() {
	loader.stop();
}, 3000);
```
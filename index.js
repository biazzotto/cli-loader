'use strict';

module.exports = loader;

var lib = {
	'basic': {
		frames: ['-', '\\', '|', '/'],
		interval: 50
	},
	'basic-reverse': {
		frames: ['-', '/', '|', '\\'],
		interval: 50
	}
};

function loader(opts) {
	var id,
		spinner,
		stream = process.stdout;

	if (typeof opts === 'string') {
		spinner = lib[opts] || lib['basic'];
	} else if (typeof opts === 'object' && opts.frames) {
		spinner = {
			frames: opts.frames,
			interval: opts.interval || 50
		};
	} else {
		spinner = lib['basic'];
	}

	return {
		start: start,
		stop: stop
	};

	function start() {
		var frames = spinner.frames,
			len = frames.length,
			interval = spinner.interval,
			i = 0;

		clearInterval(id);
		id = setInterval(function() {
			stream.clearLine();
			stream.cursorTo(0);
			stream.write(frames[i++ % len]);
		}, interval);
	}

	function stop() {
		clearInterval(id);
	}
}

loader.spinner = function(name) {
	return lib[name];
};
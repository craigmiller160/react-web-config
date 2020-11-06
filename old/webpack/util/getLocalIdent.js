const loaderUtils = require('loader-utils');
const path = require('path');

const getLocalIdent = (loaderContext, localIdentName, localName, options) => {
	// get the project context
	const context = (!options.context) ? loaderContext.rootContext : options.context;

	// get the path and classname as key for generating hash
	const content = `${path.relative(context, loaderContext.resourcePath).replace(/\\/g, '/')}+${localName}`;

	return loaderUtils.interpolateName(loaderContext, localIdentName, { context, content })
		.replace(/\.module/, '') // 'module' is needed for file names but not classnames, remove it
		.replace(/\[local\]/gi, `${localName}_`); // insert the local classname
};

module.exports = getLocalIdent;
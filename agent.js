/**
 * The nodejs part of tools-agent bundle
 * build: npm run dist
 */
"use strict";

const ts = require('tools-ts')('tools:agent');
const pjson = require('./package.json');
const fs = require('tools-vfs');
const CAgent = require('tools-agent');
const { Msg } = require('tools-socket');
const crypto = require('crypto');

if (ts.isBrowser){
	if (!window.tools) window.tools = {};
	window.tools.ts = ts;
	window.tools.fs = fs;
	window.tools.pjson = pjson;
	window.tools.crypto = crypto;
	window.tools.CAgent = CAgent;
	window.tools.Msg = Msg;
}

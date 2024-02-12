/**
 * @fileoverview ESLint plugin for Lucide icons usage
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ["lucide"],
      rules: {
        "lucide/no-icon-without-suffix": "error",
      },
    },
  },
};

/**
 * @fileoverview Disallow the use of icons without the suffix icon
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the use of icons without the suffix icon",
      recommended: true,
      url: "https://github.com/BAERSERK/eslint-plugin-lucide/blob/main/docs/rules/no-icon-without-suffix.md",
    },
    messages: {
      noIconWithoutSuffix:
        "Import {{ iconName }}Icon instead of {{ iconName }}",
    },
    fixable: "code",
    schema: [],
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value !== "lucide-react") {
          return;
        }
        node.specifiers.forEach((specifier) => {
          const iconName = specifier.imported.name;
          if (!iconName.endsWith("Icon")) {
            context.report({
              node: specifier,
              messageId: "noIconWithoutSuffix",
              data: {
                iconName,
              },
            });
          }
        });
      },
    };
  },
};

module.exports = {
  ...require('../../.eslintrc.js'),
  plugins: ['react', 'react-refresh', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:storybook/recommended',
  ],

  settings: {
    react: {
      version: '18.2',
    },
  },

  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
  },
};

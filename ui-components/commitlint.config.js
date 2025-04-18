export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message.includes('[skip ci]')],
  rules: {
    'body-max-line-length': [2, 'always', 200],
    'header-max-length': [2, 'always', 200]
  }
}

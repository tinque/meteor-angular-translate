Package.describe({
  name: 'tinque:angular-translate',
  version: '2.7.0',
  summary: 'This is the Meteor package for angular-translate',
  git:'https://github.com/tinque/meteor-angular-translate.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('urigo:angular');
  api.addFiles('angular-translate.min.js','client');
});

Package.describe({
  name: 'tinque:angular-translate',
  version: '2.7.0',
  summary: 'This is the Meteor package for angular-translate',
  git:'https://github.com/tinque/meteor-angular-translate.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('urigo:angular@0.8.10');
  api.addFiles('angular-translate.min.js','client');
});

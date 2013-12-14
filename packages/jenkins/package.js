Package.describe({
  summary: "Jenkins package"
});

Package.on_use(function (api) {
  api.add_files('jenkins.js', 'server');
  if(api.export)
    api.export('Jenkins');
});
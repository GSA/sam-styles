const fractal = require("./fractal.js");
const logger = fractal.cli.console;
const server = fractal.web.server();

server.on("error", err => logger.error(err.message));

server.start().then(function() {
  const header = "Fractal web UI server is running!";
  const footer = fractal.cli.isInteractive()
    ? "Use the 'stop' command to stop the server."
    : "Use ^C to stop the server.";
  const serverUrl = server.urls.server;
  const format = str => logger.theme.format(str, "success", true);
  let body = "";

  if (!server.isSynced) {
    body += `Local URL: ${format(serverUrl)}`;
  } else {
    const syncUrls = server.urls.sync;
    body += `Local URL:      ${format(syncUrls.local)}`;
    body += `\nNetwork URL:    ${format(syncUrls.external)}`;
    body += `\nBrowserSync UI: ${format(syncUrls.ui)}`;
  }

  return logger.box(header, body, footer).persist();
});

server.stop();

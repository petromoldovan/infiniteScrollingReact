export default (config) => `
<!DOCTYPE html>
<html lang = "en">
<head>
<meta charset = "UTF-8">
<title>Starter Kit</title>
<style>
  html,
  body,
  #root {
    margin: 0;
    height: 100%
  }
</style>
</head>
<body>
  <div id="root"></div>
  <script>window.INITIAL_CONFIG = ${JSON.stringify(config)};</script>
  <script src="./bundle.js"></script>
</body>
</html>`


const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Demo App</title>
        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
          }

          .card {
            background: white;
            padding: 50px;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            max-width: 500px;
            width: 90%;
          }

          h1 {
            margin-bottom: 15px;
            font-size: 42px;
          }

          p {
            color: #666;
            font-size: 18px;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>Demo App</h1>
          <p>Welcome to my application!</p>
        </div>
      </body>
    </html>
  `);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Demo App running on http://localhost:${PORT}`);
  });
}

module.exports = app;

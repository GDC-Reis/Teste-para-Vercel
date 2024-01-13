const express = require ("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors());

mercadopago.configure({
    access_token: 'APP_USR-2020108294659983-090210-0010f305c80be4fce91f5af7a112533f-667808564',
    client_id: '2020108294659983',
    client_secret: 'ltP5D2x5tZ92CJFMK2YABofnF9CcYyW1'
})

app.get("/", function (req, res) {
    res.send("O servidor do mercado pago está funcionando.!")
})

  
  app.post("/create_preference", (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: "http://localhost:3000",
        failure: "http://localhost:3000",
        pending: "",
      },
      auto_return: "approved",
    };
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080")
  })
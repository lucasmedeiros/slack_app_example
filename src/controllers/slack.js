const slackService = require("../services/slack");

class SlackController {
  hello(req, res) {
    slackService.postTextMessage({
      channel: "geral", // Canal de sua preferência
      text: "Olá, mundo!",
    });

    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  }
}

module.exports = new SlackController();

const { WebClient } = require("@slack/web-api");

const BOT_USER_TOKEN = "YOUR-TOKEN-HERE";
const web = new WebClient(BOT_USER_TOKEN);

class SlackService {
  postTextMessage(messageArguments) {
    web.chat.postMessage(messageArguments);
  }
}

module.exports = new SlackService();

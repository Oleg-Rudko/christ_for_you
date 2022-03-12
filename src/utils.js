export const sendMessageToTelegram = async ({ name, phone }) => {
  const token = "5103252504:AAGtYJgteWfHXnd1U1qR8Tdv6bRZU1QDttg";
  const chatId = "-740335935";

  const request = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `---
      Ім'я: ${name}, Номер: ${phone}
---`,
        parse_mode: "HTML",
        disable_web_page_preview: false,
        disable_notification: false,
        reply_to_message_id: 0,
      }),
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return request;
};

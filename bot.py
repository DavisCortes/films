"""
Telegram Bot для Mini App — v2 с каталогом
Запуск: python bot.py
"""

import requests
import time

# ───────────────────────────────────────────
# НАСТРОЙКИ
# ───────────────────────────────────────────
TOKEN   = "8119360571:AAHVWuE8ieG3aaU2hL12TcFrfUnWhERjUIk"
APP_URL = "https://daviscortes.github.io/films/"
# ───────────────────────────────────────────

BASE = f"https://api.telegram.org/bot{TOKEN}"

# Каталог для inline-кнопок (синхронизируй с app.js)
SERIES = [
    {"id": "stranger-things", "title": "Stranger Things",     "emoji": "👾"},
    {"id": "wednesday",       "title": "Уэнсдэй",            "emoji": "🖤"},
    {"id": "squid-game",      "title": "Игра в кальмара",     "emoji": "🦑"},
    {"id": "dark",            "title": "Тьма (Dark)",         "emoji": "🌑"},
]


def api(method, **kwargs):
    """Вызов Telegram Bot API."""
    for attempt in range(3):
        try:
            r = requests.post(f"{BASE}/{method}", json=kwargs, timeout=35)
            return r.json()
        except Exception as e:
            if attempt == 2:
                print(f"⚠️  API ошибка ({method}): {e}")
                return {"ok": False}
            time.sleep(1)


def setup_menu_button():
    """Кнопка меню с Mini App."""
    result = api(
        "setChatMenuButton",
        menu_button={
            "type": "web_app",
            "text": "🎬 Кинотеатр",
            "web_app": {"url": APP_URL}
        }
    )
    print("✅ Кнопка меню установлена!" if result.get("result") else f"❌ Ошибка: {result}")


def set_commands():
    """Регистрация команд."""
    api("setMyCommands", commands=[
        {"command": "start",   "description": "Главное меню"},
        {"command": "catalog", "description": "Каталог сериалов"},
        {"command": "help",    "description": "Помощь"},
    ])
    print("✅ Команды зарегистрированы!")


def send_welcome(chat_id, first_name=""):
    """Приветствие с главным меню."""
    api(
        "sendMessage",
        chat_id=chat_id,
        text=(
            f"👋 Привет, {first_name}!\n\n"
            "🎬 Добро пожаловать в **Кинотеатр**!\n\n"
            "Выбери действие:"
        ),
        parse_mode="Markdown",
        reply_markup={
            "inline_keyboard": [
                [{"text": "🎬 Открыть кинотеатр", "web_app": {"url": APP_URL}}],
                [{"text": "📋 Каталог сериалов", "callback_data": "catalog"}],
                [{"text": "❓ Помощь", "callback_data": "help"}],
            ]
        }
    )


def send_catalog(chat_id, message_id=None):
    """Каталог сериалов (inline-кнопки)."""
    buttons = []
    for s in SERIES:
        buttons.append([{
            "text": f"{s['emoji']} {s['title']}",
            "callback_data": f"series:{s['id']}"
        }])
    buttons.append([{"text": "🎬 Открыть всё в приложении", "web_app": {"url": APP_URL}}])
    buttons.append([{"text": "« Назад", "callback_data": "main_menu"}])

    text = "📋 **Каталог сериалов**\n\nВыбери сериал:"

    if message_id:
        api("editMessageText", chat_id=chat_id, message_id=message_id,
            text=text, parse_mode="Markdown", reply_markup={"inline_keyboard": buttons})
    else:
        api("sendMessage", chat_id=chat_id,
            text=text, parse_mode="Markdown", reply_markup={"inline_keyboard": buttons})


def send_series_info(chat_id, series_id, message_id=None):
    """Информация о сериале."""
    s = next((x for x in SERIES if x["id"] == series_id), None)
    if not s:
        return

    # URL с параметром для открытия конкретного сериала
    series_url = f"{APP_URL}?series={series_id}"

    text = (
        f"{s['emoji']} **{s['title']}**\n\n"
        f"Нажми кнопку ниже чтобы смотреть:"
    )

    buttons = [
        [{"text": f"▶️ Смотреть {s['title']}", "web_app": {"url": series_url}}],
        [{"text": "« Назад к каталогу", "callback_data": "catalog"}],
    ]

    if message_id:
        api("editMessageText", chat_id=chat_id, message_id=message_id,
            text=text, parse_mode="Markdown", reply_markup={"inline_keyboard": buttons})
    else:
        api("sendMessage", chat_id=chat_id,
            text=text, parse_mode="Markdown", reply_markup={"inline_keyboard": buttons})


def send_help(chat_id, message_id=None):
    """Помощь."""
    text = (
        "❓ **Помощь**\n\n"
        "🎬 Это бот-кинотеатр для просмотра сериалов.\n\n"
        "**Команды:**\n"
        "/start — Главное меню\n"
        "/catalog — Каталог сериалов\n"
        "/help — Эта справка\n\n"
        "Нажми кнопку меню (снизу слева) чтобы открыть приложение."
    )
    buttons = [[{"text": "« Назад", "callback_data": "main_menu"}]]

    if message_id:
        api("editMessageText", chat_id=chat_id, message_id=message_id,
            text=text, parse_mode="Markdown", reply_markup={"inline_keyboard": buttons})
    else:
        api("sendMessage", chat_id=chat_id,
            text=text, parse_mode="Markdown")


def handle_callback(callback):
    """Обработка inline-кнопок."""
    data       = callback.get("data", "")
    chat_id    = callback["message"]["chat"]["id"]
    message_id = callback["message"]["message_id"]

    # Acknowledge callback
    api("answerCallbackQuery", callback_query_id=callback["id"])

    if data == "main_menu":
        first_name = callback["from"].get("first_name", "")
        api("editMessageText", chat_id=chat_id, message_id=message_id,
            text=(
                f"👋 Привет, {first_name}!\n\n"
                "🎬 Добро пожаловать в **Кинотеатр**!\n\n"
                "Выбери действие:"
            ),
            parse_mode="Markdown",
            reply_markup={
                "inline_keyboard": [
                    [{"text": "🎬 Открыть кинотеатр", "web_app": {"url": APP_URL}}],
                    [{"text": "📋 Каталог сериалов", "callback_data": "catalog"}],
                    [{"text": "❓ Помощь", "callback_data": "help"}],
                ]
            })
    elif data == "catalog":
        send_catalog(chat_id, message_id)
    elif data == "help":
        send_help(chat_id, message_id)
    elif data.startswith("series:"):
        series_id = data.split(":", 1)[1]
        send_series_info(chat_id, series_id, message_id)


def polling():
    """Запуск бота в режиме polling."""
    print("🤖 Бот запущен! Ctrl+C для остановки.\n")
    offset = 0

    while True:
        try:
            updates = api("getUpdates", offset=offset, timeout=30)
            if not updates.get("ok"):
                print("❌ Ошибка:", updates)
                time.sleep(5)
                continue

            for update in updates.get("result", []):
                offset = update["update_id"] + 1

                # Текстовые сообщения
                msg = update.get("message")
                if msg:
                    chat_id    = msg["chat"]["id"]
                    first_name = msg.get("from", {}).get("first_name", "")
                    text       = msg.get("text", "")
                    print(f"📨 {first_name} ({chat_id}): {text}")

                    if text == "/start":
                        send_welcome(chat_id, first_name)
                    elif text == "/catalog":
                        send_catalog(chat_id)
                    elif text == "/help":
                        send_help(chat_id)
                    else:
                        send_welcome(chat_id, first_name)

                # Callback от inline-кнопок
                cb = update.get("callback_query")
                if cb:
                    print(f"🔘 Callback от {cb['from'].get('first_name','')}: {cb.get('data','')}")
                    handle_callback(cb)

        except KeyboardInterrupt:
            print("\n👋 Бот остановлен.")
            break
        except Exception as e:
            print(f"⚠️  Ошибка: {e}")
            time.sleep(2)


if __name__ == "__main__":
    print("=" * 45)
    print("  🎬 Кинотеатр — Telegram Bot v2")
    print("=" * 45)

    me = api("getMe")
    if not me.get("ok"):
        print("❌ Неверный токен!")
        exit(1)

    bot_name = me["result"]["username"]
    print(f"✅ Бот: @{bot_name}")
    print(f"🌐 Mini App: {APP_URL}\n")

    setup_menu_button()
    set_commands()

    print(f"\n🔗 Открой: https://t.me/{bot_name}\n")
    polling()

    print(f"\n🔗 Відкрий бота в Telegram: https://t.me/{bot_name}\n")

    # Запускаємо
    polling()

//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://caesar:OLUSUNLE@cluster0.lmzgxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Gymo52/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/P37NWrz.jpeg";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "2348078112891";
global.owner = process.env.OWNER_NUMBER || "2348078112891";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9ya0xXUG1KMS9IY0UxSDI3WG1rc0l5OVM0VmV2Vm40RXdCMEFScWdXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXJJdXNuWHUxZ1ZaY0xsNDdRWnlubWRZZzZlQXZXenJVem5IMHNjU2ZXdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQmR0LzZCL0RvQ1RYWm82Mnhta1hoUisvaGdvL1dkb0JjM2pMOW5WaUh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqSWpqTFZPcjdLekIyN01mNklIVGxNbGVKN0ZXTFFlOERTcnZ0UHVhSkFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBdysxTHQrSmhDak1tNmwxeWhxc2x0NC9JK3QwYWFzaUFiV0lIVy81bVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZPcjBzRzNLWDY1RFRZWmJsRmxsY3NnYWFRdlBYS3FpcUx1RDFlZ1BJUzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhiaUtrSVVYQm9yM0pGWHNUYTA1ZmkxemhQNHJ0WDNHZ0FCc1RuSElHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmZLODIrQ2JFckFacTBnL3ZWa3VwZGVYWFpMTFA4WFNpOTdpeDN2TTBCaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlZc1M5MnprZXFxTUc5NU9OOGtxb01VTXlqOTVQaEYwZFhUZ0pURjdjL3VFTzZaRys4Ui9JelRwRlF3WGVZTml2WFhaT2p4c0JBcGhxaVFJV0VtYWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6ImpRRE0vR2YvU09EbGc5T29lUWlYSFd5alY4NUpGdnIzSzhUbkYzUnBKNEE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQThGMjZDNTFFOTI4Mzc5NDQ5QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NTM0NTY5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDc4MTEyODkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNTY1RjZENjAzMDZDQjFDM0FEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk1MzQ1NzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlctLXRIZ0ZzVGhxbzMzc2NKTGg4Z0EiLCJwaG9uZUlkIjoiMTU0YTVmZWYtYTllMi00MDMwLWJiM2UtYjdkZmY0NGRlYTFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIamJrV2xrS3Vpak5HVXRvb01xOFhnOW5LMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTUJtWk4vUjBVZWJVS3duY3BhVTRtUkxxY0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS1g2SktOOUwiLCJtZSI6eyJpZCI6IjIzNDgwNzgxMTI4OTE6NDJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2Flc2FyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZXZnUGNORU5xSCtMTUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtTHhrMjhpZFh1ckxLNWVCZ0U0NkkvT2VxU1I3ZjlXUWdYZzI0bnRhMERRPSIsImFjY291bnRTaWduYXR1cmUiOiJ0ZkRRc01DcVgrOGl6YXFwbW1Hd1BaV3gzd2I1ZmxqVTB5Z3dXeWNDZW94T21aRGhyU09QVXYwNzdwR0prbDk0SlBKeHBRN1N1TGowT3NteW9Fa2JEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTkNFbVV6WlNKQ09zeDNZaGdiU3E2ZGVFeTd4cnBkK0ZwNFQxR3I0MVFUcTdGYTRiWXc4Skp6c0psVE9MYlVQM0NML3dHUmZOWHlONW5xVHNUblhJaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDc4MTEyODkxOjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlppOFpOdkluVjdxeXl1WGdZQk9PaVB6bnFra2UzL1ZrSUY0TnVKN1d0QTAifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk1MzQ1NjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTE14In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Caesar ᴍᴅ",
  ownername: process.env.OWNER_NAME || "Caesar",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-e20aljveXK3imt9IgaQhT3BlbkFJMphyLKWOubU5rhmKUlKx",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

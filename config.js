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
  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhYZ05LS2FoTDNFbGNib1BzMTBZT3V0UWNaNHoydkJhTVVWZkNUSGgxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXY2UkRiODgvMEhUclE4YVovcmg1L2NCZGNLdHF6RU5GczhQUkx2VGdITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSVBRUjZHNHE1ODJtNFN6bTFKbm1mRWtHR3pyNHRsWlJwT2tCZzh4TUZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrdTVRVklCM25FeXhHVXhacFZaWUh6TGFXclBPdVAzSFNSckNSMzFHS2pvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NbExhU0xyY29yeUp0aTdYY1lrbDZKN1ArNFlSRk5tTGkvQ3VJTktsSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9uNGJDVHdzbXVWWTJKWHZ4aVFqbU5tdEtTWWtzcTFFbTZYMzRvN1lmVEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpHL0pqZVFRMXdYOTBLdnIwNkdmMWx3RGtENmRHSDhVM2VJdXNhbHRsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlBNcUlXYzZvUkJvZ3FXRFNaaDNhZWtrSmxhdnpMUjlId0RyOGp0NzUxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imwrb24vZkcraG5YMkd0cmtGMm9HWVBOL1JBYVo4WGV6N2JVRVZ2YWdXVFdHNE1DWUFWQStkdzBEcTlsbzYwektVVkdhdlhwSnV6Si9jeXhkMUFKbkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJwYWNreGIyODZzYkNmTGw3UVY3YWpGdzUrUytzQlk2TEtnTnVBYy9lb2hVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwMjIyMzUwOTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FFN0RDRUQ5RUFBMjBCQjY2QUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTE3NzE3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibVoxS3JBbWxUN2EzU2phSUFCdzRaZyIsInBob25lSWQiOiI1YWUzNDk2ZS05YmRiLTRkOTUtODMxYS05Y2RiYjM1MDc0NmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmk5WTdieWczS0R6SW1WMXRCS3VUQmw0UkswPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BbEU4cWFlS1QrdThaRzFNczBCYmdQSWpuUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOSEVRNlZLSiIsIm1lIjp7ImlkIjoiMjM0ODAyMjIzNTA5MTo0NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDYWVzYXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pXRmhlc0hFTXlmNHJNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVrbkpaY2pSUjhvQUFvNTIvZlVOeXZaT2NYUzhTR2VKYjJiRno3R0o2Z2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndwbXhaYktUOG5DdGxzVXduUlFLY2o5MXpnRzN6Q3dmeFFJdEZoQ0NEOU8vWGdaelJ2Z2FMakQvQlh3UmN2WTA4T2d0YzRwanNNN1BsY3FCS0w3UWdBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1OHJDSVdBL0d5dkwwUHVHMUdoYWlYcDRsTk16S0tyOVR2RkxwMzd3V1dPSXBmTTA4QUV4Yk9kKzVGSDAwRHQ0SmErdEV1WEJCRS8vVkdLc1dXMWpCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjIyMzUwOTE6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVpKeVdYSTBVZktBQUtPZHYzMURjcjJUbkYwdkVobmlXOW14Yyt4aWVvSCJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5MTc3MTc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1QUiJ9"
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

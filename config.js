//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "923140644095";
global.sudo = process.env.SUDO || "923140644095";
global.owner = process.env.OWNER_NUMBER || "923140644095";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK00zbGVOT1FqM3Z2a1VaWkFPNVVDUjRGcGhTcGxTWFd6aTVtVDRzeXdHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGpEQnJlcURzZ0dERFVUcHdXNE5od1NkdlBtY2RHVUJtTlhyZUVkdHIwZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QVVHdlVaVm0yNjZ2QUdjd29NSE1IYTZldURPVTE5cm15bzZ5VWozclhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrMU5vL2cwZmtLdXQrRlVjM200b2pIVzY0TVE3TkJnbXE0aEd6SGZwcmxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLcEk3N1JPUldyQzRKTEpXanIyaEVOQ2w2b0U4YUNTYlRlVEhMa3Ura009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBqU21Ga3FpRnNzaklyOWhRVndPOFE1cEZaaTBSa29GK2NnMHM4UUQrVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUxPdzlQWEN5OEMrYjI4N3J4U0pIUWtJVGtmZml2N2oxVnp4TWp6dGVGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDdqU21IV1h6MDhlNXcwcDRSSnVOeG40bjVpUG82TFNDMmhMcVl1emlXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QUHhjSW9jNXIrd1lkRG9pVDlKU0ltSVNackhvNXVHamZVcDZITDFHaW5JV2ZZNTNKZUJiRG4wK1RJc00ybUlwVUR4M1g0Nmt6RkJLUGsxbFAxZkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6ImVHZExFbDJIWWc3ZStTSmRQQXNVaWcwYWh2bndZc0JvdnltcE8ySXlGdjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTQwNjQ0MDk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJBRUU3NTZFNDZBRTU2RDNCMURFNTRBMzNFMEU4Njc1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzU5OTU4ODl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0MDY0NDA5NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0NDkzQTYyRDRENUVFRThDN0NEMTM1NzBDMEJDQUNDQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1OTk1ODg5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1V3BXZFo0NFJzRzdLVGJpbk1vX01nIiwicGhvbmVJZCI6IjliZTVlMDk2LThmZjUtNGZlMi1iYTU1LThiMTc5MzRiNGMwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2VnZKUVBmeW5SMEVXTkltamJ1alVPQzZjMGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHNDQWQvOVIzYUI2SXRLTnBsdkZkT1BxRlJvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxUTTZYWldBIiwibWUiOnsiaWQiOiI5MjMxNDA2NDQwOTU6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oasw5fwnZCK8J2QgPCdkIvwnZCE8J2QhPCdkIzwnZCZ8J2QiPCdkIPwnZCD8J2QiMOX4oa1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYVAvWmdCRU4vajVMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZaU9icXNJMUthaElGOHp4cmFUd2xpTlpRalI4V1NYUmE2SWZOTXo0dGhJPSIsImFjY291bnRTaWduYXR1cmUiOiJQYm1way9CUG9PVHdwS3Z2OFNKcHJPSTJPelZHWlRGQ2U3dWV3N2NXT3p3d09IbktoOWd0ZjJYR2ExTDZrdkZvVVIzQ3V0RWJ3cjBIcmcvc0l0cXNCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV3FxNFk0ODFjaXZhQ3JSeW1qUlBZUUxDNUh2ZUZDR2ZMbDRQWHp6Z3dtc1I0dk41aHJSbGVjblVsaXBHSFVVOXdOOUpWb0xmbWFPVk4xMW85eXdhQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDA2NDQwOTU6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0lqbTZyQ05TbW9TQmZNOGEyazhKWWpXVUkwZkZrbDBXdWlIelRNK0xZUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTk5NTg4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPSEIifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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

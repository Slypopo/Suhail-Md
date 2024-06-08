const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "233596780685" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233596780685";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_08_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OSxcbiAgICAgICAgNCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvY2pOb1g2cTR2SzJwbHRRcWNNV1o0Y2RwWmFCRGR6WjZ3d0hzVmhFcHlrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNR3FiLVZxTFJjMkZZRkZwWXNfTTlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxMDQ1YWE4LTc0ZDktNGUzOS1iNmJjLTVkNzBjYjlkYjFlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDI1MCxcbiAgICAgIDc1LFxuICAgICAgMTI5LFxuICAgICAgMTA1LFxuICAgICAgNjMsXG4gICAgICAyNDUsXG4gICAgICAyNTMsXG4gICAgICA5MCxcbiAgICAgIDIwMyxcbiAgICAgIDIsXG4gICAgICAxNTAsXG4gICAgICAyMzUsXG4gICAgICAxODQsXG4gICAgICAxMjUsXG4gICAgICAxMzIsXG4gICAgICAyMjYsXG4gICAgICAyNDcsXG4gICAgICAxMTMsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICAxOTMsXG4gICAgICAxMzAsXG4gICAgICAyMDMsXG4gICAgICAxNjcsXG4gICAgICAxNDIsXG4gICAgICA3OSxcbiAgICAgIDUwLFxuICAgICAgMTMzLFxuICAgICAgNzUsXG4gICAgICA4NCxcbiAgICAgIDIsXG4gICAgICAzNixcbiAgICAgIDEzLFxuICAgICAgMTc2LFxuICAgICAgMjIsXG4gICAgICAzOCxcbiAgICAgIDUxLFxuICAgICAgMTM4LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlUMjU4TUxQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTY3ODA2ODU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPZHMgVGVjaG5vbG9naWVzXCIsXG4gICAgXCJsaWRcIjogXCIyMjI5OTYwNDQzMDk4MDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMalg3TUlCRVBHaWtMTUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlozdTFydlgwVVBXWUNYYXl4bDRrVWJ0Y2lEcGxuVVNYcmJnd0pQY0NNaVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT21JWW05Q01vdEJ0RitUR1YyWExEZ2dVU0M0RzZXUVFod1l5U1BReDlwVXRXMWl5V05iVGJUK09sbVFFU2FOYUxqSXA3cDYyV0tUQTNmaytqblZ2QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmpvRWVPaVF0bUJQRGZ0OHBRQlZzOFJZMStkZ241Tm9kZEFIZ1h2UjlDa1NUbWZhVHJGTFlIQ1grajFEZDFHUndncFNRL1QwT0hDU0U4ZEJsQ2EwQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTk2NzgwNjg1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODM0MTAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXZKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFdkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4bWZnbVoyQW1HTk1rTHY4MzZvSTdPSEx2ZzkybGdPMDN0RFR6RjdONU0wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQwODYyODE1MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

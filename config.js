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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_21_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5LFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZlQ01pT3IzUnhCTDd3bVgrSDc4MUZZVWQwNVRUeExnK1h0MTJKVThkdWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NjAxODUwMTg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMEJGNURDMjQ0OTA2QjUwQjg0NzlGNUJBRjk0ODhGNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MjQ4OTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc2MDE4NTAxODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhGQkNEOEZFMjMzNkRBREY4NTNDQ0U3Qjc5ODEwRjMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYyNDg5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJndzJtcXY1b1E4S3Q3MlZmUkJVbW53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjcyZGZjMmI4LTk0NzUtNGRmNS05MTc4LTM4YWRmYTZkNDJlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAzLFxuICAgICAgMjQsXG4gICAgICA1OSxcbiAgICAgIDI5LFxuICAgICAgODcsXG4gICAgICA4NixcbiAgICAgIDY4LFxuICAgICAgMTU0LFxuICAgICAgMTQ4LFxuICAgICAgNjMsXG4gICAgICAxODAsXG4gICAgICAxNzcsXG4gICAgICA0MixcbiAgICAgIDI0MCxcbiAgICAgIDcyLFxuICAgICAgMzEsXG4gICAgICAyMjcsXG4gICAgICAxNzMsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAyNTIsXG4gICAgICAxMTIsXG4gICAgICAxMjIsXG4gICAgICAxOTksXG4gICAgICA1NixcbiAgICAgIDQwLFxuICAgICAgNzMsXG4gICAgICAyNTEsXG4gICAgICAxMixcbiAgICAgIDIzNSxcbiAgICAgIDc2LFxuICAgICAgMjM0LFxuICAgICAgOTksXG4gICAgICAzMSxcbiAgICAgIDI5LFxuICAgICAgMjAxLFxuICAgICAgMTg5LFxuICAgICAgMTk0LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5XRE5aSkJRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc2MDE4NTAxODY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmx8J2agfCdmb7wnZm68J2ZtPCdmb0g8J2agfCdmb7wnZm38J2ZuPCdmoNcIixcbiAgICBcImxpZFwiOiBcIjIzMzAzMjUxMDM2OTg3MDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKajlsK2tGRVByTnVyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktiRzJIQ1Y1RXhrYkJ5STN6NGJsaVVDMXBLWFRjNExycm1UQ1V1b1VzeHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2FzSkVoOTVhRTB5RkE0akhDYnpHM3VPdkU1aG4wN3UzZjVlL0szZTJqbk9NUlhNYVdwR3JWcXdOZFVHVXFQWm9OZWwveTllRXZxbjlLNGRKZE0xQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSE96aVM3dHJuUHdwcDBjdklQWWdyQ2F5UUpYNkJtTUxLVjFJQzg0NE9GZUpmUUpCdnlnbVNrUDlVQXE3MmkwWXpFWEhEY01KSHJKMVRrYXVjMlJsRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3NjAxODUwMTg2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYyNDg5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg4MVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDgxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUVhBRG8xbVZ1anVCMlRtT3RWTW5CazhBblVMS0dMNUdxWmQzS0NwbUpaND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTYyNzcxMDk2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MjQ4OTYwMDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

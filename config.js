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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "08138621982";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_49_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODQsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDU0LFxuICAgICAgICA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICA2NixcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDczLFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWGs4TjZoaVJRcVZSRGtwb0VobHV5anNOYmxyd2dVaGt6d042REl5Um5sST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidjJaMkxoajlUZzZxOS1PQlo2WV81UVwiLFxuICBcInBob25lSWRcIjogXCI4MGZkYWVhNi04YWM1LTQwMjEtOGFlNC05NzMwMzdhNzUzNmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMzgsXG4gICAgICAyNDQsXG4gICAgICAxNDksXG4gICAgICAyNyxcbiAgICAgIDIwMSxcbiAgICAgIDEyMCxcbiAgICAgIDIxNSxcbiAgICAgIDEwNSxcbiAgICAgIDEyOCxcbiAgICAgIDEwMixcbiAgICAgIDE2NSxcbiAgICAgIDE0NixcbiAgICAgIDE4OSxcbiAgICAgIDE4MyxcbiAgICAgIDE0LFxuICAgICAgOTAsXG4gICAgICAyMjUsXG4gICAgICAyMzIsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxNDAsXG4gICAgICA4MixcbiAgICAgIDk4LFxuICAgICAgMSxcbiAgICAgIDkyLFxuICAgICAgNixcbiAgICAgIDgxLFxuICAgICAgMjIyLFxuICAgICAgOCxcbiAgICAgIDE1NixcbiAgICAgIDE5NyxcbiAgICAgIDY5LFxuICAgICAgMTgxLFxuICAgICAgNjIsXG4gICAgICAyNTMsXG4gICAgICAxNjEsXG4gICAgICAyMzcsXG4gICAgICAxNzAsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjRFREhONjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzg2MjE5ODI6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk3NTI2MjkyMTgxMTgxOjc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ052N252VURFSUticTdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK25EZzV1MWJER2NJU0FKaStrOFFMM24veGxIck5GeldtVGYyWnlBbElRST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnbWZIUk5DL1B1TXFkbzZWellSeUxkRnpCRGRQdjNLOGRhQm4vQ3l2OWI4RTlHWHF0SDI5bnhsc1JqNU8vMFY3SEVjSjJZbm9vaEY1cytFWGpLQ2hDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpbW1iK2UwWW1pQTVNYms0MERVVjFNM2VwRllLRVozK0RySyt5eEVuWjI3TnlVR2xyQkRXUDZMakp0QytyRDFUU3FtcU9BWWFLY0NlYUhacGdVNHhEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM4NjIxOTgyOjc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ2OTc2NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlxa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSXFrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZThlWGdERXF5TFpJZU9ObnBQT0h4bUFjelc5bVF5eFVhMU1CVEpPRytkMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDUxMTgwNTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "$ CJ £",


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

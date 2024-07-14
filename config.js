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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_52_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTgzLFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjE4eDNwUVhsNDcrSUlGVWZZUlNZelBsejVsdXh4ODBhdUxyV3RBNHBVOVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNYV1Rqenl4VFk2YmVmTS1yTGRMdEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2U2MDYxZTEtYWFhYi00M2ZkLTgyNjEtYzBiODk5NmJiN2I2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDI1MixcbiAgICAgIDIxMSxcbiAgICAgIDIwMSxcbiAgICAgIDE1MSxcbiAgICAgIDUwLFxuICAgICAgNDAsXG4gICAgICAyMzMsXG4gICAgICAxMDgsXG4gICAgICA3MixcbiAgICAgIDkxLFxuICAgICAgMTY2LFxuICAgICAgMjQ0LFxuICAgICAgMTE1LFxuICAgICAgMTI2LFxuICAgICAgMTAyLFxuICAgICAgMjIzLFxuICAgICAgMTU4LFxuICAgICAgMTQ4LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTYwLFxuICAgICAgNjMsXG4gICAgICAzMSxcbiAgICAgIDI0NixcbiAgICAgIDE2LFxuICAgICAgMTY0LFxuICAgICAgMjM4LFxuICAgICAgNDQsXG4gICAgICA1NCxcbiAgICAgIDIzNCxcbiAgICAgIDIyOSxcbiAgICAgIDEyNSxcbiAgICAgIDEwMCxcbiAgICAgIDI0MCxcbiAgICAgIDE4NixcbiAgICAgIDk3LFxuICAgICAgMzEsXG4gICAgICAxOTEsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01mamtiQUJFSkhQemJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXBFcUJROEpzTWZVa3VGVld3Sm5lNTRZTi9YblgvVW5MS0lUK1NMMjFBZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZMlJVRUhtVG9meml5ejdCdGxBVzh5a1JGVzV4UXpmNmF3NEJ1K0hKaThjelhlRlQvUHR2SHREcm9Hb21ySXJsV2hManB4TVdFTWxRMm5ZRlNLMTNBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRZXYzdXJCd1h4QStYVXhDL2MwaWsyMEliZGdDcUJFaFZ5bllTQzF2RVlTNTJ3dnZRQW9lRDRCNXRrOVovckV1QzNOVnZFRjBLS1BIUXErWTVxbXhndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU4MTA1NzY1OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qg/Cdmq7wnZqr8J2atPCdmqsgLSAg8J2QkvCdmrvwnZqr8J2au/CdkJTwnZCSICDwnZCK8J2asPCdmrTwnZCGXCIsXG4gICAgXCJsaWRcIjogXCIxMTMyMzI5ODc1NzQyODc6MjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1ODEwNTc2NToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MzYzNDBcbn0iCn0="  // PUT your SESSION_ID 


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

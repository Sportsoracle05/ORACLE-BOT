let handler = async m => m.reply(`

≡ *꧁𝑸𝒖𝒆𝒆𝒏 𝑶𝒓𝒂𝒄𝒍𝒆꧂* 
    
 *STATE* 
 ▢ *${groupsIn.length}* GROUP CHATS 
 ▢ *${groupsIn.length}* united groups 
 ▢ *${groupsIn.length - groupsIn.length}* abandoned groups 
 ▢ *${chats.length - groupsIn.length}* private chats 
 ▢ *${chats.length}* Total Chats 
  
 *≡ OWNER* 
   *๖ۣۜ𝓟𝓡𝜣𝘚𝘱𝘰𝘳𝘵𝘴 𝘖𝘳𝘢𝘤𝘭𝘦(◕‿-)✌* 
 ▢ Instagram : 
   • https://instagram.com/emseofficial 
 ▢ Application : 
   • https://bit.ly/43BQzLP 
 ▢ Contact :  
   • http://wa.me/2349085771938  
 ▢ WA Group :  
   • https://chat.whatsapp.com/H26u2wz3zl65jxQfpwGigE 
  
  *≡ S E R V E R* 
 *🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())} 
 *🔵 FreeRAM:* ${format(freemem())} 
  
 *≡  NodeJS memory *


`.trim())
handler.help = ['gpguru']
handler.tags = ['main']
handler.command = ['groups', 'groupguru', 'gugp', 'ggp', 'gpguru'] 

export default handler

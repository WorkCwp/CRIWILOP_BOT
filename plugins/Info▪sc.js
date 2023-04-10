let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com/WorkCwp*`
let buttonMessage= {
'document': { url: `https://github.com/WorkCwp` },
'mimetype': `application/${document}`,
'fileName': `🍀❥៚⍣𝘾𝙍𝙄𝙒𝙄𝙇𝙊𝙋_𝘽𝙊𝙏࿐⛦🍀`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': script,
'mediaType': 2,
'previewType': 'pdf',
'title': ``,
'body': global.author,
'thumbnail': global.imgmenu,
'sourceUrl': 'https//wa.me/573244488043' }},
'caption': texto1,
'footer': '\n🍀❥⍣ᴄʀɪᴡɪʟᴏᴘ࿐⛦☘️',
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'Menú 📒'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info 📌'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.tags =['info']
handler.help = ['script']
handler.command = ['sc', 'script']
handler.register = true
export default handler

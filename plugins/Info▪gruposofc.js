let handler = async (m, { conn }) => {
let msg = `
*👋Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de 0@s.whatsapp.net.*

   *_╭━━━⊜ ⌊• 1 •⌉_*
  *_┃🎋❏ vacío_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 2 •⌉_*
  *_┃🌱❏ vacío_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 3 •⌉_*
  *_┃🎋❏ vacío_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 4 •⌉_*
  *_┃🌱❏ vacío_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 5 •⌉_*
  *_┃🎋❏ vacío_*
*_╰━━━━━━━━━━━━━━━━⊜_*
 `
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler
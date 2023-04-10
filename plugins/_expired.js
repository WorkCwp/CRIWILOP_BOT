import db from '../lib/database.js'

export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, 'Mi tiempo de servicio en este grupo culminó, para renovar acuerdo contactarse con mi creador, wa.me/573244488043 Adiós🖐!!')
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
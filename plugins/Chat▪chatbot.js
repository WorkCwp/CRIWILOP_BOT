//▪CÓDIGO BY ALBERTO9883 PRROS XD▪
//▪NyanCatBot - MD▪

import MessageType from '@adiwajshing/baileys'
import util from 'util'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

let handler = m => m

handler.before = async function (m, { conn, command, MessageType, text, usedPrefix }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[who]
let fkowner = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}

if ((m.isBaileys && m.fromMe) || m.fromMe ) return true
if (chat.chatbot) {
//━━━━━━━━◜🌾Textos🌾◞━━━━━━━━
let texto1A = /hola/i
let texto1B = texto1A.exec(m.text)

let texto2A = /🍀|☘️/i
let texto2B = texto2A.exec(m.text)
//━━━━━━━━━━━━━━━━━━━━━━━


//━━━━━━━◜🍁Respuestas🍁◞━━━━━━━
if (texto1B) {
await conn.sendPresenceUpdate('composing', m.chat)
        conn.reply(m.chat, `Hola señore @${who.split("@s.whatsapp.net")[0]}`, fkowner, { mentions: [who]})
        }
       
if (texto2B) {
await conn.sendPresenceUpdate('composing', m.chat)
        conn.reply(m.chat, `≡ ```LISTA DE MENUS```

*┏━⊜「 Menús📒 」*
*┃›* .listmenu
*┃›* .menu
*┃›* .help
*┃›* .blocklist
*┗━⬣*

*┏━⊜「 Información👨‍💻 」*
*┃›* .banlist
*┃›* .info
*┃›* .creador
*┃›* .dashboard
*┃›* .gruposofc
*┃›* .reportar
*┃›* .runtime
*┃›* .script
*┃›* .totalfunciones
*┃›* script
*┃›* .clima *<ciudad/país>*
*┗━⬣*

*┏━⊜「 Busquedas🔎 」*
*┃›* .animeinfo *<nombre>*
*┃›* .apkgoogle
*┃›* .apkmody
*┃›* .apkshub
*┃›* .happymod
*┃›* .hostapk
*┃›* .revdl
*┃›* .toraccino
*┃›* .uapkpro
*┃›* .githubsearch
*┃›* .google *<buscar>*
*┃›* .groupsearch
*┃›* .Lyrics
*┃›* .modlatest *<nombre de aplicación>*
*┃›* .wikipedia
*┃›* .ytsearch *<texto>*
*┃›* .stickersearch
*┃›* .searchsticker
*┃›* .npmsearch
*┗━⬣*

*┏━⊜「 Juegos🕹️ 」*
*┃›* .iqtest
*┃›* .advnro
*┃›* .dado
*┃›* .math *<modo>*
*┃›* .slot *<apuesta>*
*┃›* .suitpvp *@tag*
*┗━⬣*

*┏━⊜「 Nivel Y Economía⚖️ 」*
*┃›* .daily
*┃›* .claim
*┃›* .addcoins *<@user>*
*┃›* .addxp *<@user>*
*┃›* .bal
*┃›* .top
*┃›* .levelup
*┃›* .paycoins *@user <cantidad>*
*┃›* .payxp *@user <monto>*
*┃›* .buy
*┃›* .buyall
*┃›* .work
*┗━⬣*

*┏━⊜「 RPG⚔ 」*
*┃›* .inventario
*┃›* .pescar
*┃›* .tienda <vender|comprar> <item>
*┃›* .shop <buy|sell> <item>
*┃›* .adventure
*┃›* .inventory
*┃›* .inv
*┃›* .craft
*┃›* .craft
*┃›* .heal
*┃›* .dungeon [nama room]
*┃›* .feed [pet type]
*┃›* .inventory
*┃›* .inv
*┃›* .monthly
*┃›* .mining
*┃›* .open <crate>
*┃›* .gacha <crate>
*┃›* .petshop
*┃›* .repair
*┃›* .weekly
*┃›* .transfer [type] [jumlah] [@tag]
*┃›* .tf [type] [jumlah] [@tag]
*┃›* .upgrade
*┃›* .judi [jumlah]
*┗━⬣*

*┏━⊜「 Registro🗃️ 」*
*┃›* .cregistrar
*┃›* .reg *<nombre.edad>*
*┃›* .nserie
*┃›* .unreg *<Num Serie>*
*┗━⬣*

*┏━⊜「 Sticker🏞️ 」*
*┃›* .smongus
*┃›* .stickersus
*┃›* .emojimix *<emoji+emoji>* ◜🪙◞
*┃›* .getexif
*┃›* .kiss *<@user>*
*┃›* .react *<emoji>*
*┃›* .stickersearch
*┃›* .searchsticker
*┃›* .smaker ◜🪙◞
*┃›* .semoji *<tipo> <emoji>*
*┃›* .sremovebg *<imagen>*
*┃›* .sticker
*┃›* .stikertele *<url>* ◜🪙◞
*┃›* .toimg *<sticker>*
*┃›* .toimg2 *<sticker>*
*┃›* .tovid
*┃›* .trigger *<@user>*
*┃›* .ttp
*┃›* .ttp2
*┃›* .ttp3
*┃›* .ttp4
*┃›* .ttp5
*┃›* .attp
*┃›* .attp2
*┃›* .take *<nombre>|<autor>*
*┃›* .wm2
*┃›* .stickerrandom
*┗━⬣*

*┏━⊜「 Frases🥀 」*
*┃›* .consejo
*┃›* .fraseromantica
*┃›* .historiaromantica
*┃›* .cuentodeterror
*┃›* .cuentocorto
*┃›* .piropo
*┗━⬣*

*┏━⊜「 Imágenes🪴 」*
*┃›* .animal
*┃›* .imagen *<texto>* ◜🪙◞
*┃›* .girl ◜🪙◞
*┃›* .mitad
*┃›* .pinterest
*┃›* .wallpaper ◜🪙◞
*┃›* .wpmontaña
*┃›* .pubg
*┃›* .wpgaming
*┃›* .wpaesthetic
*┃›* .cat
*┃›* .coffee
*┃›* .pentol
*┃›* .caricatura
*┃›* .ciberespacio
*┃›* .technology
*┃›* .doraemon
*┃›* .hacker
*┃›* .wpcat
*┃›* .planeta
*┃›* .dog
*┃›* .randomprofile
*┃›* .wpaesthetic2
*┃›* .wpvehiculo
*┃›* .wallhp
*┃›* .wpmoto
*┃›* .cosplayer
*┃›* .minecraft
*┃›* .patricio
*┃›* .goku
*┗━⬣*

*┏━⊜「 Grupo👻 」*
*┃›* .add *<Número>*
*┃›* .encuesta <text|text2>
*┃›* .Infogp
*┃›* .grouptime *<open/close>* *<número>*
*┃›* .hidetag
*┃›* .kick
*┃›* .leavegc
*┃›* .leavegcall
*┃›* .leavegroup
*┃›* .Link
*┃›* .perfil
*┃›* .perfil *@user*
*┃›* .daradmin
*┃›* .promote
*┃›* .resetlink
*┃›* .setbye *<texto>*
*┃›* .setdesc
*┃›* .sdesc
*┃›* .setname *<texto>*
*┃›* .setppgrup
*┃›* .grupo <abrir/cerrar>
*┃›* .setwelcome *<text>*
*┃›* .simular *<event> @mention*
*┃›* .staff
*┃›* .tagall
*┃›* .delete
*┃›* .getbio
*┃›* .getbio *@tag*
*┃›* .getname
*┃›* .getname *@tag*
*┗━⬣*

*┏━⊜「 Maker Y Logos📝 」*
*┃›* .blur
*┃›* .difuminar2
*┃›* .bonk
*┃›* .carbon
*┃›* .logocorazon
*┃›* .logochristmas
*┃›* .hornycard
*┃›* .hornylicense
*┃›* .itssostupid
*┃›* .iss
*┃›* .stupid
*┃›* .logokaneki *<texto>* ◜🪙◞
*┃›* .lisapresenta *<texto>* ◜🪙◞
*┃›* .logololi *<nombre>* ◜🪙◞
*┃›* .logos
*┃›* .logoneko *<texto|texto>* ◜🪙◞
*┃›* .phmaker
*┃›* .pixel
*┃›* .difuminar
*┃›* .logorem *<nombre>* ◜🪙◞
*┃›* .logosad *<texto|texto>* ◜🪙◞
*┃›* .simpcard
*┃›* .logoxnxx *<imágen/texto>*
*┗━⬣*

*┏━⊜「 Des/Activar opciones⚙️ 」*
*┃›* .welcome
*┃›* .public
*┃›* .antilink
*┃›* .nsfw
*┃›* .autosticker
*┃›* .antidelete
*┃›* .autolevelup
*┃›* .detect
*┃›* .antiviewonce
*┃›* .restrict
*┃›* .autoread
*┃›* .solopv
*┃›* .sologp
*┃›* .enable <option>
*┃›* .disable <option>
*┗━⬣*

*┏━⊜「 Premium🪪 」*
*┃›* .asupan ◜🪙◞ ◜🪪◞
*┃›* .spamwa *<número>|<texto>|<# de mensajes>*  ◜🪪◞
*┗━⬣*

*┏━⊜「 Anime㊗ 」*
*┃›* .akira ◜🪙◞
*┃›* .akiyama ◜🪙◞
*┃›* .anna ◜🪙◞
*┃›* .asuna ◜🪙◞
*┃›* .ayuzawa ◜🪙◞
*┃›* .boruto ◜🪙◞
*┃›* .chiho ◜🪙◞
*┃›* .chitoge ◜🪙◞
*┃›* .deidara ◜🪙◞
*┃›* .wpanime ◜🪙◞
*┃›* .erza ◜🪙◞
*┃›* .elaina ◜🪙◞
*┃›* .eba ◜🪙◞
*┃›* .emilia ◜🪙◞
*┃›* .hestia ◜🪙◞
*┃›* .hinata ◜🪙◞
*┃›* .inori ◜🪙◞
*┃›* .isuzu ◜🪙◞
*┃›* .itachi ◜🪙◞
*┃›* .itori ◜🪙◞
*┃›* .kaga ◜🪙◞
*┃›* .kagura ◜🪙◞
*┃›* .kaori ◜🪙◞
*┃›* .keneki ◜🪙◞
*┃›* .kotori ◜🪙◞
*┃›* .kurumi ◜🪙◞
*┃›* .madara ◜🪙◞
*┃›* .mikasa ◜🪙◞
*┃›* .miku ◜🪙◞
*┃›* .minato ◜🪙◞
*┃›* .naruto ◜🪙◞
*┃›* .nezuko ◜🪙◞
*┃›* .sagiri ◜🪙◞
*┃›* .sasuke ◜🪙◞
*┃›* .sakura ◜🪙◞
*┃›* .cosplay ◜🪙◞
*┃›* .megumin ◜🪙◞
*┃›* .loli ◜🪙◞
*┃›* .lolivid
*┃›* .neko ◜🪙◞
*┃›* .waifu ◜🪙◞
*┗━⬣*

*┏━⊜「 Descargas📥 」*
*┃›* .apkdl *<nombre de apk>* ◜🪙◞
*┃›* .apkdl2 *<nombre de apk>* ◜🪙◞
*┃›* .dlmodlatest *<url>* ◜🪙◞
*┃›* .facebook *<url>* ◜🪙◞
*┃›* .fetch *<url>*
*┃›* .get *<url>*
*┃›* .gitclone *<url>* ◜🪙◞
*┃›* .instagram *<link ig>* ◜🪙◞
*┃›* .igstalk *<nombre de usuario>*
*┃›* .mediafire *<url>* ◜🪙◞
*┃›* .dlmodapk *<url>* ◜🪙◞
*┃›* .tiktok *<link tt>*
*┃›* .tiktokstalk *<usuario>*
*┃›* .twitter *<url>*
*┃›* .wallpaper *<texto>*
*┃›* .wallpaper2 *<texto>*
*┃›* .stikertele *<url>* ◜🪙◞
*┃›* .getaud *<url yt>*
*┃›* .getvid *<url yt>*
*┃›* .play.1 *<texto>*
*┃›* .play.2 *<texto>*
*┃›* .play *<texto>*
*┃›* .play2 *<texto>*
*┃›* .playlist *<texto>*
*┃›* .ytmp3 <url>
*┃›* .yta <url>
*┃›* .ytmp4 *<url>*
*┃›* .ytv *<url>*
*┗━⬣*

*┏━⊜「 Herramientas🧰 」*
*┃›* .tinyurl *<link>*
*┃›* .acortar *<link>*
*┃›* .cal *<ecuacion>*
*┃›* .cekresolution *<foto>*
*┃›* .cekreso *<foto>*
*┃›* .antitraba
*┃›* .document *<audio/video>*
*┃›* .fake *<texto/@tag/texto>*
*┃›* .tamaño *<cantidad>*
*┃›* .getcaption
*┃›* .getprofile *<@tag>*
*┃›* .mention *<texto>*
*┃›* .nowa
*┃›* .totexto *<imagen>*
*┃›* .encrypt *<texto>*
*┃›* .ofuscar *<texto>*
*┃›* .qrcode *<texto>*
*┃›* .readmore *<text1>|<text2>*
*┃›* .readvo
*┃›* .reenviar
*┃›* .resize *<ancho> <altura> <foto>*
*┃›* .savecontact *@tag*
*┃›* .spamchat *<texto>* ◜🪙◞
*┃›* .ss *<url>*
*┃›* .ssweb *<url>*
*┃›* .setchattime <tanggal|jam|text>
*┃›* .style *<texto>*
*┃›* .timevn *<segundos>*
*┃›* .tomp3
*┃›* .tovn
*┃›* .tourl
*┃›* .tts *<texto>*
*┃›* .vcard *@tag*
*┃›* .whatmusic *<música/video>*
*┃›* .zodiac *2002 02 25*
*┗━⬣*

*┏━⊜「 Diversión🎭 」*
*┃›* .afk *<razón>*
*┃›* .gay2 *@tag | nombre*
*┃›* .lesbiana *@tag | nombre*
*┃›* .pajero *@tag | nombre*
*┃›* .pajera *@tag | nombre*
*┃›* .puto *@tag | nombre*
*┃›* .puta *@tag | nombre*
*┃›* .manco *@tag | nombre*
*┃›* .manca *@tag | nombre*
*┃›* .rata *@tag | nombre*
*┃›* .prostituta *@tag | nombre*
*┃›* .prostituto *@tag | nombre*
*┃›* .msg
*┃›* .formarpareja
*┃›* .gay *@user*
*┃›* .love
*┃›* .nombreninja *<texto>*
*┃›* .personalidad *<nombre>*
*┃›* .pregunta *<texto>*
*┃›* .simi <teks>
*┃›* .bot <teks>
*┃›* .top
*┃›* .txt *<texto>*
*┃›* .txt2 *<texto>*
*┃›* .meme
*┃›* .random
*┗━⬣*

*┏━⊜「 Base de Datos🗄️ 」*
*┃›* .delcmd <teks>
*┃›* .listcmd
*┃›* .unlockcmd
*┃›* .lockcmd
*┃›* .setcmd <txt>
*┗━⬣*

*┏━⊜「 Nsfw🔞 」*
*┃›* .nsfwloli
*┃›* .nsfwfoot
*┃›* .nsfwass
*┃›* .nsfwbdsm
*┃›* .nsfwcum
*┃›* .nsfwero
*┃›* .nsfwfemdom
*┃›* .nsfwfoot
*┃›* .nsfwglss
*┃›* .nsfworgy
*┃›* .yuri
*┃›* .yuri2
*┃›* .yaoi
*┃›* .yaoi2
*┃›* .panties
*┃›* .tetas
*┃›* .booty
*┃›* .ecchi
*┃›* .furro
*┃›* .hentai
*┃›* .trapito
*┃›* .lesbians
*┃›* .pene
*┃›* .porno
*┃›* .randomxxx
*┃›* .pechos
*┃›* .pack ◜🪙◞
*┃›* .pussy ◜🪙◞
*┃›* .videoxxx
*┃›* .xnxxdl
*┃›* .porhubsearch
*┃›* .xvideossearch
*┃›* .xnxxsearch
*┃›* .xvideosdl
*┗━⬣*

*┏━⊜「 Creador📌 」*
*┃›* .banchat
*┃›* .unbanchat
*┃›* .oadd *@user*
*┃›* .o+ *@user*
*┃›* .addprem *<@user>*
*┃›* .autoadmin
*┃›* .backup
*┃›* .banuser
*┃›* .broadcast
*┃›* .bcgc
*┃›* .bcgc2
*┃›* .block *<@user>*
*┃›* .cleartmp
*┃›* .creategroup
*┃›* .deleteplugin *<nombre>*
*┃›* .delprem <@user>
*┃›* .getplugin *<nombre>*
*┃›* .inspect
*┃›* .join *<link>*
*┃›* .okick *@user*
*┃›* .o- *@user*
*┃›* .grouplist
*┃›* .premlist
*┃›* .renameplugin *<nombre viejo> | <nombre nuevo>*
*┃›* .reset *<504xxx>*
*┃›* .restart
*┃›* .reunionstaff
*┃›* .saveplugin *<nombre>*
*┃›* .spamgp
*┃›* .unbanuser
*┃›* .unblock *<@user>*
*┃›* .update
*┃›* .warn *@mención*
*┗━⬣*

*┏━⊜「 Avanzado🖥️ 」*
*┃›* >
*┃›* =>
*┃›* $
*┃›* <
*┗━⬣*

*┏━⊜「 Efecto de Audios🔊 」*
*┃›* .bass *<mp3/vn>*
*┃›* .blown *<mp3/vn>*
*┃›* .deep *<mp3/vn>*
*┃›* .earrape *<mp3/vn>*
*┃›* .fast *<mp3/vn>*
*┃›* .fat *<mp3/vn>*
*┃›* .nightcore *<mp3/vn>*
*┃›* .reverse *<mp3/vn>*
*┃›* .robot *<mp3/vn>*
*┃›* .slow *<mp3/vn>*
*┃›* .smooth *<mp3/vn>*
*┃›* .tupai *<mp3/vn>*
*┗━⬣*

*┏━⊜「 rnime 」*
*┃›* .pat @tag
*┃›* .slap @tag
*┗━⬣*

*┏━⊜「 vote 」*
*┃›* .delvote
*┃›* .votar *<razón>*
*┃›* .listvote
*┃›* .upvote
*┃›* .devote
*┗━⬣*`, fkowner, { mentions: [who]})
        }
//━━━━━━━━━━━━━━━━━━━━━━━
}
return !0

}

export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

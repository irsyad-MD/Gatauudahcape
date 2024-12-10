// Ozora Bot V1.2
/*
• Sc Ini Menggunakan Base Dari Ruztan Dan Di Fix Oleh FallZx, Dan Base Ini Di Recode Oleh Zora (B16_OFC)

• Apa Bila Ada Yang Menghapus Credits Ini Maka Akan Mendapatkan Dosa Besar
*/

require("./all/global");
const func = require("./all/place");
const readline = require("readline");
const chalk = require('chalk');
const CFonts = require('cfonts');
const welcome = JSON.parse(fs.readFileSync("./all/database/welcome.json"));
const { getBuffer } = require('./all/myfunc');
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const yargs = require('yargs/yargs');
const _ = require('lodash');
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
CFonts.say(`OZORA`, {
   font: 'slick',
  align: 'left',
  gradient: ['cyan', 'magenta'],

})
CFonts.say(`BOT V1.2`, {
   font: 'slick',
  align: 'left',
  gradient: ['cyan', 'magenta'],

});
 console.log(chalk.cyan(`
⢰⡟⣡⡟⣱⣿⡿⠡⢛⣋⣥⣴⣌⢿⣿⣿⣿⣿⣷⣌⠻⢿⣿⣿⣿⣿⣿⣿
⠏⢼⡿⣰⡿⠿⠡⠿⠿⢯⣉⠿⣿⣿⣿⣿⣿⣿⣷⣶⣿⣦⣍⠻⢿⣿⣿⣿
⣼⣷⢠⠀⠀⢠⣴⡖⠀⠀⠈⠻⣿⡿⣿⣿⣿⣿⣿⣛⣯⣝⣻⣿⣶⣿⣿⣿
⣿⡇⣿⡷⠂⠈⡉⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣍⡤⣤⣤⣤⡀⠀⠉⠛⠿
⣿⢸⣿⡅⣠⣬⣥⣤⣴⣴⣿⣿⢿⣿⣿⣿⣿⣿⣟⡭⡄⣀⣉⡀⠀⠀⠀⠀
⡟⣿⣿⢰⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣶⣦⣈⠀⠀⠀⢀⣶
⡧⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿
⡇⣿⠃⣿⣿⣿⣿⣿⠛⠛⢫⣿⣿⣻⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿
⡇⣿⠘⡇⢻⣿⣿⣿⡆⠀⠀⠀⠀⠈⠉⠙⠻⠏⠛⠻⣿⣿⣿⣿⣿⣭⡾⢁
⡇⣿⠀⠘⢿⣿⣿⣿⣧⢠⣤⠀⡤⢀⣠⣀⣀⠀⠀⣼⣿⣿⣿⣿⣿⠟⣁⠉
⣧⢻⠀⡄⠀⠹⣿⣿⣿⡸⣿⣾⡆⣿⣿⣿⠿⣡⣾⣿⣿⣿⣿⡿⠋⠐⢡⣶
⣿⡘⠈⣷⠀⠀⠈⠻⣿⣷⣎⠐⠿⢟⣋⣤⣾⣿⣿⣿⡿⠟⣩⠖⢠⡬⠈⠀
⣿⣧⠁⢻⡇⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⠿⠟⠋⠁⢀⠈⢀⡴⠈⠁⠀⠀
⠻⣿⣆⠘⣿⠀⠀⣀⡁⠀⠈⠙⠛⠋⠉⠀⠀⠀⠀⡀⠤⠚⠁⠄⣠
`))

console.log(chalk.black(chalk.bgCyan(`• Tetaplah Merendah Diri\n${chalk.bgBlue("•  Walaupun Kau Sepuh Bot Wangsaf🗿\n")}`)))
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "silent" }),
auth: state,
browser: ["IOS","Safari","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By B16_OFC'
}}
}

const Ozora = func.makeWASocket(connectionOptions)
if (usePairingCode && !Ozora.authState.creds.registered) {
var phoneNumber = await question(color(`Masukkan Nomor WhatsApp Anda, Example 628xxxx :\n`, "gold"))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
var code = await Ozora.requestPairingCode(phoneNumber.trim())
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(color(`⚠︎ Your Pairing Code : `, "gold"), chalk.white(code))
}

Ozora.ev.on('creds.update', await saveCreds)
store?.bind(Ozora.ev)

Ozora.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await Ozora.decodeJid(Ozora.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Ozora.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: global.imgreply, title: "乂 Panggilan Terdeteksi", body: "Powered By "+global.namabot, previewType: "PHOTO"}}}, {quoted: null})
Ozora.sendContact(ff.from, [owner], "Telfon Atau Vc = Block", sendcall)
await sleep(7000)
await Ozora.updateBlockStatus(ff.from, "block")
}}
}})

Ozora.public = true

Ozora.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') {
if (global.autoreadsw) Ozora.readMessages([m.key])
}
if (!Ozora.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.isBaileys) return
if (global.autoread) Ozora.readMessages([m.key])
m = func.smsg(Ozora, m, store)
require("./setting/case.js")(Ozora, m, store)
} catch (err) {
console.log(err)
}
})

Ozora.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await Ozora.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await Ozora.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await Ozora.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}

Ozora.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await Ozora.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })

Ozora.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
        await zora.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer;
    }

return buffer}


Ozora.ev.on('group-participants.update', async (anu) => {
if (!welcome.includes(anu.id)) return
let botNumber = await Ozora.decodeJid(Ozora.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Ozora.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await Ozora.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://pomf2.lain.la/f/7zm6e3wx.jpg'
}
      if(action == 'add') {
        teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
        let asu = await Ozora.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
await Ozora.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Welcome To Group",
      "description": `Selamat datang @${Ozora.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "62895332105995@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'remove') {
        teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
        let asu = await Ozora.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await Ozora.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Leaving To Group",
      "description": `Selamat tinggal @${Ozora.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "62895332105995@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'promote') {
        teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Ozora.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await Ozora.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Promote Member",
      "description": `Promote member @${Ozora.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "62895332105995@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      } else if(action == 'demote') {
        teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
        let asu = await Ozora.sendMessage(id, {
          text: `${teks}`,
          mentions: [author, n]
        }, {
          quoted: qtext
        })
        await Ozora.relayMessage(id, {
  "productMessage": {
    "product": {
      "productImage": imguser.imageMessage, 
      "productId": "343056591714248",
      "title": "Demote Member",
      "description": `Demote member @${Ozora.getName(n)}`,
      "productImageCount": 1
    },
    "businessOwnerJid": "62895332105995@s.whatsapp.net",
    "contextInfo": {
      mentionedJid: [n]
    }
  }
}, {})
      }
    }
} catch (err) {
console.log(err)
}})

Ozora.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Ozora.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Ozora.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = "*👋Hai Kak Zora*\n`Sc Ozora Bot V1.2 Telah Online`\n\nJoin My Channel\n*B16_OFC Channel :*\nhttps://whatsapp.com/channel/0029VauzzBMCcW4irdRvCK0g\n*Ozora Bot Update Script :*\nhttps://whatsapp.com/channel/0029VayaR6Y0lwgu6Sg9Ar18"
Ozora.sendMessage("62895332105995@s.whatsapp.net", {text: teksnotif})
console.log(chalk.yellow("\n\n               " + chalk.bold.blue(`[ Ozora Bot V${global.versisc} ]`) + "\n\n"));
console.log(color("< ================================================== >", "cyan"));
console.log(color("\n YT CHANNEL: @B16_OFC", "magenta"));
console.log(color(" WA NUMBER: 62895332105995", "magenta"));
console.log(color(" CREDIT: Zora\n", "magenta"));
}
})

return Ozora
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
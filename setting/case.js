// Ozora Bot V1.2
/*
• Sc Ini Menggunakan Base Dari Ruztan Dan Di Fix Oleh FallZx, Dan Base Ini Di Recode Oleh Zora (B16_OFC)

• Apa Bila Ada Yang Menghapus Credits Ini Maka Akan Mendapatkan Dosa Besar
*/


require("../setting/settings")
const welcome = JSON.parse(fs.readFileSync('./all/database/welcome.json'))
const newowner = JSON.parse(fs.readFileSync('./all/database/owner.json'))
module.exports = async (Ozora, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//========= CONFIGURASI ==========//
const budy = (typeof m.text == 'string' ? m.text : '')
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.fromMe ? true : false
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "." : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
var crypto = require("crypto")
let { randomBytes } = require("crypto")
const { Client } = require('ssh2');
const fsx = require("fs-extra")
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const antibot = false
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
const LINODE_API_TOKEN = global.apilinode;
const API_TOKEN = global.apitokendo;
const makeid = randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Ozora.decodeJid(Ozora.user.id)
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const isBot = botNumber.includes(senderNumber)
const sender = m.key.fromMe ? (Ozora.user.id.split(':')[0]+'@s.whatsapp.net' || Ozora.user.id) : (m.key.participant || m.key.remoteJid)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const groupMetadata = m.isGroup ? await Ozora.groupMetadata(m.chat).catch(e => {}) : {}
let participant_bot = m.isGroup ? groupMetadata?.participants.find((v) => v.id == botNumber) : {}
let participant_sender = m.isGroup ? groupMetadata?.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const isCreator = (m && m?.sender && [botNumber, ...newowner,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const { runtime, getRandom, getTime, toRupiah, telegraPh, ucapan, generateProfilePicture, getBuffer, fetchJson, resize } = require('../all/function.js')
const { ssweb, igstalk, tts, remini, mediafireDl, } = require("../scrape/screaper.js")
const { quote } = require('../all/quote.js')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../all/uploader')
const { toAudio, toPTT, toVideo, ffmpeg } = require("../all/converter.js")
const b = fs.readFileSync("./media/menu.mp3")
//const isPremium = premium.includes(m.sender)*/
const {
    isUrl,
    fetchBuffer
} = require('../all/myfunc')
//database
//const AntiSpam = db.data.antispam
/////////////////////////////////////////////////////////////////////////
async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

//========== Ozora Function ==========\\
async function loading () {
var baralod = [
"Await Loading",
"Succes Loading Menu",
]
let { key } = await Ozora.sendMessage(m.chat, {text: 'Sabar Loading'})

for (let i = 0; i < baralod.length; i++) {
await Ozora.sendMessage(from, {text: baralod[i], edit: key });
}
}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await Ozora.sendMessage(m.chat, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await Ozora.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

const { queryString } = require('object-query-string')
const photoOxy = (url, text) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; Redmi 9A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; Redmi 9A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 10; Redmi 9A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})
async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }

const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./setting/case.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }

async function uploadToCatbox(filePath) {
            const form = new FormData();
            form.append('fileToUpload', fs.createReadStream(filePath)); // file yang diupload
            form.append('reqtype', 'fileupload'); // reqtype harus "fileupload"
            try {
              const response = await axios.post('https://catbox.moe/user/api.php', form, {
                headers: {
                  ...form.getHeaders(),
                },
              });
          
              if (response.data) {
                // Ambil hanya nama file yang diunggah
                const filename = response.data.trim();
                return `${filename}`;
              } else {
                throw new Error('Gagal mendapatkan URL dari Catbox.');
              }
            } catch (error) {
              console.error('Error uploading to Catbox:', error.message);
              throw error;
            }
          }
          if (!Ozora.public) {
            if (isCreator && !m.key.fromMe) return
    }

if (autobio) {
const status = `${namabot} Online | runtime ${runtime(process.uptime())}`;
Ozora.updateProfileStatus(status).catch(_ => _);
}

//=========== Command Console ===========//
if (isCmd) {
console.log(chalk.white.bgBlack.bold(namaowner), color(`[ PESAN ]`, `white`),
chalk.white.bgBlack.bold(`\n乂 FROM :`), color(`${senderNumber}`, `white`),
chalk.white.bgBlack.bold(`\n乂 IN :`), color(m.isGroup ? "Group Chat" : "Private Chat", `white`),
chalk.white.bgBlack.bold(`\n乂 COMMAND :`), color(`🗣️ ${cmd}`, `white`),
chalk.white.bgBlack.bold(`\n乂 WAKTU :`), color(`${jam}`, `white`), color(`\n---------------------------`, `green`))
}

//=========== Auto Shalat ===========//
Ozora.autoshalat = Ozora.autoshalat ? Ozora.autoshalat : {}
    let id = m.chat
    if (id in Ozora.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        Ozora.autoshalat[id] = [
            Ozora.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./media/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete Ozora.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }  
//========= FAKE QUOTED =========//
//Reply
async function reply(txt) {
const Zora = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: `${global.idsaluran}`,
},
externalAdReply: {  
showAdAttribution: true,
title: `${namabot}`,
body: 'Subscribe My YouTube',
thumbnailUrl: `${imgreply}`,
sourceUrl: 'https://www.youtube.com/@B16_OFC',
},
},
text: txt,
}
return Ozora.sendMessage(m.chat, Zora, {
quoted: m,
})
}
const qtext2 = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "@ B16_OFC" }}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Terimakasih telah order"}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `B16_OFC`,jpegThumbnail: ""}}}

const qaudio = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {audioMessage: {seconds: 900030, ptt: true }}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285813708397:+62 858-1370-8397\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const qpayment = {
key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "IDR", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "B16_OFC"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "INR"}}}}

//========== FUNCTION ===========//
var ppuser
try {
ppuser = await Ozora.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

let example = (teks) => {
return `*Contoh Cara Command :*\nketik *${cmd}* ${teks}`
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

/*for (let ruztanX of imagenya){
if (budy === ruztanX) {
let imagebuffy = fs.readFileSync(`./testi/${ruztanX}.jpg`)
Ozora.sendImage(m.chat, result, '', m)
Ozora.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}*/

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

async function RuzReply(teks, jid = m.chat, mention = []) {
await Ozora.sendMessage(jid, {text: `${teks}`, contextInfo: {mentionedJid: mention, externalAdReply: {thumbnailUrl: global.imgreply, title: "©B16_OFC", body: `Selamat ${ucapan()}`, 
previewType: "0"}}}, {quoted: m})
}
    async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Upload failed"
  }
    }

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


	        

let menu = "`"
switch (command) {
case "menu":{
let menu = `

┏『 *I N F O R M A T I O N* 』━⊱
┣» *Tanggal* : ${tanggal}
┣» *Hari* : ${hari}
┣» *Jam* : ${jam}
┗━━━━━━━━━━━━━━━━⊱

┏『  *I N F O  B O T* 』━⊱
┣» *Nama Bot* : ${namabot}
┣» *Versi Script* : ${global.versisc}
┣» *Mode* : ${Ozora.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
┣» *Owner* : ${namaowner}
┣» *Prefix* : ${prefix}
┣» *Runtime* : ${runtime(process.uptime())}
┣» *Name* : ${pushname}
┣» *Number* : ${m.sender.split('@')[0]}
┣» *Status* : ${isCreator ? "Owner" : "User"}
┗━━━━━━━━━━━━━━━━⊱

${readmore}
┏『 *L I S T  M E N U* 』━⊱
┣» ${prefix}allmenu
┣» ${prefix}aimenu
┣» ${prefix}downloadmenu
┣» ${prefix}grupmenu
┣» ${prefix}ownermenu
┣» ${prefix}randommenu
┣» ${prefix}searchmenu
┣» ${prefix}toolsmenu
┗━━━━━━━━━━━━━━━━⊱

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break
//=========================\\
case "searchmenu":{
let menu = `
┏『 *Search Menu* 』━⊱
┣» ${prefix}ytplay
┣» ${prefix}spotify
┣» ${prefix}pin
┣» ${prefix}ttstalk
┣» ${prefix}vtuber
┣» ${prefix}webtoon
┣» ${prefix}film
┣» ${prefix}filmsearch
┣» ${prefix}anilist
┗━━━━━━━━━━━━━━━━⊱  

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break
//=========================\\
case "downloadmenu":{
let menu = `
┏『 *Download Menu* 』━⊱
┣» ${prefix}ytmp3
┣» ${prefix}ytmp4
┣» ${prefix}igdl
┣» ${prefix}gdrive
┣» ${prefix}igmp4
┣» ${prefix}tiktok
┣» ${prefix}tiktokhd
┗━━━━━━━━━━━━━━━━⊱  

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break
//=========================\\
case "aimenu":{
let menu = `
┏『 *Ai Menu* 』━⊱
┣» ${prefix}turbo
┣» ${prefix}morphic
┣» ${prefix}aio2
┣» ${prefix}gpt4
┗━━━━━━━━━━━━━━━━⊱  

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break
//=========================\\
case "ownermenu":{
let menu = `
┏『 Owner Menu 』━⊱
┣» ${prefix}backup
┣» ${prefix}autobio
┣» ${prefix}listgc
┣» ${prefix}restart
┣» ${prefix}getcase
┣» ${prefix}leave
┣» ${prefix}join
┣» ${prefix}public
┣» ${prefix}self
┣» ${prefix}idch
┣» ${prefix}block
┣» ${prefix}unblock
┣» ${prefix}addfile2
┣» ${prefix}autoread
┣» ${prefix}setppbot
┗━━━━━━━━━━━━━━━━⊱

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case 'listgc': {
	if(!isOwner) return m.reply(msg.owner)
	let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
	let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
	for (let i of anu) {
	let metadata2 = await Ozora.groupMetadata(i)
	teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
	 }
	Ozora.sendTextWithMentions(m.chat, teks)
	}
	break

//=========================\\
case "randommenu":{
let menu = `
┏『 *Random Menu* 』━⊱ ≫
┣» ${prefix}pantun
┗━━━━━━━━━━━━━━━━⊱  

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "toolsmenu":{
let menu = `
┏『 *Tools Menu* 』━⊱
┣» ${prefix}rvo
┣» ${prefix}totalfitur
┣» ${prefix}ssweb
┣» ${prefix}hd
┣» ${prefix}tomp3
┣» ${prefix}tovn
┣» ${prefix}sticker
┣» ${prefix}faketweet
┣» ${prefix}nglspam
┣» ${prefix}tr
┣» ${prefix}trackip
┣» ${prefix}spam-pairing
┣» ${prefix}get
┗━━━━━━━━━━━━━━━━⊱  

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "musicmenu":{
let menu = `

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "grupmenu":{
let menu = `
┏『 *Group Menu* 』━⊱
┣» ${prefix}linkgc
┣» ${prefix}add
┣» ${prefix}setppgc
┣» ${prefix}hidetag
┣» ${prefix}kick
┣» ${prefix}delete
┣» ${prefix}demote
┣» ${prefix}promote
┣» ${prefix}autoclosegc
┣» ${prefix}open
┣» ${prefix}close 
┣» ${prefix}kickall
┗━━━━━━━━━━━━━━━━⊱  

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "photooxy-menu":{
let menu = `

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "ephoto-menu":{
let menu = `

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "sad-sound":{
let menu = `

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "voicemenu":{
let menu = `

> ${namabot}`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break

case "allmenu":{
let menu = `
┏『 *All Menu* 』━⊱ 
┗━━━━━━━━━━━━━━━━⊱

┏『 *Ai Menu* 』━⊱ 
┣» ${prefix}turbo
┣» ${prefix}morphic
┣» ${prefix}aio2
┣» ${prefix}gpt4
┗━━━━━━━━━━━━━━━━⊱

┏『 *Download Menu* 』━⊱ 
┣» ${prefix}ytmp3
┣» ${prefix}ytmp4
┣» ${prefix}igdl
┣» ${prefix}gdrive
┣» ${prefix}igmp4
┣» ${prefix}tiktok
┣» ${prefix}tiktokhd
┗━━━━━━━━━━━━━━━━⊱

${readmore}


┏『 *Group Menu* 』━⊱
┣» ${prefix}linkgc
┣» ${prefix}add
┣» ${prefix}setppgroup
┣» ${prefix}hidetag
┣» ${prefix}kick
┣» ${prefix}delete
┣» ${prefix}demote
┣» ${prefix}promote
┣» ${prefix}autoclosegc
┣» ${prefix}open
┣» ${prefix}close 
┣» ${prefix}kickall
┗━━━━━━━━━━━━━━━━⊱


┏『 *Owner Menu* 』━⊱
┣» ${prefix}backup
┣» ${prefix}autobio
┣» ${prefix}listgc
┣» ${prefix}restart
┣» ${prefix}leave
┣» ${prefix}join
┣» ${prefix}self
┣» ${prefix}idch
┣» ${prefix}block
┣» ${prefix}unblock
┣» ${prefix}addfile2
┣» ${prefix}autoread
┣» ${prefix}setppbot
┗━━━━━━━━━━━━━━━━⊱


┏『 *Random Menu* 』━⊱
┣» ${prefix}pantun
┗━━━━━━━━━━━━━━━━⊱

┏『 *Search Menu* 』━⊱
┣» ${prefix}ytplay
┣» ${prefix}spotify
┣» ${prefix}pin
┣» ${prefix}ttstalk
┣» ${prefix}vtuber
┣» ${prefix}webtoon
┣» ${prefix}film
┣» ${prefix}filmsearch
┣» ${prefix}anilist
┗━━━━━━━━━━━━━━━━⊱



┏『 *Tools Menu* 』━⊱ 
┣» ${prefix}rvo
┣» ${prefix}totalfitur
┣» ${prefix}ssweb
┣» ${prefix}hd
┣» ${prefix}tovn
┣» ${prefix}tomp3
┣» ${prefix}sticker
┣» ${prefix}faketweet
┣» ${prefix}nglspam
┣» ${prefix}tr
┣» ${prefix}trackip
┣» ${prefix}spam-pairing
┣» ${prefix}get
┗━━━━━━━━━━━━━━━━⊱


> ${namabot}
`
Ozora.sendMessage(m.chat, {
image: fs.readFileSync('./media/Ozora.jpg'),
gifPlayback: false,
caption: menu,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: `Sc By Xv.Sydz`,
newsletterJid: idsaluran,
},
externalAdReply: {
title: `© Copyright ${namaowner}`,
body: namabot,
thumbnailUrl: thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true,
}}}, {quoted:m})
}
Ozora.sendMessage(m.chat, {audio: b, mimetype: "audio/mpeg", ptt: true, contextInfo: {
isForwarded: true, 
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: global.idsaluran
}, 
forwardedNewsletterMessageInfo: {
newsletterName: `${namabot}`,
newsletterJid: global.idsaluran}
}},{quoted: qpayment})
break
//========== Photo Maker ==========\\
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!text) return m.reply(`*Contoh Cara Command :*\nketik *${cmd}* ${namabot}`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
Ozora.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Done` }, { quoted: m })
}
break
//=\\
case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{
if (!text) return reply(`*Contoh Cara Command :*\nketik *${cmd}* ${namabot}`);
    m.reply(msg.wait)
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photoOxy(link, text);
Ozora.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Done`},
{ quoted: m }
);
}
break;
//========== Sound Menu ==========\\
case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'nightcore': 
case 'reverse': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'tupai': {
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(msg.wait)
let media = await Ozora.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
Ozora.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
}
break
//=\\
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
OzoraBot_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Ozora.sendMessage(m.chat, { audio: OzoraBot_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
//=\\
case"sad1":
case"sad2":
case"sad3":
case"sad4":
case"sad5":
case"sad6":
case"sad7":
case"sad8":
case"sad9":
case"sad10":
case"sad11":
case"sad12":
case"sad13":
case"sad14":
case"sad15":
case"sad16":
case"sad17":
case"sad18":
case"sad19":
case"sad20":
case"sad21":
case"sad22":
case"sad23":
case"sad24":
case"sad25":
case"sad26":
case"sad27":
case"sad28":
case"sad29":
case"sad30":
case"sad31":
case"sad32":
case"sad33":
case"sad34":
case"sad35":
OzoraBot_dev = await getBuffer(`https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`);
await Ozora.sendMessage(m.chat, { audio: OzoraBot_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
//=\\
case 'tovn': case 'toptt': case 'tovoice': {
if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
m.reply(msg.wait)
let media = await (m.quoted ? m.quoted.download() : m.download())
let audio = await toPTT(media, 'mp4')
await Ozora.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
}
break
//========== Download Menu ==========\\
case 'mediafire': {
if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
try {
const anu = await mediafireDl(text)
await Ozora.sendMessage(m.chat, { document: { url: anu[0].link }, caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu[0].name}\n*${setv} Size* : ${anu[0].size}\n*${setv} Type* : ${anu[0].type}\n*${setv} Link* : ${anu[0].link}`, fileName: anu[0].name, mimetype: anu[0].type }, { quoted: m })
} catch (e) {
m.reply('Server download sedang offline!')
}
}
break
//=\\
case 'ytplay':
case'play':
case 'song':
case 'music': {
if (!text) return reply(`Example :\n${prefix + command} Dj Drop Enakuen V5`);
reply(msg.wait)
try {
let yts = require("youtube-yts")
const { youtube } = require("btch-downloader")
let search = await yts(text)
let anup3k = search.videos[0]
const { title, thumbnail, url, timestamp, views } = anup3k
let { mp3 } = await youtube(url)
let doc = { 
audio: {
url: mp3
},
mimetype: 'audio/mp4',
fileName: `${title}.mp3`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 2,
mediaUrl: url,
title: title,
sourceUrl: url, 
thumbnail: await fetchBuffer(thumbnail)
}
}
};
await Ozora.sendMessage(m.chat, doc, { quoted: m });
} catch (e) {
console.log(e)
reply(msg.error)
}
}
break
//=\\
case 'ytmp3': { 
if (!text) return reply(`[ Example ] :\n> .ytmp3 <link youtube>`);
reply(msg.wait);
 try {
const { youtube } = require("btch-downloader")
let { mp3 } = await youtube(text)
let doc = { 
audio: {
url: mp3
},
mimetype: 'audio/mp4',
fileName: `terserah.mp3`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 2,
mediaUrl: 'https://youtube.com',
title: namabot,
sourceUrl: 'https://youtube.com'
}
}
};
await Ozora.sendMessage(m.chat, doc, { quoted: m });
} catch (error) {
console.log(error);
reply(msg.error);
    }
}
break
//=\\
case 'ytvideo':
case 'ytmp4': {
if (!text) return reply(' [ Example ] :\n> .ytmp4 <link youtube>')
reply('Tunggu Sebentar, Mungkin Proses Ini Agak Sedikit Lama..')
try {
const { youtube } = require("btch-downloader")
let { mp4 } = await youtube(text)
const ytc = `*[ YOUTUBE DOWNLOADER ]*

© ${namabot}`;

Ozora.sendMessage(m.chat, { video: { url:mp4}, caption: ytc }, { quoted: m })
} catch (e) {
reply(msg.error);
}
}
break
//=\\
case 'igvid': case 'igmp4': case 'igdl':{
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
   m.reply (msg.wait)
    let res;
    try {
        res = await fetch(`https://aemt.uk.to/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await Ozora.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break
//========== Owner Menu ===========\\
case 'backup': {
if (!isOwner) return m.reply(msg.owner)
let jir = m.mentionedJid[0] || m.sender || Ozora.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await m.reply('Mengumpulkan semua file ke folder...');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
await m.reply('Script akan dikirim lewat PC!')
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await Ozora.sendMessage(jir, {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "OzoraBackup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break
//=\\
case 'autobio': {
if (!isOwner) return m.reply(msg.owner)
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autobio = true
await m.reply('Sukses mengaktifkan autobio.')
} else if (args[0] === 'off') {
global.autobio = false
await m.reply('Sukses menonaktifkan autobio.')
}}
break
//=\\
case 'restart': {
if (!isCreator) return m.reply(msg.owner)
m.reply(`Sedang memulai restart server`)
await sleep(3000)
process.exit()
}
break
//=\\
case 'getcase':
try{
if (!isCreator) return reply(msg.owner)
if (!q) return reply(`Example: ${prefix + command} play`) 
if(q.startsWith(prefix)) return reply("Query tidak boleh menggunakan prefix")
let ozora = await getCase(q)
reply(ozora)
} catch(err){
console.log(err)
reply(`Case ${q} tidak di temukan`)
}
break 
//=\\
case 'self': {
if (!isCreator) return reply(msg.owner)
Ozora.public = false
reply('*Sukses Mengubah Ke Mode Self*')
}
break
//=\\
case 'public': {
if (!isCreator) return reply(msg.owner)
Ozora.public = true
reply('*Sukses Mengubah Ke Mode Public*')
}
break
//=\\
case 'join': {
if (!isCreator) return m.reply(msg.owner)
if (!text) return m.reply('Masukan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
const result = args[0].split('https://chat.whatsapp.com/')[1]
m.reply(msg.wait)
await Ozora.groupAcceptInvite(result).catch((res) => {
if (res.data == 400) return m.reply('Group Tidak Di Temukan❗');
if (res.data == 401) return m.reply('Bot Telah Di Kick Dari Group Inj❗');
if (res.data == 409) return m.reply('Bot Berhasil Bergabung Ke Group❗');
if (res.data == 410) return m.reply('Link Group Telah Di Reset❗');
if (res.data == 500) return m.reply('Full Member Group❗');
})
}
break
//=\\
case "leave": {
if (!isCreator) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
await m.reply(`Bye, ${namabot} Akan Keluar Dari Group Ini!`)
await sleep(2000)
await Ozora.groupLeave(m.chat)
}
break
//=\\
case 'setppbot': case 'setbotpp': {
if (!isCreator) return m.reply(msg.owner)
if (!quoted) return m.reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await Ozora.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Ozora.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(`Success`)
} else {
var memeg = await Ozora.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(`Success`)
}
}
break
//=\\
case 'delppbot': {
if (!isOwner) return m.reply(msg.owner)
await Ozora.removeProfilePicture(botNumber)
await m.reply(`Sukses menghapus pp bot!`)
}
break
//=\\
case 'idch': {
if (!isOwner) return m.reply(msg.owner)
if (!m.quoted) return m.reply('reply saluran channel nya')
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo 
let send_ch = `*BERIKUT DATA CHANNEL ANDA*\n
*Name Channel*: ${id.newsletterName}\n*ID Channel*: ${id.newsletterJid}
`
m.reply(send_ch) 
} catch (e) {
m.reply('Harus chat dari channel bang') 
}
}
break
//=\\
case 'block':
if (!isCreator) return reply(msg.owner);
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await Ozora.updateBlockStatus(users, "block")
reply(`Sukses block user`)
} else {
reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await Ozora.updateBlockStatus(woke, "block")
} else if(!q){
reply("Masukan nomer yang ingin di block")
}
reply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
//=\\
case 'unblock':
if (!isCreator) return reply(msg.owner);
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await Ozora.updateBlockStatus(users, "unblock")
await m.reply(`Sukses unblock user`)
} else if(!q){
m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await Ozora.updateBlockStatus(woke, "unblock")
reply(`Sukses unblock ${woke}`)
} else if(!q){
reply("Masukan nomer yang ingin di unblock")
}

}
break
//=\\
case 'readchange': case 'autoread':{
if (!isCreator) return 
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on') {
global.autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off') {
global.autoread = false
m.reply(`Berhasil mengubah autoread ke ${q}`)
}
    }
break
//=========================\\
case 'linkgroup':
case 'linkgrup':
case 'linkgc': {
 if (!m.isGroup) return reply(msg.group)
 if (!isAdmin && !isCreator) return reply('Aduh Masbro Lu Bukan Admin!')
 if (!isBotAdmin) return reply('Bot Bukan Admin😔')
 let response = await Ozora.groupInviteCode(m.chat)
 Ozora.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m,  {
  detectLink: true
 })
}
break
//=========================\
case 'welcome':
case 'left': {
 if (!m.isGroup) m.reply(msg.group)
if (!isAdmin && !isCreator) return m.reply("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
 if (args[0] === 'on') {
welcome = true
m.reply(`${command} is enabled`)
 } else if (args[0] === 'off') {
welcome = false
m.reply(`${command} is disabled`)
 }else {
await Ozora.sendMessage(m.chat, { poll: { name: 'Pilih On Or Off?', values: [`${command} on`,`${command} off`] } }, { quoted: m})
}
}
break
//=========================\\
case 'tohd': case 'remini': case 'hd': {
if (/image/.test(mime)) {
const { remini } = require('../all/remini')
let media = await (m.quoted ? m.quoted.download() : m.download())
remini(media, 'enhance').then(a => {
Ozora.sendMessage(m.chat, { image: a, caption: msg.done }, { quoted: m });
});
} else {
m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
}
}
break
//=========================\\
case 'totalfitur': {
const total = ((fs.readFileSync('./setting/case.js').toString()).match(/case '/g) || []).length
m.reply(`Total Fitur : ${total}`);
}
break
//=========================\\
case '🐦':
case 'rvo':
case '🤫🧏': {
	if (!m.quoted) return reply(`Balas untuk melihat pesan sekali`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`Itu bukan pesan sekali lihat`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Ozora.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return Ozora.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
//=========================\\
case 'ssweb': {
if (!text) return m.reply(`Example: ${prefix + command} https://example.com/xxxxxxx`)
try {
if (!text.startsWith('http')) {
let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
await Ozora.sendMessage(m.chat, { image: { url: buf }, caption: msg.done }, { quoted: m })
} else {
let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
await Ozora.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
}
} catch (e) {
m.reply(msg.error)
}
}
break
//=========================\\
case 'add': {
if (!m.isGroup) return reply(msg.group)
if(!isCreator) return reply(msg.owner)
if (!isBotAdmin) return reply('Bot Bukan Admin😔')
if (!text) return reply(`Masukkan Nomor Nya \nExample : 62895xxxxxx`)
let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await Ozora.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
reply(msg.done)
break 
}
//=========================\\
case 'autoclosegc': {
if (!m.isGroup) return reply(msg.grouo)
if (!isAdmin && !isCreator) return reply('Aduh Masbro Lu Buka. Admin!')
if (!isBotAdmin) return reply('Bot Bukan Admin😔')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Gunakan:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Auto Close ${q} Sudah Di Mulai Sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*GRUP CLOSE* Group Di Tutup Otomatis Oleh Bot/Admin\nSekarang Hanya Admin Yang Bisa Chat`
Ozora.groupSettingUpdate(m.chat, 'announcement')
reply(close)
}, timer)
}
break
//=========================\\
case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmin) return reply('Fitur Khusus Admin!')
if (!isBotAdmin) return reply('Bot Bukan Admin😔')
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var mediz = await Ozora.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await Ozora.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(msg.done)
} else {
var memeg = await Ozora.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(msg.done)
}
}
break
//=========================\\
case 'toaud': 
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
reply(msg.wait)
let media = await Ozora.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
Ozora.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })

}
break
//=========================\\
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
reply(msg.wait)
let media = await Ozora.downloadMediaMessage(qmsg)
let audio = await toAudio(media, 'mp4')
Ozora.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By B16_OFC.mp3`}, { quoted : m })

}
            break
//=========================\\
case 's':
case 'stiker':
case 'sticker': {
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Ozora.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Ozora.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Balas Video/Image Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=========================\\
case 'ozora-chat': {
if (!text) return reply("Hai, ada yang mau kamu diskusikan hari ini")
async function v_girl(text,prompt, name) {
try {
const response = await axios.post('https://boredhumans.com/virtual_girlfriends/virtual_girlfriends_api.php',
      `prompt=${text.replace(/\s+/g, "%2520")}&chat_id=lwle4nyomx5t0w6quo8&init_prompt=${prompt.replace(/\s+/g, "%2520")}&voice_id=XrExE9yKIg1WjnnlVkGX&stability=0.5&similarity_boost=0.75&name=${name.replace(/\s+/g, "%2520")}&useAudio=false&dateLoc=Bookstore`,
      {
        headers: {
          'User-Agent': 'Googlebot-News',
         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
    return response.data
    } catch (e) {
    return e
    }
    }

let prompt = `${namabot} is a beginner WhatsApp bot maker `, name = `${namabot}`
        let {
            output
        } = await v_girl(text, prompt, name);
        await m.reply(output[0]);
}
break
//=========================\\
case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await Ozora.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
//=========================\\
case 'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(msg.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break
//=========================\\
case 'gpt4': {
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, `nama mu adalah ${namabot}, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan`)
m.reply(kanjuthann)
}
break
//=========================\\
case 'film': {
 const query = m.body.slice(5).trim();
 if (!query) {
 return m.reply("Silakan masukkan judul film yang ingin dicari.");
 }
// wm avz
 async function avzzzz(query) {
 try {
 const response = await axios.get(`https://tv.lk21official.my/search.php?s=${query}`);
 const html = response.data;
 const $ = cheerio.load(html);
 let results = [];
// wm avz
 $('.search-item').each((index, element) => {
 const title = $(element).find('h3 a').text().trim();
 const url = 'https://tv.lk21official.my' + $(element).find('h3 a').attr('href');
 const director = $(element).find('p strong:contains("Sutradara:")').parent().text().replace("Sutradara:", "").trim();
 const cast = $(element).find('p strong:contains("Bintang:")').parent().text().replace("Bintang:", "").trim();
// wm avz
 results.push({
 title,
 url,
 director,
 cast
 });
 });
// wm avz
 return results;
 } catch (error) {
 console.error(error);
 return [];
 }
 }
// wm avz
 const results = await avzzzz(query);
 if (results.length === 0) {
 return m.reply("Tidak ditemukan hasil untuk pencarian: " + query);
 }
// wm avz
 let message = "Hasil pencarian untuk: *" + query + "*\n\n";
 results.forEach((result) => {
 message += `Title: ${result.title}\n`;
 if (result.director) {
 message += `Sutradara: ${result.director}\n`;
 }
 if (result.cast) {
 message += `Bintang: ${result.cast}\n`;
 }
 message += `Url: ${result.url}\n\n`;
 });
// wm avz
 m.reply(message);
}
break
//=========================\\
case 'webtoon':{
async function webtoons(query) {
//wm senn
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
//wm senn
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
//wm senn
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> a > div > p.subj').text(),
//wm senn
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
//wm senn
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: $(b).find('> a').attr('href')
                }
//wm senn
                hasil.push(result)
                })
//wm senn
                resolve(hasil)
            })
            .catch(reject)
    })
}
//wm senn
if (!text) return  m.reply('Masukan judul yang ingin dicari!!\nContoh: .webtoon lookism');
let results = await webtoons(text)
if (results.length > 0) {
//wm senn
let message = `Hasil dari pencarian ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.judul}\nLike : ${result.like}\nCreator : ${result.creator}\nGenre : ${result.genre}\nLink Baca : ${result.url}\n\n`;
 });
//wm senn
m.reply(message)
 } else {
m.reply('Tidak Ada Hasil.');
}
//wm senn
}
break
//=========================\\
case 'addfile2': {
    if (!isOwner) return reply(msg.owner)
    if (!text.includes("./")) return m.reply(`Contoh: ${prefix + command} ./path/to/file.txt`);
    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return m.reply('Direktori tidak ditemukan!');
    }
    
    // Pastikan pesan yang dikutip berisi dokumen
    if (!m.quoted) {
        return m.reply('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); // Gunakan let agar buffer bisa diubah
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            m.reply(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            m.reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break;

case 'get': {
if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
try {
const gt = await axios.get(text, {
headers: {
"Access-Control-Allow-Origin": "*",
"Referer": "https://www.google.com/",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return m.reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return m.reply(textData);
} else if (text.includes('webp')) {
return Ozora.sendMessage(m.chat, { sticker: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/image/i.test(contentType)) { return Ozora.sendMessage(m.chat, {image: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/video/i.test(contentType)) { return Ozora.sendMessage(m.chat, {video: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/audio/i.test(contentType) || text.includes(".mp3")) {
return Ozora.sendMessage(m.chat, {audio: {url: text}, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/${owner}/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `${namabot}`,
                    sourceUrl: "",
                    thumbnail: thumb
                }
            }}, { quoted: m })
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return Ozora.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);			
} else if (/application\/pdf/i.test(contentType)) {
return Ozora.sendMessage(
			m.chat,
			{
				document: { url: text },
				fileName: ``,
				mimetype: text,
			},
			{ quoted: m },
		);
} else {
return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break;
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  Ozora.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error bang")
}
}
break
//=========================\\
case 'aio2': {
  if (!text) return reply(`Example: ${prefix + command} link tt lu`)
async function aio(url){
	return new Promise(async(resolve,reject) => {
		
 const { data: rest } = await axios.get("https://steptodown.com/")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://steptodown.com/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "PHPSESSID=658754a80bacc095aced0be8e110f3b4; pll_language=en",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}
let sonice = await aio(text)
let wpol = `[ *AIO DOWNLOADER* ]

${sonice.title}

Durasi: ${sonice.duration}
Source: ${sonice.source}
Size: ${sonice.medias[0].formattedSize} || ${sonice.medias[0].size}
Quality: ${sonice.medias[0].quality}
MimeType: ${sonice.medias[0].extension}
`
await Ozora.sendMessage(m.chat, { video: { url: sonice.medias[0].url }, caption: wpol }, { quoted: m })
}
break
//=========================\\
case 'tr': {
  if (!text) return reply(`reply yang mau ditranslate`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
m.reply(`${banjir[0]}, ${banjir[1]}`)
}
break
//=========================\\
case 'anilist': {
  if (!text) return m.reply("Example: .anilist naruto")
function anilist(query) {
  return new Promise((resolve, reject) => {
    axios.get('https://anilist.co/search/anime?search=' + query)
      .then(response => {
        const $ = cheerio.load(response.data);
        const anime = []
        const ling = []
        const image = []
        
        $('div.media-card a').each(function(a, b) {
          ling.push('https://anilist.co' + $(b).attr('href'))
        })
        
        $('div.media-card a img').each(function(a, b) {
          image.push($(b).attr('src'))
        })
        
        for (let i = 0; i < 10; i++) {
          const link = ling[i]
          const gambar = image[i]
          anime.push({
            link, gambar
          });
        }
        resolve(anime);
      })
      .catch(error => {
        reject(error);
      });
  });
}

async function anilistdetail(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');

    const animeData = {
      title,
      description
    };

    return animeData
  } catch (error) {
    console.error(error);
  }
}
const date = await anilist(text)
const kanjut = await anilistdetail(date[0].link)
Ozora.sendMessage(m.chat, {image: {url: `${date[0].gambar}`}, caption: `Hasil Pencarian Anime:

Judul: ${kanjut.title}
Deskripsi: ${kanjut.description}
Link: ${date[0].link}
`}, {quoted: m})
}
break
//=========================\\
case 'ttstalk':{
//wm senn
async function tiktokStalk(user) {
    let res = await axios.get(`https://urlebird.com/user/${user}/`)
//wm senn
         let $ = cheerio.load(res.data), obj = {}
             obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
                 obj.name = $('h1.user').text().trim()
//wm senn
                 obj.username = $('div.content > h5').text().trim()
               obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
//wm senn
           obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
//wm senn
     obj.description = $('div.content > p').text().trim()
  return obj
//wm senn
} 
if (!text) return m.reply(`Masukan nama pengguna!!\nExample ${prefix + command} sen.h`)
//wm senn
let data = await tiktokStalk(text)
let cap = `\`\`\`「 Tiktok Stalk 」\`\`\`

Nama : ${data.name}
Username : ${data.username}
Pengikut : ${data.followers}
Mengikuti : ${data.following}
Bio : ${data.description}
`

Ozora.sendMessage(m.chat, { image: { url: data.pp_user }, caption: cap }, { quoted: m })

}
break
//=========================\\
case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Ozora.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Ozora.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
        break
//=========================\\
case "removebg": case "nobg": {
try {
    const media = await Ozora.downloadAndSaveMediaMessage(qmsg);
    let urlnj = await uploadUguu(media);
    let buuhv = await fetchJson(`https://aemt.uk.to/removebg?url=${urlnj}`);
    const vbbjjhbbuub = buuhv.result.urls;
    await Ozora.sendMessage(m.chat, {
        image: { url: vbbjjhbbuub },
        caption: "Done",
    }, { quoted: m });

} catch (err) {
    console.error("Error during background removal:", err);
}
}
break
//=========================\\
case 'tthd': 
case 'tiktokhd': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await Ozora.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await Ozora.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
//=========================\\
case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

> ${global.namabot}`;
await Ozora.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await Ozora.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break
//=========================\\
case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break
//=========================\\
case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await Ozora.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
//=========================\\
case 'vtuber': {
if (!text) return reply(`Example ${prefix+command} kobo kanaeru`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
    try {
        const result = await wiki(vtuber);
        if (!result.image_url) return { error: "No such vTuber" };
        return result;
    } catch (err) {
        return { error: "No such vTuber" };
    }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VTUBER WIKI* ]

Judul: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

Ozora.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: m})
} catch (e) {
  m.reply(e)
}
}
break
//=========================\\
case 'turbo': {
if (!q) return m.reply(`where the question`)
const fetch = require('node-fetch');
// wm avz
async function avvmx(av) {
    try {
        const avis = await fetch("https://www.turboseek.io/api/getAnswer", {
            method: "POST",
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android 13; Infinix HOT 40 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36",
                Referer: "https://www.turboseek.io/",
                "av-Type": "application/json"
            },
            body: JSON.stringify({
                question: av,
                sources: []
            })
        });
// wm avz
        const data = await avis.text();
        const avv = data.split("\n").map(line => {
            try {
                return JSON.parse(line.slice(6)).text;
            } catch (e) {
                return "";
            }
        });
// wm avz
        const avosky = avv.join("").trim();
        const avoskyy = `${avosky}`;
// wm avz
        return avoskyy.trim();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
// wm avz
async function avoskyyy(m, question) {
    const answer = await avvmx(question);
    if (answer) {
        m.reply(answer);
    } else {
        m.reply("Terjadi kesalahan.");
    }
}
// wm avz
const avosks = `${q}`  
avoskyyy(m, avosks);
}
break
//=========================\\
case 'pantun':{
const jeson = await fetchJson('https://raw.githubusercontent.com/tanakasenn/Database-Json/refs/heads/main/Pantun.json')
let pantunnya = jeson[Math.floor(Math.random() * jeson.length)];
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: pantunnya
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: ''
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    subtitle:  `${namabot} Asistent`,
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\"${prefix}pantun\"}`
                        }
                      ],
                   }
                 )
               }
             )
          }
       }
    }, {
     quoted : m
   }
 )
await Ozora.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
//=========================\\
case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
  .setTheme("dim")
  .setUser({displayName: nama1, username: nama2})
  .setVerified(true)
  .setComment(katakata)
  .setAvatar(ppuser)
  .build();
 let tanaka = tweet
  Ozora.sendMessage(m.chat, { image: tanaka, caption: msg.done },{ quoted : m })     
}
break
//=========================\\
case 'nglspam': {
if (!isOwner) return reply(msg.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam Ozora|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return m.reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return m.reply("Fitur error, coba lagi nanti.");
    }
}
break
//=========================\\
case "kik": case "kick": {

if (!isGroup) return RuzReply(msg.group)
if (!isBotAdmin) return RuzReply(msg.adminbot)
if (!isOwner) return RuzReply(msg.owner)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Ozora.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Ozora.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
//=========================\\
case "hidetag": case "z": case "h": {

if (!isGroup) return RuzReply(msg.group)
if (!isBotAdmin) return reply(msg.adminbot)
if (!isAdmin && !isOwner) return RuzReply('Aduh Masbro Lu Bukan Admin!')
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Ozora.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
//=========================\\
case "open": {

if (!isGroup) return RuzReply(msg.group)
if (!isBotAdmin) return RuzReply(msg.adminbot)
if (!isAdmin && !isOwner) return RuzReply('Aduh Masbro Lu Bukan Admin!')
await Ozora.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
//=========================\\
case "close": {

if (!isGroup) return RuzReply(msg.group)
if (!isBotAdmin) return RuzReply(msg.adminbot)
if (!isAdmin && !isOwner) return RuzReply('Aduh Masbro Lu Bukan Admin!')
await Ozora.groupSettingUpdate(m.chat, 'announcement')
m.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
//=========================\\
case 'delete': case 'del': case 'd':{

if (!isGroup) return RuzReply(msg.group)
if (!isBotAdmin) return RuzReply(msg.adminbot)
if (!isAdmin && !isOwner) return RuzReply('Aduh Masbro Lu Bukan Admin!')
let key = {}
try {
key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
} catch (e) {
console.error(e)
}
Ozora.sendMessage(m.chat, { delete: key })
}
break
//=========================\\
case "demote": case "demote": {

if (!isGroup) return RuzReply(msg.group)
if (!isAdmin && !isOwner) return RuzReply('Aduh Masbro Lu Bukan Admin!')
if (!isBotAdmin) return RuzReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Ozora.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
//=========================\\
case "promote": case "promot": {

if (!isGroup) return RuzReply(msg.group)
if (!isAdmin && !isOwner) return RuzReply('Aduh Masbro Lu Bukan Admin!')
if (!isBotAdmin) return RuzReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Ozora.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62838XXX'))}
break
//=========================\\
case "owner": {
Ozora.sendContact(m.chat, [owner], "Telfon/VC = Blokir", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: await fs.readFileSync("./media/Menu.jpg"), 
title: `© Copyright ${global.namaowner}`, 
renderLargerThumbnail: true, 
sourceUrl: global.linkyt, 
mediaType: 1
}}})
}
break
//=========================\\
case 'kickall': {
 if (!m.isGroup) return m.reply('Fitur Khusus Group!')
 if (!isCreator && !isAdmin) return m.reply('Fitur Khusus Owner & Admin!')
 if (!isBotAdmin) return m.reply('Saya Bukan Admin grup!')
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await Ozora.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(3000);
 }
 m.reply(msg.done);
}
break
//=========================\\
case 'spam-pairing': {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
reply(msg.wait)
let [spammmk, pairingmmk= "200"] = text.split("|")

let target = pairingmmk.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < spammmk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
await sleep(2000);
}
m.reply(msg.done);
}
break
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Ozora.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Ozora.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Ozora.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Ozora.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Ozora.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Ozora.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

Ozora.Zora = Ozora.Zora ? Ozora.Zora : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Ozora.Zora[sender]) return;

    if (
        m.text.startsWith("") ||
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Ozora.Zora[sender] && m.text) {
        let name = Ozora.getName(sender);
        //await Ozora.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        const prompt = `Nama Lu Pasti B16_OFC, Aku Sendiri Adalah: Ozora Di Buat Oleh B16_OFC Diciptakan Untuk Permudah Apa Saja, Aku Tinggal Di Depok, Script ini Di Buat Sama B16_OFC Ya Jika Berminat Gas kontak wa.me/6285813708397`;
        const apiUrl = `https://aemt.uk.to/prompt/gpt?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(m.text)}`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { 'accept': 'application/json' }
            });

            const responseData = response.data;
            const answer = responseData.result;
            //await Ozora.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
            m.reply(answer);
            Ozora.Zora[sender].messages = [
                { role: "system", content: `Halo, saya Zora Asistent, dikembangkan oleh B16_OFC Anda sedang berbicara dengan ${name}` },
                { role: "user", content: m.text }
            ];
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }

Ozora.menfess = Ozora.menfess ? Ozora.menfess : {}
         let mf = Object.values(Ozora.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return reply(`Balas Pesan Menfess Mu Di Private Chat`)
            if (!/conversation|extended/.test(m.mtype)) return reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await Ozora.sendMessage(mf.from, { text: text }).then(async () => {
               reply(`Berhasil Terkirim!!`)
               await sleep(1000)
               delete Ozora.menfess[mf.id]
               return !0
            })
         }     

}} catch (e) {
console.log(e)
Ozora.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}

Command From : ${m.sender.split("@")[0]}`}, {quoted: m})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
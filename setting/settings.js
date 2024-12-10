// Ozora Bot V1.2
/*
• Sc Ini Menggunakan Base Dari Ruztan Dan Di Fix Oleh FallZx, Dan Base Ini Di Recode Oleh Zora (B16_OFC)

• Apa Bila Ada Yang Menghapus Credits Ini Maka Akan Mendapatkan Dosa Besar
*/


require("../all/module.js")

//========== Setting Owner ==========\\
global.owner = "6285771756455"
global.namaowner = "ＯＦＣ.ＳＹＡＤＢＯＴＺ"
global.linkyt = 'https://om0yara69nuaw4q4ewnmqw.on.drv.tw/xv.sydz/'

//========== Setting Bot ==========\\
global.idsaluran = "https://om0yara69nuaw4q4ewnmqw.on.drv.tw/xv.sydz/"
global.namabot = "ᴏғᴄ.sʏᴀᴅʙᴏᴛᴢ"

//SAWERIA 
global.mail = 'imsyad8@gmail.com'
global.versisc = '3'

//========== Setting Event ==========\\
global.autobio = false
global.autoread = true
global.anticall = true
global.autoreadsw = false
global.owneroff = false
global.autopromosi = false

//—————「 Set Wm 」—————\\
global.packname = 'ᴏғᴄ.sʏᴀᴅʙᴏᴛᴢ '
global.author = 'ᴏғᴄ.sʏᴀᴅʙᴏᴛᴢ'
global.prefa = ['', '.']
global.sp = '•'

//========== Setting Foto ===========\\
global.imgreply = "https://pomf2.lain.la/f/u8hvoq2t.jpg"
global.thumb = "https://pomf2.lain.la/f/u8hvoq2t.jpg"
global.imgmenu = fs.readFileSync("./media/Menu.jpg")

//========= Setting Payment =========\\
//Kalo Gak Ada Isi Aja jadi "Gak Ada"
global.dana = "085883225704"
global.gopay = "-"
global.ovo = "-"
global.qris = "-"
                             
//========= Setting Message =========\\
global.msg = {
"error": "Error 404",
"done": "Done Masbro ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot", 
"developer": "Command Ini Hanya Untuk Developer Bot!"
}

//========= Batas =========\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
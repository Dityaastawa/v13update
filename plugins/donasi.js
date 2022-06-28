let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [085792429140]
│ •  [085792429140]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
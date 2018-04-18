



exports.run = (client, message, args) => {

    message.channel.send({embed: {
			color: 3447003,
			author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
			},
			title: "**[Event] Pokemon Battle**",
			url: "https://discord.gg/CHkK8Y5",
			thumbnail: {
			url: "https://image.ibb.co/dWKkcH/donate_heart_hands_1.png"
			},
			image: {
			url: "https://image.ibb.co/bHbrpx/pokemon_coming_soon.png"
			},
			description: "Kami merencanakan akan mengadakan event Pokemon Battle \nTetapi sampai saat ini, masih stuck untuk waktu pelaksanaan, hadiah dan pengurus event. Kami ingin mengajak kamu berdiskusi bersama untuk event kita bersama juga",
			fields: [{
				name: "**Problems**",
				value: "• Waktu yang belum ditentukan \n• Tanggung Jawab Pelaksana \n• Hadiah peserta dan Pemenang \n• Mekanisme Battle"
				},
				{
				name: "**You are invited!**",
				value: "Kamu yang melihat chat ini kami undang untuk bergabung berdiskusi bersama kami di official channel planning. \nKetikan `~join 13` untuk bergabung kedalam channel!"
				}
			],
			timestamp: new Date(),
			footer: {
			icon_url: client.user.avatarURL,
			text: "Created by Palupi"
				}
			}	
			
	});
}
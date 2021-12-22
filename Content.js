let loganimages = [
    "https://media.discordapp.net/attachments/771059026238636082/923027702611578940/56E05FD6-16B4-4DCD-B1BA-676E980DF723.jpg",
    "https://media.discordapp.net/attachments/771059026238636082/923027702338973717/93E59F72-E0AA-4A70-9E67-A6307458648C.jpg?width=604&height=676",
    "https://media.discordapp.net/attachments/771059026238636082/923027701781110804/C6434F7F-8CE8-448F-9E76-0B33B5679395.jpg?width=508&height=676",
    "https://media.discordapp.net/attachments/771059026238636082/923027405667438683/IMG_1965.png?width=312&height=675",
    "https://media.discordapp.net/attachments/771059026238636082/923027287513923624/F101BF96-566A-4243-8AA7-1E5760220487.jpg?width=508&height=676",
    "https://media.discordapp.net/attachments/771059026238636082/923027173860839535/Zxzxc.jpg?width=508&height=676",
    "https://media.discordapp.net/attachments/771059026238636082/923027173537873920/logan_wtf.jpg?width=508&height=676",
    "https://media.discordapp.net/attachments/771059026238636082/923027173110083614/IMG_8274.png?width=383&height=676",
    "https://media.discordapp.net/attachments/771059026238636082/923027172724191282/cachedImage.png",
    "https://media.discordapp.net/attachments/771059026238636082/923027171956654080/cachedImage.png",
    "https://media.discordapp.net/attachments/771059026238636082/923025224348360744/IMG_1966.png?width=312&height=675",
    "https://media.discordapp.net/attachments/771059026238636082/923031233938739230/9286464B-0F53-45FF-A633-288BCA5F9E19.jpg?width=410&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923031234643382302/DDCE0531-1727-4B0A-95A9-1926BEFEBB2A.jpg",
    "https://media.discordapp.net/attachments/771059026238636082/923031235054407730/1E35F3E2-4436-433F-AD00-5E3D6406955B.jpg?width=583&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923031288896712764/BCB43907-2075-45A9-8B1C-B4B8887BFB8C.jpg?width=329&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923032899920494622/IMG_2454.png?width=585&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923033041612464148/IMG_5195.jpg?width=303&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923033121321001020/unknown.png",
    "https://media.discordapp.net/attachments/771059026238636082/923033059928985660/IMG_5163.jpg?width=586&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923033741067182090/392A1CAF-0E4E-4924-B8F5-C9764BC21ADC.jpg?width=329&height=439",
    "https://cdn.discordapp.com/attachments/771059026238636082/923033832624619530/aasaassaasas.png",
    "https://media.discordapp.net/attachments/771059026238636082/923033873707831336/cumn_moment.png?width=247&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923033925360685106/fasdassas.png",
    "https://media.discordapp.net/attachments/771059026238636082/923034006616956948/penis.PNG?width=326&height=439",
    "https://cdn.discordapp.com/attachments/771059026238636082/923034183503339560/unknown.png",
    "https://media.discordapp.net/attachments/771059026238636082/923034305284956160/A40B334D-8A90-4E78-9F9B-037DD0D0DD82.jpg?width=330&height=439",
    "https://cdn.discordapp.com/attachments/771059026238636082/923034391263973426/llll.PNG",
    "https://cdn.discordapp.com/attachments/771059026238636082/923034403435839528/0E956146-2D55-449E-AC29-98D18AC1DC6C.jpg",
    "https://media.discordapp.net/attachments/771059026238636082/923034481378607146/2864477A-AEFE-4E1B-B6AE-A0FB43F40F5D.jpg?width=439&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923034546386141215/D42962E7-63AF-4853-A9C5-388FE57E7A11.jpg?width=256&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923034593202958347/5B72B963-3895-4E8C-BB9D-D73CD14A4AC1.jpg?width=329&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/923034723243159612/0A9A42D3-E2A6-40DA-8400-3EAC3F7F0719.jpg?width=329&height=439",
    "https://media.discordapp.net/attachments/771059026238636082/920556640875470888/IMG_1002.png"
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random()*loganimages.length)
    imgs[i].src = loganimages[randomImg]
}
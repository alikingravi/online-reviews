"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("products", [
      {
        name: "iPhone XS",
        price: 890.0,
        description:
          "5.8 Inch super Retina display (OLED) with HDR. IP68 dust and water resistant (maximum depth of 2 m up to 30 minutes). 12MP dual cameras with dual OIS and 7MP True Depth front camera—Portrait mode, Portrait Lighting, Depth Control, and Smart HDR. Face ID for secure authentication and Apple Pay. A12 Bionic with next-generation Neural Engine.",
        imageUrl:
          "https://brain-images-ssl.cdn.dixons.com/7/4/10185947/l_10185947_002.jpg",
        youtubeId: "npR0Tamac9Y",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ASUS VG258QR",
        price: 286.0,
        description:
          "Designed for intense, fast-paced games, ASUS VG258QR is a 27? Full HD gaming display with an ultra-fast 0.5ms* response time and blazing 165hz refresh rate to give you super-smooth gameplay. VG278QR features Adaptive-Sync (G-Sync) technology to eliminate screen tearing and choppy frame rate. Gamer-centric features like ASUS Game Plus enhances your in-game experience, while Game Visual provides various pre-set display modes to optimize visuals for different types of games.",
        imageUrl:
          "https://media.4rgos.it/s/Argos/7416886_R_SET?$Main768$&w=620&h=620",
        youtubeId: "p-XIvCQDQxU",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Audio Technica ATH-M50X",
        price: 109.0,
        description:
          "This is the most critically acclaimed model in the M-Series line, praised by top audio engineers and pro audio reviewers year after year. The ATH-M50x features the same coveted sonic signature, now with sound isolating earcups and robust construction, the M50x provides an unmatched experience for the most critical audio professionals.",
        imageUrl:
          "https://eu.audio-technica.com/image/cache/data/ATH_M50x_2_sq-500x500.jpg",
        youtubeId: "y5DyEYuvF3o",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Amazon Echo Dot",
        price: 29.99,
        description:
          "Our most popular Echo is now even better. With a new speaker and design, Echo Dot is a voice-controlled smart speaker with Alexa that's perfect for any room. Just ask for music, news, information and more. You can also call almost anyone, and control compatible smart home devices with your voice.",
        imageUrl:
          "https://brain-images-ssl.cdn.dixons.com/4/8/10186584/l_10186584_002.jpg",
        youtubeId: "donzwjV3yyI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Henry Vacuum",
        price: 120,
        description:
          "With over 10 million Henrys made and most still in use today, he really is the vacuum you can trust. Henry's great features make cleaning easy, including his super long-reach, trouble free rewind 10 m cable, huge 6 Litre capacity and on-board tool storage.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/611R9YOYLaL._AC_SL1090_.jpg",
        youtubeId: "88iVCBe_ho8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Samsung 55" TU7000 HDR Smart 4K TV',
        price: 399,
        description:
          "Lose yourself in crystal clear colour with the Samsung TU7000 HDR Smart 4K TV. Picture detail unveiled like never before. Relax with a TV that adapts to give you the very best 4K picture and targeted sound. Easily discover ever more ways to enjoy TV, only with Samsung Smart TV. Every sound perfected for what you’re watching.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81jLuIM96BL._AC_SL1500_.jpg",
        youtubeId: "Ozpz_gITcbI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Canon EOS 4000D DSLR Camera",
        price: 305.71,
        description:
          "Tell distinctive stories. Create outstanding photos and movies full of detail and colour with this easy to use 18 Megapixel DSLR. Instantly share and shoot remotely with Wi-Fi and the Canon Connect app.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41Np9b4LVBL._AC_.jpg",
        youtubeId: "ZlqpADQwbw8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samsung Galaxy Tab A LTE",
        price: 289,
        description:
          "NEXT-GENERATION FUN IN TABLET FORM. Fun just got a bit closer. Weve put together a tablet that is as versatile and sophisticated as it is affordable, because next-generation fun belongs to every generation. Get premium without paying a premium with the Galaxy Tab A.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71ydOYSS-dL._AC_SL1500_.jpg",
        youtubeId: "uYHgtw3FIVc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seagate 2 TB External Hard Drive",
        price: 69.99,
        description:
          "Looking for the perfect PS4 accessory? Seagate Game Drive is a 2TB portable external Hard drive upgrade for any-generation PS4 system (software version 4 50 or higher) with space for approximately 50+ Games This external HDD offers room for plenty of classics and new releases With seamless USB 3 0 connectivity simply plug game Drive into the PS4 system’s USB port and follow quick step-by-step instructions on the TV screen.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/31BQwFbVZGL._AC_.jpg",
        youtubeId: "ZVGlO6bTjfI",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "LG LOUDR LHB645N Home Theatre Speaker System",
        price: 120,
        description:
          "The LG LHB645N has a 5.1 Ch. 1000 W surround sound 2+2 tallboy and satellite speaker set up supporting 3D Blu-Ray disc playback. Home Theatre System.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71Ypw7A68dL._AC_SL1500_.jpg",
        youtubeId: "NFfyl8VY0fk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Outdoor Security Camera, Wansview 1080P Wireless",
        price: 25.49,
        description:
          "Outdoor Security Camera, Wansview 1080P Wireless WiFi Home Surveillance Waterproof Camera with Night Vision, Motion Detection, Remote Access, Works with Alexa-W4-Black",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71XbFWGC5IL._AC_SL1500_.jpg",
        youtubeId: "cD0p1jCTNNg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Apple Watch Series 5",
        price: 429,
        description:
          "GPS, Always-On Retina display, 30% larger screen, Swimproof, ECG app, Electrical and optical heart sensors, Built-in compass, Elevation, Emergency SOS, Fall Detection, S5 SiP with up to 2x faster 64-bit dual-core processor, watchOS 6 with Activity trends, cycle tracking, hearing health innovations, and the App Store on your wrist.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71j0Ezz6PnL._AC_SL1500_.jpg",
        youtubeId: "5TuyvWoaAZk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lamicall Adjustable Phone Stand",
        price: 9.99,
        description:
          "Supporting both vertical and horizontal viewing angle when playing games, watching videos, viewing photos and reading. It is of great convenience to work with Lamicall Portable Phone Stand, which is at high quality, in exquisite workmanship and with simple and elegant design.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61cgp2CncEL._AC_SL1300_.jpg",
        youtubeId: "aDUJgYuPA6E",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ring Video Doorbell",
        price: 89,
        description:
          "Easily see what's happening at home. See, hear and speak to visitors at your front door with the all-new Ring Video Doorbell. Enjoy 1080p HD video, crisper night vision and adjustable motion zones—including the new Near Motion Zone feature to reduce false notifications.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/41dLKNM4dGL._SL1000_.jpg",
        youtubeId: "XAMqqY_2gKM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Solar Power Bank 26800mAh, HETP",
        price: 23.99,
        description:
          "The solar power bank built-in 26800mAh capacity, you don't need to worry the phone power. It’s enough to charge an iPhone XS for 6.8 times, a Samsung Galaxy S9 for 5.8 times, an iPad Pro for 2 times.",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71tYrBqk2yL._AC_SL1500_.jpg",
        youtubeId: "tY16fkodCkk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};

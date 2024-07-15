const dataset = [
    // Blue dresses for prom/cocktail
    {
        "imgurl": "https://cdn.salla.sa/XRZDw/ci7o7qgAgeu5IsJdyMkoZZHI4pgFLgS2xPrrrFrE.jpg",
        "description": "Blue prom dress",
        "color": "0000FF",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://albinadyla.com/cdn/shop/products/51_1200x1200.png?v=1719668273",
        "description": "Blue cocktail dress",
        "color": "0000FF",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://www.beginningboutique.com/cdn/shop/files/DarbyLightBlueMaxiFormalDress-17_1200x.progressive.jpg?v=1691525815",
        "description": "Light blue formal dress",
        "color": "0000FF",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://runawaythelabel.com/cdn/shop/products/CRYSTAL-BLUE_cd59d5d7-c3bf-4756-8e0d-516b8326f997.jpg?v=1645151774&width=1946",
        "description": "Crystal blue dress",
        "color": "0000FF",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://cdn-img.prettylittlething.com/a/5/c/0/a5c09b8435d7e36bcbfc7681ef5af8625a5cab3a_cne2181_1.jpg",
        "description": "Blue party dress",
        "color": "0000FF",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://assets.vogue.in/photos/6368b96453791d7d53ddd7d9/master/w_1600%2Cc_limit/314334958_1461336721001592_1691762204278806249_n.jpg",
        "description": "Vogue blue dress",
        "color": "0000FF",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://m.media-amazon.com/images/I/7193Op6qvmL._AC_UY1100_.jpg",
        "description": "Blue casual dress",
        "color": "0000FF",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://m.media-amazon.com/images/I/719F9RvfjVL._AC_UY1100_.jpg",
        "description": "Blue work dress",
        "color": "0000FF",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://m.media-amazon.com/images/I/81lhycZXCyL._AC_UY1100_.jpg",
        "description": "Blue formal dress",
        "color": "0000FF",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://peachmode.com/cdn/shop/products/navy-blue-wedding-wear-floral-sequins-embroidered-with-diamond-velvet-lehenga-choli-peachmode-1.jpg?v=1669021679",
        "description": "Navy blue wedding dress",
        "color": "0000FF",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://images.meesho.com/images/products/145258167/pycai_512.webp",
        "description": "Blue bridal dress",
        "color": "0000FF",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://getethnic.com/wp-content/uploads/2021/12/blue-bridal-lehenga-fusion10.jpg",
        "description": "Blue lehenga dress",
        "color": "0000FF",
        "forRent": true,
        "occasion": "marriage"
    },
    // Pink dresses for prom/cocktail
    {
        "imgurl": "https://image.made-in-china.com/202f0j00KCARtnSgAhbE/Long-Evening-Dresses-Dusty-Pink-Formal-Prom-Dresses-Cocktail-Wear-Sexy-Beaded-Party-Pageant-Vestidos-Gowns.jpg",
        "description": "Dusty pink prom dress",
        "color": "FFC0CB",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://m.media-amazon.com/images/I/616F7Vv43LL._AC_UY1000_.jpg",
        "description": "Pink formal dress",
        "color": "FFC0CB",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://alyceparis.com/cdn/shop/products/61362_NEONPINK_3_237b9ba3-a752-4ca7-a157-80ca9e0ab51a_2048x.jpg?v=1669161633",
        "description": "Neon pink dress",
        "color": "FFC0CB",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://www.morievent.com/cdn/shop/products/123_2_ba565abc-bba6-4c2e-b643-b57cce57c403_1024x1024.png?v=1653738092",
        "description": "Pink beaded dress",
        "color": "FFC0CB",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://cdn.shopify.com/s/files/1/1502/2532/products/a-line-sweetheart-lace-up-short-pink-tulle-homecoming-dress-pd199-pgmdress-246373.jpg?v=1683033031",
        "description": "Sweetheart pink dress",
        "color": "FFC0CB",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://viviyshop.com/cdn/shop/products/vi1.01.jpg?v=1674657528",
        "description": "Lace-up pink dress",
        "color": "FFC0CB",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://www.lulus.com/images/product/xlarge/8326381_1689176.jpg?w=375&hdpi=1",
        "description": "Short pink dress",
        "color": "FFC0CB",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://i0.wp.com/somethingaboutnavy.com/wp-content/uploads/2022/02/D61BF65A-57D4-47A2-9821-CADF0A5FD7A5.jpeg?resize=1440%2C1800&ssl=1",
        "description": "Pink casual dress",
        "color": "FFC0CB",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppUUSzYhZx-sRESPtLO3T_mlD-QIW_FMtdg&s",
        "description": "Pink work dress",
        "color": "FFC0CB",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhf89CAjeLJrKS7RDsixq7Jqpr_lr2TWSR79BYv-sBOnnMmdCT9XvJtHJXf3e10B4Sf4VtqhTwcQQEng4jAUJuiTRwK5IpHOj-PieRNwHZmR6xks-Y63KNuUSdIazHJa8j_baIGRKnDx_gA/s1600/All+Pink+Outfit+Street+Style+2.png",
        "description": "Pink street style dress",
        "color": "FFC0CB",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRlIpZpy51rQ8MkaHKzWANKb-mGOLiMVWDA&s",
        "description": "Pink bridal dress",
        "color": "FFC0CB",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOucM2AV9iRRGelNZvBaxCHJv9KHdv81fCrw&usqp=CAU",
        "description": "Pink wedding dress",
        "color": "FFC0CB",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqYN44paWAHI9ikg8QEDlnA8p1v9TJl09YU-VWGLrfwAGxIfK67LyseIdBF6BfrkaaOg&usqp=CAU",
        "description": "Pink lehenga dress",
        "color": "FFC0CB",
        "forRent": true,
        "occasion": "marriage"
    },
    // Green dresses for prom
    {
        "imgurl": "https://www.kissprom.com/cdn/shop/products/40010330DarkGreen_2__15_01_2023.jpg?v=1678946568&width=2048",
        "description": "Dark green prom dress",
        "color": "00FF00",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://images-cdn.ubuy.ae/65ba025685e68d6504357b4e-linlssanjc-sage-green-prom-dresses-long.jpg",
        "description": "Sage green prom dress",
        "color": "00FF00",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://i.pinimg.com/736x/54/ca/84/54ca845d0a496b636b751806065ff7cf.jpg",
        "description": "Green prom dress",
        "color": "00FF00",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://i.etsystatic.com/36856969/r/il/7c97c8/4048734644/il_fullxfull.4048734644_ikqw.jpg",
        "description": "Green dress for freshers",
        "color": "00FF00",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://www.lulus.com/images/product/xlarge/5965090_1264316.jpg?w=294",
        "description": "Lulus green dress",
        "color": "00FF00",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://i.pinimg.com/474x/6d/5e/e5/6d5ee5b9c92fefe5250660b76773b036.jpg",
        "description": "Green dress",
        "color": "00FF00",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://assets.ajio.com/medias/sys_master/root/20230404/MtRg/642c375b907deb497ac8e5c4/-473Wx593H-442109890-green-MODEL.jpg",
        "description": "Green work dress",
        "color": "00FF00",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://m.media-amazon.com/images/I/41BNdTLFvsL._AC_UY1100_.jpg",
        "description": "Green formal dress",
        "color": "00FF00",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/a/g/a/xxl-4898-901-funday-fashion-original-imagz9aq4yrta5uf.jpeg?q=90&crop=false",
        "description": "Green casual dress",
        "color": "00FF00",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://imgmedia.lbb.in/media/2023/09/64f6c17e7b9cc265e50a5e3c_1693892990597.jpg",
        "description": "Green wedding dress",
        "color": "00FF00",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://cdn0.weddingwire.in/article/2183/original/1280/png/113812-bridesmaid-dresses-mehendi-and-haldi-irrau-by-samir-mantri.jpeg",
        "description": "Green bridesmaid dress",
        "color": "00FF00",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-OEYBs00ct6y2uJjnrZwYIaYe3sySRDr6g&s",
        "description": "Green mehendi dress",
        "color": "00FF00",
        "forRent": true,
        "occasion": "marriage"
    },
    // Brown dresses for prom
    {
        "imgurl": "https://image.made-in-china.com/2f0j00BsNkGeIRHYoa/Brown-Satin-Long-A-Line-Prom-Dress-off-The-Shoulder-Evening-Party-Dress.webp",
        "description": "Brown satin prom dress",
        "color": "8B4513",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://www.promfy.com/uploads/product/1/7/17191/Unique-rose-gold-chiffon-strapless-split-floor-length-A-line-prom-dress-1.webp",
        "description": "Rose gold chiffon prom dress",
        "color": "8B4513",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BKG4JORHQ6URu27qZ3nikV_Z9J2EZQH9DQ&s",
        "description": "Brown prom dress",
        "color": "8B4513",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://littleboxindia.com/cdn/shop/products/bf9ebe5389640987eec409bebc2bbb86.jpg?v=1686914683",
        "description": "Brown dress for freshers",
        "color": "8B4513",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://i5.walmartimages.com/asr/072a9b3a-bd3b-4c3b-aa68-7e207e418b08.9730ada6ca6032b00180256e051a3906.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        "description": "Brown fresher's dress",
        "color": "8B4513",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://www.alamodelabel.in/cdn/shop/files/6776AAD1-8E5A-4CA5-8D0B-60EF4B607B50_600x.jpg?v=1717501931",
        "description": "Alamo brown dress",
        "color": "8B4513",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://assets.ajio.com/medias/sys_master/root/20240103/Fx2e/65958ac0afa4cf41f5ffc1ef/-473Wx593H-466942952-brown-MODEL.jpg",
        "description": "Brown work dress",
        "color": "8B4513",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://stylequotient.co.in/cdn/shop/products/21498968_1.jpg?v=1678767827",
        "description": "Brown formal dress",
        "color": "8B4513",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://cdn.pixelspray.io/v2/black-bread-289bfa/woTKH5/wrkr/t.resize(h:1000,w:820)/data/Superdry/1-12-23/410409139001_4.jpg",
        "description": "Brown casual dress",
        "color": "8B4513",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://cdn0.weddingwire.in/article/6763/original/1280/png/113676-bridesmaid-dresses-elegant-tarun-tahiliani.jpeg",
        "description": "Brown bridesmaid dress",
        "color": "8B4513",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://i.pinimg.com/originals/e9/1a/1f/e91a1f37444b9e307fd202baf5090f43.jpg",
        "description": "Brown wedding dress",
        "color": "8B4513",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://www.wedabout.com/blog/wp-content/uploads/2023/05/simple-and-latest-brown-lehenga-indian-bridesmaid-dresses.jpg",
        "description": "Brown lehenga dress",
        "color": "8B4513",
        "forRent": true,
        "occasion": "marriage"
    },
    // Purple dresses for prom
    {
        "imgurl": "https://www.kissprom.com/cdn/shop/products/40010398Lilac_1.jpg?v=1679641406&width=2048",
        "description": "Lilac prom dress",
        "color": "8A2BE2",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL24gBVx4tgNECwXEpfx32faAntiXbeSchuQ&s",
        "description": "Purple prom dress",
        "color": "8A2BE2",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://www.redcarpetready.co.uk/wp-content/uploads/2022/08/arabella-lilac-300x450.jpg",
        "description": "Arabella lilac prom dress",
        "color": "8A2BE2",
        "forRent": true,
        "occasion": "prom"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHE8oQnjcvuXiA9bVBc-rjLqQeudvBnfkjBg&s",
        "description": "Purple fresher's dress",
        "color": "8A2BE2",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPlHCJvIRLc2EgLCPyfmEYAqdwz60hfeTrg&s",
        "description": "Purple dress for freshers",
        "color": "8A2BE2",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2g4-s59UhyOMKJKYZiQtnDDobCYOhEPtbw&s",
        "description": "Lilac fresher's dress",
        "color": "8A2BE2",
        "forRent": false,
        "occasion": "freshers"
    },
    {
        "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41QG4-BbawL._SL500_._AC_SL500_.jpg",
        "description": "Purple work dress",
        "color": "8A2BE2",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://images.meesho.com/images/products/406381025/m8g3m_256.webp",
        "description": "Purple casual dress",
        "color": "8A2BE2",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://assets.ajio.com/medias/sys_master/root/20240705/n0NN/668816c26f60443f317e8f99/-473Wx593H-465283823-purple-MODEL.jpg",
        "description": "Purple formal dress",
        "color": "8A2BE2",
        "forRent": false,
        "occasion": "work"
    },
    {
        "imgurl": "https://www.wedabout.com/blog/wp-content/uploads/2023/05/latest-modern-purple-indian-bridesmaid-lehenga-dresses.jpg",
        "description": "Purple lehenga dress",
        "color": "8A2BE2",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0cUOFQFF3g57rp__F5KejAC2x6TBr_SnhbyPjvmSpd95nw7HlzlCXCOr4xq9lyr8Ry8&usqp=CAU",
        "description": "Modern purple wedding dress",
        "color": "8A2BE2",
        "forRent": true,
        "occasion": "marriage"
    },
    {
        "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukQ-KSkcmaiQHvV2gkad-6rhlmj_cmSCUtes0wU9M3FrP6y0Utr97n9LR7kqlQDrH1p8&usqp=CAU",
        "description": "Purple bridesmaid dress",
        "color": "8A2BE2",
        "forRent": true,
        "occasion": "marriage"
    }
];
module.exports = dataset;
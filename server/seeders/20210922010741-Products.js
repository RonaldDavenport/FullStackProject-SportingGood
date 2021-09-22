'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      Name:"Black Shooting Sleeve",
      Price:14.99,
      Imageurl:"whttps://dks.scene7.com/is/image/GolfGalaxy/16NIKYNKPRYTHLTSLBKA_Black_White?qlt=70&wid=600&fmt=pjpeg",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Sleeves"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"White Shooting Sleeve",
      Price:14.99,
      Imageurl:"https://m.media-amazon.com/images/I/61+iOQy6xVL._AC_UY445_.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Sleeves"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Black Dri-Fit T-Shirt",
      Price:30.99,
      Imageurl:"https://cdnp.sanmar.com/medias/sys_master/images/images/h18/h6c/10233062653982/9218-Black-1-NKBQ5231BlackModelFront-1200W.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"White Dri-Fit T-Shirt",
      Price:30.99,
      Imageurl:"https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0.31/2d45ff87-89e0-4d91-bf10-87a90556f6c0/dri-fit-rise-365-mens-short-sleeve-running-top-rPq09C.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Plain White Athletic T-Shirt",
      Price:10.99,
      Imageurl:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b812c43b-a6bf-4bea-8d8a-023512764b28/pro-dri-fit-mens-short-sleeve-top-N0txbH.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Plain Black Athletic T-Shirt",
      Price:10.99,
      Imageurl:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ghnsbtawjszckpo70u7b/sportswear-club-mens-t-shirt-ShrJfX.png.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Blue Long Sleeve T-Shirt",
      Price:20.99,
      Imageurl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdf83538-3534-4d94-b842-052078e4c784/dri-fit-tiempo-mens-long-sleeve-soccer-jersey-m73PrT.png.hi.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"White Long Sleeve T-Shirt",
      Price:20.99,
      Imageurl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1bfd660b-2471-4f6b-bb68-bb3f90bf796e/sportswear-nsw-mens-long-sleeve-t-shirt-DNsJhq.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Black Long Sleeve T-Shirt",
      Price:20.99,
      Imageurl:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e65483a3-9323-495b-b2ae-8ab60705485c/dri-fit-running-crew-7W9l6B.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Red Long Sleeve T-Shirt",
      Price:20.99,
      Imageurl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1425412a-948f-478e-9a5a-2f88c85ba393/dri-fit-miler-mens-long-sleeve-running-top-cR5JJT.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shirt"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"White Athletic Short Shorts",
      Price:20.99,
      Imageurl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/111b3e82-4718-488d-a0cb-6869a06ebd1b/off-white-shorts-jjjFl9.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shorts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Black Athletic Short Shorts",
      Price:20.99,
      Imageurl:"https://static.nike.com/a/images/t_default/ksurae1yt5w1bahidj6y/sportswear-woven-shorts-5704xS.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shorts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Red Athletic Short Shorts",
      Price:20.99,
      Imageurl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/669cdbe2-9966-4af2-9990-77f56dd372e8/flex-stride-brief-running-shorts-xND1k7.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Shorts"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Black Athletic Hat",
      Price:12.99,
      Imageurl:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b1e58bb-5509-4576-ab33-41e155a4520c/aerobill-heritage86-player-golf-hat-MxVLjR.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Hats"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"White Athletic Hat",
      Price:12.99,
      Imageurl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/kyme5v7bnnv1iixctwf3/heritage86-kids-adjustable-hat-hdp89D.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Hats"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"White Athletic Socks",
      Price:15.99,
      Imageurl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/17f774fb-a2ba-46cb-b6bf-7a798594f5ee/everyday-cushioned-training-ankle-socks-lZ03sD.png",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Socks"
    }],
    {});
    await queryInterface.bulkInsert('Products', [{
      Name:"Black Athletic Socks",
      Price:15.99,
      Imageurl:"https://www.lifestylesports.com/dw/image/v2/BCDN_PRD/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dwa01301fa/images/96108513xlarge.jpg?sw=530",
      createdAt: new Date(),
      updatedAt: new Date(),
      Category:"Socks"
    }],
    {});
 },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

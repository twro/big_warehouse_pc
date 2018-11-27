Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollViewheight:0,
    del:true,//移除失效商品
    currentTab: 0,
     tabNum:"1",
    adminShow: false,//管理      
    total: 0,//总金额      
    allsel: false,//全选      
    selarr: [],//选择的货物      
    hintText: '',//提示的内容      
    hintShow: false,//是否显示提示
    shopcarData: [{//购物车   
      id: '1',
      price: '230',
      num: 2,

    }, {
      id: '2',  
      price: '332',
      num: 1,
    }],
    abate: [{//失效产品   
      id: '1',
      price: '444',
    }, {
      id: '2',
      price: '44',
    }]

  },

  
  //点击全选  
  allcheckTap: function () {
    let shopcar = this.data.shopcarData,
      allsel = !this.data.allsel,//点击全选后allsel变化
      total = 0;
    for (let i = 0, len = shopcar.length; i < len; i++) {
      shopcar[i].check = allsel;//所有商品的选中状态和allsel值一样
      if (allsel) {//如果为选中状态则计算商品的价格
        total += shopcar[i].price * shopcar[i].num;
      }
    }
    this.data.selarr = allsel ? shopcar : [];//如果选中状态为true那么所有商品为选中状态，将物品加入选中变量，否则为空    
    this.setData({
      allsel: allsel,
      shopcarData: shopcar,
      total: total,
      selarr: this.data.selarr
    });
  },

// 点击移除失效商品
deleteAbate:function(){
  this.setData({
    del: false,
  });
},


  //点击移除商品  
  deleteshopTap: function () {
    var allsel = this.data.allsel,
      shopcar = this.data.shopcarData,
      selarr = this.data.selarr;
    if (allsel) {
      shopcar = [];
      this.setData({
        allsel: false
      });
    } else {
      console.log(selarr);
      for (var i = 0, len = selarr.length; i < len; i++) {//将选中的商品从购物车移除        
        console.log(selarr[i].id);
        for (var lens = shopcar.length - 1, j = lens; j >= 0; j--) {
          console.log(shopcar[j].id);
          if (selarr[i].id == shopcar[j].id) {
            shopcar.splice(j, 1);
          }
        }
      }
    }
    this.setData({
      shopcarData: shopcar,
      total: 0
    });
  },
 
  //点击管理按钮，是否显示管理的选项  
  adminTap: function () {
    this.setData({
      adminShow: !this.data.adminShow
    });
  },
  //点击单个选择按钮  
  checkTap: function (e) {
    let Index = e.currentTarget.dataset.index,
      shopcar = this.data.shopcarData,
      total = this.data.total,
      selarr = this.data.selarr;
    shopcar[Index].check = !shopcar[Index].check || false;
    if (shopcar[Index].check) {
      total += shopcar[Index].num * shopcar[Index].price;
      selarr.push(shopcar[Index]);
    } else {
      total -= shopcar[Index].num * shopcar[Index].price;
      for (let i = 0, len = selarr.length; i < len; i++) {
        if (shopcar[Index].id == selarr[i].id) {
          selarr.splice(i, 1);
          break;
        }
      }
    }
    this.setData({
      shopcarData: shopcar,
      total: total,
      selarr: selarr
    });
    this.judgmentAll();//每次按钮点击后都判断是否满足全选的条件  
  },
  //点击加减按钮  
  numchangeTap: function (e) {
    let Index = e.currentTarget.dataset.index,//点击的商品下标值        
      shopcar = this.data.shopcarData,
      types = e.currentTarget.dataset.types,//是加号还是减号        
      total = this.data.total;//总计  

    switch (types) {
      case 'add':
        shopcar[Index].num++;//对应商品的数量+1      
        shopcar[Index].check && (total += parseInt(shopcar[Index].price));//如果商品为选中的，则合计价格+商品单价      
        break;
      case 'minus':
        if (shopcar[Index].num <= 1) {
         
          return false;
        }
        shopcar[Index].num--;//对应商品的数量-1      
        shopcar[Index].check && (total -= parseInt(shopcar[Index].price));//如果商品为选中的，则合计价格-商品单价      
        break;
    }
    this.setData({
      shopcarData: shopcar,
      total: total
    });
  },
  //判断是否为全选  
  judgmentAll: function () {
    let shopcar = this.data.shopcarData,
      shoplen = shopcar.length,
      lenIndex = 0;//选中的物品的个数    
    for (let i = 0; i < shoplen; i++) {//计算购物车选中的商品的个数    
      shopcar[i].check && lenIndex++;
    }
    this.setData({
      allsel: lenIndex == shoplen//如果购物车选中的个数和购物车里货物的总数相同，则为全选，反之为未全选    
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          swiperHeight: (res.windowHeight)-90,
          scrollViewheight: (res.windowHeight) - 145
        });
      }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }

})
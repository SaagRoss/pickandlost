
Page({
  data: {
    goodslist: [],
    loseindex: "",
    pickindex: "",
    indexob: 0,
    region: 'HK',
    ob: 'defult_order&order=ASC',
    nowpage: 1,
    word: true,
    errorword: '已没有更多的物品了请上拉返回上一页',
    scrollTop: 0,
    inputpage: null,
    showvalue: "",
    pickName:"",
    pickType:"",
    pickNum:"",
    pickPhone:"",
    pickDes:"",
    pickimage:"../../images/logo.jpg",
    loseName: "",
    loseType: "",
    loseNum: "",
    losePhone: "",
    loseDes: "",
    loseimage:"../../images/logo.jpg",
  },
  InputPage: function (e) {
    this.setData({
      inputpage: parseInt(e.detail.value),
      aplpage: parseInt(e.detail.value)
    })
  },
  listenerPickerSelected: function (e) {
    var id = e.detail.value;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: id
    })
  },
  F5:function(){
   var that1 = this;

   wx.cloud.callFunction({ 
     name:"loseandpick",
     success: res => {
       console.log(res)
       var result = res.result.data[res.result.data.length - 1]
         that1.setData({
          loseName: result.losename,
          loseNum: result.losenum,
          losePhone: result.losephone,
          loseDes: result.losedes,
          loseimage:result.loseimage,
          loseType:result.losetype,
          loseindex:result.loseindex,
          pickName: result.pickname,
          pickNum: result.picknum,
          pickPhone: result.pickphone,
          pickDes: result.pickdes,
          pickimage: result.pickimage,
          pickType: result.picktype,
          pickindex:result.pickindex
       })
      
     }
   }) 
  }
})

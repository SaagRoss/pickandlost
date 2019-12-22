Page({
  data: {
    Name:"",
    Num:"",
    Phone:"",
    Des:"",
    focus:false,
    tempFilePaths: '',
    Type:"捡到",
    Place:"",
  },
  chooseimage: function () {
    var image = this;
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],   
      success: function (res) {
        image.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  },
  name:function(e){
    var name = e.detail.value;
    this.setData({
      Name:name
    })
  },
  num: function (e) {
    var num = e.detail.value;
    this.setData({
      Num: num
    })
  },
  phone:function(e){
    var phone=e.detail.value;
    this.setData({
      Phone: phone
    })
  },
  des:function(e){
    var des=e.detail.value;
    this.setData({
      Des:des
    })
  },
  place: function (e) {
    var place = e.detail.value;
    this.setData({
      Place:place
    })
  },
  sub: function () {
    var db = wx.cloud.database()
    db.collection("loseandpick").add({
      data: {
        pickname: this.data.Name,
        picknum: this.data.Num,
        pickphone: this.data.Phone,
        pickindex: this.data.Place,
        pickdes: this.data.Des,
        picktype:this.data.Type,
        pickimage:this.data.tempFilePaths
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  

})
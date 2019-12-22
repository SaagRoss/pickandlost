Page({
  data: {
    Name: "",
    Num: "",
    Phone: "",
    index: 0,
    Des: "",
    Type:"丢失",
    focus: false,
    tempFilePaths: '',
    Place:""
  },
  bindPickerChange: function (e) {
    var id = e.detail.value;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: id
    })
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
  name: function (e) {
    var name = e.detail.value;
    this.setData({
      Name: name
    })
  },
  num: function (e) {
    var num = e.detail.value;
    this.setData({
      Num: num
    })
  },
  phone: function (e) {
    var phone = e.detail.value;
    this.setData({
      Phone: phone
    })
  },
  des: function (e) {
    var des = e.detail.value;
    this.setData({
      Des: des
    })
  },
  place: function (e) {
    var place = e.detail.value;
    this.setData({
      Place: place
    })
  },
  sub:function(){
    var db=wx.cloud.database()
    db.collection("loseandpick").add({
      data:{
        losename:this.data.Name,
        losenum: this.data.Num,
        losephone: this.data.Phone,
        loseindex:this.data.Place,
        losedes: this.data.Des,
        losetype:this.data.Type,
        loseimage: this.data.tempFilePaths
      },
      success:function(res){
        console.log(res)
      }
    })
  }
})
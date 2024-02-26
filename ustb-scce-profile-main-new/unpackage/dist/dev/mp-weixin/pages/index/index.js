"use strict";
const common_vendor = require("../../common/vendor.js");
const fuiButton = () => "../../components/firstui/fui-button/fui-button.js";
const fuiRow = () => "../../components/firstui/fui-row/fui-row.js";
const fuiCol = () => "../../components/firstui/fui-col/fui-col.js";
const _sfc_main = {
  data() {
    return {
      valueInput: "",
      sign: "确定",
      value: "",
      show: true,
      pictureId: -1,
      teachers: [
        {
          id: 0,
          avatar: "https://scce.ustb.edu.cn/attach/file/shiziduiwu/jiaoshixinxi/2018-12-19/cba1c821e0ffbb349ce54cae55b84f0a.jpg",
          name: "洪源",
          gender: "男"
        },
        {
          id: 1,
          avatar: "https://scce.ustb.edu.cn/attach/file/shiziduiwu/jiaoshixinxi/2018-12-19/4ba326c6d52f9164daf35d0218b7d196.jpg",
          name: "崔晓龙",
          gender: "男"
        },
        {
          id: 2,
          avatar: "https://scce.ustb.edu.cn/attach/file/shiziduiwu/jiaoshixinxi/2018-04-14/1b1e73ee12f429e7a659a5ceb0b93370.jpg",
          name: "胡堰",
          gender: "女"
        }
      ]
    };
  },
  watch: {
    value(newVal, oldVal) {
      this.valueInput = newVal;
    }
  },
  components: {
    // firstPage,
    fuiButton,
    fuiRow,
    fuiCol
  },
  methods: {
    changeHandle() {
      this.sign = this.sign == "确定" ? "返回" : "确定";
      this.show = this.show == true ? false : true;
      this.pictureId = this.sign == "返回" ? -1 : this.pictureId;
    },
    handleDetail(index) {
      console.log(index);
      common_vendor.index.request({
        url: "https://unidemo.dcloud.net.cn/api/news",
        method: "get",
        dataType: "json",
        success: (res2) => {
          console.log(res2.data);
        },
        fail: (err) => {
          console.log(res.data);
        }
      });
      this.pictureId = index;
      console.log(this.pictureId);
      this.show = this.sign == "确定" ? this.show == true ? false : true : 0;
      this.sign = this.sign == "确定" ? "返回" : this.sign;
    }
  }
};
if (!Array) {
  const _component_fui_col = common_vendor.resolveComponent("fui-col");
  const _component_fui_row = common_vendor.resolveComponent("fui-row");
  (_component_fui_col + _component_fui_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.value,
    b: common_vendor.o(($event) => $data.value = $event.detail.value),
    c: common_vendor.t($data.sign),
    d: common_vendor.o((...args) => $options.changeHandle && $options.changeHandle(...args)),
    e: $data.show
  }, $data.show ? {
    f: common_vendor.f($data.teachers, (teacher, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleDetail(index), index),
        b: teacher.avatar,
        c: common_vendor.t(teacher.name),
        d: common_vendor.o(($event) => $options.handleDetail(index), index),
        e: index,
        f: "d8a56784-1-" + i0 + ",d8a56784-0"
      };
    }),
    g: common_vendor.p({
      span: 12
    }),
    h: common_vendor.p({
      ["margin-bottom"]: "24rpx",
      gutter: "16"
    })
  } : {}, {
    i: !$data.show
  }, !$data.show ? {
    j: common_vendor.f($data.teachers, (teacher, index, i0) => {
      return common_vendor.e({
        a: teacher.name == $data.valueInput || teacher.id == $data.pictureId
      }, teacher.name == $data.valueInput || teacher.id == $data.pictureId ? {
        b: teacher.avatar,
        c: common_vendor.t(teacher.name),
        d: common_vendor.o(($event) => $options.handleDetail(index)),
        e: "d8a56784-3-" + i0 + "," + ("d8a56784-2-" + i0),
        f: common_vendor.p({
          span: 12
        }),
        g: "d8a56784-2-" + i0,
        h: common_vendor.p({
          ["margin-bottom"]: "24rpx",
          gutter: "16"
        })
      } : {});
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/hBuilder/more/ustb-scce-profile-main-new/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

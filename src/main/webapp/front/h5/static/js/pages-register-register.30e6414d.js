(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"098b":function(r,e,i){"use strict";var o=i("507a"),t=i.n(o);t.a},"0f8a":function(r,e,i){var o=i("24fb");e=o(!1),e.push([r.i,".btn-submit[data-v-345dbfea]{height:auto!important;line-height:%?88?%}",""]),r.exports=e},3735:function(r,e,i){"use strict";i.r(e);var o=i("d17d"),t=i("48c7");for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);i("098b"),i("81e5");var n,d=i("f0c5"),l=Object(d["a"])(t["default"],o["b"],o["c"],!1,null,"345dbfea",null,!1,o["a"],n);e["default"]=l.exports},"48c7":function(r,e,i){"use strict";i.r(e);var o=i("4e2d"),t=i.n(o);for(var a in o)"default"!==a&&function(r){i.d(e,r,(function(){return o[r]}))}(a);e["default"]=t.a},"4e2d":function(r,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("96cf");var t=o(i("3b8d")),a={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,jiaoshixingbieOptions:[],jiaoshixingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],e=uni.getStorageSync("loginTable"),this.tableName=e,"xuesheng"==this.tableName&&(this.xueshengxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.xueshengxingbieOptions[0]),"jiaoshi"==this.tableName&&(this.jiaoshixingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.jiaoshixingbieOptions[0]),this.styleChange();case 6:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{xueshengxingbieChange:function(r){this.xueshengxingbieIndex=r.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},jiaoshixingbieChange:function(r){this.jiaoshixingbieIndex=r.target.value,this.ruleForm.xingbie=this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var r=(0,t.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("xuesheng"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=3;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 3:if("xuesheng"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=6;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 6:if("xuesheng"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){r.next=9;break}return this.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 9:if("xuesheng"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=12;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 12:if("jiaoshi"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=15;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 15:if("jiaoshi"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=18;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 18:return r.next=20,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 20:this.$utils.msgBack("注册成功");case 22:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}};e.default=a},"507a":function(r,e,i){var o=i("0f8a");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var t=i("4f06").default;t("66ee3644",o,!0,{sourceMap:!1,shadowMode:!1})},"81e5":function(r,e,i){"use strict";var o=i("aaa8"),t=i.n(o);t.a},8213:function(r,e,i){var o=i("24fb");e=o(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-345dbfea]{height:calc(100vh - 44px);overflow:auto}.content[data-v-345dbfea]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220216/fa86c47dbddc4c0bb795474a74dd083f.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-345dbfea]{text-align:center}.logo uni-image[data-v-345dbfea]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-345dbfea]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-345dbfea]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-345dbfea]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-345dbfea]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-345dbfea]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-345dbfea]{color:#b49950}.picker-select-input[data-v-345dbfea]{line-height:%?88?%}',""]),r.exports=e},aaa8:function(r,e,i){var o=i("8213");"string"===typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);var t=i("4f06").default;t("2fc29fda",o,!0,{sourceMap:!1,shadowMode:!1})},d17d:function(r,e,i){"use strict";var o,t=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{padding:"48rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"100%"}},[i("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0 auto",borderColor:"#ccc",borderRadius:"0",borderWidth:"0",width:"476rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220216/24b2135bb7c642908a7878960935ac70.png",isShow:!0,height:"340rpx"},attrs:{src:"http://codegen.caihongy.cn/20220216/24b2135bb7c642908a7878960935ac70.png",mode:"aspectFill"}})],1),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"学号"},model:{value:r.ruleForm.xuehao,callback:function(e){r.$set(r.ruleForm,"xuehao",e)},expression:"ruleForm.xuehao"}})],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"学生姓名"},model:{value:r.ruleForm.xueshengxingming,callback:function(e){r.$set(r.ruleForm,"xueshengxingming",e)},expression:"ruleForm.xueshengxingming"}})],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.xueshengxingbieIndex,range:r.xueshengxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xueshengxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(188, 189, 168, 1)",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:r.ruleForm.shenfenzheng,callback:function(e){r.$set(r.ruleForm,"shenfenzheng",e)},expression:"ruleForm.shenfenzheng"}})],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1):r._e(),"xuesheng"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"专业"},model:{value:r.ruleForm.zhuanye,callback:function(e){r.$set(r.ruleForm,"zhuanye",e)},expression:"ruleForm.zhuanye"}})],1):r._e(),"jiaoshi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"教师工号"},model:{value:r.ruleForm.jiaoshigonghao,callback:function(e){r.$set(r.ruleForm,"jiaoshigonghao",e)},expression:"ruleForm.jiaoshigonghao"}})],1):r._e(),"jiaoshi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"jiaoshi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"jiaoshi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"教师姓名"},model:{value:r.ruleForm.jiaoshixingming,callback:function(e){r.$set(r.ruleForm,"jiaoshixingming",e)},expression:"ruleForm.jiaoshixingming"}})],1):r._e(),"jiaoshi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.jiaoshixingbieIndex,range:r.jiaoshixingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.jiaoshixingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(188, 189, 168, 1)",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"jiaoshi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1):r._e(),"jiaoshi"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"40rpx 0",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"任教科目"},model:{value:r.ruleForm.renjiaokemu,callback:function(e){r.$set(r.ruleForm,"renjiaokemu",e)},expression:"ruleForm.renjiaokemu"}})],1):r._e(),i("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"80rpx 0",borderColor:"#ccc",backgroundColor:"rgba(188, 189, 168, 1)",borderRadius:"50rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.register.apply(void 0,arguments)}}},[r._v("注册")])],1)],1)},a=[];i.d(e,"b",(function(){return t})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}))}}]);
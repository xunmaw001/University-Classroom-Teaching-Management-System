(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiaoshi-add-or-update"],{2126:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-48fe2c02]{padding:%?20?%}.content[data-v-48fe2c02]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220217/b6cd176fcabb4b4c9361f016701485f8.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-48fe2c02]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-48fe2c02]{width:%?180?%}.avator[data-v-48fe2c02]{width:%?150?%;height:%?60?%}.right-input[data-v-48fe2c02]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-48fe2c02]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-48fe2c02]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-48fe2c02]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-48fe2c02]{border:0}.cu-form-group uni-input[data-v-48fe2c02]{padding:0 %?30?%}.uni-input[data-v-48fe2c02]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-48fe2c02]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-48fe2c02]::after{line-height:%?60?%}.select .uni-input[data-v-48fe2c02]{line-height:%?60?%}.input .right-input[data-v-48fe2c02]{line-height:%?60?%}',""]),r.exports=e},"4f3d":function(r,e,i){"use strict";var t=i("64cb"),o=i.n(t);o.a},"64cb":function(r,e,i){var t=i("2126");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var o=i("4f06").default;o("d77549ea",t,!0,{sourceMap:!1,shadowMode:!1})},"6f91":function(r,e,i){"use strict";i.r(e);var t=i("c2b6"),o=i.n(t);for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);e["default"]=o.a},"890f":function(r,e,i){"use strict";i.r(e);var t=i("8e01"),o=i("6f91");for(var a in o)"default"!==a&&function(r){i.d(e,r,(function(){return o[r]}))}(a);i("4f3d");var n,s=i("f0c5"),d=Object(s["a"])(o["default"],t["b"],t["c"],!1,null,"48fe2c02",null,!1,t["a"],n);e["default"]=d.exports},"8e01":function(r,e,i){"use strict";var t,o=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("教师工号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.jiaoshigonghao,placeholder:"教师工号"},model:{value:r.ruleForm.jiaoshigonghao,callback:function(e){r.$set(r.ruleForm,"jiaoshigonghao",e)},expression:"ruleForm.jiaoshigonghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("教师姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.jiaoshixingming,placeholder:"教师姓名"},model:{value:r.ruleForm.jiaoshixingming,callback:function(e){r.$set(r.ruleForm,"jiaoshixingming",e)},expression:"ruleForm.jiaoshixingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("性别")]),i("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(188, 189, 168, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"60rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.zhaopianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("照片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.zhaopian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.zhaopian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("手机")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("任教科目")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(188, 189, 168, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"20rpx 0",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"60rpx"},attrs:{disabled:r.ro.renjiaokemu,placeholder:"任教科目"},model:{value:r.ruleForm.renjiaokemu,callback:function(e){r.$set(r.ruleForm,"renjiaokemu",e)},expression:"ruleForm.renjiaokemu"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#409EFF",borderRadius:"20rpx 0",color:"rgba(188, 189, 168, 1)",borderWidth:"0",width:"60%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))},c2b6:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var o=t(i("3b8d")),a=t(i("e2b1")),n={data:function(){return{cross:"",ruleForm:{jiaoshigonghao:"",mima:"",jiaoshixingming:"",xingbie:"",zhaopian:"",shouji:"",renjiaokemu:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jiaoshigonghao:!1,mima:!1,jiaoshixingming:!1,xingbie:!1,zhaopian:!1,shouji:!1,renjiaokemu:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(e){var i,t,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:if(t=r.sent,this.user=t.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=14;break}return this.ruleForm.id=e.id,r.next=12,this.$api.info("jiaoshi",this.ruleForm.id);case 12:t=r.sent,this.ruleForm=t.data;case 14:if(this.cross=e.cross,!e.cross){r.next=50;break}o=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(o);case 18:if((r.t1=r.t0()).done){r.next=50;break}if(a=r.t1.value,"jiaoshigonghao"!=a){r.next=24;break}return this.ruleForm.jiaoshigonghao=o[a],this.ro.jiaoshigonghao=!0,r.abrupt("continue",18);case 24:if("mima"!=a){r.next=28;break}return this.ruleForm.mima=o[a],this.ro.mima=!0,r.abrupt("continue",18);case 28:if("jiaoshixingming"!=a){r.next=32;break}return this.ruleForm.jiaoshixingming=o[a],this.ro.jiaoshixingming=!0,r.abrupt("continue",18);case 32:if("xingbie"!=a){r.next=36;break}return this.ruleForm.xingbie=o[a],this.ro.xingbie=!0,r.abrupt("continue",18);case 36:if("zhaopian"!=a){r.next=40;break}return this.ruleForm.zhaopian=o[a],this.ro.zhaopian=!0,r.abrupt("continue",18);case 40:if("shouji"!=a){r.next=44;break}return this.ruleForm.shouji=o[a],this.ro.shouji=!0,r.abrupt("continue",18);case 44:if("renjiaokemu"!=a){r.next=48;break}return this.ruleForm.renjiaokemu=o[a],this.ro.renjiaokemu=!0,r.abrupt("continue",18);case 48:r.next=18;break;case 50:this.styleChange();case 51:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.zhaopian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){var e,i,t,o,a,n,s,d,u,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=3;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 3:if(!this.cross){r.next=19;break}if(o=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==o){r.next=19;break}if(n=uni.getStorageSync("crossObj"),o.startsWith("[")){r.next=15;break}for(s in n)s==o&&(n[s]=a);return d=uni.getStorageSync("crossTable"),r.next=13,this.$api.update("".concat(d),n);case 13:r.next=19;break;case 15:e=Number(uni.getStorageSync("userid")),i=n["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 19:if(!i||!e){r.next=41;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,u={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=25,this.$api.list("jiaoshi",u);case 25:if(c=r.sent,!(c.data.total>=t)){r.next=31;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 31:if(!this.ruleForm.id){r.next=36;break}return r.next=34,this.$api.update("jiaoshi",this.ruleForm);case 34:r.next=38;break;case 36:return r.next=38,this.$api.add("jiaoshi",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:r.next=49;break;case 41:if(!this.ruleForm.id){r.next=46;break}return r.next=44,this.$api.update("jiaoshi",this.ruleForm);case 44:r.next=48;break;case 46:return r.next=48,this.$api.add("jiaoshi",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,o=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,o=o>9?o:"0"+o,"".concat(i,"-").concat(t,"-").concat(o)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n}}]);
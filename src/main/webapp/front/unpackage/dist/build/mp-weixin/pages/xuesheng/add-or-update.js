(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuesheng/add-or-update"],{6794:function(e,n,t){"use strict";(function(e){t("6417");r(t("66fd"));var n=r(t("8f22"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"8f22":function(e,n,t){"use strict";t.r(n);var r=t("ab14"),a=t("ad71");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("a5c3");var i,o=t("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"6c111d9a",null,!1,r["a"],i);n["default"]=s.exports},a5c3:function(e,n,t){"use strict";var r=t("fe2d"),a=t.n(r);a.a},ab14:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},ad71:function(e,n,t){"use strict";t.r(n);var r=t("f9dc"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},f9dc:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){u(i,r,a,o,s,"next",e)}function s(e){u(i,r,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("31cf"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{xuehao:"",mima:"",xueshengxingming:"",xingbie:"",zhaopian:"",shouji:"",shenfenzheng:"",youxiang:"",zhuanye:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{xuehao:!1,mima:!1,xueshengxingming:!1,xingbie:!1,zhaopian:!1,shouji:!1,shenfenzheng:!1,youxiang:!1,zhuanye:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return i(r.default.mark((function a(){var u,i,o,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,t.$api.session(u);case 3:if(i=a.sent,t.user=i.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return t.ruleForm.id=n.id,a.next=12,t.$api.info("xuesheng",t.ruleForm.id);case 12:i=a.sent,t.ruleForm=i.data;case 14:if(t.cross=n.cross,!n.cross){a.next=58;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=58;break}if(s=a.t1.value,"xuehao"!=s){a.next=24;break}return t.ruleForm.xuehao=o[s],t.ro.xuehao=!0,a.abrupt("continue",18);case 24:if("mima"!=s){a.next=28;break}return t.ruleForm.mima=o[s],t.ro.mima=!0,a.abrupt("continue",18);case 28:if("xueshengxingming"!=s){a.next=32;break}return t.ruleForm.xueshengxingming=o[s],t.ro.xueshengxingming=!0,a.abrupt("continue",18);case 32:if("xingbie"!=s){a.next=36;break}return t.ruleForm.xingbie=o[s],t.ro.xingbie=!0,a.abrupt("continue",18);case 36:if("zhaopian"!=s){a.next=40;break}return t.ruleForm.zhaopian=o[s],t.ro.zhaopian=!0,a.abrupt("continue",18);case 40:if("shouji"!=s){a.next=44;break}return t.ruleForm.shouji=o[s],t.ro.shouji=!0,a.abrupt("continue",18);case 44:if("shenfenzheng"!=s){a.next=48;break}return t.ruleForm.shenfenzheng=o[s],t.ro.shenfenzheng=!0,a.abrupt("continue",18);case 48:if("youxiang"!=s){a.next=52;break}return t.ruleForm.youxiang=o[s],t.ro.youxiang=!0,a.abrupt("continue",18);case 52:if("zhuanye"!=s){a.next=56;break}return t.ruleForm.zhuanye=o[s],t.ro.zhuanye=!0,a.abrupt("continue",18);case 56:a.next=18;break;case 58:t.styleChange();case 59:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(r.default.mark((function t(){var a,u,i,o,s,c,f,l,g,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.shouji||n.$validate.isMobile(n.ruleForm.shouji)){t.next=3;break}return n.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 3:if(!n.ruleForm.shenfenzheng||n.$validate.checkIdCard(n.ruleForm.shenfenzheng)){t.next=6;break}return n.$utils.msg("身份证应输入身份证格式"),t.abrupt("return");case 6:if(!n.ruleForm.youxiang||n.$validate.isEmail(n.ruleForm.youxiang)){t.next=9;break}return n.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 9:if(!n.cross){t.next=25;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=25;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=21;break}for(f in c)f==o&&(c[f]=s);return l=e.getStorageSync("crossTable"),t.next=19,n.$api.update("".concat(l),c);case 19:t.next=25;break;case 21:a=Number(e.getStorageSync("userid")),u=c["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 25:if(!u||!a){t.next=47;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=u,g={page:1,limit:10,crossuserid:a,crossrefid:u},t.next=31,n.$api.list("xuesheng",g);case 31:if(d=t.sent,!(d.data.total>=i)){t.next=37;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 37:if(!n.ruleForm.id){t.next=42;break}return t.next=40,n.$api.update("xuesheng",n.ruleForm);case 40:t.next=44;break;case 42:return t.next=44,n.$api.add("xuesheng",n.ruleForm);case 44:n.$utils.msgBack("提交成功");case 45:t.next=55;break;case 47:if(!n.ruleForm.id){t.next=52;break}return t.next=50,n.$api.update("xuesheng",n.ruleForm);case 50:t.next=54;break;case 52:return t.next=54,n.$api.add("xuesheng",n.ruleForm);case 54:n.$utils.msgBack("提交成功");case 55:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},fe2d:function(e,n,t){}},[["6794","common/runtime","common/vendor"]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1189:function(t,e,n){},1190:function(t,e,n){},1191:function(t,e,n){},1236:function(t,e,n){"use strict";n(1189)},1237:function(t,e,n){t.exports=n.p+"img/logo.91322f3.svg"},1238:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjExIiB2aWV3Qm94PSIwIDAgNyAxMSI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGZpbGw9IiNGRkYiPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMi4yMyAxOC43MDNsLTIuODc4IDQuMDcyLTIuOTc3LTQuMDcyIDIuOTc3IDEuNzI2IDIuODc4LTEuNzI2ek0xOS4zMzMgMTJsMy4zMzQgNS41ODYtMy4zMzQgMi4wNEwxNiAxNy41ODcgMTkuMzMzIDEyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU5NCAtMzQxKSB0cmFuc2xhdGUoNTc4IDMyOSkiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},1239:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0ZGRiI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2IDBjNC40MDggMCA4LjM5OSAxLjc4MiAxMS4yOTMgNC42NjVMMjMuMDUgOC45MDhDMjEuMjQyIDcuMTExIDE4Ljc1IDYgMTYgNiAxMC40NzcgNiA2IDEwLjQ3NyA2IDE2czQuNDc3IDEwIDEwIDEwYzIuNzUgMCA1LjI0Mi0xLjExIDcuMDUtMi45MDhsNC4yNDMgNC4yNDNDMjQuMzk5IDMwLjIxOCAyMC40MDggMzIgMTYgMzIgNy4xNjMgMzIgMCAyNC44MzcgMCAxNlM3LjE2MyAwIDE2IDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0IC04NikgdHJhbnNsYXRlKDE0NCA4NikiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI5LjY3OCA3LjY5NEMzMS4xNSAxMC4xMTUgMzIgMTIuOTU5IDMyIDE2YzAgMy4wNDEtLjg0OCA1Ljg4NC0yLjMyMiA4LjMwNUwyMS4zNzMgMTZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ0IC04NikgdHJhbnNsYXRlKDE0NCA4NikiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},1240:function(t){t.exports=JSON.parse("{}")},1241:function(t,e,n){"use strict";n(37);var c=n(94),o=c.bn2n,r=(c.n2bn,n(80)),l=r.BigNumber,d=(r.utils,n(625)),v={1:"https://api.thegraph.com/subgraphs/name/convergence-tech/conv-claim",3:"https://api.thegraph.com/subgraphs/name/linear-tech/conv-claim",42:"https://api.thegraph.com/subgraphs/name/linear-tech/conv-claim-kovan",56:"",97:"https://graph-api.linear.finance/subgraphs/name/linear-tech/linear-buildr_V2-bsc"};t.exports={pageResults:d,graphAPIEndpoints:v,conv:{userClaim:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.max,c=void 0===n?1e3:n,r=e.account,m=void 0===r?void 0:r,I=e.networkId,C=void 0===I?null===(t=$nuxt.$store.state)||void 0===t?void 0:t.walletNetworkId:I;return d({api:v[C],max:c,query:{entity:"userClaims",selection:{where:{account:m?'\\"'.concat(m,'\\"'):void 0}},properties:["account","amount"]}}).then((function(t){return t.map((function(t){var e=t.account,n=t.amount;return{account:e,amount:o(l.from(n))}}))})).catch((function(t){return console.error(t)}))}}}},1242:function(t,e,n){t.exports=n.p+"img/group-2.610855b.svg"},1243:function(t,e,n){"use strict";n(1190)},1244:function(t,e,n){"use strict";n(1191)},1248:function(t,e,n){"use strict";n.r(e);var c=n(207),o=n.n(c),r={name:"landingPage",data:function(){return{}},watch:{},computed:{},mounted:function(){},methods:{}},l=(n(1236),n(6)),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"landingPage"}},[t._v("\n    landing\n")])}),[],!1,null,null,null).exports,v=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("img",{attrs:{src:n(1238),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"smallLogo"},[e("img",{attrs:{src:n(1239),alt:""}})])}],m=(n(373),n(45),n(63),n(9)),I=n(1246),C=(n(1240),n(94)),w=n(102),h=n(14),M=n(566),A=n(1241),f=n.n(A),x={name:"actions",components:{},data:function(){return{connected:!1,background:n(1242),abbreviateAddress:M.a,locked:0,withdrawable:0,claimed:0,loading:!1,nextClaimTime:"",claimFinish:!1,canClaim:!1,loaddingFinish:!1}},created:function(){},watch:{walletAddress:function(){},walletNetworkName:function(){}},computed:{walletAddressShort:function(){var t,e;return this.abbreviateAddress(null===(t=this.$store.state)||void 0===t||null===(e=t.wallet)||void 0===e?void 0:e.address)},walletAddress:function(){var t,e;return null===(t=this.$store.state)||void 0===t||null===(e=t.wallet)||void 0===e?void 0:e.address},walletNetworkName:function(){var t;return null===(t=this.$store.state)||void 0===t?void 0:t.walletNetworkName},walletNetworkId:function(){var t;return null===(t=this.$store.state)||void 0===t?void 0:t.walletNetworkId}},methods:{hit:function(){""===this.walletAddress?this.connectWallet():this.claimFun()},connectWallet:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.b)(h.g.METAMASK);case 2:e.sent,t.connected=!0,setInterval((function(){t.updateData()}),2e3);case 5:case"end":return e.stop()}}),e)})))()},updateData:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n,c,o,r,l,d,v,m,h,M,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.convJS,n.uni,c=n.claim,w.a.utils,e.next=3,c.contract.getWithdrawableAmount(t.walletAddress);case 3:return o=e.sent,console.log(Object(C.bn2n)(o),"withdrawable"),t.withdrawable=Object(C.bn2n)(o).toFixed(2),e.next=8,f.a.conv.userClaim({account:t.walletAddress,network:t.walletNetworkId});case 8:return r=e.sent,console.log(r,"graph1111111111111111"),r&&0!=r.length&&(t.claimed=r[0].amount.toFixed(2)),e.next=13,c.contract.vestingSchedules(t.walletAddress);case 13:if(l=e.sent,console.log(l,"vestingSchedules"),!l){e.next=28;break}if(t.loaddingFinish=!0,0!=l[1]){e.next=19;break}return e.abrupt("return");case 19:r&&0!=r.length&&(t.locked=Object(C.bn2n)(l.amount)-t.claimed),d=1e3*l[1],v=1e3*l[3],m=(new Date).valueOf(),h=m-d,M=Math.ceil(h/v),A=d+M*v,console.log(new Date(A),A,"nextClaimTime"),t.nextClaimTime=Object(I.a)(A,"d MMM, yyyy");case 28:case"end":return e.stop()}}),e)})))()},refreshPage:function(){window.location.reload()},claimFun:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var n,c,o,r,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.connected||0!=t.withdrawable){e.next=2;break}return e.abrupt("return");case 2:return n=w.a.convJS.claim,c=w.a.utils,e.prev=3,e.next=6,n.contract.estimateGas.withdraw();case 6:o=e.sent,console.log(o,"gas"),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(3),console.log("error"),e.abrupt("return");case 14:return e.next=16,n.contract.withdraw();case 16:if(r=e.sent,console.log(r,"transaction"),!r){e.next=25;break}return l=setTimeout((function(){console.log("交易超时，请自己去看浏览器"+r.hash)}),3e4),e.next=22,c.waitForTransaction(r.hash);case 22:d=e.sent,clearTimeout(l),console.log(d,"交易成功");case 25:case"end":return e.stop()}}),e,null,[[3,10]])})))()}},mounted:function(){}},N=(n(1243),{components:{landingPage:d,appPage:Object(l.a)(x,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"actions"}},[c("div",{staticClass:"backgroud",class:{connected:t.connected,cantClaim:t.connected&&0==t.withdrawable},style:"background-image:url("+t.background+")"},[c("div",{staticClass:"main"},[c("img",{attrs:{src:n(1237),alt:""}}),t._v(" "),t.connected?c("div",{staticClass:"informations"},[c("div",{staticClass:"address"},[t._m(0),t._v(" "),c("div",{staticClass:"network"},[t._v(t._s(t.walletNetworkName))]),t._v(" "),c("div",{staticClass:"string"},[t._v(t._s(t.walletAddressShort))]),t._v(" "),t._m(1),t._v(" "),c("div",{staticClass:"disconenct",on:{click:t.refreshPage}},[t._v("Disconenct")])])]):t._e(),t._v(" "),t.connected?c("div",{staticClass:"tokens"},[c("Row",[c("Col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:"24"}},[c("Row",[c("Col",{staticClass:"number",attrs:{span:"24"}},[t._v(t._s(t.locked))]),t._v(" "),c("Col",{staticClass:"cl",attrs:{span:"24"}},[t._v("Locked")]),t._v(" "),c("Col",{staticClass:"conv",attrs:{span:"24"}},[t._v("CONV")])],1)],1),t._v(" "),c("Col",{attrs:{span:"12"}},[c("Row",[c("Col",{staticClass:"number",attrs:{span:"24"}},[t._v(t._s(t.withdrawable))]),t._v(" "),c("Col",{staticClass:"cl",attrs:{span:"24"}},[t._v("Withdrawable")]),t._v(" "),c("Col",{staticClass:"conv",attrs:{span:"24"}},[t._v("CONV")])],1)],1),t._v(" "),c("Col",{attrs:{span:"12"}},[c("Row",[c("Col",{staticClass:"number",attrs:{span:"24"}},[t._v(t._s(t.claimed))]),t._v(" "),c("Col",{staticClass:"cl",attrs:{span:"24"}},[t._v("Claimed")]),t._v(" "),c("Col",{staticClass:"conv",attrs:{span:"24"}},[t._v("CONV")])],1)],1)],1)],1):t._e()]),t._v(" "),c("div",{staticClass:"autoBox"},[c("div",{staticClass:"activity",on:{click:t.hit}},[c("div",{staticClass:"connect"},[t.connected&&t.withdrawable>0&&t.locked>0?[t._v("\n            claim "+t._s(t.withdrawable)+" CONV\n          ")]:t.connected&&0==t.withdrawable&&t.locked>0?[t.loaddingFinish?[t._v("\n              "+t._s(t.nextClaimTime)+" "),c("br"),t._v(" "),c("span",[t._v("Next schedule")])]:t._e()]:t.connected?[t.loaddingFinish?[c("span",[t._v("\n                You dont have any claimable CONV\n              ")])]:[t._v("\n              ...\n            ")]]:[t._v("\n            Connect "),c("br"),t._v("Wallet\n          ")]],2)])])])])}),v,!1,null,"6ac7a3ee",null).exports},name:"mainPage",data:function(){return{windowScreen:{width:0,height:0},mobileWidth:414,isMobile:window.innerWidth<=414}},watch:{walletAddress:function(){}},computed:{walletAddress:function(){var t,e;return null===(t=this.$store.state)||void 0===t||null===(e=t.wallet)||void 0===e?void 0:e.address}},methods:{getWindowScreen:o()((function(){this.windowScreen={width:window.innerWidth,height:window.innerHeight},this.isMobile=this.windowScreen.width<=this.mobileWidth,this.$store.commit("setIsMobile",this.isMobile)}),50),copyFun:function(t){var e=this,n=new Clipboard(t);n.on("success",(function t(c){e.$Notice.success({title:"Copied",duration:1}),c.clearSelection(),n.off("success",t)}))}},mounted:function(){this.$store.commit("setIsMobile",this.isMobile),window.addEventListener("resize",this.getWindowScreen,!1)},destroyed:function(){}}),D=(n(1244),Object(l.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mainPage"}},[e("div",{staticClass:"container"},[e("appPage")],1)])}),[],!1,null,"38cb06ec",null));e.default=D.exports}}]);
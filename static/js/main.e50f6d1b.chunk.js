(this.webpackJsonppincubator=this.webpackJsonppincubator||[]).push([[0],{135:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_baseToken","type":"address"},{"internalType":"contract IERC20","name":"_saleToken","type":"address"},{"internalType":"uint256","name":"_buyPrice","type":"uint256"},{"internalType":"uint256","name":"_softCap","type":"uint256"},{"internalType":"uint256","name":"_hardCap","type":"uint256"},{"internalType":"uint256","name":"_minBaseTokePerWallet","type":"uint256"},{"internalType":"uint256","name":"_maxBaseTokePerWallet","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_sellLengh","type":"uint256"},{"internalType":"uint256","name":"_precision","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"ForceFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensToRefund","type":"uint256"}],"name":"RefundBaseToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensSold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"SellToken","type":"event"},{"inputs":[],"name":"BUY_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HARDCAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BASE_TOKEN_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_BASE_TOKEN_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SOFTCAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"forceFail","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBaseToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"participants","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"enum SeedSale.STATUS","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensNeeded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"}],"name":"withdrawBaseToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"}],"name":"withdrawUnsoldSaleToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},136:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},182:function(e){e.exports=JSON.parse('{"v":"5.5.8","fr":50,"ip":0,"op":147,"w":800,"h":600,"nm":"Paperplane","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"planete Outlines - Group 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":38,"s":[50]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":88,"s":[50]},{"t":120,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[468.336,323.378,0],"to":[-29,0,0],"ti":[29,0,0]},{"t":102,"s":[294.336,323.378,0]}],"ix":2},"a":{"a":0,"k":[453.672,304.756,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.742,0],[0.741,-0.14],[0,0.074],[13.484,0],[1.669,-0.361],[19.79,0],[3.317,-19.082],[2.691,0],[0,-13.484],[-0.048,-0.629],[2.405,0],[0,-6.742],[-6.742,0],[0,0],[0,6.743]],"o":[[-0.781,0],[0.001,-0.074],[0,-13.484],[-1.778,0],[-3.594,-18.742],[-20.03,0],[-2.421,-0.804],[-13.485,0],[0,0.642],[-1.89,-1.199],[-6.742,0],[0,6.743],[0,0],[6.742,0],[0,-6.742]],"v":[[75.134,16.175],[72.85,16.396],[72.856,16.175],[48.44,-8.241],[43.262,-7.685],[3.406,-40.591],[-36.571,-6.995],[-44.269,-8.241],[-68.685,16.175],[-68.604,18.079],[-75.133,16.175],[-87.341,28.383],[-75.133,40.592],[75.134,40.592],[87.342,28.383]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7333333333333333,0.5725490196078431,0.9921568627450981,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[453.672,304.756],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":151,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Merged Shape Layer","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.547],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.845],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":77,"s":[35]},{"t":150,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[390.319,298.2,0],"to":[0,-2.583,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":44,"s":[390.319,282.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":110,"s":[390.319,319.25,0],"to":[0,0,0],"ti":[0,0,0]},{"t":150,"s":[390.319,298.2,0]}],"ix":2},"a":{"a":0,"k":[664.319,256.2,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[18.967,-3.189],[-18.967,19.935],[-0.949,-19.935]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5254901960784314,0.23137254901960785,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[236.879,292.737],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[633.939,275.369],"ix":2},"a":{"a":0,"k":[236.879,292.737],"ix":1},"s":{"a":0,"k":[50,50],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"planete Outlines - Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-98.335,64.79],[-105.619,4.984],[105.619,-64.79],[-80.316,24.919]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5254901960784314,0.23137254901960785,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[316.247,247.882],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[673.623,252.941],"ix":2},"a":{"a":0,"k":[316.247,247.882],"ix":1},"s":{"a":0,"k":[50,50],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"planete Outlines - Group 2","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-133.812,-42.171],[133.812,-75.141],[5.765,75.141],[-61.708,18.402],[124.227,-71.307],[-87.011,-1.534]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5254901960784314,0.23137254901960785,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[297.638,254.4],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tr","p":{"a":0,"k":[664.319,256.2],"ix":2},"a":{"a":0,"k":[297.638,254.4],"ix":1},"s":{"a":0,"k":[50,50],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"planete Outlines - Group 3","np":1,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":151,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"planete Outlines - Group 5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":45,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":102,"s":[100]},{"t":150,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[327.38,267.583,0],"to":[25.833,0,0],"ti":[-25.833,0,0]},{"t":150,"s":[482.38,267.583,0]}],"ix":2},"a":{"a":0,"k":[171.76,193.166,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[13.485,0],[4.38,-4.171],[21.913,0],[3.575,-18.765],[1.851,0],[0,-13.484],[-0.011,-0.291],[1.599,0],[0,-6.743],[-6.742,0],[0,0],[0,13.485]],"o":[[-6.526,0],[-0.793,-21.719],[-19.806,0],[-1.734,-0.391],[-13.485,0],[0,0.293],[-1.4,-0.559],[-6.742,0],[0,6.742],[0,0],[13.485,0],[0,-13.484]],"v":[[59.669,-8.242],[42.84,-1.506],[2.287,-40.592],[-37.576,-7.638],[-42.962,-8.242],[-67.378,16.174],[-67.356,17.049],[-71.878,16.174],[-84.086,28.383],[-71.878,40.591],[59.669,40.591],[84.086,16.174]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5647058823529412,0.29411764705882354,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[171.76,193.166],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":151,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[406,306,0],"ix":2},"a":{"a":0,"k":[400,300,0],"ix":1},"s":{"a":0,"k":[179,179,100],"ix":6}},"ao":0,"w":800,"h":600,"ip":0,"op":147,"st":0,"bm":0}],"markers":[]}')},202:function(e,t,n){},203:function(e,t,n){},208:function(e,t){},218:function(e,t,n){},268:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var a,s,i=n(0),r=n.n(i),c=n(35),l=n.n(c),o=(n(202),n(23)),d=(n(203),n(53)),u=n(15),p=n(102),m=n(294),b=n(303),j=n(22),y=n(10),x=n(3),h=n.n(x),O=n(304),f=n(168),g=n(295),k=n(81),v=n(167),S=parseInt("137",10),w=new k.a({supportedChainIds:[S]}),T=new v.a({rpc:Object(o.a)({},S,"https://polygon-rpc.com"),qrcode:!0,supportedChainIds:[S],pollingInterval:3e3,chainId:S}),N=(a={},Object(o.a)(a,"metamask",w),Object(o.a)(a,"walletconnect",T),a),C=(s={},Object(o.a)(s,"metamask","Metamask"),Object(o.a)(s,"walletconnect","Wallet Connect"),n(302)),E=n(1),A=function(e){return Object(E.jsx)(C.a.div,{className:"dialog-backdrop",onClick:e.onClick,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.children})},I={hidden:{y:"-50vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:1,type:"spring",damping:15,stiffnesss:300}},exit:{y:"50vh",opacity:0}},B=function(e){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(p.a,{children:Object(E.jsx)("style",{children:"body { overflow-y: hidden; }"})}),Object(E.jsx)(A,{onClick:e.handleClose,children:Object(E.jsx)(C.a.div,{variants:I,initial:"hidden",animate:"visible",exit:"exit",onClick:function(e){e.stopPropagation()},className:"dialog-modal",children:e.children})})]})},M=function(e){var t=Object(i.useState)(!1),n=Object(y.a)(t,2),a=(n[0],n[1],Object(i.useState)(!1)),s=Object(y.a)(a,2),r=s[0],c=s[1],l=Object(f.a)(),o=l.account,d=l.activate,u=Object(f.a)().error,p=Object(i.useState)(""),m=Object(y.a)(p,2),b=m[0],x=m[1];Object(i.useEffect)((function(){u&&x(u.message)}),[u]);var k=function(e){d(N[e]),x(""),c(!1)},v=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(""),c(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"header-wrapper",children:o?Object(E.jsxs)("button",{onClick:v,className:"connect-wallet-btn connected color-green pe-all",id:"wallet-unconnected",children:["Connected (",Object(g.b)(o),")"]}):Object(E.jsxs)("button",{onClick:v,className:"connect-wallet-btn unconnected color-purple pe-all",id:"wallet-unconnected",children:[Object(E.jsx)("img",{src:"/static/img/wallet.svg",alt:"",className:"wallet-icon"}),b?Object(E.jsx)("span",{children:b}):Object(E.jsx)("span",{children:"Connect Wallet"})]})}),Object(E.jsx)(O.a,{initial:!1,exitBeforeEnter:!0,onExitComplete:function(){return null},children:r&&Object(E.jsxs)(B,{modalOpen:r,handleClose:function(){c(!1)},children:[Object(E.jsx)("h2",{className:"text-center mt-3",children:"Connect Wallet"}),Object(E.jsxs)("div",{className:"d-flex flex-wrap flex-column align-items-center mt-3 mb-3",style:{width:"90%",marginInline:"auto"},children:[Object(E.jsx)("h6",{children:"Connect with"}),Object(E.jsxs)("button",{className:"choose-wallet-btn m-2",value:"metamask",onClick:function(){return k("metamask")},children:[Object(E.jsx)("img",{src:"/static/img/metamask.jpg",alt:"",className:"wallet-logo"}),"Metamask"]}),Object(E.jsxs)("button",{className:"choose-wallet-btn m-2",value:"walletConnect",onClick:function(){return k("walletconnect")},children:[Object(E.jsx)("img",{src:"/static/img/walletconnect.jpg",alt:"",className:"wallet-logo"}),Object(E.jsx)("span",{children:"WalletConnect"})]})]})]})})]})},D=(n(218),n(14)),V=n(59);n(181),n(182),"Pincubator WAAB Series (".concat(Object(g.b)("0x685B1ded8013785d6623CC18D214320b6Bb64759"),")"),"Pincubator WAAB Series (".concat(Object(g.b)("0x685B1ded8013785d6623CC18D214320b6Bb64759"),")"),"Pincubator WAAB Series (".concat(Object(g.b)("0x685B1ded8013785d6623CC18D214320b6Bb64759"),")");n(268);var F=[{name:"Digital Renaissance",symbol:"VINCI",thumbnail:"/static/seed/VINCI/thumbnail.jpg",routes:"vinci"}],U=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("section",{children:Object(E.jsxs)(C.a.div,{initial:{opacity:0,y:"-20vh"},animate:{opacity:1,y:"0"},exit:{opacity:0},transition:{duration:1,type:"spring"},className:"container d-flex flex-column",style:{height:"100%",minHeight:"98vh",paddingTop:"6rem"},children:[Object(E.jsx)("h1",{children:"Pincubator Seed"}),Object(E.jsx)("div",{className:"row",children:F.map((function(e,t){return Object(E.jsx)("div",{className:"col-12 col-md-6 col-lg-3 p-2",children:Object(E.jsx)(d.b,{to:"/".concat(e.routes),children:Object(E.jsxs)("div",{className:"SeedList",children:[Object(E.jsx)("div",{className:"SeedList-thumbnail",children:Object(E.jsx)("img",{className:"SeedList-thumbnail-img",src:e.thumbnail,alt:""})}),Object(E.jsxs)("div",{className:"SeedList-detail",children:[Object(E.jsxs)("h3",{className:"SeedList-symbol",children:["$",e.symbol]}),Object(E.jsx)("h6",{className:"SeedList-name",children:e.name})]})]})})},t)}))})]})})})},_=n(134),P=n(301),G=n(139),L=n(305);function R(e){Object(f.a)().account;var t=Object(i.useState)(!1),n=Object(y.a)(t,2),a=n[0],s=n[1],r=Object(L.a)(e.token,"approve",{transactionName:"Approve Token"}),c=r.state,l=r.send;return Object(i.useEffect)((function(){"Exception"!==c.status&&"Fail"!==c.status||s(!1),"None"===c.status&&s(!1),"Success"===c.status&&s(!1)}),[c]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("button",{className:"button-outline purple-fill mt-4 w-100",style:{padding:"0.3rem"},onClick:function(){s(!0),l(e.spender,e.amount)},disabled:a,children:a?"Approving...":"Approve"})})}var W=n(187),H=n(306),J=n(79),K=n(135),$=n(136),X="0x42bD26e376C2D9804923C32f5b2861e1b20E6fd9",Y=new G.a.Interface(K),q=new J.a(X,K),z="0x2791bca1f2de4661ed88a30c99a7a9449aa84174",Q=(new G.a.Interface($),new J.a(z,$)),Z=(n(184),n(63)),ee=n.n(Z);function te(e){return ee()(e).format(Number.isInteger(e)?"0000":"0.00")}var ne=n(69),ae=n.n(ne),se=(n(273),n(137));function ie(){var e=Object(f.a)().account,t=Object(i.useState)(!1),n=Object(y.a)(t,2),a=n[0],s=n[1],r=function(){s(!1)},c=Object(i.useState)(0),l=Object(y.a)(c,2),o=l[0],u=l[1],p=Object(i.useState)(0),m=Object(y.a)(p,2),b=m[0],x=m[1],g=Object(i.useState)(0),k=Object(y.a)(g,2),v=k[0],S=k[1],w=Object(i.useState)(0),T=Object(y.a)(w,2),N=T[0],A=T[1],I=Object(i.useState)(0),M=Object(y.a)(I,2),F=M[0],U=M[1],J=Object(i.useState)(0),K=Object(y.a)(J,2),$=K[0],Z=K[1],ee=Object(i.useState)(""),ne=Object(y.a)(ee,2),ie=ne[0],re=ne[1],ce=Object(i.useState)(G.a.parseEther("0")),le=Object(y.a)(ce,2),oe=le[0],de=le[1],ue=Object(i.useState)(G.a.parseEther("0")),pe=Object(y.a)(ue,2),me=pe[0],be=pe[1],je=Object(i.useState)(G.a.parseEther("0")),ye=Object(y.a)(je,2),xe=ye[0],he=ye[1],Oe=Object(i.useState)(G.a.parseEther("0")),fe=Object(y.a)(Oe,2),ge=fe[0],ke=fe[1],ve=Object(i.useState)(G.a.parseEther("0")),Se=Object(y.a)(ve,2),we=Se[0],Te=Se[1],Ne=Object(i.useState)(G.a.parseEther("0")),Ce=Object(y.a)(Ne,2),Ee=Ce[0],Ae=Ce[1],Ie=Object(i.useState)(G.a.parseEther("0")),Be=Object(y.a)(Ie,2),Me=Be[0],De=Be[1],Ve=Object(i.useState)(!1),Fe=Object(y.a)(Ve,2),Ue=Fe[0],_e=Fe[1],Pe=Object(i.useState)(""),Ge=Object(y.a)(Pe,2),Le=Ge[0],Re=Ge[1],We=Object(W.b)([{abi:Y,address:X,method:"startTime",args:[]},{abi:Y,address:X,method:"endTime",args:[]},{abi:Y,address:X,method:"status",args:[]},{abi:Y,address:X,method:"SOFTCAP",args:[]},{abi:Y,address:X,method:"HARDCAP",args:[]},{abi:Y,address:X,method:"MIN_BASE_TOKEN_PER_WALLET",args:[]},{abi:Y,address:X,method:"MAX_BASE_TOKEN_PER_WALLET",args:[]},{abi:Y,address:X,method:"totalCollected",args:[]},{abi:Y,address:X,method:"participants",args:[e]},{abi:Y,address:X,method:"BUY_PRICE",args:[]}]),He=Object(H.a)(z,e,X),Je=Object(i.useState)(0),Ke=Object(y.a)(Je,2),$e=Ke[0],Xe=Ke[1];Object(i.useEffect)((function(){if(We[0]){var e=new Date(1e3*We[0].toString());A(Object(se.a)(e,"mmmm dS, yyyy, HH:MM:ss"))}if(We[1]){e=new Date(1e3*We[1].toString());U(Object(se.a)(e,"mmmm dS, yyyy, HH:MM:ss"))}if(We[2]&&(Z(We[2]),0==We[2]&&re("Scheduled"),1==We[2]&&re("Active"),2==We[2]&&re("Closed"),3==We[2]&&re("Failed")),We[3]&&de(We[3][0]),We[4]&&be(We[4][0]),We[5]&&he(We[5][0]),We[6]&&ke(We[6][0]),We[7]&&Te(We[7][0]),We[8]&&Ae(We[8][0]),We[9]&&De(We[9][0]),We[4]&&We[7]){var t=We[7][0].mul(G.a.parseUnits("100",6)).div(We[4][0]);u(Number(G.a.formatUnits(t,6)))}}),[We]),Object(i.useEffect)((function(){Ue&&(s(!0),_e(!1))}),[Ee,Le]);var Ye=Object(V.a)(),qe=Ye.register,ze=Ye.handleSubmit,Qe=Ye.setValue,Ze=(Ye.value,Ye.setError,Ye.watch),et=Ye.formState.errors,tt=Object(i.useState)(""),nt=Object(y.a)(tt,2),at=(nt[0],nt[1],Ze(["amount"]));Object(i.useEffect)((function(){var e=Ze((function(e,t){t.name,t.type;x(e.amount/.02);var n=e.amount.split(".");""==e.amount?S("0"):S(e.amount),n.length>1&&n[1].length>6&&S("0")}));return function(){return e.unsubscribe()}}),[at]),Object(i.useEffect)((function(){0==v&&Qe("amount",G.a.formatUnits(xe.toString(),6).toString(),{shouldValidate:!0,shouldDirty:!0}),G.a.parseUnits(v.toString(),6).gt(ge.sub(Ee))&&Qe("amount",G.a.formatUnits(ge.toString(),6).toString(),{shouldValidate:!0,shouldDirty:!0})}),[xe,v]);var st=Object(L.a)(q,"sell",{transactionName:"Sell Tokens"}),it=st.state,rt=st.send,ct=Object(i.useState)(!1),lt=Object(y.a)(ct,2),ot=lt[0],dt=lt[1];Object(i.useEffect)((function(){"Exception"==it.status&&Xe(it.errorMessage),"Exception"!==it.status&&"Fail"!==it.status||(dt(!1),_e(!1)),"None"===it.status&&(dt(!1),_e(!1)),"Success"===it.status&&(dt(!1),Re(it.transaction.hash),_e(!0))}),[it]);var ut=Object(i.useState)(!1),pt=Object(y.a)(ut,2),mt=pt[0],bt=pt[1],jt=Object(i.useState)(""),yt=Object(y.a)(jt,2),xt=yt[0],ht=yt[1],Ot=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={method:"GET",redirect:"follow"},fetch("https://admin.pincubator.io/verifyseedpassword?id=digitalrenaissance&password=".concat(xt),t).then((function(e){return e.text()})).then((function(e){"VALID"===e?bt(!0):alert("INVALID PASSWORD")})).catch((function(e){return console.log("error",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(E.jsxs)(E.Fragment,{children:[!mt&&Object(E.jsxs)("section",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"100vh",width:"100vw"},children:[Object(E.jsx)("h3",{className:"text-center",children:"Input Seed Password for"}),Object(E.jsx)("h2",{style:{fontWeight:"bold"},children:"$VINCI"}),Object(E.jsx)("input",{className:"purple-input form-control",style:{maxWidth:"30rem"},placeholder:"Password",value:xt,onChange:function(e){ht(e.target.value)}}),Object(E.jsx)("button",{onClick:Ot,className:"button-outline mt-3",children:"ACCESS"})]}),mt&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("section",{className:"section-dashboard",children:Object(E.jsxs)(C.a.div,{initial:{opacity:0,y:"-20vh"},animate:{opacity:1,y:"0"},exit:{opacity:0},transition:{duration:1,type:"spring"},className:"container pt-5 d-flex flex-column",style:{height:"100%",minHeight:"90vh",paddingTop:"7rem"},children:[Object(E.jsx)(d.b,{to:"/",className:"mt-5 mb-3",children:Object(E.jsx)("button",{className:"button-outline",children:"Go Back"})}),Object(E.jsx)("div",{className:"Seed-introduction",children:Object(E.jsxs)("div",{className:"row mb-3",children:[Object(E.jsxs)("div",{className:"col-12 col-lg-8 mb-3",children:[Object(E.jsxs)("div",{className:"d-flex flex-row flex-wrap align-items-center round-purple-border bg-darken Seed-introduction-badge",children:[Object(E.jsx)("img",{src:"/static/seed/VINCI/logo.png",alt:"",className:"Seed-introduction-logo"}),Object(E.jsxs)("div",{className:"d-flex flex-column",children:[Object(E.jsx)("h3",{className:"Seed-introduction-name",children:"Digital Renaissance"}),Object(E.jsx)("h6",{className:"m-0",children:"$VINCI"}),Object(E.jsx)("div",{className:"white-line",style:{marginTop:"0.5rem",marginBottom:"0.5rem",marginLeft:"0",width:"100%"}}),Object(E.jsxs)("h6",{className:"Seed-introduction-price",children:["1 VINCI = ",.02," USDC"]})]})]}),Object(E.jsxs)("div",{className:"mt-3",children:[Object(E.jsxs)("div",{className:"sale-time",children:[Object(E.jsx)("p",{children:"Network: Polygon"}),ie?Object(E.jsxs)("p",{children:["Status: ",ie]}):"",N&&F&&$<2?Object(E.jsxs)("p",{children:["Sale : ",N," - ",F," (local time)"]}):""]}),Object(E.jsxs)("div",{className:"Seed-introduction-desc",children:[Object(E.jsx)("p",{children:"Welcome to the Digital Renaissance."}),Object(E.jsx)("p",{children:"\ud83d\udc49 Discover, buy and trade NFTs of your favorite artists."}),Object(E.jsxs)("p",{children:["An NFT+ platform for culture & entertainment with:",Object(E.jsx)("br",{}),"- Exclusive music releases",Object(E.jsx)("br",{}),"- NFT art releases",Object(E.jsx)("br",{}),"- 1st access to events",Object(E.jsx)("br",{}),"- Exclusive fan experiences"]}),Object(E.jsx)("p",{children:"Digital Renaissance is a platform where artists & brands may utilize blockchain technology to create new income streams. This is a meeting place for forward-thinking artists, pioneers, curators, music lovers, collectors, and people of technology to be empowered."}),Object(E.jsx)("p",{children:"Together we will raise the bar for how culture & crypto will coexist, establishing a community-driven approach we can benefit creators by:"}),Object(E.jsxs)("p",{children:["- Creating new income streams",Object(E.jsx)("br",{}),"- Adding value to online expression, in newly imagined ways",Object(E.jsx)("br",{}),"- Build stronger connections with fans & supporters"]}),Object(E.jsx)("p",{children:"\ud83d\udfe3 $VINCI"}),Object(E.jsx)("p",{children:"The Digital Renaissance ecosystem is powered by VINCI, our platform token. Offering blockchain possibilities and tech solutions to the culture & entertainment industry. Our audience does not only consist of artist fans. It's also people of any kind who want to inspire, create, and be part of a community that values ethics and spirit. Building towards a community driven ecosystem. For the people by the people."}),Object(E.jsxs)("p",{children:["\ud83d\udd25 VINCI offers a wide arrange of utilities:",Object(E.jsx)("br",{}),"- NFT access",Object(E.jsx)("br",{}),"- NFT airdrops",Object(E.jsx)("br",{}),"- Access to events: online & offline",Object(E.jsx)("br",{}),"- Discounts",Object(E.jsx)("br",{}),"- Staking",Object(E.jsx)("br",{}),"- Premium access: music, livestreams, etc"]}),Object(E.jsx)("p",{children:"Join the rave, join the revolution!"})]})]})]}),Object(E.jsxs)("div",{className:"col-12 col-lg-4",children:[Object(E.jsx)("h5",{children:"Sale Info"}),Object(E.jsx)("div",{className:"Seed-sale-item round-purple-border",children:Object(E.jsx)("h6",{className:"m-1",children:Object(E.jsxs)(ae.a,{type:"textRow",ready:oe.toString()>0,showLoadingAnimation:!0,children:["Softcap: ",Object(E.jsxs)("span",{className:"fw-bold",children:[te(G.a.formatUnits(oe.toString(),6))," USDC"]})]})})}),Object(E.jsx)("div",{className:"Seed-sale-item round-purple-border",children:Object(E.jsx)("h6",{className:"m-1",children:Object(E.jsxs)(ae.a,{type:"textRow",ready:me.toString()>0,showLoadingAnimation:!0,children:["Hardcap: ",Object(E.jsxs)("span",{className:"Seed-sale-item-amount",children:[te(G.a.formatUnits(me.toString(),6))," USDC"]})]})})}),Object(E.jsx)("div",{className:"Seed-sale-item round-purple-border",children:Object(E.jsx)("h6",{className:"m-1",children:Object(E.jsxs)(ae.a,{type:"textRow",ready:we.toString(),showLoadingAnimation:!0,children:["Total Collected: ",Object(E.jsxs)("span",{className:"Seed-sale-item-amount",children:[te(G.a.formatUnits(we.toString(),6))," USDC"]})]})})}),Object(E.jsx)("div",{className:"Seed-sale-item round-purple-border",children:Object(E.jsx)("h6",{className:"m-1",children:Object(E.jsxs)(ae.a,{type:"textRow",ready:xe.toString()>0,showLoadingAnimation:!0,children:["Min USDC per wallet: ",Object(E.jsxs)("span",{className:"Seed-sale-item-amount d-block",children:[te(G.a.formatUnits(xe.toString(),6))," USDC"]})]})})}),Object(E.jsx)("div",{className:"Seed-sale-item round-purple-border",children:Object(E.jsx)("h6",{className:"m-1",children:Object(E.jsxs)(ae.a,{type:"textRow",ready:ge.toString()>0,showLoadingAnimation:!0,children:["Max USDC per wallet: ",Object(E.jsxs)("span",{className:"Seed-sale-item-amount d-block",children:[te(G.a.formatUnits(ge.toString(),6))," USDC"]})]})})})]})]})}),Object(E.jsxs)("div",{className:"row mb-5",children:[Object(E.jsxs)("div",{className:"col-12 col-lg-8 mb-3",children:[Object(E.jsx)("h4",{className:"fw-bold",children:"Sale"}),Object(E.jsxs)("div",{className:"d-flex flex-column round-purple-border mt-2 bg-darken p-2",children:[Object(E.jsxs)("div",{className:"d-flex flex-row align-items-center Seed-progress-label mb-1",children:[Object(E.jsxs)("div",{className:"progress-percent-container",children:[o.toFixed(2),"%"]}),Object(E.jsxs)("div",{className:"progress-softcap",children:["Hardcap: ",te(G.a.formatUnits(me.toString(),6))," USDC"]})]}),Object(E.jsx)(_.a,{className:"mb-1",children:Object(E.jsx)(_.b,{color:"#CCCCCC",variant:"striped",animated:!0,value:o})}),Object(E.jsx)("div",{className:"white-line",style:{marginTop:"0.5rem",marginBottom:"0.5rem",marginLeft:"0",width:"100%",maxWidth:"unset"}}),e?Object(E.jsxs)("form",{onSubmit:ze((function(e){dt(!0),rt(G.a.parseUnits(v.toString(),6).toString())}),(function(e,t){return console.log(e,t)})),children:[Object(E.jsxs)("div",{className:"d-flex flex-row mt-2",children:[Object(E.jsx)("input",Object(D.a)(Object(D.a)({},qe("amount",{required:!0,max:G.a.formatUnits(ge.sub(Ee).toString(),6),min:G.a.formatUnits(xe.toString(),6)})),{},{type:"number",step:"0.000001",className:"form-control purple-input Seed-buy-amount",placeholder:"Buy amount"})),Object(E.jsx)("button",{onClick:function(e){Qe("amount",G.a.formatUnits(ge.sub(Ee).toString(),6).toString(),{shouldValidate:!0,shouldDirty:!0}),e.preventDefault()},className:"button-outline purple-fill Seed-max-btn",children:"MAX"})]}),et.amount&&Object(E.jsxs)("span",{className:"invalid-danger",style:{marginTop:"-0.2"},children:["Min: ",G.a.formatUnits(xe.toString(),6)," USDC | Max: ",G.a.formatUnits(ge.sub(Ee).toString(),6)," USDC"]}),$e?Object(E.jsx)("span",{className:"invalid-danger",style:{marginTop:"-0.2"},children:$e}):"",Object(E.jsxs)("div",{className:"buy-result",children:["You'll get ",b," VINCI"]}),void 0!==He&&He.gte(G.a.parseUnits(v,6))?Object(E.jsx)("button",{className:"button-outline purple-fill mt-4 w-100",style:{padding:"0.3rem"},type:"submit",disabled:ot,children:ot?"Buying...":"Buy"}):Object(E.jsx)(R,{token:Q,spender:X,amount:G.a.parseUnits("1000",6).toString()})]}):""]})]}),e?Object(E.jsxs)("div",{className:"col-12 col-lg-4 mb-3",children:[Object(E.jsx)("h5",{children:"Balance Info"}),Object(E.jsx)("div",{className:"Seed-sale-item round-purple-border",children:Object(E.jsxs)("h6",{className:"m-1",children:["VINCI Balance: ",Object(E.jsx)("span",{className:"Seed-sale-item-amount",children:Ee?Object(E.jsxs)(ae.a,{type:"textRow",ready:void 0!==Ee,showLoadingAnimation:!0,children:[te(G.a.formatEther(Ee.mul(Me).div(G.a.parseUnits("1",6))))," VINCI"]}):"0 VINCI"})]})}),Object(E.jsx)("div",{className:"Seed-sale-item round-purple-border",children:Object(E.jsxs)("h6",{className:"m-1",children:["Can buy: ",Object(E.jsxs)("span",{className:"Seed-sale-item-amount",children:[te(G.a.formatEther(ge.sub(Ee).mul(Me).div(G.a.parseUnits("1",6))))," VINCI"]})]})})]}):""]})]})}),Object(E.jsx)(O.a,{initial:!1,exitBeforeEnter:!0,onExitComplete:function(){return null},children:a&&Object(E.jsxs)(B,{modalOpen:a,handleClose:r,children:[Object(E.jsx)("img",{src:"/static/img/success-check.svg",alt:"",style:{width:"3rem",marginBottom:"1rem"}}),Object(E.jsx)("h2",{className:"text-center",children:"Buy Success!"}),Object(E.jsx)("h6",{className:"text-center",children:Le?Object(E.jsxs)(E.Fragment,{children:["Tx:"," ",Object(E.jsx)("a",{href:"https://polygonscan.com/tx/".concat(Le),target:"_blank",children:Object(P.a)(Le)})]}):""}),Object(E.jsx)("div",{className:"d-flex flex-wrap flex-row justify-content-center mt-3",children:Object(E.jsx)("button",{className:"button-outline m-2 purple-fill",onClick:r,children:"Alright!"})})]})})]})]})}var re={},ce=parseInt("137",10),le={readOnlyChainId:ce,readOnlyUrls:Object(o.a)({},ce,"https://polygon-rpc.com"),networks:[m.b,m.a],pollingInterval:3e3};var oe=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(b.a,{config:le,children:Object(E.jsx)(p.b,{context:re,children:Object(E.jsxs)(d.a,{children:[Object(E.jsx)(M,{}),Object(E.jsxs)("div",{className:"background",children:[Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{})]}),Object(E.jsx)("div",{className:"pages",children:Object(E.jsxs)(u.c,{children:[Object(E.jsx)(u.a,{path:"/",exact:!0,element:Object(E.jsx)(U,{})}),Object(E.jsx)(u.a,{path:"/vinci",element:Object(E.jsx)(ie,{})}),Object(E.jsx)(u.a,{path:"*",element:Object(E.jsx)("main",{className:"d-flex flex-column justify-content-center align-items-center",style:{zIndex:"3",position:"relative",height:"70vh"},children:Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:"There's nothing here!"}),Object(E.jsx)(d.b,{to:"/",children:Object(E.jsx)("button",{className:"bubbly-button",children:"Back to Home"})})]})})})]})})]})})})})},de=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,406)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};l.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(oe,{})}),document.getElementById("root")),de()}},[[274,1,2]]]);
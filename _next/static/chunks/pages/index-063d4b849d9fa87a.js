(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1522)}])},1522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pages}});var a=n(85893),i=n(37247),s=n.n(i),r=n(67294),o=n(36612),l=n.n(o),d=n(4298),p=n.n(d),u=n(67098),c=n(69077);let firstFew=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return e.substring(0,t)},lastFew=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e.slice(-t)},abbreviateAddressAsString=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;try{return"".concat(firstFew(e,t+1),"...").concat(lastFew(e,t))}catch(e){return null}};var m=n(69417),y=n(85333),f=n(33454),x=n(96420),h=n(21519),g=n(82729),w=n(11496),v=n(98456);function _templateObject(){let e=(0,g._)(["\n  svg {\n    color: ",";\n  }\n"]);return _templateObject=function(){return e},e}let T=(0,w.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.secondary.main}}),b=(0,w.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.subtle.main}}),j=(0,w.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.warning.main}}),S=(0,w.ZP)(e=>{let{...t}=e;return(0,a.jsx)(v.Z,{size:"1rem",...t})})(_templateObject(),e=>{let{theme:t}=e;return t.palette.secondary.main});var _=[{inputs:[{internalType:"string",name:"_uri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getAllNFTs",outputs:[{internalType:"uint256[8]",name:"counts",type:"uint256[8]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],helpers_usePersistState=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=(0,r.useCallback)(()=>{try{let n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(n){return console.warn("Error reading localStorage key “".concat(t,"”:"),n),e}},[e,t]),[i,s]=(0,r.useState)(a()),o=(0,r.useCallback)(e=>{try{let a=e instanceof Function?e(i):e;window.localStorage.setItem(t,JSON.stringify(a)),s(a),n&&window.dispatchEvent(new Event("local-storage"))}catch(e){console.warn("Error setting localStorage key “".concat(t,"”:"),e)}},[t,i,n]);(0,r.useEffect)(()=>{window.localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify(e))},[t,e]);let l=(0,r.useCallback)(e=>{(null==e||!e.key||e.key===t)&&n&&s(a())},[t,a,n]);return(0,r.useEffect)(()=>(window.addEventListener("storage",l),()=>{window.removeEventListener("storage",l)}),[l]),(0,r.useEffect)(()=>(window.addEventListener("local-storage",l),()=>{window.removeEventListener("local-storage",l)}),[l]),[i,o]},F=n(9008),E=n.n(F);let A=[{chain:"Sonic",label:"Sonic",speed:[]},{chain:"Fantom",label:"Fantom",speed:[]},{chain:"Avalanche",label:"Avalanche",speed:[]}];var pages=()=>{let[e,t]=(0,r.useState)(null),[n,i]=(0,r.useState)(250),[o,d]=(0,r.useState)([]),[g,w]=(0,r.useState)(0),[v,F]=(0,r.useState)(0),[k,N]=(0,r.useState)(!1),[C,I]=(0,r.useState)(!1),[M,Z]=(0,r.useState)(0n),[O,D]=(0,r.useState)(A),[L,R]=helpers_usePersistState(A,"txSpeedHistory"),{open:P}=(0,u.k_)(),{address:H}=(0,c.mA)(),{chain:B}=(0,c.LN)(),{chains:z,error:V,isLoading:J,pendingChainId:G,switchNetwork:U}=(0,c.g0)(),W=(0,r.useCallback)((e,t)=>{let n=L.map(n=>{var a;return(null==n?void 0:null===(a=n.chain)||void 0===a?void 0:a.toLowerCase())===(null==e?void 0:e.toLowerCase())&&n.speed.push({speed:t,timestamp:Date.now()}),n});R(n)},[L,R]),{config:X}=(0,c.PJ)({address:"0xE33B9cAea42ead9D2f6e88489A888CA75a8D09Aa",abi:_,functionName:"mint",args:[]}),{data:K}=(0,c.do)({address:"0xE33B9cAea42ead9D2f6e88489A888CA75a8D09Aa",abi:_,functionName:"getAllNFTs",args:[H],watch:!0}),{writeAsync:Y,status:q,data:Q,reset:$}=(0,c.GG)(X),{isLoading:ee,isSuccess:et,isError:en}=(0,c.BX)({hash:null==Q?void 0:Q.hash}),ea=(0,r.useMemo)(()=>e&&(ee||k),[e,ee,k]),onMint=async()=>{N(!0);try{await (null==Y?void 0:Y()),console.log("START",Date.now()),w(Date.now())}catch(e){N(!1),F(0),$()}};return(0,r.useEffect)(()=>{Z((null==K?void 0:K.reduce((e,t)=>e+BigInt(t),0n))||0n)},[K]),(0,r.useEffect)(()=>{"error"===q&&g>0&&(console.log("ERROR",Date.now()),w(0),F(0))},[q,g]),(0,r.useEffect)(()=>{(et||en)&&g>0&&k&&(console.log("Time taken ".concat(Date.now()-g,"ms")),W((null==B?void 0:B.name)||"unknown",Date.now()-g)),(et||en)&&(N(!1),w(0),F(0),$())},[et,en,g,W,null==B?void 0:B.name,k,$]),(0,r.useEffect)(()=>{if(k){let e=setInterval(()=>{F(g>0?(Date.now()-g)/1e3:0)},100);return()=>clearInterval(e)}},[k,g]),(0,r.useEffect)(()=>{I(void 0!==z.find(e=>e.id===n))},[z,n]),(0,r.useEffect)(()=>{H?t(H):t(null)},[H]),(0,r.useEffect)(()=>{L?D(L):D(A)},[L]),(0,r.useEffect)(()=>{z&&d(z)},[z]),(0,r.useEffect)(()=>{(null==B?void 0:B.id)&&(null==B?void 0:B.id)!==n&&i(B.id)},[null==B?void 0:B.id,n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(E(),{children:[(0,a.jsx)("title",{children:"Fantom Sonic"}),(0,a.jsx)("meta",{name:"description",content:"Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"keywords",content:"fantom, sonic, fvm, testnet, transactions, speed, tps, crypto"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Fantom Sonic - Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://sonic.paintswap.io/og.png"}),(0,a.jsx)("meta",{name:"twitter:domain",content:"sonic.paintswap.io"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@paintoshi"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@paintoshi"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Fantom Sonic - Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{property:"og:title",content:"Fantom Sonic - Test the speed of Fantom FVM"}),(0,a.jsx)("meta",{property:"og:description",content:"The upcoming Fantom network"}),(0,a.jsx)("meta",{property:"og:image",content:"https://sonic.paintswap.io/og.png"}),(0,a.jsx)("meta",{property:"og:url",content:"https://sonic.paintswap.io"})]}),(0,a.jsx)("main",{className:"".concat(l().main," ").concat(s().className),children:(0,a.jsx)("div",{className:l().center,children:(0,a.jsxs)("div",{className:l().mainPanel,children:[(0,a.jsx)("h1",{className:l().title,children:"Fantom Sonic"}),(0,a.jsxs)("p",{className:l().titleSub,children:["Compare Sonic with other networks",(0,a.jsx)("br",{})]}),e&&(0,a.jsx)(m.Z,{variant:"contained",color:"primary",onClick:()=>P(),children:abbreviateAddressAsString(null!=H?H:"N/A")}),!e&&(0,a.jsx)(m.Z,{variant:"contained",color:"primary",onClick:()=>P(),children:"Connect"}),e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.Z,{mt:"16px",mb:"4px",children:(0,a.jsx)(b,{children:"Choose Network"})}),(0,a.jsx)(f.Z,{color:"primary",value:n,exclusive:!0,onChange:(e,t)=>{i(t)},"aria-label":"Network",children:o.map(e=>(0,a.jsx)(x.Z,{disabled:!U||e.id===(null==B?void 0:B.id)||ee||!H||k,onClick:()=>null==U?void 0:U(e.id),value:e.id,size:"small",sx:{paddingBottom:"5px"},children:e.name},e.id))})]}),(0,a.jsxs)(y.Z,{mt:"8px",children:[(0,a.jsx)(j,{fontSize:"14px",children:V&&V.message}),!C&&!!e&&(0,a.jsx)(j,{fontSize:"14px",children:"Unsupported Network Detected"})]}),(0,a.jsx)(y.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)(m.Z,{variant:"contained",color:"primary",disabled:ee||!Y||!H||k||!C,onClick:onMint,startIcon:ea?(0,a.jsx)(S,{}):null,sx:{textTransform:"unset"},children:ea?"Minting (".concat(v.toFixed(1)," sec)"):"Mint NFT"}),(0,a.jsx)(y.Z,{mt:"8px",children:(0,a.jsxs)(T,{fontSize:"14px",children:["Owned: ",M.toString()," NFTs"]})}),(0,a.jsx)(y.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)(y.Z,{width:"100%",display:"flex",justifyContent:"space-around",flexDirection:"row",mt:"8px",children:O.map(e=>(0,a.jsxs)(y.Z,{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"80px",children:[(0,a.jsx)(T,{children:e.label}),e.speed.map(e=>(0,a.jsxs)(b,{children:[Number((e.speed||0)/1e3).toFixed(1)," s"]},e.timestamp))]},e.chain))}),(0,a.jsx)(y.Z,{alignItems:"center",mt:"16px",children:(0,a.jsx)(m.Z,{variant:"text",size:"small",onClick:()=>R(A),style:{lineHeight:1.2},children:"Clear Speed History"})}),(0,a.jsx)(y.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)(y.Z,{mb:"0",children:(0,a.jsx)("a",{href:"https://github.com/PaintSwap/fantom-sonic-frontend",target:"_blank",children:"Github Source"})})]})})}),(0,a.jsx)(p(),{strategy:"afterInteractive",id:"google-tag1",src:"https://www.googletagmanager.com/gtag/js?id=G-NVFJDSR57S"}),(0,a.jsx)(p(),{strategy:"afterInteractive",id:"google-tag2",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-NVFJDSR57S', {\n              page_path: window.location.pathname,\n            });\n          "}})]})}},36612:function(e){e.exports={main:"Home_main__VkIEL",center:"Home_center__O_TIN",title:"Home_title__hYX6j",titleSub:"Home_titleSub__nszZn",sub:"Home_sub__3Mk3_",mainPanel:"Home_mainPanel__6Ksuj"}}},function(e){e.O(0,[476,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);
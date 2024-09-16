(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(79717)}])},79717:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pages}});var a=n(85893),i=n(37247),r=n.n(i),s=n(67294),o=n(36612),l=n.n(o),d=n(99662),c=n(92321),p=n(54124),u=n(49089);let firstFew=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return e.substring(0,t)},lastFew=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e.slice(-t)},abbreviateAddressAsString=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;try{return"".concat(firstFew(e,t+1),"...").concat(lastFew(e,t))}catch(e){return null}};function trackEvent(e,t,n,a){u.ZP.event({action:e,category:null!=t?t:"event",label:null!=n?n:"event",value:null!=a?a:0})}var m=n(31536),y=n(3803),f=n(87357),h=n(21519),v=n(82729),g=n(90948),b=n(98456);function _templateObject(){let e=(0,v._)(["\n  svg {\n    color: ",";\n  }\n"]);return _templateObject=function(){return e},e}let x=(0,g.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.secondary.main}}),w=(0,g.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.subtle.main}});(0,g.ZP)("div")(e=>{let{theme:t,fontSize:n="16px"}=e;return{fontSize:n,fontWeight:400,textAlign:"center",color:t.palette.warning.main}});let T=(0,g.ZP)(e=>{let{...t}=e;return(0,a.jsx)(b.Z,{size:"1rem",...t})})(_templateObject(),e=>{let{theme:t}=e;return t.palette.secondary.main});var A=[{inputs:[{internalType:"string",name:"_uri",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"getAllNFTs",outputs:[{internalType:"uint256[8]",name:"counts",type:"uint256[8]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],helpers_usePersistState=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=(0,s.useCallback)(()=>{try{let n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(n){return console.warn("Error reading localStorage key “".concat(t,"”:"),n),e}},[e,t]),[i,r]=(0,s.useState)(a()),o=(0,s.useCallback)(e=>{try{let a=e instanceof Function?e(i):e;window.localStorage.setItem(t,JSON.stringify(a)),r(a),n&&window.dispatchEvent(new Event("local-storage"))}catch(e){console.warn("Error setting localStorage key “".concat(t,"”:"),e)}},[t,i,n]);(0,s.useEffect)(()=>{window.localStorage.getItem(t)||localStorage.setItem(t,JSON.stringify(e))},[t,e]);let l=(0,s.useCallback)(e=>{(null==e||!e.key||e.key===t)&&n&&r(a())},[t,a,n]);return(0,s.useEffect)(()=>(window.addEventListener("storage",l),()=>{window.removeEventListener("storage",l)}),[l]),(0,s.useEffect)(()=>(window.addEventListener("local-storage",l),()=>{window.removeEventListener("local-storage",l)}),[l]),[i,o]},j=n(9008),C=n.n(j),k=n(82616),_=n(42229),S=n(10777),E=n(49321),I=n(37003);let getBaseAPIQueryOptions=e=>({staleTime:e?0:1/0,refetchInterval:null!=e?e:0,refetchIntervalInBackground:!1,retry:5,retryOnMount:!0,retryDelay:e=>(1+2**e)*1e3});var hooks_useNFTBalance=e=>{let{address:t,contractAddress:n,abi:a,chainId:i,refresh:r=!0}=e,fetchNFTBalance=async()=>{if(!i||!t||!(0,E.U)(t))return null;try{let e=await (0,I.L)(k.wagmiConfig,{address:n,abi:a,functionName:"getAllNFTs",args:[t]});return(null==e?void 0:e.reduce((e,t)=>e+BigInt(t),0n))||0n}catch(e){return console.error("Error fetching NFT balance:",e),null}},s=(0,S.a)({queryKey:["useNFTBalance",i,t,n,a,r],queryFn:fetchNFTBalance,enabled:!!i&&!!t&&(0,E.U)(t),...getBaseAPIQueryOptions(r?1e5:null)});return s},F=n(40145);let N={250:"/images/fantom.png",43114:"/images/avalanche.png",64165:"/images/sonic.png",42220:"/images/celo.png",2222:"/images/kava.png",42161:"/images/arbitrum.png",8453:"/images/base.png",10:"/images/optimism.png",137:"/images/polygon.png"};var Components_NetworkButton=e=>{var t;let{}=e,{open:n}=(0,d.k_)(),{isConnected:i,chain:r}=(0,c.m)(),o=(0,F.C)(),p=(0,s.useMemo)(()=>o.some(e=>e.id===(null==r?void 0:r.id)),[r,o]);return(0,a.jsx)(y.Z,{size:"large",className:l().mainButton,variant:"contained",color:"primary",onClick:()=>n({view:"Networks"}),disabled:!i,startIcon:(null==r?void 0:r.id)?(0,a.jsx)("img",{src:N[(null==r?void 0:r.id)||250],alt:null!==(t=null==r?void 0:r.name)&&void 0!==t?t:"",width:28,height:28}):null,style:{whiteSpace:"nowrap"},children:p?"".concat(null==r?void 0:r.name):"Select Chain"})},M=n(85722),hooks_useBlockNumber=e=>{let{refresh:t=!0}=e,fetchData=async()=>{let e=await (0,M.z)(k.wagmiConfig,{cacheTime:0});return e},n=(0,S.a)({queryKey:["useBlockNumber",t],queryFn:fetchData,placeholderData:0n,...getBaseAPIQueryOptions(t?1e3:null)});return n},Components_MintingButton=e=>{let{showAddress:t,isMinting:n,onMint:i,isMintingLoading:r,startTime:o}=e,[d,c]=(0,s.useState)(0);return(0,s.useEffect)(()=>{if(n){let e=setInterval(()=>{c(o>0?(Date.now()-o)/1e3:0)},100);return()=>clearInterval(e)}c(0)},[n,o]),(0,a.jsx)(y.Z,{size:"large",className:l().mainButton,variant:"contained",color:"primary",disabled:!t||n,onClick:i,startIcon:r?(0,a.jsx)(T,{}):null,sx:{textTransform:"unset"},children:r?"Minting (".concat(d.toFixed(1)," sec)"):"Mint NFT"})},Components_SpeedDisplay=e=>{let{txSpeedsState:t,chainConfig:n,scrollToLatest:i}=e,r=(0,s.useRef)(null),o=(0,s.useRef)({});return(0,s.useEffect)(()=>{if(i&&r.current){var e;let n=null===(e=t.reduce((e,t)=>{var n,a;let i=(null===(n=t.speed[t.speed.length-1])||void 0===n?void 0:n.timestamp)||0,r=e&&(null===(a=e.speed[e.speed.length-1])||void 0===a?void 0:a.timestamp)||0;return i>r?t:e},null))||void 0===e?void 0:e.chainId;if(void 0!==n){let e=o.current[n],t=r.current;if(e&&t){let n=e.getBoundingClientRect(),a=t.getBoundingClientRect(),i=e.offsetLeft-t.offsetLeft-a.width/2+n.width/2;t.scrollTo({left:i,behavior:"smooth"})}}}},[t,i]),(0,a.jsx)(f.Z,{width:"100%",display:"flex",justifyContent:"flex-start",flexDirection:"row",mt:"8px",pb:"8px",style:{overflowX:"auto"},ref:r,children:t.map(e=>{var t;return(0,a.jsxs)(f.Z,{display:"flex",flexDirection:"column",alignItems:"center",marginRight:"16px",marginLeft:"16px",ref:t=>{o.current[e.chainId]=t},children:[(0,a.jsx)(x,{style:{whiteSpace:"nowrap"},children:n[e.chainId].label}),(0,a.jsx)(x,{style:{whiteSpace:"nowrap"},fontSize:"12px",children:"Conf: ".concat(null!==(t=n[e.chainId].confirmations)&&void 0!==t?t:"N/A")}),(0,a.jsx)(x,{style:{whiteSpace:"nowrap"},fontSize:"12px",children:e.average>0?"Avg: ".concat(Number((e.average||0)/1e3).toFixed(1)," s"):"Avg: -"}),e.speed.slice().reverse().map(e=>(0,a.jsxs)(w,{children:[Number((e.speed||0)/1e3).toFixed(1)," s"]},e.timestamp))]},e.chain)})})};let B=[{chain:"Sonic",chainId:64165,speed:[],average:-1},{chain:"Fantom",chainId:250,speed:[],average:-1},{chain:"Avalanche",chainId:43114,speed:[],average:-1},{chain:"Celo",chainId:42220,speed:[],average:-1},{chain:"Kava",chainId:2222,speed:[],average:-1},{chain:"Arbitrum",chainId:42161,speed:[],average:-1},{chain:"Base",chainId:8453,speed:[],average:-1},{chain:"Optimism",chainId:10,speed:[],average:-1},{chain:"Polygon",chainId:137,speed:[],average:-1}],O={250:{label:"Fantom",confirmations:1,contractAddress:"0x493F7909E5CA979646Abb86A81a11701420B784F"},43114:{label:"Avalanche",confirmations:1,contractAddress:"0x493F7909E5CA979646Abb86A81a11701420B784F"},64165:{label:"Sonic (Test)",confirmations:1,contractAddress:"0x2B6639D06A6Aa36B122491d1Cd839253a2324803"},42220:{label:"Celo",confirmations:1,contractAddress:"0xE610df966B3eD42b9251CEEAa34099736C65FFC9"},2222:{label:"Kava",confirmations:1,contractAddress:"0x493F7909E5CA979646Abb86A81a11701420B784F"},42161:{label:"Arbitrum One",confirmations:300,contractAddress:"0x493F7909E5CA979646Abb86A81a11701420B784F"},8453:{label:"Base",confirmations:78,contractAddress:"0x493F7909E5CA979646Abb86A81a11701420B784F"},10:{label:"Optimism",confirmations:78,contractAddress:"0x493F7909E5CA979646Abb86A81a11701420B784F"},137:{label:"Polygon Pos",confirmations:50,contractAddress:"0x493F7909E5CA979646Abb86A81a11701420B784F"}};var pages=()=>{var e,t,n,i,o;let[u,v]=(0,s.useState)(void 0),[g,b]=(0,s.useState)(250),[T,j]=(0,s.useState)(0),[S,E]=(0,s.useState)(!1),[I,F]=(0,s.useState)(B),[N,M]=helpers_usePersistState(B,"txSpeedHistoryV2"),[Z,P]=(0,s.useState)(0),[R,D]=(0,s.useState)(0),[z,L]=(0,s.useState)(!1),{address:H,chain:V}=(0,c.m)(),{data:W}=hooks_useBlockNumber({refresh:Z>0}),{open:K}=(0,d.k_)(),{writeContractAsync:U}=(0,p.S)(),{data:q,refetch:X}=hooks_useNFTBalance({address:H,contractAddress:O[null!==(t=null==V?void 0:V.id)&&void 0!==t?t:250].contractAddress,abi:A,chainId:null!==(n=null==V?void 0:V.id)&&void 0!==n?n:250}),J=(0,s.useRef)(!1),Q=(0,s.useMemo)(()=>{var e,t;return W&&Z&&!(O[null!==(e=null==V?void 0:V.id)&&void 0!==e?e:250].confirmations<=1)?Math.max(0,Math.min(Number(W)-Z,O[null!==(t=null==V?void 0:V.id)&&void 0!==t?t:250].confirmations)):0},[W,Z,null==V?void 0:V.id]),G=(0,s.useMemo)(()=>u&&S,[u,S]),$=(null===(e=process.env)||void 0===e?void 0:"97235759ff6e7ec7545379f2a2046295")||"",Y=(0,s.useCallback)(()=>{D(e=>e+1)},[]),ee=(0,s.useCallback)((e,t)=>{let n=N.map(n=>((null==n?void 0:n.chainId)===e&&(n.speed.push({speed:t,timestamp:Date.now()}),n.average=n.speed.reduce((e,t)=>e+t.speed,0)/n.speed.length),n));M(n),L(!0)},[N,M]),onMint=async()=>{E(!0);try{var e,t,n,a,i;let r;let s=await U({address:O[null!==(e=null==V?void 0:V.id)&&void 0!==e?e:250].contractAddress,abi:A,functionName:"mint",args:[]});console.info("START",Date.now()),console.info("Confirmations to wait for",O[null!==(t=null==V?void 0:V.id)&&void 0!==t?t:250].confirmations),j(Date.now());let o=Date.now();if(P(0),O[null!==(n=null==V?void 0:V.id)&&void 0!==n?n:250].confirmations>1){let e;for(let t=0;t<=120;++t){try{e=await (0,_.e)(k.wagmiConfig,{hash:s,confirmations:1});break}catch(e){console.info("Error on init confirmation",e),console.info("Retrying init confirmation...")}await new Promise(e=>setTimeout(e,1e3))}(null==e?void 0:e.status)==="success"&&P(Number(null!==(a=e.blockNumber)&&void 0!==a?a:0))}for(let e=0;e<=1800;++e){try{r=await (0,_.e)(k.wagmiConfig,{hash:s,onReplaced:e=>console.info("Tx replaced:",e),confirmations:O[null!==(i=null==V?void 0:V.id)&&void 0!==i?i:250].confirmations});break}catch(t){if(console.info("Error",t),console.info("Retrying..."),1800===e)throw t}await new Promise(e=>setTimeout(e,1e3))}if(console.info("Receipt",r),(null==r?void 0:r.status)==="success"){let e=Date.now()-o;console.info("Time taken ".concat(e,"ms")),(null==V?void 0:V.id)&&ee(V.id,e),X(),trackEvent("".concat(null==V?void 0:V.name," tx"),void 0,void 0,e<1e3?100*Math.round(e/100):500*Math.round(e/500))}else console.error("Tx failed",r)}catch(e){console.error(e),trackEvent("Mint Error","Contract")}finally{E(!1),j(0),Y(),P(0)}};return(0,s.useEffect)(()=>{console.info("WC","".concat(null==$?void 0:$.slice(0,4),"..."))},[$]),(0,s.useEffect)(()=>{if(J.current)return;let e=B.find(e=>!N.find(t=>t.chainId===e.chainId));e&&(M([...N,e]),J.current=!0)},[N,M]),(0,s.useEffect)(()=>{if(z){let e=setTimeout(()=>L(!1),100);return()=>clearTimeout(e)}},[z]),(0,s.useEffect)(()=>{H?v(H):v(void 0)},[H]),(0,s.useEffect)(()=>{N?F(N):F(B)},[N]),(0,s.useEffect)(()=>{(null==V?void 0:V.id)&&(null==V?void 0:V.id)!==g&&(b(V.id),E(!1),j(0),Y(),P(0))},[null==V?void 0:V.id,g,E,j,Y,P]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(C(),{children:[(0,a.jsx)("title",{children:"Web3 Speed Checker"}),(0,a.jsx)("meta",{name:"description",content:"Compare the finality of different EVM networks"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"keywords",content:"fantom, sonic, $S, evm, fvm, testnet, transactions, speed, tps, finality, confirmations, fast, crypto, base, arbitrum, optimism, polygon, avalanche, celo, kava"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"Web3 Speed Checker - Test the speed of EVM chains"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://speedchecker.paintswap.io/og.png"}),(0,a.jsx)("meta",{name:"twitter:domain",content:"speedchecker.paintswap.io"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@paintoshi"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@paintoshi"}),(0,a.jsx)("meta",{name:"twitter:description",content:"Compare the finality of different EVM networks"}),(0,a.jsx)("meta",{property:"og:title",content:"Web3 Speed Checker - Test the speed of EVM chains"}),(0,a.jsx)("meta",{property:"og:description",content:"Compare the finality of different EVM networks"}),(0,a.jsx)("meta",{property:"og:image",content:"https://speedchecker.paintswap.io/og.png"}),(0,a.jsx)("meta",{property:"og:url",content:"https://speedchecker.paintswap.io"})]}),(0,a.jsx)("main",{className:"".concat(l().main," ").concat(r().className),children:(0,a.jsx)("div",{className:l().center,children:(0,a.jsxs)("div",{className:l().mainPanel,children:[(0,a.jsx)("h1",{className:l().title,children:"Web3 Speed Checker"}),(0,a.jsxs)("p",{className:l().titleSub,children:["Compare the finality of different EVM networks",(0,a.jsx)("br",{})]}),(0,a.jsxs)(m.Z,{width:"100%",direction:{xs:"column",sm:"row"},alignItems:"center",justifyContent:"center",spacing:2,children:[u&&(0,a.jsx)(y.Z,{size:"large",className:l().mainButton,variant:"contained",color:"primary",onClick:()=>K(),children:abbreviateAddressAsString(null!=H?H:"N/A")}),!u&&(0,a.jsx)(y.Z,{size:"large",className:l().mainButton,variant:"contained",color:"primary",onClick:()=>K(),children:"Connect Wallet"}),(0,a.jsx)(Components_NetworkButton,{})]}),u&&(0,a.jsx)(a.Fragment,{children:(null==V?void 0:V.id)===64165&&(0,a.jsx)(f.Z,{mt:"8px",children:(0,a.jsx)(x,{fontSize:"14px",children:(0,a.jsx)("a",{href:"https://testnet.soniclabs.com/account",target:"_blank",children:"Get Free Sonic $S"})})})}),(0,a.jsx)(f.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)(f.Z,{mb:"8px",children:(0,a.jsxs)(x,{fontSize:"14px",children:["Owned: ",null!==(i=null==q?void 0:q.toString())&&void 0!==i?i:0," NFTs"]})}),(0,a.jsx)(Components_MintingButton,{showAddress:u,isMinting:S,onMint:onMint,isMintingLoading:G,startTime:T},R),O[null!==(o=null==V?void 0:V.id)&&void 0!==o?o:250].confirmations>1&&(0,a.jsx)(f.Z,{mt:"8px",children:(0,a.jsx)(w,{fontSize:"14px",children:"Confirmations: ".concat(Q," / ").concat((null==V?void 0:V.id)?O[null==V?void 0:V.id].confirmations:"N/A")})}),(0,a.jsx)(f.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)(Components_SpeedDisplay,{txSpeedsState:I,chainConfig:O,scrollToLatest:z}),(0,a.jsx)(f.Z,{alignItems:"center",mt:"8px",children:(0,a.jsx)(y.Z,{variant:"text",size:"small",onClick:()=>M(B),style:{lineHeight:1.2},children:"Clear Speed History"})}),(0,a.jsx)(f.Z,{width:"100%",mt:"16px",mb:"16px",children:(0,a.jsx)(h.Z,{})}),(0,a.jsx)(f.Z,{mb:"0",children:(0,a.jsx)("a",{href:"https://github.com/PaintSwap/speedchecker-frontend",target:"_blank",children:"Github Source"})}),(null==V?void 0:V.id)===64165&&(0,a.jsx)(f.Z,{mt:"8px",children:(0,a.jsx)("a",{href:"https://testnet.soniclabs.com",target:"_blank",children:"Fantom Sonic Open Dashboard"})})]})})})]})}},36612:function(e){e.exports={main:"Home_main__VkIEL",center:"Home_center__O_TIN",title:"Home_title__hYX6j",titleSub:"Home_titleSub__nszZn",sub:"Home_sub__3Mk3_",mainPanel:"Home_mainPanel__6Ksuj",mainButton:"Home_mainButton__nIVdf"}}},function(e){e.O(0,[255,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);
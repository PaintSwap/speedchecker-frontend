"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{45192:function(e,t,n){},25062:function(e,t,n){n.d(t,{SIWEController:function(){return l},getDidAddress:function(){return s.NmC},getDidChainId:function(){return s.ZzI}});var i=n(77548);n(21137);var s=n(22123),r=n(73932),a=n(17832);let o=(0,a.sj)({status:"uninitialized"}),l={state:o,subscribeKey:(e,t)=>(0,r.VW)(o,e,t),subscribe:e=>(0,a.Ld)(o,()=>e(o)),_getClient(){if(!o._client)throw Error("SIWEController client not set");return o._client},async getNonce(e){let t=this._getClient(),n=await t.getNonce(e);return this.setNonce(n),n},async getSession(){try{let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t}catch{return}},createMessage(e){let t=this._getClient(),n=t.createMessage(e);return this.setMessage(n),n},async verifyMessage(e){let t=this._getClient(),n=await t.verifyMessage(e);return n},async signIn(){let e=this._getClient(),t=await e.signIn();return t},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){o._client=(0,a.iH)(e),o.status="ready",i.OptionsController.setIsSiweEnabled(e.options.enabled)},setNonce(e){o.nonce=e},setStatus(e){o.status=e},setMessage(e){o.message=e},setSession(e){o.session=e,o.status=e?"success":"ready"}};var c=n(73343),u=n(77996),g=u.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let d=class extends u.oi{constructor(){super(...arguments),this.dappImageUrl=i.OptionsController.state.metadata?.icons,this.walletImageUrl=i.AccountController.state.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return u.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};d.styles=g,d=function(e,t,n,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}([(0,c.customElement)("w3m-connecting-siwe")],d);var p=n(59662),w=n(35355),w3m_connecting_siwe_view_decorate=function(e,t,n,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};let C=class extends u.oi{constructor(){super(...arguments),this.dappName=i.OptionsController.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),u.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){l.state.session&&i.IN.close()}async onSign(){this.isSigning=!0,i.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:i.AccountController.state.preferredAccountType===w.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});try{l.setStatus("loading");let e=await l.signIn();return l.setStatus("success"),i.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:i.AccountController.state.preferredAccountType===w.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(n){let e=i.AccountController.state.preferredAccountType,t=e===w.y_.ACCOUNT_TYPES.SMART_ACCOUNT;return t?i.SnackController.showError("This application might not support Smart Accounts"):i.SnackController.showError("Signature declined"),l.setStatus("error"),i.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0;let e=i.AccountController.state.isConnected;e?(await i.ConnectionController.disconnect(),i.IN.close()):i.RouterController.push("Connect"),this.isCancelling=!1,i.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:i.AccountController.state.preferredAccountType===w.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};w3m_connecting_siwe_view_decorate([(0,p.SB)()],C.prototype,"isSigning",void 0),w3m_connecting_siwe_view_decorate([(0,p.SB)()],C.prototype,"isCancelling",void 0),w3m_connecting_siwe_view_decorate([(0,c.customElement)("w3m-connecting-siwe-view")],C)}}]);
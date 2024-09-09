"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{78874:function(e,t,o){o.r(t),o.d(t,{W3mModal:function(){return d}});var i=o(77548),a=o(73343),s=o(77996),n=o(59662),r=s.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,__decorate=function(e,t,o,i){var a,s=arguments.length,n=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};let l="scroll-lock",d=class extends s.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.caipAddress=i.AccountController.state.caipAddress,this.isSiweEnabled=i.OptionsController.state.isSiweEnabled,this.connected=i.AccountController.state.isConnected,this.loading=i.IN.state.loading,this.shake=i.IN.state.shake,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(...[i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.IN.subscribeKey("shake",e=>this.shake=e),i.IN.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(i.AccountController.state.caipAddress)}),i.AccountController.subscribeKey("isConnected",e=>this.connected=e),i.AccountController.subscribeKey("caipAddress",e=>this.onNewAddress(e)),i.OptionsController.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)]),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?s.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){let e="ConnectingSiwe"===i.RouterController.state.view,t="ApproveTransaction"===i.RouterController.state.view;if(this.isSiweEnabled){let{SIWEController:a}=await Promise.all([o.e(585),o.e(980)]).then(o.bind(o,25062)),s="success"!==a.state.status;s&&(e||t)?i.IN.shake():i.IN.close()}else i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,o=a.UiHelperUtil.getColorTheme(t);(0,a.initializeTheming)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),i.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=l,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:o}=t.target;!o||o.includes("W3M-")||o.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;let t=i.j1.getPlainAddress(this.caipAddress),a=i.j1.getPlainAddress(e),s=i.j1.getNetworkId(this.caipAddress),n=i.j1.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){let{SIWEController:e}=await Promise.all([o.e(585),o.e(980)]).then(o.bind(o,25062)),i=await e.getSession();if(i&&t&&a&&t!==a){e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation());return}if(i&&s&&n&&s!==n){e.state._client?.options.signOutOnNetworkChange&&(await e.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}}onSiweNavigation(){this.open?i.RouterController.push("ConnectingSiwe"):i.IN.open({view:"ConnectingSiwe"})}};d.styles=r,__decorate([(0,n.SB)()],d.prototype,"open",void 0),__decorate([(0,n.SB)()],d.prototype,"caipAddress",void 0),__decorate([(0,n.SB)()],d.prototype,"isSiweEnabled",void 0),__decorate([(0,n.SB)()],d.prototype,"connected",void 0),__decorate([(0,n.SB)()],d.prototype,"loading",void 0),__decorate([(0,n.SB)()],d.prototype,"shake",void 0),d=__decorate([(0,a.customElement)("w3m-modal")],d)}}]);
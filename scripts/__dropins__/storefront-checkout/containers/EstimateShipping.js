/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsxs as k,Fragment as y,jsx as t}from"@dropins/tools/preact-jsx-runtime.js";/* empty css                             */import{Skeleton as v,SkeletonRow as M,Price as x}from"@dropins/tools/components.js";/* empty css                   */import{VComponent as A,classes as I}from"@dropins/tools/lib.js";import{Text as l,useText as w}from"@dropins/tools/i18n.js";/* empty css                      *//* empty css                  *//* empty css                       */import{s as z,T as C}from"../chunks/store-config.js";import{events as g}from"@dropins/tools/event-bus.js";import{useState as B,useEffect as f}from"@dropins/tools/preact-hooks.js";const G=({estimated:e=!1,price:a,priceExclTax:d,taxExcluded:o=!1,taxIncluded:p=!1})=>k(y,{children:[t("span",{className:"checkout-estimate-shipping__label",children:e?t(l,{id:"Checkout.EstimateShipping.estimated"}):t(l,{id:"Checkout.EstimateShipping.label"})}),t(A,{node:a,className:"checkout-estimate-shipping__price"}),p&&t("span",{"data-testid":"shipping-tax-included",className:I(["checkout-estimate-shipping__caption"]),children:t(l,{id:"Checkout.EstimateShipping.withTaxes"})}),o&&k("span",{"data-testid":"shipping-tax-included-excluded",className:I(["checkout-estimate-shipping__caption"]),children:[d," ",t(l,{id:"Checkout.EstimateShipping.withoutTaxes"})]})]}),L=()=>t(v,{"data-testid":"estimate-shipping-skeleton",children:t(M,{size:"xsmall"})}),O=()=>{const[e,a]=B(),d=e!==void 0,o=(e==null?void 0:e.amount.value)===0,p=z.config,T=p==null?void 0:p.shoppingCartDisplaySetting.shipping,_=T===C.INCLUDING_EXCLUDING_TAX,E=T===C.INCLUDING_TAX,S=w({freeShipping:"Checkout.EstimateShipping.freeShipping",taxToBeDetermined:"Checkout.EstimateShipping.taxToBeDetermined"});f(()=>{const i=g.on("shipping/estimate",n=>{const s=n.shippingMethod,{amount:c,amountExclTax:r,amountInclTax:m}=s;a({estimated:!0,amount:c,amountExclTax:r,amountInclTax:m})},{eager:!0});return()=>{i==null||i.off()}},[]),f(()=>{const i=g.on("checkout/initialized",n=>{var u,h;const s=(h=(u=n==null?void 0:n.shippingAddresses)==null?void 0:u[0])==null?void 0:h.selectedShippingMethod;if(!s)return;const{amount:c,amountExclTax:r,amountInclTax:m}=s;a({estimated:!1,amount:c,amountExclTax:r,amountInclTax:m})},{eager:!0});return()=>{i==null||i.off()}},[]),f(()=>{const i=g.on("checkout/updated",n=>{var u,h;const s=(h=(u=n==null?void 0:n.shippingAddresses)==null?void 0:u[0])==null?void 0:h.selectedShippingMethod;if(!s)return;const{amount:c,amountExclTax:r,amountInclTax:m}=s;a({estimated:!1,amount:c,amountExclTax:r,amountInclTax:m})},{eager:!0});return()=>{i==null||i.off()}},[]);const D=()=>o?t("span",{"data-testId":"free-shipping",children:S.freeShipping}):E&&(e!=null&&e.amountInclTax)?t(x,{"data-testid":"shipping",amount:e.amountInclTax.value,currency:e.amountInclTax.currency}):t(x,{"data-testid":"shipping",amount:e==null?void 0:e.amount.value,currency:e==null?void 0:e.amount.currency}),N=()=>e!=null&&e.amountExclTax?t(x,{"data-testid":"shipping-excluding-tax",amount:e.amountExclTax.value,currency:e.amountExclTax.currency}):t("span",{children:S.taxToBeDetermined});return t("div",{"data-testid":"estimate-shipping",className:"checkout-estimate-shipping",children:d?t(G,{estimated:e.estimated,price:D(),taxExcluded:_&&!o,taxIncluded:E&&!o,priceExclTax:N()}):t(L,{})})};export{O as EstimateShipping,O as default};
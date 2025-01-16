/*! Copyright 2025 Adobe
All Rights Reserved. */
function d(n){const{cart:e,locale:t="en-US"}=n;return{id:e.id,items:g(e.items,t),prices:{subtotalExcludingTax:e.subtotal.excludingTax,subtotalIncludingTax:e.subtotal.includingTax},totalQuantity:e.totalUniqueItems,possibleOnepageCheckout:void 0,giftMessageSelected:void 0,giftWrappingSelected:void 0,source:void 0}}function g(n,e){return n.map(t=>({canApplyMsrp:!1,formattedPrice:P(e,t.price.currency,t.price.value),id:t.uid,prices:{price:t.price},product:{productId:t.uid,name:t.name,sku:t.sku,topLevelSku:t.topLevelSku,specialToDate:void 0,specialFromDate:void 0,newToDate:void 0,newFromDate:void 0,createdAt:void 0,updatedAt:void 0,manufacturer:void 0,countryOfManufacture:void 0,categories:t.categories,productType:t.itemType,pricing:{regularPrice:t.regularPrice.value,minimalPrice:void 0,maximalPrice:void 0,specialPrice:v(t),tierPricing:void 0,currencyCode:t.regularPrice.currency},canonicalUrl:t.canonicalUrl,mainImageUrl:t.image.src,image:{src:t.image.src,alt:t.image.alt}},configurableOptions:void 0,quantity:t.quantity}))}function P(n,e,t){const o=n.replace("_","-");return new Intl.NumberFormat(o,{style:"currency",currency:e}).format(t)}function v(n){var e;if(n.discounted)return(e=n.price)==null?void 0:e.value}const r={SHOPPING_CART_CONTEXT:"shoppingCartContext",PRODUCT_CONTEXT:"productContext",CHANGED_PRODUCTS_CONTEXT:"changedProductsContext"},c={OPEN_CART:"open-cart",ADD_TO_CART:"add-to-cart",REMOVE_FROM_CART:"remove-from-cart",SHOPPING_CART_VIEW:"shopping-cart-view",INITIATE_CHECKOUT:"initiate-checkout"};function O(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function i(n,e){const t=O();t.push({[n]:null}),t.push({[n]:e})}function T(n,e){O().push(o=>{const C=o.getState?o.getState():{};o.push({event:n,eventInfo:{...C,...e}})})}function D(n,e,t){const o=d({cart:n,locale:t});i(r.SHOPPING_CART_CONTEXT,{...o}),T(c.OPEN_CART),g(e,t).forEach(u=>{i(r.PRODUCT_CONTEXT,u.product),p(o,[u],c.ADD_TO_CART)})}function R(n,e){const t=d({cart:n,locale:e});i(r.SHOPPING_CART_CONTEXT,{...t}),T(c.SHOPPING_CART_VIEW)}function p(n,e,t){const o={items:e};i(r.SHOPPING_CART_CONTEXT,{...n}),i(r.CHANGED_PRODUCTS_CONTEXT,{...o}),T(t)}function I(n,e,t){const o=d({cart:n,locale:t}),C=o.items,u=O(),E=u.getState?u.getState():{},{shoppingCartContext:{items:f=[]}={}}=E;e.forEach(_=>{const s=f.find(l=>l.id===_.uid),a=C.find(l=>l.id===_.uid);!a&&!s||(!s&&a?(i(r.PRODUCT_CONTEXT,a.product),p(o,[a],c.ADD_TO_CART)):s&&!a?(i(r.PRODUCT_CONTEXT,s.product),p(o,[s],c.REMOVE_FROM_CART)):a.quantity>s.quantity?(i(r.PRODUCT_CONTEXT,a.product),p(o,[a],c.ADD_TO_CART)):(i(r.PRODUCT_CONTEXT,a.product),p(o,[a],c.REMOVE_FROM_CART)))})}function h(n,e){const t=d({cart:n,locale:e});i(r.SHOPPING_CART_CONTEXT,{...t}),T(c.INITIATE_CHECKOUT)}export{I as a,D as b,R as c,h as p};
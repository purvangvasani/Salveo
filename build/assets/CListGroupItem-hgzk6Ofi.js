import{r as u,R as h,c as b,P as o,_ as y,b as l,d as g}from"./index-lgJQUMe2.js";import{C}from"./index.es-DPqRHy-a.js";var f=u.forwardRef(function(a,c){var e,n=a.children,r=a.as,i=r===void 0?"ul":r,s=a.className,d=a.flush,t=a.layout;return h.createElement(i,{className:b("list-group",(e={"list-group-flush":d},e["list-group-".concat(t)]=t,e),s),ref:c},n)});f.propTypes={as:o.elementType,children:o.node,className:o.string,flush:o.bool,layout:o.oneOf(["horizontal","horizontal-sm","horizontal-md","horizontal-lg","horizontal-xl","horizontal-xxl"])};f.displayName="CListGroup";var v=u.forwardRef(function(a,c){var e,n=a.children,r=a.active,i=a.as,s=i===void 0?"li":i,d=a.className,t=a.disabled,m=a.color,p=y(a,["children","active","as","className","disabled","color"]),N=s==="a"||s==="button"?C:s;return p=l(l(l(l({},(s==="a"||s==="button")&&{active:r,disabled:t,as:s,ref:c}),r&&{"aria-current":!0}),t&&{"aria-disabled":!0}),p),h.createElement(N,l({className:b("list-group-item",(e={},e["list-group-item-".concat(m)]=m,e["list-group-item-action"]=s==="a"||s==="button",e.active=r,e.disabled=t,e),d)},p),n)});v.propTypes={active:o.bool,as:o.elementType,children:o.node,className:o.string,color:g,disabled:o.bool};v.displayName="CListGroupItem";export{f as C,v as a};

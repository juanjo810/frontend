"use strict";(self["webpackChunkdigifolk"]=self["webpackChunkdigifolk"]||[]).push([[135],{2135:function(e,l,a){a.d(l,{Z:function(){return K}});var t=a(3396),n=a(7139),o=a(6372),s=a(1550),u=a(8302),r=a(8969),i=a(8717),d=a(3766),c=a(131),p=a(1107),v=a(7514),m=a(9888);const f=(0,d.U)({...(0,u.c)(),...(0,c.CE)((0,s.w)(),["inline"])},"VCheckbox"),y=(0,p.ev)()({name:"VCheckbox",inheritAttrs:!1,props:f(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,l){let{attrs:a,slots:n}=l;const o=(0,i.z)(e,"modelValue"),{isFocused:d,focus:p,blur:f}=(0,r.K)(e),y=(0,v.sq)(),V=(0,t.Fl)((()=>e.id||`checkbox-${y}`));return(0,m.L)((()=>{const[l,r]=(0,c.An)(a),[i,v]=u.q.filterProps(e),[m,y]=s.p.filterProps(e);return(0,t.Wm)(u.q,(0,t.dG)({class:["v-checkbox",e.class]},l,i,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,id:V.value,focused:d.value,style:e.style}),{...n,default:e=>{let{id:l,messagesId:a,isDisabled:u,isReadonly:i}=e;return(0,t.Wm)(s.p,(0,t.dG)(m,{id:l.value,"aria-describedby":a.value,disabled:u.value,readonly:i.value},r,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,onFocus:p,onBlur:f}),n)}})})),{}}});var V=a(9166),x=a(6107),b=a(1970),h=a(1138),g=a(7041),C=a(4870);const U=Symbol.for("vuetify:v-expansion-panel"),I=["default","accordion","inset","popout"],_=(0,d.U)({color:String,variant:{type:String,default:"default",validator:e=>I.includes(e)},readonly:Boolean,...(0,V.l)(),...(0,b.k4)(),...(0,h.Q)(),...(0,g.x$)()},"VExpansionPanels"),S=(0,p.ev)()({name:"VExpansionPanels",props:_(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;(0,b._v)(e,U);const{themeClasses:n}=(0,g.ER)(e),o=(0,t.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,x.AF)({VExpansionPanel:{color:(0,C.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,C.Vh)(e,"readonly")}}),(0,m.L)((()=>(0,t.Wm)(e.tag,{class:["v-expansion-panels",n.value,o.value,e.class],style:e.style},a))),{}}});a(7658),a(1703);var W=a(9242),k=a(8952),F=a(1136);const w=(0,d.U)({...(0,V.l)(),...(0,F.H)()},"VExpansionPanelText"),E=(0,p.ev)()({name:"VExpansionPanelText",props:w(),setup(e,l){let{slots:a}=l;const n=(0,t.f3)(U);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:s}=(0,F.l)(e,n.isSelected);return(0,m.L)((()=>(0,t.Wm)(k.Fx,{onAfterLeave:s},{default:()=>[(0,t.wy)((0,t.Wm)("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&o.value&&(0,t.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[a.default?.()])]),[[W.F8,n.isSelected.value]])]}))),{}}});var A=a(3289),B=a(2370),P=a(4960),T=a(3824);const $=(0,d.U)({color:String,expandIcon:{type:P.lE,default:"$expand"},collapseIcon:{type:P.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...(0,V.l)()},"VExpansionPanelTitle"),L=(0,p.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:T.H},props:$(),setup(e,l){let{slots:a}=l;const n=(0,t.f3)(U);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:s}=(0,B.Y5)(e,"color"),u=(0,t.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,m.L)((()=>(0,t.wy)((0,t.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value},o.value,e.class],style:[s.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[(0,t.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),a.default?.(u.value),!e.hideActions&&(0,t.Wm)("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(u.value):(0,t.Wm)(A.t,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,t.Q2)("ripple"),e.ripple]]))),{}}});var q=a(2465),G=a(4231);const D=(0,d.U)({title:String,text:String,bgColor:String,...(0,V.l)(),...(0,q.c)(),...(0,b.YQ)(),...(0,F.H)(),...(0,G.I)(),...(0,h.Q)(),...$()},"VExpansionPanel"),Y=(0,p.ev)()({name:"VExpansionPanel",props:D(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const n=(0,b.Yt)(e,U),{backgroundColorClasses:o,backgroundColorStyles:s}=(0,B.Y5)(e,"bgColor"),{elevationClasses:u}=(0,q.Y)(e),{roundedClasses:r}=(0,G.b)(e),i=(0,t.Fl)((()=>n?.disabled.value||e.disabled)),d=(0,t.Fl)((()=>n.group.items.value.reduce(((e,l,a)=>(n.group.selected.value.includes(l.id)&&e.push(a),e)),[]))),c=(0,t.Fl)((()=>{const e=n.group.items.value.findIndex((e=>e.id===n.id));return!n.isSelected.value&&d.value.some((l=>l-e===1))})),p=(0,t.Fl)((()=>{const e=n.group.items.value.findIndex((e=>e.id===n.id));return!n.isSelected.value&&d.value.some((l=>l-e===-1))}));return(0,t.JJ)(U,n),(0,m.L)((()=>{const l=!(!a.text&&!e.text),d=!(!a.title&&!e.title);return(0,t.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":c.value,"v-expansion-panel--after-active":p.value,"v-expansion-panel--disabled":i.value},r.value,o.value,e.class],style:[s.value,e.style]},{default:()=>[(0,t.Wm)("div",{class:["v-expansion-panel__shadow",...u.value]},null),d&&(0,t.Wm)(L,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),l&&(0,t.Wm)(E,{key:"text",eager:e.eager},{default:()=>[a.text?a.text():e.text]}),a.default?.()]})})),{}}});var z=a(3369),H=a(6824),J=a(8521),Q=a(2902);function Z(e,l,a,s,u,r){return(0,t.wg)(),(0,t.j4)(z.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(S,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(e.getUserName(a.user)),1)])),_:1}),(0,t.Wm)(E,null,{default:(0,t.w5)((()=>[(0,t.Wm)(H.o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(J.D,{cols:"4"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q.h,{label:"Username",modelValue:u.currentUser.username,"onUpdate:modelValue":l[0]||(l[0]=e=>u.currentUser.username=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J.D,{cols:"4"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q.h,{label:"Name",modelValue:u.currentUser.first_name,"onUpdate:modelValue":l[1]||(l[1]=e=>u.currentUser.first_name=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J.D,{cols:"4"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q.h,{label:"Surname",modelValue:u.currentUser.last_name,"onUpdate:modelValue":l[2]||(l[2]=e=>u.currentUser.last_name=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J.D,{cols:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q.h,{label:"Email",modelValue:u.currentUser.email,"onUpdate:modelValue":l[3]||(l[3]=e=>u.currentUser.email=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J.D,{cols:"4"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q.h,{label:"Institution",modelValue:u.currentUser.institution,"onUpdate:modelValue":l[4]||(l[4]=e=>u.currentUser.institution=e)},null,8,["modelValue"])])),_:1}),(0,t.Wm)(J.D,{cols:"2"},{default:(0,t.w5)((()=>[a.isAdmin?((0,t.wg)(),(0,t.j4)(y,{key:0,label:"Admin",modelValue:u.currentUser.is_admin,"onUpdate:modelValue":l[5]||(l[5]=e=>u.currentUser.is_admin=e)},null,8,["modelValue"])):(0,t.kq)("",!0)])),_:1})])),_:1}),(0,t.Wm)(o.T,{onClick:l[6]||(l[6]=e=>r.editUser())},{default:(0,t.w5)((()=>[(0,t.Uk)(" Save user ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var j=a(65),O={props:{user:{type:Object,required:!0},isAdmin:{type:Boolean,required:!0}},data(){return{currentUser:{user_id:this.user.user_id,username:this.user.username,first_name:this.user.first_name,last_name:this.user.last_name,email:this.user.email,institution:this.user.institution,is_admin:this.user.is_admin,piece:[],password:"admin"}}},computed:{...(0,j.Se)(["getUserName"])},methods:{...(0,j.nv)(["editUserInfo"]),editUser(){this.editUserInfo({user:this.currentUser,oldMail:this.user.email})}}},R=a(89);const N=(0,R.Z)(O,[["render",Z]]);var K=N},1550:function(e,l,a){a.d(l,{p:function(){return k},w:function(){return W}});var t=a(3396),n=a(3289),o=a(7302),s=a(9166),u=a(6107),r=a(9694),i=a(4960),d=a(8717),c=a(7041),p=a(4870),v=a(3766),m=a(131),f=a(1107),y=a(7514),V=a(9888);const x=Symbol.for("vuetify:selection-control-group"),b=(0,v.U)({color:String,disabled:Boolean,defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:i.lE,trueIcon:i.lE,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:m.vZ},...(0,s.l)(),...(0,r.f)(),...(0,c.x$)()},"SelectionControlGroup"),h=(0,v.U)({...b({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");(0,f.ev)()({name:"VSelectionControlGroup",props:h(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const n=(0,d.z)(e,"modelValue"),o=(0,y.sq)(),s=(0,t.Fl)((()=>e.id||`v-selection-control-group-${o}`)),r=(0,t.Fl)((()=>e.name||s.value)),i=new Set;return(0,t.JJ)(x,{modelValue:n,forceUpdate:()=>{i.forEach((e=>e()))},onForceUpdate:e=>{i.add(e),(0,p.EB)((()=>{i.delete(e)}))}}),(0,u.AF)({[e.defaultsTarget]:{color:(0,p.Vh)(e,"color"),disabled:(0,p.Vh)(e,"disabled"),density:(0,p.Vh)(e,"density"),error:(0,p.Vh)(e,"error"),inline:(0,p.Vh)(e,"inline"),modelValue:n,multiple:(0,t.Fl)((()=>!!e.multiple||null==e.multiple&&Array.isArray(n.value))),name:r,falseIcon:(0,p.Vh)(e,"falseIcon"),trueIcon:(0,p.Vh)(e,"trueIcon"),readonly:(0,p.Vh)(e,"readonly"),ripple:(0,p.Vh)(e,"ripple"),type:(0,p.Vh)(e,"type"),valueComparator:(0,p.Vh)(e,"valueComparator")}}),(0,V.L)((()=>(0,t.Wm)("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:"radio"===e.type?"radiogroup":void 0},[a.default?.()]))),{}}});var g=a(2370),C=a(3824),U=a(2385);const I=(0,v.U)({label:String,trueValue:null,falseValue:null,value:null,...(0,s.l)(),...b()},"VSelectionControl");function _(e){const l=(0,t.f3)(x,void 0),{densityClasses:a}=(0,r.t)(e),n=(0,d.z)(e,"modelValue"),o=(0,t.Fl)((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),s=(0,t.Fl)((()=>void 0!==e.falseValue&&e.falseValue)),u=(0,t.Fl)((()=>!!e.multiple||null==e.multiple&&Array.isArray(n.value))),i=(0,t.Fl)({get(){const a=l?l.modelValue.value:n.value;return u.value?a.some((l=>e.valueComparator(l,o.value))):e.valueComparator(a,o.value)},set(a){if(e.readonly)return;const t=a?o.value:s.value;let r=t;u.value&&(r=a?[...(0,m.FT)(n.value),t]:(0,m.FT)(n.value).filter((l=>!e.valueComparator(l,o.value)))),l?l.modelValue.value=r:n.value=r}}),{textColorClasses:c,textColorStyles:p}=(0,g.rY)((0,t.Fl)((()=>!i.value||e.error||e.disabled?void 0:e.color))),v=(0,t.Fl)((()=>i.value?e.trueIcon:e.falseIcon));return{group:l,densityClasses:a,trueValue:o,falseValue:s,model:i,textColorClasses:c,textColorStyles:p,icon:v}}const S=(0,f.ev)()({name:"VSelectionControl",directives:{Ripple:C.H},inheritAttrs:!1,props:I(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:a,slots:s}=l;const{group:u,densityClasses:r,icon:i,model:d,textColorClasses:c,textColorStyles:v,trueValue:f}=_(e),x=(0,y.sq)(),b=(0,t.Fl)((()=>e.id||`input-${x}`)),h=(0,p.XI)(!1),g=(0,p.XI)(!1),C=(0,p.iH)();function I(e){h.value=!0,(!U.Z1||U.Z1&&e.target.matches(":focus-visible"))&&(g.value=!0)}function S(){h.value=!1,g.value=!1}function W(l){e.readonly&&u&&(0,t.Y3)((()=>u.forceUpdate())),d.value=l.target.checked}return u?.onForceUpdate((()=>{C.value&&(C.value.checked=d.value)})),(0,V.L)((()=>{const l=s.label?s.label({label:e.label,props:{for:b.value}}):e.label,[u,p]=(0,m.An)(a);return(0,t.Wm)("div",(0,t.dG)({class:["v-selection-control",{"v-selection-control--dirty":d.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":h.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},r.value,e.class]},u,{style:e.style}),[(0,t.Wm)("div",{class:["v-selection-control__wrapper",c.value],style:v.value},[s.default?.(),(0,t.wy)((0,t.Wm)("div",{class:["v-selection-control__input"]},[i.value&&(0,t.Wm)(n.t,{key:"icon",icon:i.value},null),(0,t.Wm)("input",(0,t.dG)({ref:C,checked:d.value,disabled:e.disabled,id:b.value,onBlur:S,onFocus:I,onInput:W,"aria-disabled":e.readonly,type:e.type,value:f.value,name:e.name,"aria-checked":"checkbox"===e.type?d.value:void 0},p),null),s.input?.({model:d,textColorClasses:c,textColorStyles:v,props:{onFocus:I,onBlur:S,id:b.value}})]),[[(0,t.Q2)("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),l&&(0,t.Wm)(o.J,{for:b.value,clickable:!0},{default:()=>[l]})])})),{isFocused:h,input:C}}}),W=(0,v.U)({indeterminate:Boolean,indeterminateIcon:{type:i.lE,default:"$checkboxIndeterminate"},...I({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),k=(0,f.ev)()({name:"VCheckboxBtn",props:W(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,l){let{slots:a}=l;const n=(0,d.z)(e,"indeterminate"),o=(0,d.z)(e,"modelValue");function s(e){n.value&&(n.value=!1)}const u=(0,t.Fl)((()=>n.value?e.indeterminateIcon:e.falseIcon)),r=(0,t.Fl)((()=>n.value?e.indeterminateIcon:e.trueIcon));return(0,V.L)((()=>(0,t.Wm)(S,(0,t.dG)(e,{modelValue:o.value,"onUpdate:modelValue":[e=>o.value=e,s],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:u.value,trueIcon:r.value,"aria-checked":n.value?"mixed":void 0}),a))),{}}})}}]);
//# sourceMappingURL=135.a35e8f9e.js.map
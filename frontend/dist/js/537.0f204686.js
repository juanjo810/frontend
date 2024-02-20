"use strict";(self["webpackChunkdigifolk"]=self["webpackChunkdigifolk"]||[]).push([[537],{2046:function(e,l,s){s.r(l),s.d(l,{default:function(){return C}});var i=s(3396),o=s(6372),a=s(11),d=s(1888),t=s(1334),n=s(3601),u=s(3369),r=s(9234),m=s(6824),p=s(8521),w=s(2902);const c=(0,i._)("h1",null,"Mi perfil",-1),h={class:"pa-4 text-end"},f=(0,i._)("h2",null,"Modify password",-1),b=(0,i._)("h2",null,"Delete account",-1);function v(e,l,s,v,_,W){const V=(0,i.up)("user-dropdown");return(0,i.wg)(),(0,i.j4)(u.K,null,{default:(0,i.w5)((()=>[c,(0,i.Wm)(V,{user:e.user.userInfo,isAdmin:_.isAdmin},null,8,["user","isAdmin"]),(0,i._)("div",h,[(0,i.Wm)(o.T,{class:"me-2",onClick:l[0]||(l[0]=e=>this.visible=!0)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Change password ")])),_:1}),(0,i.Wm)(o.T,{onClick:l[1]||(l[1]=e=>this.visibleDelete=!0)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Delete account ")])),_:1})]),(0,i.Wm)(n.B,{modelValue:_.visible,"onUpdate:modelValue":l[9]||(l[9]=e=>_.visible=e),"max-width":"500"},{default:(0,i.w5)((()=>[(0,i.Wm)(a._,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u.K,null,{default:(0,i.w5)((()=>[f,(0,i.Wm)(d.Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w.h,{modelValue:_.currentPassword,"onUpdate:modelValue":l[2]||(l[2]=e=>_.currentPassword=e),"append-icon":_.visible3?"mdi-eye":"mdi-eye-off",type:_.visible3?"text":"password",label:"Current password",counter:"","onClick:append":l[3]||(l[3]=e=>_.visible3=!_.visible3)},null,8,["modelValue","append-icon","type"]),(0,i.Wm)(w.h,{modelValue:_.password,"onUpdate:modelValue":l[4]||(l[4]=e=>_.password=e),"append-icon":_.visible1?"mdi-eye":"mdi-eye-off",type:_.visible1?"text":"password",label:"New password",counter:"","onClick:append":l[5]||(l[5]=e=>_.visible1=!_.visible1)},null,8,["modelValue","append-icon","type"]),(0,i.Wm)(w.h,{modelValue:_.password2,"onUpdate:modelValue":l[6]||(l[6]=e=>_.password2=e),"append-icon":_.visible2?"mdi-eye":"mdi-eye-off",type:_.visible2?"text":"password",label:"Repeat new password",counter:"","onClick:append":l[7]||(l[7]=e=>_.visible2=!_.visible2)},null,8,["modelValue","append-icon","type"])])),_:1}),(0,i.Wm)(t.h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r.C),(0,i.Wm)(o.T,{text:"",onClick:l[8]||(l[8]=e=>W.changePassword())},{default:(0,i.w5)((()=>[(0,i.Uk)(" Change password ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(n.B,{modelValue:_.visibleDelete,"onUpdate:modelValue":l[15]||(l[15]=e=>_.visibleDelete=e),persistent:"","max-width":"600"},{default:(0,i.w5)((()=>[(0,i.Wm)(a._,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u.K,null,{default:(0,i.w5)((()=>[b,(0,i.Wm)(d.Z,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p.D,{cols:"12"},{default:(0,i.w5)((()=>[(0,i.Wm)(w.h,{modelValue:_.email,"onUpdate:modelValue":l[10]||(l[10]=e=>_.email=e),label:"Email",rules:e.rulesEmail},null,8,["modelValue","rules"])])),_:1})])),_:1}),(0,i.Wm)(m.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p.D,{cols:"12"},{default:(0,i.w5)((()=>[(0,i.Wm)(w.h,{modelValue:_.password3,"onUpdate:modelValue":l[11]||(l[11]=e=>_.password3=e),"append-icon":_.visible4?"mdi-eye":"mdi-eye-off",type:_.visible4?"text":"password",label:"Password",counter:"","onClick:append":l[12]||(l[12]=e=>_.visible4=!_.visible4)},null,8,["modelValue","append-icon","type"])])),_:1})])),_:1})])),_:1}),(0,i.Wm)(t.h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r.C),(0,i.Wm)(o.T,{text:"",onClick:l[13]||(l[13]=e=>_.visibleDelete=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)(" Close ")])),_:1}),(0,i.Wm)(o.T,{color:"red",text:"",onClick:l[14]||(l[14]=e=>W.deleteAccount())},{default:(0,i.w5)((()=>[(0,i.Uk)(" Delete account ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}s(7658);var _=s(65),W=s(2135),V={components:{UserDropdown:W.Z},data(){return{isAdmin:!1,visible:!1,visible1:!1,visible2:!1,visible3:!1,visible4:!1,visibleDelete:!1,currentPassword:"",password:"",password2:"",email:"",password3:""}},computed:{...(0,_.rn)(["user"])},methods:{...(0,_.nv)(["getUserInfo","fetchUsers","changeUserPassword","removeAccount"]),changePassword(){this.password.length>=6&&this.password===this.password2?(this.changeUserPassword({id:this.user.userInfo.user_id,currentPassword:this.currentPassword,newPassword:this.password}),this.visible=!1):this.$store.commit("CHANGE_PASSWORD_FAILURE","Passwords do not match or are too short")},deleteAccount(){this.removeAccount({email:this.email,password:this.password3}).then((()=>{this.visibleDelete=!1,this.$router.push({name:"login"})}))}},mounted(){this.fetchUsers()}},k=s(89);const U=(0,k.Z)(V,[["render",v]]);var C=U}}]);
//# sourceMappingURL=537.0f204686.js.map
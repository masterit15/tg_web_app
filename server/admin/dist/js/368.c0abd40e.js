"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[368],{5368:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});var n=a(3396),o=a(7139),i=a(9242);const r={class:"field_group"},e={class:"field_group"},u=(0,n._)("button",{class:"btn"},"Войти",-1);function d(t,s,a,d,l,p){return(0,n.wg)(),(0,n.iD)("div",{class:"auth",style:(0,o.j5)({backgroundImage:`url(${l.images})`})},[(0,n._)("form",{onSubmit:s[2]||(s[2]=(0,i.iM)(((...t)=>p.authorization&&p.authorization(...t)),["prevent"])),class:"auth_form",action:"",method:"post"},[(0,n._)("div",r,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>l.login=t),type:"text",name:"login",id:"login"},null,512),[[i.nr,l.login]])]),(0,n._)("div",e,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>l.password=t),type:"password",name:"password",id:"password"},null,512),[[i.nr,l.password]])]),u],32)],4)}var l=a(65),p={data(){return{login:"",password:"",images:a(9471)}},methods:{...(0,l.nv)(["auth"]),async authorization(){const t=await this.auth({login:this.login,password:this.password});t.success&&this.$router.push("/")}}},c=a(89);const h=(0,c.Z)(p,[["render",d]]);var g=h},9471:function(t,s,a){t.exports=a.p+"img/auth.c122f032.jpg"}}]);
//# sourceMappingURL=368.c0abd40e.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{OXgS:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=t("ZZ/e"),o=t("ezX+"),i=function(){function n(n,l,t){this.route=n,this.notesService=l,this.navCtrl=t,this.note={id:"",title:"",content:""}}return n.prototype.ngOnInit=function(){var n=this,l=this.route.snapshot.paramMap.get("id");this.notesService.loaded?this.note=this.notesService.getNote(l):this.notesService.load().then(function(){n.note=n.notesService.getNote(l)})},n.prototype.noteChanged=function(){this.notesService.save()},n.prototype.deleteNote=function(){this.notesService.deleteNote(this.note),this.navCtrl.navigateBack("/notes")},n}(),b=function(){return function(){}}(),a=t("pMnS"),r=t("oBZk"),c=t("gIcY"),s=t("ZYCi"),d=u.mb({encapsulation:0,styles:[["ion-textarea[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;padding:20px;height:100%}"]],data:{}});function h(n){return u.Cb(0,[(n()(),u.ob(0,0,null,null,17,"ion-header",[],null,null,null,r.s,r.f)),u.nb(1,49152,null,0,e.A,[u.h,u.k],null,null),(n()(),u.ob(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,r.z,r.m)),u.nb(3,49152,null,0,e.Ab,[u.h,u.k],{color:[0,"color"]},null),(n()(),u.ob(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.q,r.d)),u.nb(5,49152,null,0,e.k,[u.h,u.k],null,null),(n()(),u.ob(6,0,null,0,2,"ion-back-button",[["defaultHref","/notes"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.xb(n,8).onClick(t)&&e),e},r.o,r.b)),u.nb(7,49152,null,0,e.f,[u.h,u.k],{defaultHref:[0,"defaultHref"]},null),u.nb(8,16384,null,0,e.g,[[2,e.gb],e.Fb],{defaultHref:[0,"defaultHref"]},null),(n()(),u.ob(9,0,null,0,2,"ion-title",[],null,null,null,r.y,r.l)),u.nb(10,49152,null,0,e.yb,[u.h,u.k],null,null),(n()(),u.Bb(11,0,["",""])),(n()(),u.ob(12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,r.q,r.d)),u.nb(13,49152,null,0,e.k,[u.h,u.k],null,null),(n()(),u.ob(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.deleteNote()&&u),u},r.p,r.c)),u.nb(15,49152,null,0,e.j,[u.h,u.k],null,null),(n()(),u.ob(16,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,r.t,r.g)),u.nb(17,49152,null,0,e.B,[u.h,u.k],{name:[0,"name"]},null),(n()(),u.ob(18,0,null,null,8,"ion-content",[],null,null,null,r.r,r.e)),u.nb(19,49152,null,0,e.t,[u.h,u.k],null,null),(n()(),u.ob(20,0,null,0,6,"ion-textarea",[["placeholder","...somthing on your mind?"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==u.xb(n,21)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==u.xb(n,21)._handleInputEvent(t.target.value)&&e),"input"===l&&(e=!1!==o.noteChanged()&&e),"ngModelChange"===l&&(e=!1!==(o.note.content=t)&&e),e},r.x,r.k)),u.nb(21,16384,null,0,e.Ib,[u.k],null,null),u.yb(1024,null,c.b,function(n){return[n]},[e.Ib]),u.nb(23,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.yb(2048,null,c.c,null,[c.e]),u.nb(25,16384,null,0,c.d,[[4,c.c]],null,null),u.nb(26,49152,null,0,e.wb,[u.h,u.k],{placeholder:[0,"placeholder"]},null)],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,7,0,"/notes"),n(l,8,0,"/notes"),n(l,17,0,"trash"),n(l,23,0,t.note.content),n(l,26,0,"...somthing on your mind?")},function(n,l){n(l,11,0,l.component.note.title),n(l,20,0,u.xb(l,25).ngClassUntouched,u.xb(l,25).ngClassTouched,u.xb(l,25).ngClassPristine,u.xb(l,25).ngClassDirty,u.xb(l,25).ngClassValid,u.xb(l,25).ngClassInvalid,u.xb(l,25).ngClassPending)})}function g(n){return u.Cb(0,[(n()(),u.ob(0,0,null,null,1,"app-detail",[],null,null,null,h,d)),u.nb(1,114688,null,0,i,[s.a,o.a,e.Fb],null,null)],function(n,l){n(l,1,0)},null)}var p=u.kb("app-detail",i,g,{},{},[]),f=t("Ip0R");t.d(l,"DetailPageModuleNgFactory",function(){return v});var v=u.lb(b,[],function(n){return u.ub([u.vb(512,u.j,u.ab,[[8,[a.a,p]],[3,u.j],u.x]),u.vb(4608,f.j,f.i,[u.u,[2,f.p]]),u.vb(4608,c.g,c.g,[]),u.vb(4608,e.b,e.b,[u.z,u.g]),u.vb(4608,e.Eb,e.Eb,[e.b,u.j,u.q,f.c]),u.vb(4608,e.Hb,e.Hb,[e.b,u.j,u.q,f.c]),u.vb(1073742336,f.b,f.b,[]),u.vb(1073742336,c.f,c.f,[]),u.vb(1073742336,c.a,c.a,[]),u.vb(1073742336,e.Cb,e.Cb,[]),u.vb(1073742336,s.n,s.n,[[2,s.t],[2,s.m]]),u.vb(1073742336,b,b,[]),u.vb(1024,s.k,function(){return[[{path:"",component:i}]]},[])])})}}]);
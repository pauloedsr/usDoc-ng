(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{TP0X:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),d=function(){},a=u("BHnd"),t=u("y4qS"),o=u("pIm3"),r=u("dJrM"),i=u("seP3"),c=u("Wf4p"),m=u("Fzqc"),p=u("dWZg"),f=u("b716"),s=u("gIcY"),h=u("/VYK"),v=u("b1+6"),g=u("4epT"),b=function(){function l(){this.displayedColumns=["id","name","progress","color"];for(var l,n,u=[],e=1;e<=100;e++)u.push((l=e,n=_[Math.round(Math.random()*(_.length-1))]+" "+_[Math.round(Math.random()*(_.length-1))].charAt(0)+".",{id:l.toString(),name:n,progress:Math.round(100*Math.random()).toString(),color:C[Math.round(Math.random()*(C.length-1))]}));this.dataSource=new a.l(u)}return l.prototype.ngOnInit=function(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},l.prototype.applyFilter=function(l){l=(l=l.trim()).toLowerCase(),this.dataSource.filter=l,this.dataSource.paginator&&this.dataSource.paginator.firstPage()},l}(),C=["maroon","red","orange","yellow","olive","green","purple","fuchsia","lime","teal","aqua","blue","navy","black","gray"],_=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"],q=e["\u0275crt"]({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:25%}"]],data:{}});function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,a.e,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,[" ID "]))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,a.a,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.id)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,a.e,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,[" Progress "]))],null,null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,a.a,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](2,null,[" ","% "]))],null,function(l,n){l(n,2,0,n.context.$implicit.progress)})}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,a.e,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,[" Name "]))],null,null)}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,a.a,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.name)})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["mat-sort-header",""],["role","columnheader"]],null,null,null,null,null)),e["\u0275did"](1,16384,null,0,a.e,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,[" Color "]))],null,null)}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],[[4,"color",null]],null,null,null,null)),e["\u0275did"](1,16384,null,0,a.a,[t.d,e.ElementRef],null,null),(l()(),e["\u0275ted"](2,null,[" "," "]))],null,function(l,n){l(n,0,0,n.context.$implicit.color),l(n,2,0,n.context.$implicit.color)})}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,o.d,o.a)),e["\u0275did"](1,49152,null,0,a.g,[],null,null)],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,o.e,o.b)),e["\u0275did"](1,49152,null,0,a.i,[],null,null)],null,null)}function O(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{paginator:0}),e["\u0275qud"](402653184,2,{sort:0}),(l()(),e["\u0275eld"](2,0,null,null,11,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,r.b,r.a)),e["\u0275did"](3,7389184,null,7,i.b,[e.ElementRef,e.ChangeDetectorRef,[2,c.j],[2,m.b],[2,i.a],p.a],null,null),e["\u0275qud"](335544320,3,{_control:0}),e["\u0275qud"](335544320,4,{_placeholderChild:0}),e["\u0275qud"](335544320,5,{_labelChild:0}),e["\u0275qud"](603979776,6,{_errorChildren:1}),e["\u0275qud"](603979776,7,{_hintChildren:1}),e["\u0275qud"](603979776,8,{_prefixChildren:1}),e["\u0275qud"](603979776,9,{_suffixChildren:1}),(l()(),e["\u0275eld"](11,0,null,1,2,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Filter"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"keyup"],[null,"blur"],[null,"focus"],[null,"input"]],function(l,n,u){var d=!0,a=l.component;return"blur"===n&&(d=!1!==e["\u0275nov"](l,12)._focusChanged(!1)&&d),"focus"===n&&(d=!1!==e["\u0275nov"](l,12)._focusChanged(!0)&&d),"input"===n&&(d=!1!==e["\u0275nov"](l,12)._onInput()&&d),"keyup"===n&&(d=!1!==a.applyFilter(u.target.value)&&d),d},null,null)),e["\u0275did"](12,999424,null,0,f.b,[e.ElementRef,p.a,[8,null],[2,s.o],[2,s.h],c.d,[8,null],h.a,e.NgZone],{placeholder:[0,"placeholder"]},null),e["\u0275prd"](2048,[[3,4]],i.c,null,[f.b]),(l()(),e["\u0275eld"](14,0,null,null,64,"div",[["class","mat-elevation-z8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,60,"table",[["class","mat-table"],["mat-table",""],["matSort",""]],null,null,null,o.f,o.c)),e["\u0275did"](16,2342912,null,4,a.k,[e.IterableDiffers,e.ChangeDetectorRef,e.ElementRef,[8,null]],{dataSource:[0,"dataSource"]},null),e["\u0275qud"](603979776,10,{_contentColumnDefs:1}),e["\u0275qud"](603979776,11,{_contentRowDefs:1}),e["\u0275qud"](335544320,12,{_headerRowDef:0}),e["\u0275qud"](335544320,13,{_footerRowDef:0}),(l()(),e["\u0275eld"](21,0,null,null,11,null,null,null,null,null,null,null)),e["\u0275did"](22,16384,null,3,a.c,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,14,{cell:0}),e["\u0275qud"](335544320,15,{headerCell:0}),e["\u0275qud"](335544320,16,{footerCell:0}),e["\u0275prd"](2048,[[10,4]],t.d,null,[a.c]),(l()(),e["\u0275and"](0,null,null,2,null,w)),e["\u0275did"](28,16384,null,0,a.f,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[15,4]],t.j,null,[a.f]),(l()(),e["\u0275and"](0,null,null,2,null,R)),e["\u0275did"](31,16384,null,0,a.b,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[14,4]],t.b,null,[a.b]),(l()(),e["\u0275eld"](33,0,null,null,11,null,null,null,null,null,null,null)),e["\u0275did"](34,16384,null,3,a.c,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,17,{cell:0}),e["\u0275qud"](335544320,18,{headerCell:0}),e["\u0275qud"](335544320,19,{footerCell:0}),e["\u0275prd"](2048,[[10,4]],t.d,null,[a.c]),(l()(),e["\u0275and"](0,null,null,2,null,y)),e["\u0275did"](40,16384,null,0,a.f,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[18,4]],t.j,null,[a.f]),(l()(),e["\u0275and"](0,null,null,2,null,S)),e["\u0275did"](43,16384,null,0,a.b,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[17,4]],t.b,null,[a.b]),(l()(),e["\u0275eld"](45,0,null,null,11,null,null,null,null,null,null,null)),e["\u0275did"](46,16384,null,3,a.c,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,20,{cell:0}),e["\u0275qud"](335544320,21,{headerCell:0}),e["\u0275qud"](335544320,22,{footerCell:0}),e["\u0275prd"](2048,[[10,4]],t.d,null,[a.c]),(l()(),e["\u0275and"](0,null,null,2,null,F)),e["\u0275did"](52,16384,null,0,a.f,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[21,4]],t.j,null,[a.f]),(l()(),e["\u0275and"](0,null,null,2,null,M)),e["\u0275did"](55,16384,null,0,a.b,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[20,4]],t.b,null,[a.b]),(l()(),e["\u0275eld"](57,0,null,null,11,null,null,null,null,null,null,null)),e["\u0275did"](58,16384,null,3,a.c,[],{name:[0,"name"]},null),e["\u0275qud"](335544320,23,{cell:0}),e["\u0275qud"](335544320,24,{headerCell:0}),e["\u0275qud"](335544320,25,{footerCell:0}),e["\u0275prd"](2048,[[10,4]],t.d,null,[a.c]),(l()(),e["\u0275and"](0,null,null,2,null,D)),e["\u0275did"](64,16384,null,0,a.f,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[24,4]],t.j,null,[a.f]),(l()(),e["\u0275and"](0,null,null,2,null,T)),e["\u0275did"](67,16384,null,0,a.b,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[23,4]],t.b,null,[a.b]),(l()(),e["\u0275eld"](69,0,null,null,6,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](0,null,null,2,null,I)),e["\u0275did"](71,540672,null,0,a.h,[e.TemplateRef,e.IterableDiffers],{columns:[0,"columns"]},null),e["\u0275prd"](2048,[[12,4]],t.l,null,[a.h]),(l()(),e["\u0275and"](0,null,null,2,null,E)),e["\u0275did"](74,540672,null,0,a.j,[e.TemplateRef,e.IterableDiffers],{columns:[0,"columns"]},null),e["\u0275prd"](2048,[[11,4]],t.n,null,[a.j]),(l()(),e["\u0275eld"](76,0,null,null,2,"mat-paginator",[["class","mat-paginator"]],null,null,null,v.b,v.a)),e["\u0275did"](77,245760,[[1,4]],0,g.b,[g.c,e.ChangeDetectorRef],{pageSize:[0,"pageSize"],pageSizeOptions:[1,"pageSizeOptions"]},null),e["\u0275pad"](78,4)],function(l,n){var u=n.component;l(n,12,0,"Filter"),l(n,16,0,u.dataSource),l(n,22,0,"id"),l(n,34,0,"progress"),l(n,46,0,"name"),l(n,58,0,"color"),l(n,71,0,u.displayedColumns),l(n,74,0,u.displayedColumns),l(n,77,0,10,l(n,78,0,5,10,25,100))},function(l,n){l(n,2,1,["standard"==e["\u0275nov"](n,3).appearance,"fill"==e["\u0275nov"](n,3).appearance,"outline"==e["\u0275nov"](n,3).appearance,"legacy"==e["\u0275nov"](n,3).appearance,e["\u0275nov"](n,3)._control.errorState,e["\u0275nov"](n,3)._canLabelFloat,e["\u0275nov"](n,3)._shouldLabelFloat(),e["\u0275nov"](n,3)._hideControlPlaceholder(),e["\u0275nov"](n,3)._control.disabled,e["\u0275nov"](n,3)._control.autofilled,e["\u0275nov"](n,3)._control.focused,"accent"==e["\u0275nov"](n,3).color,"warn"==e["\u0275nov"](n,3).color,e["\u0275nov"](n,3)._shouldForward("untouched"),e["\u0275nov"](n,3)._shouldForward("touched"),e["\u0275nov"](n,3)._shouldForward("pristine"),e["\u0275nov"](n,3)._shouldForward("dirty"),e["\u0275nov"](n,3)._shouldForward("valid"),e["\u0275nov"](n,3)._shouldForward("invalid"),e["\u0275nov"](n,3)._shouldForward("pending")]),l(n,11,0,e["\u0275nov"](n,12)._isServer,e["\u0275nov"](n,12).id,e["\u0275nov"](n,12).placeholder,e["\u0275nov"](n,12).disabled,e["\u0275nov"](n,12).required,e["\u0275nov"](n,12).readonly,e["\u0275nov"](n,12)._ariaDescribedby||null,e["\u0275nov"](n,12).errorState,e["\u0275nov"](n,12).required.toString())})}var P=e["\u0275ccf"]("app-tables",b,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-tables",[],null,null,null,O,q)),e["\u0275did"](1,114688,null,0,b,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),j=u("NcP4"),x=u("Ip0R"),k=u("eDkP"),z=u("uGex"),A=u("ZYCi"),L=function(){},N=u("UodH"),J=u("4c35"),$=u("qAlS"),Z=u("v9Dh");u.d(n,"TablesModuleNgFactory",function(){return Y});var Y=e["\u0275cmf"](d,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[P,j.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,x.m,x.l,[e.LOCALE_ID,[2,x.w]]),e["\u0275mpd"](4608,k.c,k.c,[k.i,k.e,e.ComponentFactoryResolver,k.h,k.f,e.Injector,e.NgZone,x.d,m.b]),e["\u0275mpd"](5120,z.a,z.b,[k.c]),e["\u0275mpd"](5120,g.c,g.a,[[3,g.c]]),e["\u0275mpd"](4608,c.d,c.d,[]),e["\u0275mpd"](1073742336,x.c,x.c,[]),e["\u0275mpd"](1073742336,A.p,A.p,[[2,A.u],[2,A.l]]),e["\u0275mpd"](1073742336,L,L,[]),e["\u0275mpd"](1073742336,t.p,t.p,[]),e["\u0275mpd"](1073742336,m.a,m.a,[]),e["\u0275mpd"](1073742336,c.n,c.n,[[2,c.f]]),e["\u0275mpd"](1073742336,a.m,a.m,[]),e["\u0275mpd"](1073742336,i.d,i.d,[]),e["\u0275mpd"](1073742336,p.b,p.b,[]),e["\u0275mpd"](1073742336,c.y,c.y,[]),e["\u0275mpd"](1073742336,N.c,N.c,[]),e["\u0275mpd"](1073742336,J.f,J.f,[]),e["\u0275mpd"](1073742336,$.a,$.a,[]),e["\u0275mpd"](1073742336,k.g,k.g,[]),e["\u0275mpd"](1073742336,c.w,c.w,[]),e["\u0275mpd"](1073742336,c.u,c.u,[]),e["\u0275mpd"](1073742336,z.d,z.d,[]),e["\u0275mpd"](1073742336,Z.d,Z.d,[]),e["\u0275mpd"](1073742336,g.d,g.d,[]),e["\u0275mpd"](1073742336,h.c,h.c,[]),e["\u0275mpd"](1073742336,f.c,f.c,[]),e["\u0275mpd"](1073742336,d,d,[]),e["\u0275mpd"](1024,A.j,function(){return[[{path:"",component:b}]]},[])])})}}]);
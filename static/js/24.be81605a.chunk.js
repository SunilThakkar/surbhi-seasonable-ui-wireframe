(this["webpackJsonpui-wireframe"]=this["webpackJsonpui-wireframe"]||[]).push([[24],{601:function(e,t,a){"use strict";a.r(t);var i=a(90),n=a(91),c=a(127),s=a(128),r=a(0),l=a(33),d=a(285),o=a(161),j=a(65),m=a(288),b=a(606),u=a(329),h=a(364),O=a(355),x=a(327),p=a(600),v=a(349),N=a(408),f=a(1),g=Object(N.a)(),C=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSelectedCategories=function(e){n.setState({selectedCategories:e})},n.state={selectedCategories:[]},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.isEditing,i=void 0!==a&&a,n=t.buttonText,c=void 0===n?"Save":n,s=t.isItemSaving,r=void 0!==s&&s,N=t.itemData,C=void 0===N?{id:void 0,name:void 0,description:void 0}:N,D=t.selectedCategories,S=void 0===D?[]:D;return Object(f.jsx)(d.a,{container:!0,spacing:l.b,children:Object(f.jsx)(d.a,{item:!0,xs:12,children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(b.a.Body,{children:[Object(f.jsx)(b.a.Title,{children:Object(f.jsx)("div",{className:"d-flex",children:Object(f.jsx)("h5",{className:"table-title",children:"Add New Item"})})}),Object(f.jsx)(o.a,{}),Object(f.jsx)(u.a,{initialValues:{id:i?C.id:void 0,itemName:i?C.name:"",itemDescription:i?C.description:""},enableReinitialize:!0,validate:function(e){},onSubmit:function(e){},children:function(t){var a=t.values,i=t.errors,n=t.touched,s=t.handleChange,l=t.handleBlur,d=t.handleSubmit,o=t.isValid,b=t.dirty,u=t.handleReset;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(h.a,{autoComplete:"off",onSubmit:d,children:[Object(f.jsx)(O.a,{className:"mt-2",children:Object(f.jsx)(x.a,{md:12,children:Object(f.jsxs)(h.a.Group,{children:[Object(f.jsx)(h.a.Label,{children:Object(f.jsx)(j.a,{variant:"h5",align:"center",children:"Item Name"})}),Object(f.jsx)(h.a.Control,{required:!0,type:"text",name:"itemName",placeholder:"Enter Item Name",onBlur:l,onChange:s,value:a.itemName,className:n.itemName&&i.itemName?"error":null}),n.itemName&&i.itemName?Object(f.jsx)("div",{className:"text-danger",children:i.itemName}):null]})})}),Object(f.jsx)(O.a,{className:"mt-2",children:Object(f.jsx)(x.a,{md:12,children:Object(f.jsxs)(h.a.Group,{children:[Object(f.jsx)(h.a.Label,{children:Object(f.jsx)(j.a,{variant:"h5",align:"center",children:"Item Description"})}),Object(f.jsx)(h.a.Control,{required:!0,as:"textarea",rows:3,name:"itemDescription",placeholder:"Enter Item Description",onBlur:l,onChange:s,value:a.itemDescription,className:n.itemDescription&&i.itemDescription?"error":null}),n.itemDescription&&i.itemDescription?Object(f.jsx)("div",{className:"text-danger",children:i.itemDescription}):null]})})}),Object(f.jsx)(O.a,{className:"mt-2",children:Object(f.jsx)(x.a,{md:12,children:Object(f.jsxs)(h.a.Group,{children:[Object(f.jsx)(h.a.Label,{children:Object(f.jsx)(j.a,{variant:"h5",align:"center",children:"Item Categories"})}),Object(f.jsx)(v.a,{value:S,isClearable:!1,required:!0,cacheOptions:!0,defaultOptions:!0,components:g,isMulti:!0,placeholder:"Select Item Categories",onChange:function(t){e.handleSelectedCategories(t||[])},loadOptions:function(e,t){return setTimeout((function(){var e=[1,2,3,4,5,6,7,8,9,10].map((function(e){return{label:"SomeValue ".concat(e),value:"SomeValue ".concat(e)}}));t(e)}),400)}})]})})}),Object(f.jsxs)(O.a,{className:"mt-2",children:[Object(f.jsx)(x.a,{md:4}),Object(f.jsxs)(x.a,{children:[Object(f.jsx)(m.a,{variant:"contained",onClick:function(e){return u(e)},children:"Clear"}),Object(f.jsxs)(m.a,{className:"ms-3",type:"submit",variant:"contained",color:"secondary",disabled:!(o&&b),disableElevation:!0,children:[c,r&&Object(f.jsx)(p.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"ms-2"})]})]}),Object(f.jsx)(x.a,{md:4})]})]})})}})]})})})})}}]),a}(r.Component);t.default=C}}]);
//# sourceMappingURL=24.be81605a.chunk.js.map
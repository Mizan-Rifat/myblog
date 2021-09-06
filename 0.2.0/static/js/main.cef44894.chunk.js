(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),o=a.n(n),s=a(12),r=a.n(s),i=a(9),l=(a(80),a(193)),d=a(196),j=a(198),u=a(200),b=a(92),p=a.n(b),O=a(222),h=a(98),x=a(199),f=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function m(){var e=f(),t=o.a.useState(!0),a=Object(i.a)(t,2),s=a[0],r=(a[1],o.a.useState(null)),l=Object(i.a)(r,2),b=l[0],m=l[1],g=Boolean(b),v=Object(n.useContext)(et),y=function(){m(null)};return console.log({currentUser:v}),Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(d.a,{position:"static",children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)("div",{className:e.title,children:Object(c.jsx)(x.a,{href:"/",variant:"h6",underline:"none",style:{color:"#fff"},children:"MyBlog"})}),Object(c.jsx)("div",{children:Object(c.jsx)(x.a,{href:"/users",variant:"p",style:{color:"#fff",marginRight:10},children:"Users"})}),s&&Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit",children:Object(c.jsx)(p.a,{})}),Object(c.jsx)(h.a,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:y,children:Object(c.jsx)(O.a,{onClick:y,component:"a",href:"/profile",children:v.user.name})})]})]})})})}var g=a(7),v=a(18),y=a.n(v);function N(e){var t=Object(n.useState)({user:{},fetching:!0,loadng:!1}),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){y.a.get("".concat("https://jsonplaceholder.typicode.com","/users/").concat(e)).then((function(e){o(Object(g.a)(Object(g.a)({},c),{},{user:e.data,loading:!1,fetching:!1}))})).catch((function(e){console.log({error:e}),o(Object(g.a)(Object(g.a)({},c),{},{loading:!1,fetching:!1}))}))}),[]),[c]}var C=a(24),S=a(217),E=a(149),T=a(97),A=a(13),D=a(101),w=a(203),P=a(99),I=a(221),_=a(208),k=a(5),L=a(207),R=a(69),F=a.n(R),z=a(40),Q=a(223),B=a(4),W=a(201),q=a(202),G=Object(l.a)((function(e){return{avatar:{overflow:"hidden",borderRadius:"50%",height:"100px",width:"100px",background:"red",display:"inline-block"},img:{height:100}}}));function U(){var e=G();return Object(c.jsx)("div",{className:e.avatar,children:Object(c.jsx)("img",{src:"/avatar.png",alt:"",className:e.img})})}var M=Object(l.a)((function(e){return{paper:{boxShadow:"0 1px 4px 0 rgba(0,0,0, 0.14)",margin:"10px"},heading:{background:"#EEEEEE",padding:"20px",fontSize:"16px"}}}));function H(e){var t=M();return Object(c.jsxs)(D.a,{variant:"outlined",square:!0,className:t.paper,children:[Object(c.jsx)("div",{className:t.heading,children:Object(c.jsx)("div",{style:{fontWeight:"bold"},children:e.title})}),Object(c.jsx)("div",{className:"",style:{padding:"20px"},children:e.children})]})}var J=Object(l.a)((function(){return{element:{position:"absolute",left:"50%",right:"50%",top:"50%"}}}));function K(e){var t=J(),a=e.size,n=void 0===a?24:a,o=e.style,s=void 0===o?{}:o;return Object(c.jsx)("div",{children:Object(c.jsx)(W.a,{size:n,className:t.element,style:s})})}var V=a(61),X=function(e,t){switch(t.type){case"FETCH_POSTS":return Object(g.a)(Object(g.a)({},e),{},{posts:t.payload.posts,fetching:!1,loading:!1});case"CREATE_POST":return Object(g.a)(Object(g.a)({},e),{},{posts:[t.payload.post].concat(Object(V.a)(e.posts)),fetching:!1,loading:!1});case"UPDATE_POST":return Object(g.a)(Object(g.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.payload.post.id?t.payload.post:e})),fetching:!1,loading:!1});case"DELETE_POST":return Object(g.a)(Object(g.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.payload.postId})),fetching:!1,loading:!1});case"SET_LOADING_TRUE":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case"SET_LOADING_FALSE":return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}};var Y=Object(l.a)((function(e){return{paper:{padding:20,margin:"10px 0"},personal:{textAlign:"center"},field:{marginBottom:5},value:{marginTop:0}}}));function Z(e){var t=e.user,a=Y();return Object(c.jsxs)(D.a,{className:a.paper,children:[Object(c.jsxs)("div",{className:a.personal,children:[Object(c.jsx)(U,{src:"",className:a.large}),Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("small",{children:t.username})]}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{className:a.field,children:"Email"}),Object(c.jsx)("p",{className:a.value,children:t.email})]}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("h4",{className:a.field,children:"Location"}),Object(c.jsxs)("p",{className:a.value,children:[t.address.street,",",t.address.city]})]}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("h4",{className:a.field,children:"Website"}),Object(c.jsx)("p",{className:a.value,children:t.website})]}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("h4",{className:a.field,children:"Company"}),Object(c.jsx)("p",{className:a.value,children:t.company.name})]}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("h4",{className:a.field,children:"Phone"}),Object(c.jsx)("p",{className:a.value,children:t.phone})]})]})]})}var $=Object(l.a)((function(e){return{root:{margin:"20px 0px"},paper:{padding:10,margin:"10px 0"},personal:{textAlign:"center"}}})),ee=Object(n.createContext)();function te(e){var t=$(),a=Object(n.useContext)(et),o="/profile"===e.match.url?a.user.id:e.match.params.id,s=N(o),r=Object(i.a)(s,1)[0],l=function(e){var t=Object(n.useReducer)(X,{posts:[],fetching:!0,loading:!1}),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){y.a.get("".concat("https://jsonplaceholder.typicode.com","/posts?userId=").concat(e)).then((function(e){o({type:"FETCH_POSTS",payload:{posts:e.data}})})).catch((function(e){console.log({error:e})}))}),[]),[c,function(e){return o({type:"SET_LOADING_TRUE"}),new Promise((function(t,a){y.a.post("".concat("https://jsonplaceholder.typicode.com","/posts"),e).then((function(e){o({type:"CREATE_POST",payload:{post:e.data}}),t()})).catch((function(e){console.log({error:e}),o({type:"SET_LOADING_FALSE"}),a()}))}))},function(e){return o({type:"SET_LOADING_TRUE"}),new Promise((function(t,a){y.a.put("".concat("https://jsonplaceholder.typicode.com","/posts/").concat(e.id),e).then((function(e){o({type:"UPDATE_POST",payload:{post:e.data}}),t()})).catch((function(e){console.log({error:e}),o({type:"SET_LOADING_FALSE"}),a()}))}))},function(e){return o({type:"SET_LOADING_TRUE"}),new Promise((function(t,a){y.a.delete("".concat("https://jsonplaceholder.typicode.com","/posts/").concat(e)).then((function(a){o({type:"DELETE_POST",payload:{postId:e}}),t()})).catch((function(e){console.log({error:e}),a()}))}))}]}(o),d=Object(i.a)(l,4),j=d[0],u=d[1],b=d[2],p=d[3],O=r.user,h=(r.loading,r.fetching),x=j.posts,f=Object(n.useState)(!1),m=Object(i.a)(f,2),g=m[0],v=m[1];return Object(c.jsx)(q.a,{container:!0,spacing:1,className:t.root,children:h?Object(c.jsx)(K,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q.a,{item:!0,sm:4,children:Object(c.jsx)(Z,{user:O})}),Object(c.jsxs)(ee.Provider,{value:{postState:j,createPost:u,updatePost:b,deletePost:p},children:[Object(c.jsx)(q.a,{item:!0,sm:8,children:Object(c.jsxs)(H,{title:"".concat(O.name,"'s Posts"),children:[a.user.id==o&&Object(c.jsx)("div",{className:"",style:{textAlign:"right"},children:Object(c.jsx)(w.a,{variant:"contained",color:"primary",size:"small",onClick:function(){return v(!0)},children:"Crete new Post"})}),x.map((function(e){return Object(c.jsx)(be,{post:e,action:a.user.id==o})}))]})}),Object(c.jsx)(ie,{open:g,setOpen:v})]})]})})}var ae=a(70);function ce(){var e=Object(ae.b)(),t=e.enqueueSnackbar,a=e.closeSnackbar,n=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(u.a,{"aria-label":"close",color:"inherit",onClick:function(){a(e)},children:Object(c.jsx)(F.a,{})})})};return function(e,a){t(e,{variant:a,dense:!0,autoHideDuration:"success"==a?2e3:5e3,anchorOrigin:{vertical:"top",horizontal:"right"},action:n})}}var ne=Object(l.a)((function(e){return{textfield:{marginBottom:15},actions:{padding:"12px 24px"},root:{"& .MuiDialog-paper":{minWidth:"650px"}},formDisable:{pointerEvents:"none",opacity:".5"},progressContainer:{position:"absolute",top:"35%",left:"44%"},dNone:{display:"none"}}}));function oe(e){var t,a=e.handleClose,o=e.post,s=ne(),r=ce(),l=Object(n.useContext)(ee),d=l.postState,j=l.createPost,u=l.updatePost,b=Object(n.useState)({title:o?o.title:"",body:o?o.body:"",userId:2}),p=Object(i.a)(b,2),O=p[0],h=p[1],x=function(e,t){h(Object(g.a)(Object(g.a)({},O),{},Object(C.a)({},t,e.target.value)))};return Object(c.jsxs)("div",{style:{position:"relative"},children:[Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o?u(Object(g.a)(Object(g.a)({},O),{},{id:o.id})).then((function(){a(),r("Post Updated.","success")})).catch((function(e){a(),r("This post can not be updated.","error")})):j(O).then((function(){a(),r("Post Created.","success")})).catch((function(e){a(),r("Something went wrong.","error")}))},className:Object(B.a)(Object(C.a)({},s.formDisable,d.loading)),children:[Object(c.jsx)(Q.a,{fullWidth:!0,required:!0,label:"Post Title",variant:"outlined",className:s.textfield,onChange:function(e){return x(e,"title")},value:O.title}),Object(c.jsx)(Q.a,{required:!0,id:"standard-required",multiline:!0,fullWidth:!0,variant:"outlined",rows:4,label:"Post Description",className:s.textfield,onChange:function(e){return x(e,"body")},value:O.body}),Object(c.jsx)("div",{className:"",style:{textAlign:"right"},children:Object(c.jsx)(w.a,{variant:"contained",type:"submit",color:"Primary",children:"Submit"})})]}),Object(c.jsx)("div",{className:Object(B.a)((t={},Object(C.a)(t,s.progressContainer,d.loading),Object(C.a)(t,s.dNone,!d.loading),t)),children:Object(c.jsx)(W.a,{})})]})}var se=Object(l.a)((function(e){return{textfield:{marginBottom:15},actions:{padding:"12px 24px"},root:{"& .MuiDialog-paper":{minWidth:"650px"}}}})),re=Object(k.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,o=Object(P.a)(e,["children","classes","onClose"]);return Object(c.jsxs)(L.a,Object(g.a)(Object(g.a)({disableTypography:!0,className:a.root},o),{},{children:[Object(c.jsx)(z.a,{variant:"h6",children:t}),n?Object(c.jsx)(u.a,{"aria-label":"close",className:a.closeButton,onClick:n,children:Object(c.jsx)(F.a,{})}):null]}))}));function ie(e){var t=e.open,a=e.setOpen,n=e.post,o=se(),s=function(){a(!1)};return Object(c.jsx)("div",{children:Object(c.jsxs)(I.a,{open:t,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:o.root,children:[Object(c.jsx)(re,{id:"alert-dialog-title",onClose:s,children:n?"Update Post":"Create New Post"}),Object(c.jsx)(_.a,{dividers:!0,children:Object(c.jsx)(oe,{handleClose:s,post:n})})]})})}var le=a(210),de=a(209);function je(e){var t=e.open,a=e.setOpen,o=e.postId,s=Object(n.useContext)(ee),r=(s.postState,s.deletePost),i=ce(),l=function(){a(!1)};return Object(c.jsx)("div",{children:Object(c.jsxs)(I.a,{open:t,onClose:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(c.jsx)(L.a,{id:"alert-dialog-title",children:"Are you sure?"}),Object(c.jsx)(_.a,{children:Object(c.jsx)(de.a,{id:"alert-dialog-description",children:"The following action will delete the post."})}),Object(c.jsxs)(le.a,{children:[Object(c.jsx)(w.a,{onClick:l,color:"primary",children:"cancel"}),Object(c.jsx)(w.a,{onClick:function(){r(o).then((function(){l(),i("Post Deleted.","success")}))},color:"secondary",variant:"contained",autoFocus:!0,children:"Delete"})]})]})})}var ue=Object(l.a)((function(e){return{root:{padding:20,margin:"10px 0"},actions:{textAlign:"right"}}}));function be(e){var t=e.post,a=e.action,o=void 0!==a&&a,s=ue(),r=Object(n.useState)(!1),l=Object(i.a)(r,2),d=l[0],j=l[1],u=Object(n.useState)(!1),b=Object(i.a)(u,2),p=b[0],O=b[1];return Object(c.jsxs)(D.a,{className:s.root,children:[Object(c.jsx)(x.a,{variant:"h6",href:"/post/".concat(t.id),children:t.title}),Object(c.jsx)("p",{children:t.body}),o&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:s.actions,children:[Object(c.jsx)(w.a,{variant:"contained",color:"info",size:"small",style:{marginRight:5},onClick:function(){j(!0)},children:"Edit"}),Object(c.jsx)(w.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){O(!0)},children:"Delete"})]}),Object(c.jsx)(ie,{open:d,setOpen:j,post:t}),Object(c.jsx)(je,{open:p,setOpen:O,postId:t.id})]})]})}var pe=Object(l.a)((function(e){return{lmBtn:{display:"flex",justifyContent:"center"}}}));function Oe(){var e=pe(),t=function(){var e=Object(n.useState)({posts:[],fetching:!0,loadng:!1,page:1,limit:10}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(Object(g.a)(Object(g.a)({},a),{},{loading:!0})),y.a.get("".concat("https://jsonplaceholder.typicode.com","/posts?_page=").concat(a.page,"&_limit=").concat(a.limit)).then((function(e){console.log({response:e}),c(Object(g.a)(Object(g.a)({},a),{},{posts:[].concat(Object(V.a)(a.posts),Object(V.a)(e.data)),fetching:!1,loading:!1}))})).catch((function(e){console.log({error:e}),c(Object(g.a)(Object(g.a)({},a),{},{fetching:!1,loading:!1}))}))}),[a.page]),[a,function(){c(Object(g.a)(Object(g.a)({},a),{},{page:a.page+1}))}]}(),a=Object(i.a)(t,2),o=a[0],s=a[1];return Object(c.jsxs)("div",{children:[o.fetching?Object(c.jsx)(K,{}):o.posts.map((function(e){return Object(c.jsx)(be,{post:e},e.id)})),o.page<10&&o.posts.length>0?Object(c.jsx)("div",{className:e.lmBtn,style:{padding:"25px 0"},children:Object(c.jsxs)("div",{style:{position:"relative",display:"inline-block"},children:[Object(c.jsx)(w.a,{variant:"contained",color:"primary",style:{width:"200px",borderRadius:"0px"},onClick:s,disabled:o.fetching||o.loading,children:"load more"}),o.fetching||o.loading?Object(c.jsx)(W.a,{size:24,style:{position:"absolute",left:"89px",top:"6px"}}):""]})}):""]})}var he=a(211),xe=a(212),fe=a(213),me=a(214),ge=Object(l.a)((function(e){return{root:{},action:{justifyContent:"flex-end",padding:"10px 15px"}}}));function ve(){var e=ge(),t=o.a.useState(!1),a=Object(i.a)(t,2);a[0],a[1];return Object(c.jsxs)(he.a,{className:e.root,children:[Object(c.jsx)(xe.a,{title:"Leave A Comment"}),Object(c.jsx)(fe.a,{children:Object(c.jsx)(Q.a,{id:"standard-required",multiline:!0,fullWidth:!0,variant:"outlined",rows:3})}),Object(c.jsx)(me.a,{className:e.action,children:Object(c.jsx)(w.a,{variant:"contained",color:"primary",children:"Submit"})})]})}var ye=a(215),Ne=Object(l.a)((function(e){return{root:{padding:5,margin:10},name:{fontWeight:700,marginBottom:0}}}));function Ce(e){var t=e.comment,a=Ne();return Object(c.jsxs)("div",{className:a.root,children:[Object(c.jsx)("p",{className:a.name,children:t.name}),Object(c.jsx)("small",{children:t.email}),Object(c.jsx)("p",{children:t.body})]})}var Se=Object(l.a)((function(e){return{root:{padding:20,margin:10}}}));function Ee(e){Se();var t=function(e){var t=Object(n.useState)({post:{},comments:[],fetching:!0,loadng:!1}),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){y.a.all([y.a.get("".concat("https://jsonplaceholder.typicode.com","/posts/").concat(e)),y.a.get("".concat("https://jsonplaceholder.typicode.com","/comments?postId=").concat(e))]).then(y.a.spread((function(e,t){o(Object(g.a)(Object(g.a)({},c),{},{post:e.data,comments:t.data,loading:!1,fetching:!1}))}))).catch((function(e){console.log({error:e}),o(Object(g.a)(Object(g.a)({},c),{},{loading:!1,fetching:!1}))}))}),[]),[c]}(e.match.params.id),a=Object(i.a)(t,1)[0];return Object(c.jsx)(c.Fragment,{children:a.fetching?Object(c.jsx)(K,{}):Object(c.jsxs)(H,{title:"Post",children:[Object(c.jsx)("h4",{children:a.post.title}),Object(c.jsx)("p",{children:a.post.body}),Object(c.jsx)(ye.a,{style:{marginTop:50}}),Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("h3",{children:"Comments"}),a.comments.map((function(e){return Object(c.jsx)(Ce,{comment:e},e.id)}))]}),Object(c.jsx)(ve,{})]})})}var Te=a(94),Ae=a.n(Te),De=a(93),we=a.n(De),Pe=Object(l.a)((function(e){return{textfield:{marginBottom:15},actions:{textAlign:"right"},table:{width:"100%",borderCollapse:"collapse"},th:{border:"1px solid #dddddd",textAlign:"left",padding:"8px"},even:{backgroundColor:"#eee"},thRoot:{display:"flex",justifyContent:"space-between"},sortIcon:{position:"relative"},upIcon:{position:"absolute",top:"-3px",left:"-20px"},downIcon:{position:"absolute",top:"3px",left:"-20px"},greyOut:{color:"#DDD"}}}));function Ie(e){var t=e.label,a=e.handleSort,n=e.columnOrder,o=e.sortOrder,s=Pe();return Object(c.jsx)("th",{className:s.th,onClick:function(){return a(t)},children:Object(c.jsxs)("div",{className:s.thRoot,children:[Object(c.jsx)("div",{className:"",children:t}),"Website"!=t&&Object(c.jsxs)("div",{className:Object(B.a)(s.sortIcon),children:[Object(c.jsx)(we.a,{className:Object(B.a)(s.upIcon,Object(C.a)({},s.greyOut,n!=t.toLowerCase()||"asc"!=o))}),Object(c.jsx)(Ae.a,{className:Object(B.a)(s.downIcon,Object(C.a)({},s.greyOut,n!=t.toLowerCase()||"dsc"!=o))})]})]})})}var _e=a(204),ke=a(225),Le=a(216),Re=a(206),Fe=a(96),ze=a.n(Fe),Qe=a(95),Be=a.n(Qe),We=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"},margin:{margin:e.spacing(2)},textField:{width:"25ch"}}}));function qe(e){var t=e.dispatch,a=e.searchQuery,o=e.setSearchQuery,s=e.setPageSizeQuery,r=e.setPageQuery,l=We(),d=Object(n.useState)(!1),j=Object(i.a)(d,2),b=j[0],p=j[1];return Object(c.jsx)("div",{className:l.root,children:Object(c.jsxs)(Re.a,{className:Object(B.a)(l.margin,l.textField),children:[Object(c.jsx)(ke.a,{htmlFor:"standard-adornment-password",children:"Search"}),Object(c.jsx)(_e.a,{id:"standard-adornment-password",value:a,onChange:function(e){o(e.target.value),s(""),r("")},onFocus:function(){p(!0)},onBlur:function(){p(!1)},endAdornment:Object(c.jsx)(Le.a,{position:"end",children:Object(c.jsx)(u.a,{onClick:function(){o(""),s(""),r(""),t({type:"FILTER_DATA",payload:{query:""}})},children:b||a.length>0?Object(c.jsx)(Be.a,{}):Object(c.jsx)(ze.a,{})})})})]})})}var Ge=a(218),Ue=a(220),Me=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center"}}}));function He(e){var t=e.pageQuery,a=e.setPageQuery,n=e.dataCount,o=e.pageSizeQuery,s=e.setPageSizeQuery,r=Me();return Object(c.jsxs)("div",{className:r.root,children:[Object(c.jsx)("p",{children:"Rows per page : "}),Object(c.jsxs)(Ue.a,{native:!0,value:o,style:{margin:"0 10px"},onChange:function(e){s(e.target.value),a(1)},children:[Object(c.jsx)("option",{value:n,children:"All"}),n>5&&Object(c.jsx)("option",{value:5,children:"5"}),n>3&&Object(c.jsx)("option",{value:3,children:"3"})]}),Object(c.jsx)(Ge.a,{count:o?Math.ceil(n/o):1,page:t?parseInt(t):1,color:"primary",onChange:function(e,t){a(t)}})]})}var Je=function(e,t){switch(t.type){case"SORT_DATA":return Object(g.a)(Object(g.a)({},e),{},{currentData:e.currentData.sort((function(e,a){return"dsc"==t.payload.order?e[t.payload.column]<a[t.payload.column]?1:e[t.payload.column]>a[t.payload.column]?-1:0:"asc"==t.payload.order?e[t.payload.column]>a[t.payload.column]?1:e[t.payload.column]<a[t.payload.column]?-1:0:void 0}))});case"FILTER_DATA":return Object(g.a)(Object(g.a)({},e),{},{currentData:e.allData.filter((function(e){return e.name.toLowerCase().includes(t.payload.query)||e.email.toLowerCase().includes(t.payload.query)||e.website.toLowerCase().includes(t.payload.query)}))});case"PAGINATE_DATA":return Object(g.a)(Object(g.a)({},e),{},{currentData:e.allData.slice(t.payload.start,t.payload.end)});default:return e}},Ke=a(56),Ve=Object(l.a)((function(e){return{textfield:{marginBottom:15},actions:{textAlign:"right"},table:{width:"100%",borderCollapse:"collapse"},th:{border:"1px solid #dddddd",textAlign:"left",padding:"8px"},even:{backgroundColor:"#eee"},thRoot:{display:"flex",justifyContent:"space-between"},sortIcon:{position:"relative"},upIcon:{position:"absolute",top:"-3px",left:"-20px"},downIcon:{position:"absolute",top:"3px",left:"-20px"},greyOut:{color:"#DDD"}}}));function Xe(e){var t=e.data,a=Ve(),o=Object(n.useReducer)(Je,{currentData:t,allData:t}),s=Object(i.a)(o,2),r=s[0],l=s[1],d=Object(n.useState)(["Name","Email","Website"]),j=Object(i.a)(d,2),u=j[0],b=(j[1],Object(Ke.a)("column","")),p=Object(i.a)(b,2),O=p[0],h=p[1],f=Object(Ke.a)("order",""),m=Object(i.a)(f,2),g=m[0],v=m[1],y=Object(Ke.a)("search",""),N=Object(i.a)(y,2),S=N[0],E=N[1],T=Object(Ke.a)("page",""),A=Object(i.a)(T,2),D=A[0],w=A[1],P=Object(Ke.a)("pagesize",""),I=Object(i.a)(P,2),_=I[0],k=I[1],L=Object(n.useState)("asc"),R=Object(i.a)(L,2),F=R[0],z=R[1],Q=function(e){"Website"!=e&&(h(e.toLowerCase()),"asc"==F?(z("dsc"),v("dsc")):(z("asc"),v("asc")))};return Object(n.useEffect)((function(){l({type:"FILTER_DATA",payload:{query:S}})}),[S]),Object(n.useEffect)((function(){""!=_&&""!=D&&l({type:"PAGINATE_DATA",payload:{start:_*(D-1),end:_*D}})}),[D,_]),Object(n.useEffect)((function(){l({type:"SORT_DATA",payload:{column:O,order:g}})}),[O,g]),Object(c.jsxs)("div",{children:[Object(c.jsx)(qe,{dispatch:l,searchQuery:S,setSearchQuery:E,setPageQuery:w,setPageSizeQuery:k}),Object(c.jsxs)("table",{className:a.table,children:[Object(c.jsx)("tr",{children:u.map((function(e,t){return Object(c.jsx)(Ie,{label:e,sortOrder:F,columnOrder:O,handleSort:Q})}))}),r.currentData.map((function(e,t){return Object(c.jsxs)("tr",{className:Object(B.a)(Object(C.a)({},a.even,t%2==0)),children:[Object(c.jsx)("td",{className:a.th,children:Object(c.jsx)(x.a,{href:"/user/".concat(e.id),variant:"p",children:e.name})}),Object(c.jsx)("td",{className:a.th,children:e.email}),Object(c.jsx)("td",{className:a.th,children:e.website})]})}))]}),Object(c.jsx)(He,{pageQuery:D,setPageQuery:w,dataCount:""==S?r.allData.length:r.currentData.length,pageSizeQuery:_,setPageSizeQuery:k,dispatch:l})]})}function Ye(){var e=function(){var e=Object(n.useState)({users:[],fetching:!0,loadng:!1}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){c(Object(g.a)(Object(g.a)({},a),{},{loading:!0})),y.a.get("".concat("https://jsonplaceholder.typicode.com","/users")).then((function(e){console.log({response:e}),c(Object(g.a)(Object(g.a)({},a),{},{users:e.data,fetching:!1,loading:!1}))})).catch((function(e){console.log({error:e}),c(Object(g.a)(Object(g.a)({},a),{},{fetching:!1,loading:!1}))}))}),[]),[a]}(),t=Object(i.a)(e,1)[0];return Object(c.jsx)(c.Fragment,{children:t.fetching?Object(c.jsx)(K,{}):Object(c.jsx)(H,{title:"Users",children:Object(c.jsx)(Xe,{data:t.users})})})}var Ze=Object(E.a)((function(e){return{topClass:Object(C.a)({top:"20px"},"@media (max-width:480px)",{top:0})}}));var $e=function(){var e=Ze();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(T.a,{children:Object(c.jsx)(ae.a,{classes:{anchorOriginTopRight:e.topClass},children:Object(c.jsx)(S.a,{maxWidth:"md",children:Object(c.jsxs)(A.c,{children:[Object(c.jsx)(A.a,{path:"/",exact:!0,component:Oe}),Object(c.jsx)(A.a,{path:"/post/:id",component:Ee}),Object(c.jsx)(A.a,{path:"/users",component:Ye}),Object(c.jsx)(A.a,{path:"/user/:id",component:te}),Object(c.jsx)(A.a,{path:"/profile",component:te})]})})})})})},et=Object(n.createContext)();var tt=function(){var e=N(2),t=Object(i.a)(e,1)[0];return Object(c.jsx)(et.Provider,{value:t,children:t.fetching?Object(c.jsx)(K,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m,{}),Object(c.jsx)($e,{})]})})};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(tt,{})}),document.getElementById("root"))},80:function(e,t,a){}},[[148,1,2]]]);
//# sourceMappingURL=main.cef44894.chunk.js.map
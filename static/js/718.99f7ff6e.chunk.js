"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[718],{8485:function(t,s,e){e.r(s),e.d(s,{default:function(){return M}});var n=e(1413),i=e(5671),o=e(3144),r=e(136),a=e(5716),u=e(2791),c="Profile_content__HgPU4",l={background:"ProfileInfo_background__brZdy",descriptionBlock:"ProfileInfo_descriptionBlock__zFqv1",infoSectionWraper:"ProfileInfo_infoSectionWraper__u0FpO",title:"ProfileInfo_title__E+2+1",description:"ProfileInfo_description__uyud0",location:"ProfileInfo_location__QqGly",contactInfo:"ProfileInfo_contactInfo__qnvr6",interests:"ProfileInfo_interests__t73ZA"},p=e.p+"static/media/back.4ce58cccd86bcc99fd09.jpg",d=e(1833),f=e(885),_=e(184),h=function(t){var s=(0,u.useState)(!1),e=(0,f.Z)(s,2),n=e[0],i=e[1],o=(0,u.useState)(t.status),r=(0,f.Z)(o,2),a=r[0],c=r[1];(0,u.useEffect)((function(){c(t.status)}),[t.status]);return(0,_.jsxs)("div",{children:[!n&&(0,_.jsx)("div",{children:(0,_.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"No status"})}),n&&(0,_.jsx)("div",{children:(0,_.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(a)},value:a})})]})},x=e(5240),v=function(t){return t.profile?(0,_.jsxs)("div",{className:l.userInfo,children:[(0,_.jsx)("div",{className:l.background,children:(0,_.jsx)("img",{src:p})}),(0,_.jsx)("div",{children:(0,_.jsxs)("div",{className:l.descriptionBlock,children:[(0,_.jsx)("div",{children:(0,_.jsx)("img",{src:null!=t.profile.photos.large?t.profile.photos.large:x,alt:"no img"})}),(0,_.jsxs)("div",{className:l.infoSectionWraper,children:[(0,_.jsx)("div",{className:l.title,children:t.profile.fullName}),(0,_.jsx)(h,{status:t.status,updateStatus:t.updateStatus}),(0,_.jsxs)("div",{className:l.description,children:[t.profile.aboutMe,"FrontEnd Developer"]}),(0,_.jsx)("div",{className:l.location,children:"Vitebsk, Belarus"}),(0,_.jsxs)("div",{className:l.contactInfo,children:["Contact info: \xa0",(0,_.jsx)("a",{href:"https://www.linkedin.com/in/igorlapuzo/",children:"LinkedIn"})]}),(0,_.jsxs)("div",{className:l.interests,children:[t.profile.aboutMe," Interests: Development, English, Jogging"]})]})]})})]}):(0,_.jsx)(d.Z,{})},j={postBlock:"MyPosts_postBlock__PTwva",title:"MyPosts_title__wakAx",myPostsWraper:"MyPosts_myPostsWraper__hp7Jp",input:"MyPosts_input__e0yiR",buttonWrapper:"MyPosts_buttonWrapper__940EH",button:"MyPosts_button__viOBZ"},m="Post_post__qtr2H",P="Post_wraper__5Q5Hv",g="Post_postBody__s7Bx5",k="Post_likes__viHAy",N=function(t){return(0,_.jsxs)("div",{className:m,children:[(0,_.jsxs)("div",{className:P,children:[(0,_.jsx)("img",{src:x}),(0,_.jsx)("div",{className:g,children:t.message})]}),(0,_.jsxs)("div",{className:k,children:["likes ",t.likes]})]})},b=function(t){var s=t.postsData.map((function(t){return(0,_.jsx)(N,{message:t.post,likes:t.likescount})}));return(0,_.jsxs)("div",{className:j.postBlock,children:[(0,_.jsx)("div",{className:j.title,children:"My posts"}),s,(0,_.jsxs)("div",{className:j.myPostsWraper,children:[(0,_.jsx)("div",{className:j.inputWraper,children:(0,_.jsx)("textarea",{className:j.input,onChange:function(s){var e=s.target.value;t.updateNewPostText(e)},value:t.newPostText})}),(0,_.jsx)("div",{className:j.buttonWrapper,children:(0,_.jsx)("button",{className:j.button,onClick:function(){return t.addPost()},children:"Add post"})})]})]})},y=e(9994),I=e(8687),S=(0,I.$j)((function(t){return{postsData:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),(function(t){return{updateNewPostText:function(s){t((0,y.Xv)(s))},addPost:function(){t((0,y.Wl)())}}}))(b),Z=function(t){return(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)(v,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,_.jsx)(S,{})]})},w=(e(4371),e(7781)),B=e(6871),W=function(t){(0,r.Z)(e,t);var s=(0,a.Z)(e);function e(){return(0,i.Z)(this,e),s.apply(this,arguments)}return(0,o.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,_.jsx)(Z,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.Component),M=(0,w.qC)((0,I.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:y.et,getStatus:y.lR,updateStatus:y.Nf}),(function(t){return function(s){var e=(0,B.bS)("/profile/:userId/");return(0,_.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{match:e}))}}))(W)},4371:function(t,s,e){e(2791),e(184)}}]);
//# sourceMappingURL=718.99f7ff6e.chunk.js.map
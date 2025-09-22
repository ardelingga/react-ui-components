import{r as h,R}from"./iframe-CqjzB_ih.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as x}from"./Button-BDC9PhyQ.js";import{F as B,a as c,b as u,c as p}from"./Form-B0xnGxuY.js";import{c as L}from"./utils-CBfrqCZ4.js";import{I as n}from"./Icon-BJ34t-SL.js";import{U}from"./user-B5J_EaWs.js";import{C as z,A as Y,L as A,E as V}from"./lock-fhQ0vRKC.js";import{G as Z}from"./github-35fJl3pc.js";import{M as H}from"./mail-BB8yv4th.js";import{E as _}from"./eye-zP1S89Vf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-DLQ91j1X.js";import"./circle-check-big-Dl_l08BN.js";const C=({onRegister:i,onSignIn:d,onSocialLogin:m,loading:t=!1,error:D,className:M})=>{const[a,O]=h.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",agreeToTerms:!1,newsletter:!1}),[T,G]=h.useState(!1),[E,$]=h.useState(!1),[o,q]=h.useState({}),W=r=>{r.preventDefault();const s={};if(a.firstName.trim()||(s.firstName="First name is required"),a.lastName.trim()||(s.lastName="Last name is required"),a.email.trim()?/\S+@\S+\.\S+/.test(a.email)||(s.email="Please enter a valid email"):s.email="Email is required",a.password?a.password.length<8&&(s.password="Password must be at least 8 characters"):s.password="Password is required",a.password!==a.confirmPassword&&(s.confirmPassword="Passwords do not match"),a.agreeToTerms||(s.agreeToTerms="You must agree to the terms and conditions"),Object.keys(s).length>0){q(s);return}q({}),i?.(a)},l=(r,s)=>{O(F=>({...F,[r]:s})),o[r]&&q(F=>({...F,[r]:""}))},g=(r=>{let s=0;return r.length>=8&&s++,/[A-Z]/.test(r)&&s++,/[a-z]/.test(r)&&s++,/[0-9]/.test(r)&&s++,/[^A-Za-z0-9]/.test(r)&&s++,s})(a.password);return e.jsx("div",{className:L("min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8",M),children:e.jsxs("div",{className:"max-w-md w-full space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900",children:e.jsx(n,{iconNode:U,className:"h-6 w-6 text-green-600 dark:text-green-400"})}),e.jsx("h2",{className:"mt-6 text-3xl font-bold text-gray-900 dark:text-white",children:"Create your account"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["Already have an account?"," ",e.jsx("button",{type:"button",onClick:d,className:"font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400",children:"Sign in here"})]})]}),D&&e.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md text-sm",children:D}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(x,{variant:"secondary",className:"w-full",onClick:()=>m?.("google"),disabled:t,children:[e.jsx(n,{iconNode:z,className:"mr-2 h-4 w-4"}),"Continue with Google"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs(x,{variant:"secondary",onClick:()=>m?.("github"),disabled:t,children:[e.jsx(n,{iconNode:Z,className:"mr-2 h-4 w-4"}),"GitHub"]}),e.jsxs(x,{variant:"secondary",onClick:()=>m?.("apple"),disabled:t,children:[e.jsx(n,{iconNode:Y,className:"mr-2 h-4 w-4"}),"Apple"]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300 dark:border-gray-600"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400",children:"Or register with email"})})]}),e.jsxs(B,{onSubmit:W,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(c,{error:o.firstName,children:[e.jsx(u,{htmlFor:"firstName",required:!0,children:"First name"}),e.jsx(p,{id:"firstName",name:"firstName",type:"text",autoComplete:"given-name",required:!0,placeholder:"John",value:a.firstName,onChange:r=>l("firstName",r.target.value),error:!!o.firstName})]}),e.jsxs(c,{error:o.lastName,children:[e.jsx(u,{htmlFor:"lastName",required:!0,children:"Last name"}),e.jsx(p,{id:"lastName",name:"lastName",type:"text",autoComplete:"family-name",required:!0,placeholder:"Doe",value:a.lastName,onChange:r=>l("lastName",r.target.value),error:!!o.lastName})]})]}),e.jsxs(c,{error:o.email,children:[e.jsx(u,{htmlFor:"email",required:!0,children:"Email address"}),e.jsxs("div",{className:"relative",children:[e.jsx(p,{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"john@example.com",value:a.email,onChange:r=>l("email",r.target.value),className:"pl-10",error:!!o.email}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(n,{iconNode:H,className:"h-5 w-5 text-gray-400"})})]})]}),e.jsxs(c,{error:o.password,children:[e.jsx(u,{htmlFor:"password",required:!0,children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx(p,{id:"password",name:"password",type:T?"text":"password",autoComplete:"new-password",required:!0,placeholder:"Create a strong password",value:a.password,onChange:r=>l("password",r.target.value),className:"pl-10 pr-10",error:!!o.password}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(n,{iconNode:A,className:"h-5 w-5 text-gray-400"})}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>G(!T),children:e.jsx(n,{iconNode:T?V:_,className:"h-5 w-5 text-gray-400 hover:text-gray-600"})})]}),a.password&&e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"flex space-x-1",children:[1,2,3,4,5].map(r=>e.jsx("div",{className:L("h-1 flex-1 rounded-full",g>=r?g<=2?"bg-red-500":g<=3?"bg-yellow-500":"bg-green-500":"bg-gray-200 dark:bg-gray-700")},r))}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Password strength: ",g<=2?"Weak":g<=3?"Medium":"Strong"]})]})]}),e.jsxs(c,{error:o.confirmPassword,children:[e.jsx(u,{htmlFor:"confirmPassword",required:!0,children:"Confirm password"}),e.jsxs("div",{className:"relative",children:[e.jsx(p,{id:"confirmPassword",name:"confirmPassword",type:E?"text":"password",autoComplete:"new-password",required:!0,placeholder:"Confirm your password",value:a.confirmPassword,onChange:r=>l("confirmPassword",r.target.value),className:"pl-10 pr-10",error:!!o.confirmPassword}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(n,{iconNode:A,className:"h-5 w-5 text-gray-400"})}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>$(!E),children:e.jsx(n,{iconNode:E?V:_,className:"h-5 w-5 text-gray-400 hover:text-gray-600"})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{error:o.agreeToTerms,children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("input",{id:"agreeToTerms",name:"agreeToTerms",type:"checkbox",checked:a.agreeToTerms,onChange:r=>l("agreeToTerms",r.target.checked),className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"}),e.jsxs("label",{htmlFor:"agreeToTerms",className:"ml-2 block text-sm text-gray-900 dark:text-gray-300",children:["I agree to the"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-500 dark:text-blue-400",children:"Terms and Conditions"})," ","and"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-500 dark:text-blue-400",children:"Privacy Policy"})]})]})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"newsletter",name:"newsletter",type:"checkbox",checked:a.newsletter,onChange:r=>l("newsletter",r.target.checked),className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),e.jsx("label",{htmlFor:"newsletter",className:"ml-2 block text-sm text-gray-900 dark:text-gray-300",children:"Send me news and updates"})]})]}),e.jsx(x,{type:"submit",className:"w-full",loading:t,disabled:t,children:t?"Creating account...":"Create account"})]})]})})};C.__docgenInfo={description:"",methods:[],displayName:"RegisterPage",props:{onRegister:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: RegisterFormData) => void",signature:{arguments:[{type:{name:"RegisterFormData"},name:"data"}],return:{name:"void"}}},description:""},onSignIn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSocialLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"(provider: 'google' | 'github' | 'apple') => void",signature:{arguments:[{type:{name:"union",raw:"'google' | 'github' | 'apple'",elements:[{name:"literal",value:"'google'"},{name:"literal",value:"'github'"},{name:"literal",value:"'apple'"}]},name:"provider"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const{fn:I}=__STORYBOOK_MODULE_TEST__,ge={title:"Pages/Authentication/RegisterPage",component:C,parameters:{layout:"fullscreen",docs:{description:{component:"A comprehensive registration page with form validation, password strength indicator, and social authentication options."}}},tags:["autodocs"],argTypes:{loading:{control:{type:"boolean"}},error:{control:{type:"text"}}},args:{onRegister:I(),onSignIn:I(),onSocialLogin:I()}},f={args:{loading:!1}},w={args:{loading:!0}},y={args:{loading:!1,error:"An account with this email already exists. Please use a different email or sign in."}},b={args:{loading:!1,error:"Please correct the errors below and try again."}},v={args:{loading:!1,error:"We are experiencing technical difficulties. Please try again later."}},N={render:()=>{const i=t=>{console.log("Registration attempt:",t),alert(`Registration attempt for: ${t.email}`)},d=()=>{console.log("Sign in clicked"),alert("Redirecting to sign in page")},m=t=>{console.log("Social login:",t),alert(`${t} registration clicked`)};return R.createElement(C,{onRegister:i,onSignIn:d,onSocialLogin:m})}},j={render:()=>{const i=()=>{alert("Account created successfully! Please check your email for verification.")};return R.createElement(C,{onRegister:i,onSignIn:()=>alert("Go to login"),onSocialLogin:d=>alert(`${d} registration`)})}},S={parameters:{viewport:{defaultViewport:"mobile1"}},args:{loading:!1}},k={parameters:{viewport:{defaultViewport:"tablet"}},args:{loading:!1}},P={parameters:{backgrounds:{default:"dark"}},args:{loading:!1},decorators:[i=>R.createElement("div",{className:"dark"},R.createElement(i))]};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: "An account with this email already exists. Please use a different email or sign in."
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: "Please correct the errors below and try again."
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: "We are experiencing technical difficulties. Please try again later."
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleRegister = (data: RegisterFormData) => {
      console.log("Registration attempt:", data);
      alert(\`Registration attempt for: \${data.email}\`);
    };
    const handleSignIn = () => {
      console.log("Sign in clicked");
      alert("Redirecting to sign in page");
    };
    const handleSocialLogin = (provider: "google" | "github" | "apple") => {
      console.log("Social login:", provider);
      alert(\`\${provider} registration clicked\`);
    };
    return React.createElement(RegisterPage, {
      onRegister: handleRegister,
      onSignIn: handleSignIn,
      onSocialLogin: handleSocialLogin
    });
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleRegister = () => {
      alert("Account created successfully! Please check your email for verification.");
    };
    return React.createElement(RegisterPage, {
      onRegister: handleRegister,
      onSignIn: () => alert("Go to login"),
      onSocialLogin: provider => alert(\`\${provider} registration\`)
    });
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  args: {
    loading: false
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "tablet"
    }
  },
  args: {
    loading: false
  }
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  args: {
    loading: false
  },
  decorators: [Story => React.createElement("div", {
    className: "dark"
  }, React.createElement(Story))]
}`,...P.parameters?.docs?.source}}};const ue=["Default","Loading","WithError","ValidationError","ServerError","InteractiveDemo","SuccessDemo","MobileView","TabletView","DarkMode"];export{P as DarkMode,f as Default,N as InteractiveDemo,w as Loading,S as MobileView,v as ServerError,j as SuccessDemo,k as TabletView,b as ValidationError,y as WithError,ue as __namedExportsOrder,ge as default};

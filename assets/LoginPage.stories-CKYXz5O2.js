import{r as y,R as j}from"./iframe-CqjzB_ih.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as i}from"./Button-BDC9PhyQ.js";import{F as M,a as N,b as k,c as S}from"./Form-B0xnGxuY.js";import{c as O}from"./utils-CBfrqCZ4.js";import{I as t}from"./Icon-BJ34t-SL.js";import{L,C as A,A as U,E as V}from"./lock-fhQ0vRKC.js";import{G as B}from"./github-35fJl3pc.js";import{M as G}from"./mail-BB8yv4th.js";import{E as $}from"./eye-zP1S89Vf.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-DLQ91j1X.js";import"./circle-check-big-Dl_l08BN.js";const E=({onLogin:r,onForgotPassword:h,onSignUp:F,onSocialLogin:f,loading:o=!1,error:v,className:P})=>{const[n,C]=y.useState({email:"",password:""}),[b,T]=y.useState(!1),[q,D]=y.useState(!1),R=a=>{a.preventDefault(),r?.(n.email,n.password)},w=(a,_)=>{C(I=>({...I,[a]:_}))};return e.jsx("div",{className:O("min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8",P),children:e.jsxs("div",{className:"max-w-md w-full space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900",children:e.jsx(t,{iconNode:L,className:"h-6 w-6 text-blue-600 dark:text-blue-400"})}),e.jsx("h2",{className:"mt-6 text-3xl font-bold text-gray-900 dark:text-white",children:"Sign in to your account"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["Or"," ",e.jsx("button",{type:"button",onClick:F,className:"font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400",children:"create a new account"})]})]}),v&&e.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md text-sm",children:v}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(i,{variant:"secondary",className:"w-full",onClick:()=>f?.("google"),disabled:o,children:[e.jsx(t,{iconNode:A,className:"mr-2 h-4 w-4"}),"Continue with Google"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs(i,{variant:"secondary",onClick:()=>f?.("github"),disabled:o,children:[e.jsx(t,{iconNode:B,className:"mr-2 h-4 w-4"}),"GitHub"]}),e.jsxs(i,{variant:"secondary",onClick:()=>f?.("apple"),disabled:o,children:[e.jsx(t,{iconNode:U,className:"mr-2 h-4 w-4"}),"Apple"]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300 dark:border-gray-600"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400",children:"Or continue with email"})})]}),e.jsxs(M,{onSubmit:R,className:"space-y-6",children:[e.jsxs(N,{children:[e.jsx(k,{htmlFor:"email",required:!0,children:"Email address"}),e.jsxs("div",{className:"relative",children:[e.jsx(S,{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Enter your email",value:n.email,onChange:a=>w("email",a.target.value),className:"pl-10"}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(t,{iconNode:G,className:"h-5 w-5 text-gray-400"})})]})]}),e.jsxs(N,{children:[e.jsx(k,{htmlFor:"password",required:!0,children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx(S,{id:"password",name:"password",type:b?"text":"password",autoComplete:"current-password",required:!0,placeholder:"Enter your password",value:n.password,onChange:a=>w("password",a.target.value),className:"pl-10 pr-10"}),e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(t,{iconNode:L,className:"h-5 w-5 text-gray-400"})}),e.jsx("button",{type:"button",className:"absolute inset-y-0 right-0 pr-3 flex items-center",onClick:()=>T(!b),children:e.jsx(t,{iconNode:b?V:$,className:"h-5 w-5 text-gray-400 hover:text-gray-600"})})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",checked:q,onChange:a=>D(a.target.checked),className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),e.jsx("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900 dark:text-gray-300",children:"Remember me"})]}),e.jsx("button",{type:"button",onClick:h,className:"text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400",children:"Forgot your password?"})]}),e.jsx(i,{type:"submit",className:"w-full",loading:o,disabled:o||!n.email||!n.password,children:o?"Signing in...":"Sign in"})]}),e.jsx("div",{className:"text-center text-sm text-gray-600 dark:text-gray-400",children:e.jsxs("p",{children:["By signing in, you agree to our"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-500 dark:text-blue-400",children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:text-blue-500 dark:text-blue-400",children:"Privacy Policy"})]})})]})})};E.__docgenInfo={description:"",methods:[],displayName:"LoginPage",props:{onLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string, password: string) => void",signature:{arguments:[{type:{name:"string"},name:"email"},{type:{name:"string"},name:"password"}],return:{name:"void"}}},description:""},onForgotPassword:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSignUp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSocialLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"(provider: 'google' | 'github' | 'apple') => void",signature:{arguments:[{type:{name:"union",raw:"'google' | 'github' | 'apple'",elements:[{name:"literal",value:"'google'"},{name:"literal",value:"'github'"},{name:"literal",value:"'apple'"}]},name:"provider"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const{fn:s}=__STORYBOOK_MODULE_TEST__,oe={title:"Pages/Authentication/LoginPage",component:E,parameters:{layout:"fullscreen",docs:{description:{component:"A complete login page with social authentication options, form validation, and responsive design."}}},tags:["autodocs"],argTypes:{loading:{control:{type:"boolean"}},error:{control:{type:"text"}}},args:{onLogin:s(),onForgotPassword:s(),onSignUp:s(),onSocialLogin:s()}},l={args:{loading:!1}},c={args:{loading:!0}},d={args:{loading:!1,error:"Invalid email or password. Please try again."}},m={args:{loading:!1,error:"Unable to connect to server. Please check your internet connection."}},p={args:{loading:!1,error:"Your account has been temporarily locked due to multiple failed login attempts. Please try again in 15 minutes."}},g={args:{onLogin:s((r,h)=>{console.log("Login attempt:",{email:r,password:h}),alert(`Login attempt with email: ${r}`)}),onForgotPassword:s(()=>{console.log("Forgot password clicked"),alert("Forgot password clicked")}),onSignUp:s(()=>{console.log("Sign up clicked"),alert("Redirecting to sign up page")}),onSocialLogin:s(r=>{console.log("Social login:",r),alert(`${r} login clicked`)})}},u={parameters:{viewport:{defaultViewport:"mobile1"}},args:{loading:!1}},x={parameters:{backgrounds:{default:"dark"}},args:{loading:!1},decorators:[r=>j.createElement("div",{className:"dark"},j.createElement(r))]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: "Invalid email or password. Please try again."
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: "Unable to connect to server. Please check your internet connection."
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    error: "Your account has been temporarily locked due to multiple failed login attempts. Please try again in 15 minutes."
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onLogin: fn((email: string, password: string) => {
      console.log("Login attempt:", {
        email,
        password
      });
      alert(\`Login attempt with email: \${email}\`);
    }),
    onForgotPassword: fn(() => {
      console.log("Forgot password clicked");
      alert("Forgot password clicked");
    }),
    onSignUp: fn(() => {
      console.log("Sign up clicked");
      alert("Redirecting to sign up page");
    }),
    onSocialLogin: fn((provider: "google" | "github" | "apple") => {
      console.log("Social login:", provider);
      alert(\`\${provider} login clicked\`);
    })
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  args: {
    loading: false
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ne=["Default","Loading","WithError","NetworkError","AccountLocked","InteractiveDemo","MobileView","DarkMode"];export{p as AccountLocked,x as DarkMode,l as Default,g as InteractiveDemo,c as Loading,u as MobileView,m as NetworkError,d as WithError,ne as __namedExportsOrder,oe as default};

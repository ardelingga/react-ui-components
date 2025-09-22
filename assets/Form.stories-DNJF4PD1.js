import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as t,a as s,b as a,c as l,d as v,e as j,f as N}from"./Form-B0xnGxuY.js";import{B as i}from"./Button-BDC9PhyQ.js";import{r as w}from"./iframe-CqjzB_ih.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./createLucideIcon-DLQ91j1X.js";import"./circle-check-big-Dl_l08BN.js";import"./preload-helper-D9Z9MdNV.js";const{fn:P}=__STORYBOOK_MODULE_TEST__,z={title:"Components/Form",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","card","minimal"]},size:{control:{type:"select"},options:["sm","md","lg","xl","full"]}},args:{onSubmit:P()}},p={render:()=>{const r=o=>{o.preventDefault(),console.log("Form submitted")};return e.jsx(t,{onSubmit:r,className:"w-96",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:"email",required:!0,children:"Email"}),e.jsx(l,{id:"email",type:"email",placeholder:"Enter your email"})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"password",required:!0,children:"Password"}),e.jsx(l,{id:"password",type:"password",placeholder:"Enter your password"})]}),e.jsx(i,{type:"submit",className:"w-full",children:"Sign In"})]})})}},h={render:()=>{const r=o=>{o.preventDefault(),console.log("Form submitted")};return e.jsxs("div",{className:"space-y-8 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Default"}),e.jsx(t,{variant:"default",onSubmit:r,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:"name1",children:"Name"}),e.jsx(l,{id:"name1",placeholder:"Enter your name"})]}),e.jsx(i,{type:"submit",children:"Submit"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Card"}),e.jsx(t,{variant:"card",onSubmit:r,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:"name2",children:"Name"}),e.jsx(l,{id:"name2",placeholder:"Enter your name"})]}),e.jsx(i,{type:"submit",children:"Submit"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Minimal"}),e.jsxs(t,{variant:"minimal",onSubmit:r,children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:"name3",children:"Name"}),e.jsx(l,{id:"name3",placeholder:"Enter your name"})]}),e.jsx(i,{type:"submit",children:"Submit"})]})]})]})}},F={render:()=>{const[r,o]=w.useState({email:"",password:"",confirmPassword:""}),[m,y]=w.useState({}),[d,S]=w.useState({}),g=n=>{n.preventDefault();const c={},u={};r.email?/\S+@\S+\.\S+/.test(r.email)?u.email="Valid email format":c.email="Please enter a valid email":c.email="Email is required",r.password?r.password.length<6?c.password="Password must be at least 6 characters":u.password="Password strength: Good":c.password="Password is required",r.password!==r.confirmPassword?c.confirmPassword="Passwords do not match":r.confirmPassword&&(u.confirmPassword="Passwords match"),y(c),S(u)};return e.jsx(t,{variant:"card",size:"md",onSubmit:g,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{error:m.email,success:d.email,children:[e.jsx(a,{htmlFor:"email",required:!0,children:"Email Address"}),e.jsx(l,{id:"email",type:"email",placeholder:"Enter your email",value:r.email,onChange:n=>o({...r,email:n.target.value}),error:!!m.email,success:!!d.email}),e.jsx(v,{children:"We'll never share your email with anyone else."})]}),e.jsxs(s,{error:m.password,success:d.password,children:[e.jsx(a,{htmlFor:"password",required:!0,children:"Password"}),e.jsx(l,{id:"password",type:"password",placeholder:"Enter your password",value:r.password,onChange:n=>o({...r,password:n.target.value}),error:!!m.password,success:!!d.password}),e.jsx(v,{children:"Must be at least 6 characters long."})]}),e.jsxs(s,{error:m.confirmPassword,success:d.confirmPassword,children:[e.jsx(a,{htmlFor:"confirmPassword",required:!0,children:"Confirm Password"}),e.jsx(l,{id:"confirmPassword",type:"password",placeholder:"Confirm your password",value:r.confirmPassword,onChange:n=>o({...r,confirmPassword:n.target.value}),error:!!m.confirmPassword,success:!!d.confirmPassword})]}),e.jsx(i,{type:"submit",className:"w-full",children:"Create Account"})]})})}},x={render:()=>{const r=o=>{o.preventDefault(),console.log("Form submitted")};return e.jsx(t,{variant:"card",size:"lg",onSubmit:r,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Personal Information"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Please fill in your personal details."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:"firstName",required:!0,children:"First Name"}),e.jsx(l,{id:"firstName",placeholder:"John"})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"lastName",required:!0,children:"Last Name"}),e.jsx(l,{id:"lastName",placeholder:"Doe"})]})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"email",required:!0,children:"Email Address"}),e.jsx(l,{id:"email",type:"email",placeholder:"john@example.com"}),e.jsx(v,{children:"We'll use this email for important notifications."})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"phone",children:"Phone Number"}),e.jsx(l,{id:"phone",type:"tel",placeholder:"+1 (555) 123-4567"})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"country",required:!0,children:"Country"}),e.jsxs(j,{id:"country",children:[e.jsx("option",{value:"",children:"Select a country"}),e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"ca",children:"Canada"}),e.jsx("option",{value:"uk",children:"United Kingdom"}),e.jsx("option",{value:"au",children:"Australia"}),e.jsx("option",{value:"de",children:"Germany"})]})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"bio",children:"Bio"}),e.jsx(N,{id:"bio",placeholder:"Tell us about yourself...",rows:4}),e.jsx(v,{children:"Maximum 500 characters."})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(i,{variant:"secondary",type:"button",className:"flex-1",children:"Cancel"}),e.jsx(i,{type:"submit",className:"flex-1",children:"Save Profile"})]})]})})}},b={render:()=>{const r=o=>{o.preventDefault(),console.log("Form submitted")};return e.jsx(t,{onSubmit:r,className:"w-96",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{variant:"inline",children:[e.jsx(a,{htmlFor:"subscribe",className:"w-32",children:"Newsletter:"}),e.jsx("input",{type:"checkbox",id:"subscribe",className:"rounded"})]}),e.jsxs(s,{variant:"inline",children:[e.jsx(a,{htmlFor:"notifications",className:"w-32",children:"Notifications:"}),e.jsxs(j,{id:"notifications",className:"flex-1",children:[e.jsx("option",{value:"all",children:"All notifications"}),e.jsx("option",{value:"important",children:"Important only"}),e.jsx("option",{value:"none",children:"None"})]})]}),e.jsxs(s,{variant:"inline",children:[e.jsx(a,{htmlFor:"language",className:"w-32",children:"Language:"}),e.jsxs(j,{id:"language",className:"flex-1",children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"es",children:"Spanish"}),e.jsx("option",{value:"fr",children:"French"})]})]}),e.jsx(i,{type:"submit",className:"w-full",children:"Save Preferences"})]})})}},f={render:()=>{const r=[{key:"sm",label:"Small"},{key:"md",label:"Medium"},{key:"lg",label:"Large"},{key:"xl",label:"Extra Large"}];return e.jsx("div",{className:"space-y-8",children:r.map(({key:o,label:m})=>e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-semibold mb-4",children:[m," Form"]}),e.jsx(t,{variant:"card",size:o,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:`name-${o}`,children:"Name"}),e.jsx(l,{id:`name-${o}`,placeholder:"Enter your name"})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:`email-${o}`,children:"Email"}),e.jsx(l,{id:`email-${o}`,type:"email",placeholder:"Enter your email"})]}),e.jsx(i,{type:"submit",children:"Submit"})]})})]},o))})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };
    return <Form onSubmit={handleSubmit} className="w-96">
        <div className="space-y-4">
          <FormField>
            <FormLabel htmlFor="email" required>Email</FormLabel>
            <FormInput id="email" type="email" placeholder="Enter your email" />
          </FormField>

          <FormField>
            <FormLabel htmlFor="password" required>Password</FormLabel>
            <FormInput id="password" type="password" placeholder="Enter your password" />
          </FormField>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </div>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };
    return <div className="space-y-8 w-96">
        {/* Default */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Default</h3>
          <Form variant="default" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <FormField>
                <FormLabel htmlFor="name1">Name</FormLabel>
                <FormInput id="name1" placeholder="Enter your name" />
              </FormField>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>

        {/* Card */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Card</h3>
          <Form variant="card" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <FormField>
                <FormLabel htmlFor="name2">Name</FormLabel>
                <FormInput id="name2" placeholder="Enter your name" />
              </FormField>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>

        {/* Minimal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Minimal</h3>
          <Form variant="minimal" onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="name3">Name</FormLabel>
              <FormInput id="name3" placeholder="Enter your name" />
            </FormField>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState<Record<string, string>>({});
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      const newSuccess: Record<string, string> = {};

      // Email validation
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      } else {
        newSuccess.email = 'Valid email format';
      }

      // Password validation
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      } else {
        newSuccess.password = 'Password strength: Good';
      }

      // Confirm password validation
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      } else if (formData.confirmPassword) {
        newSuccess.confirmPassword = 'Passwords match';
      }
      setErrors(newErrors);
      setSuccess(newSuccess);
    };
    return <Form variant="card" size="md" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <FormField error={errors.email} success={success.email}>
            <FormLabel htmlFor="email" required>Email Address</FormLabel>
            <FormInput id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} error={!!errors.email} success={!!success.email} />
            <FormHelperText>We'll never share your email with anyone else.</FormHelperText>
          </FormField>

          <FormField error={errors.password} success={success.password}>
            <FormLabel htmlFor="password" required>Password</FormLabel>
            <FormInput id="password" type="password" placeholder="Enter your password" value={formData.password} onChange={e => setFormData({
            ...formData,
            password: e.target.value
          })} error={!!errors.password} success={!!success.password} />
            <FormHelperText>Must be at least 6 characters long.</FormHelperText>
          </FormField>

          <FormField error={errors.confirmPassword} success={success.confirmPassword}>
            <FormLabel htmlFor="confirmPassword" required>Confirm Password</FormLabel>
            <FormInput id="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={e => setFormData({
            ...formData,
            confirmPassword: e.target.value
          })} error={!!errors.confirmPassword} success={!!success.confirmPassword} />
          </FormField>

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>
      </Form>;
  }
}`,...F.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };
    return <Form variant="card" size="lg" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <p className="text-sm text-gray-600 mb-4">Please fill in your personal details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField>
              <FormLabel htmlFor="firstName" required>First Name</FormLabel>
              <FormInput id="firstName" placeholder="John" />
            </FormField>

            <FormField>
              <FormLabel htmlFor="lastName" required>Last Name</FormLabel>
              <FormInput id="lastName" placeholder="Doe" />
            </FormField>
          </div>

          <FormField>
            <FormLabel htmlFor="email" required>Email Address</FormLabel>
            <FormInput id="email" type="email" placeholder="john@example.com" />
            <FormHelperText>We'll use this email for important notifications.</FormHelperText>
          </FormField>

          <FormField>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <FormInput id="phone" type="tel" placeholder="+1 (555) 123-4567" />
          </FormField>

          <FormField>
            <FormLabel htmlFor="country" required>Country</FormLabel>
            <FormSelect id="country">
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
            </FormSelect>
          </FormField>

          <FormField>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <FormTextarea id="bio" placeholder="Tell us about yourself..." rows={4} />
            <FormHelperText>Maximum 500 characters.</FormHelperText>
          </FormField>

          <div className="flex gap-4">
            <Button variant="secondary" type="button" className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Save Profile
            </Button>
          </div>
        </div>
      </Form>;
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };
    return <Form onSubmit={handleSubmit} className="w-96">
        <div className="space-y-4">
          <FormField variant="inline">
            <FormLabel htmlFor="subscribe" className="w-32">Newsletter:</FormLabel>
            <input type="checkbox" id="subscribe" className="rounded" />
          </FormField>

          <FormField variant="inline">
            <FormLabel htmlFor="notifications" className="w-32">Notifications:</FormLabel>
            <FormSelect id="notifications" className="flex-1">
              <option value="all">All notifications</option>
              <option value="important">Important only</option>
              <option value="none">None</option>
            </FormSelect>
          </FormField>

          <FormField variant="inline">
            <FormLabel htmlFor="language" className="w-32">Language:</FormLabel>
            <FormSelect id="language" className="flex-1">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </FormSelect>
          </FormField>

          <Button type="submit" className="w-full">
            Save Preferences
          </Button>
        </div>
      </Form>;
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = [{
      key: 'sm',
      label: 'Small'
    }, {
      key: 'md',
      label: 'Medium'
    }, {
      key: 'lg',
      label: 'Large'
    }, {
      key: 'xl',
      label: 'Extra Large'
    }] as const;
    return <div className="space-y-8">
        {sizes.map(({
        key,
        label
      }) => <div key={key}>
            <h3 className="text-lg font-semibold mb-4">{label} Form</h3>
            <Form variant="card" size={key}>
              <div className="space-y-4">
                <FormField>
                  <FormLabel htmlFor={\`name-\${key}\`}>Name</FormLabel>
                  <FormInput id={\`name-\${key}\`} placeholder="Enter your name" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor={\`email-\${key}\`}>Email</FormLabel>
                  <FormInput id={\`email-\${key}\`} type="email" placeholder="Enter your email" />
                </FormField>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>)}
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const R=["Default","Variants","WithValidation","CompleteForm","InlineFields","Sizes"];export{x as CompleteForm,p as Default,b as InlineFields,f as Sizes,h as Variants,F as WithValidation,R as __namedExportsOrder,z as default};

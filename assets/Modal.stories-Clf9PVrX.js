import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-CqjzB_ih.js";import{c as I}from"./index-CdJFUDDL.js";import{c as j}from"./utils-CBfrqCZ4.js";import{X as S}from"./x-8hFtbXn-.js";import{B as a}from"./Button-BDC9PhyQ.js";import{F as T,a as u,b as m,c as O,f as L}from"./Form-B0xnGxuY.js";import{C as E}from"./circle-check-big-Dl_l08BN.js";import{T as z}from"./trash-2-CkFqUoOT.js";import{T as D}from"./triangle-alert-C4woXaik.js";import{U as _}from"./user-B5J_EaWs.js";import{I as V}from"./info-BHT7a4v-.js";import"./preload-helper-D9Z9MdNV.js";import"./createLucideIcon-DLQ91j1X.js";const U=I("relative dark:bg-gray-800 rounded-lg shadow-xl max-h-[90vh] overflow-hidden bg-white",{variants:{size:{sm:"w-full max-w-sm",md:"w-full max-w-md",lg:"w-full max-w-lg",xl:"w-full max-w-xl","2xl":"w-full max-w-2xl",full:"w-full max-w-full"}},defaultVariants:{size:"md"}}),P=l.createContext(void 0);function r({className:s,size:n,isOpen:o,onClose:t,title:i,description:C,showCloseButton:N=!0,closeOnOverlayClick:B=!0,closeOnEscape:k=!0,children:q,...F}){return l.useEffect(()=>{if(!k)return;const M=w=>{w.key==="Escape"&&t()};return o&&(document.addEventListener("keydown",M),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",M),document.body.style.overflow="unset"}},[o,k,t]),o?e.jsx(P.Provider,{value:{onClose:t},children:e.jsxs("div",{className:j("fixed inset-0 z-50 flex items-center justify-center h-screen",s),...F,children:[e.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:B?t:void 0}),e.jsxs("div",{className:j(U({size:n}),""),children:[(i||N)&&e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{children:[i&&e.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:i}),C&&e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:C})]}),N&&e.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:e.jsx(S,{className:"h-6 w-6"})})]}),e.jsx("div",{className:"overflow-y-auto max-h-[calc(90vh-120px)]",children:q})]})]})}):null}function d({className:s,children:n,...o}){return e.jsx("div",{className:j("p-6",s),...o,children:n})}function c({className:s,children:n,...o}){return e.jsx("div",{className:j("p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2",s),...o,children:n})}r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl" | "2xl" | "full"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'},{name:"literal",value:'"full"'}]},description:""}}};d.__docgenInfo={description:"",methods:[],displayName:"ModalBody"};c.__docgenInfo={description:"",methods:[],displayName:"ModalFooter"};const{fn:Y}=__STORYBOOK_MODULE_TEST__,ae={title:"Components/Modal",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","2xl","full"]},isOpen:{control:{type:"boolean"}},showCloseButton:{control:{type:"boolean"}},closeOnOverlayClick:{control:{type:"boolean"}},closeOnEscape:{control:{type:"boolean"}}},args:{onClose:Y()}},p={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{isOpen:s,onClose:()=>n(!1),size:"xl",title:"Modal Title",description:"This is a basic modal example",children:[e.jsx(d,{children:e.jsx("p",{children:"This is the modal content. You can put any content here."})}),e.jsxs(c,{children:[e.jsx(a,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{onClick:()=>n(!1),children:"Confirm"})]})]})]})}},x={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"secondary",onClick:()=>n(!0),children:"Simple Modal"}),e.jsx(r,{isOpen:s,onClose:()=>n(!1),showCloseButton:!1,size:"md",children:e.jsx(d,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(E,{className:"mx-auto h-12 w-12 text-green-500 mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Success!"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Your action has been completed successfully."}),e.jsx(a,{onClick:()=>n(!1),children:"Got it"})]})})})]})}},f={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(null),o=[{key:"sm",label:"Small"},{key:"md",label:"Medium"},{key:"lg",label:"Large"},{key:"xl",label:"Extra Large"},{key:"2xl",label:"2X Large"}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:o.map(({key:t,label:i})=>e.jsxs(a,{variant:"secondary",onClick:()=>n(t),children:[i," Modal"]},t))}),o.map(({key:t,label:i})=>e.jsxs(r,{isOpen:s===t,onClose:()=>n(null),title:`${i} Modal`,description:`This is a ${i.toLowerCase()} sized modal`,size:t,children:[e.jsx(d,{children:e.jsxs("p",{children:["This modal demonstrates the ",i.toLowerCase()," size variant."]})}),e.jsx(c,{children:e.jsx(a,{variant:"secondary",onClick:()=>n(null),children:"Close"})})]},t))]})}},h={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"danger",onClick:()=>n(!0),children:"Delete Item"}),e.jsx(r,{isOpen:s,onClose:()=>n(!1),size:"sm",children:e.jsx(d,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4",children:e.jsx(z,{className:"h-6 w-6 text-red-600"})}),e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Delete Item"}),e.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx(a,{variant:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"danger",onClick:()=>n(!1),children:"Delete"})]})]})})})]})}},v={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"warning",onClick:()=>n(!0),children:"Show Warning"}),e.jsx(r,{isOpen:s,onClose:()=>n(!1),size:"md",showCloseButton:!1,children:e.jsx(d,{children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(D,{className:"h-6 w-6 text-yellow-600"})}),e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Unsaved Changes"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-500",children:"You have unsaved changes. Are you sure you want to leave this page?"})}),e.jsxs("div",{className:"mt-4 flex gap-2",children:[e.jsx(a,{variant:"warning",onClick:()=>n(!1),children:"Leave Page"}),e.jsx(a,{variant:"secondary",onClick:()=>n(!1),children:"Stay"})]})]})]})})})]})}},g={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(!1),o=t=>{t.preventDefault(),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(a,{onClick:()=>n(!0),children:[e.jsx(_,{className:"mr-2 h-4 w-4"}),"Edit Profile"]}),e.jsx(r,{isOpen:s,onClose:()=>n(!1),title:"Edit Profile",description:"Make changes to your profile here",size:"lg",children:e.jsxs(T,{onSubmit:o,children:[e.jsx(d,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(u,{children:[e.jsx(m,{htmlFor:"firstName",required:!0,children:"First Name"}),e.jsx(O,{id:"firstName",placeholder:"Enter your first name",defaultValue:"John"})]}),e.jsxs(u,{children:[e.jsx(m,{htmlFor:"lastName",required:!0,children:"Last Name"}),e.jsx(O,{id:"lastName",placeholder:"Enter your last name",defaultValue:"Doe"})]}),e.jsxs(u,{children:[e.jsx(m,{htmlFor:"email",required:!0,children:"Email"}),e.jsx(O,{id:"email",type:"email",placeholder:"Enter your email",defaultValue:"john@example.com"})]}),e.jsxs(u,{children:[e.jsx(m,{htmlFor:"bio",children:"Bio"}),e.jsx(L,{id:"bio",placeholder:"Tell us about yourself",defaultValue:"Software developer passionate about creating amazing user experiences."})]})]})}),e.jsxs(c,{children:[e.jsx(a,{variant:"secondary",type:"button",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{type:"submit",children:"Save Changes"})]})]})})]})}},y={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"secondary",onClick:()=>n(!0),children:"Long Content Modal"}),e.jsxs(r,{isOpen:s,onClose:()=>n(!1),title:"Terms and Conditions",description:"Please read our terms and conditions carefully",children:[e.jsx(d,{children:e.jsxs("div",{className:"space-y-4 text-sm text-gray-600",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}),e.jsx("p",{children:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}),e.jsx("p",{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."})]})}),e.jsxs(c,{children:[e.jsx(a,{variant:"secondary",onClick:()=>n(!1),children:"Decline"}),e.jsx(a,{onClick:()=>n(!1),children:"Accept"})]})]})]})}},b={args:{isOpen:!1},render:()=>{const[s,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"info",onClick:()=>n(!0),children:"Non-dismissible Modal"}),e.jsxs(r,{isOpen:s,onClose:()=>n(!1),title:"Important Notice",description:"This modal cannot be dismissed by clicking outside or pressing escape",closeOnOverlayClick:!1,closeOnEscape:!1,showCloseButton:!1,children:[e.jsx(d,{children:e.jsxs("div",{className:"flex",children:[e.jsx(V,{className:"h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"}),e.jsx("div",{children:e.jsx("p",{className:"text-sm text-gray-600",children:"This is a non-dismissible modal. You must click one of the buttons below to close it. This is useful for critical actions that require user confirmation."})})]})}),e.jsx(c,{children:e.jsx(a,{onClick:()=>n(!1),children:"I Understand"})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={"xl"} title="Modal Title" description="This is a basic modal example">
          <ModalBody>
            <p>This is the modal content. You can put any content here.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>Simple Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} showCloseButton={false} size={"md"}>
          <ModalBody>
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Success!</h3>
              <p className="text-gray-600 mb-4">Your action has been completed successfully.</p>
              <Button onClick={() => setIsOpen(false)}>
                Got it
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
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
    }, {
      key: '2xl',
      label: '2X Large'
    }] as const;
    return <>
        <div className="flex flex-row flex-wrap gap-2">
          {sizes.map(({
          key,
          label
        }) => <Button key={key} variant="secondary" onClick={() => setOpenModal(key)}>
              {label} Modal
            </Button>)}
        </div>

        {sizes.map(({
        key,
        label
      }) => <Modal key={key} isOpen={openModal === key} onClose={() => setOpenModal(null)} title={\`\${label} Modal\`} description={\`This is a \${label.toLowerCase()} sized modal\`} size={key}>
            <ModalBody>
              <p>This modal demonstrates the {label.toLowerCase()} size variant.</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpenModal(null)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>)}
      </>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalBody>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Item</h3>
              <p className="text-sm text-gray-500 mb-4">
                Are you sure you want to delete this item? This action cannot be undone.
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={() => setIsOpen(false)}>
                  Delete
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button variant="warning" onClick={() => setIsOpen(true)}>
          Show Warning
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md" showCloseButton={false}>
          <ModalBody>
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Unsaved Changes
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You have unsaved changes. Are you sure you want to leave this page?
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="warning" onClick={() => setIsOpen(false)}>
                    Leave Page
                  </Button>
                  <Button variant="secondary" onClick={() => setIsOpen(false)}>
                    Stay
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsOpen(false);
    };
    return <>
        <Button onClick={() => setIsOpen(true)}>
          <User className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Edit Profile" description="Make changes to your profile here" size="lg">
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <div className="space-y-4">
                <FormField>
                  <FormLabel htmlFor="firstName" required>First Name</FormLabel>
                  <FormInput id="firstName" placeholder="Enter your first name" defaultValue="John" />
                </FormField>

                <FormField>
                  <FormLabel htmlFor="lastName" required>Last Name</FormLabel>
                  <FormInput id="lastName" placeholder="Enter your last name" defaultValue="Doe" />
                </FormField>

                <FormField>
                  <FormLabel htmlFor="email" required>Email</FormLabel>
                  <FormInput id="email" type="email" placeholder="Enter your email" defaultValue="john@example.com" />
                </FormField>

                <FormField>
                  <FormLabel htmlFor="bio">Bio</FormLabel>
                  <FormTextarea id="bio" placeholder="Tell us about yourself" defaultValue="Software developer passionate about creating amazing user experiences." />
                </FormField>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" type="button" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Save Changes
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </>;
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          Long Content Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms and Conditions" description="Please read our terms and conditions carefully">
          <ModalBody>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem.
              </p>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button variant="info" onClick={() => setIsOpen(true)}>
          Non-dismissible Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Important Notice" description="This modal cannot be dismissed by clicking outside or pressing escape" closeOnOverlayClick={false} closeOnEscape={false} showCloseButton={false}>
          <ModalBody>
            <div className="flex">
              <Info className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">
                  This is a non-dismissible modal. You must click one of the buttons below to close it.
                  This is useful for critical actions that require user confirmation.
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>
              I Understand
            </Button>
          </ModalFooter>
        </Modal>
      </>;
  }
}`,...b.parameters?.docs?.source}}};const te=["Default","Simple","Sizes","Confirmation","Warning","FormModal","LongContent","NonDismissible"];export{h as Confirmation,p as Default,g as FormModal,y as LongContent,b as NonDismissible,x as Simple,f as Sizes,v as Warning,te as __namedExportsOrder,ae as default};

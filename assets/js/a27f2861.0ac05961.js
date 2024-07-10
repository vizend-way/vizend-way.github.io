"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[7124],{2096:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var s=i(4848),n=i(8453);const a={sidebar_position:8},d="Modification of Entity",o={id:"studio-guide/entityModify_eng",title:"Modification of Entity",description:"Modify Entity",source:"@site/docs/studio-guide/entityModify_eng.md",sourceDirName:"studio-guide",slug:"/studio-guide/entityModify_eng",permalink:"/docs/studio-guide/entityModify_eng",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/studio-guide/entityModify_eng.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Entity \uc218\uc815",permalink:"/docs/studio-guide/entityModify_kor"},next:{title:"VoidEntity \uc0ac\uc6a9 \ubc29\ubc95",permalink:"/docs/studio-guide/voidEntity_kor"}},c={},r=[{value:"Modify Entity",id:"modify-entity",level:2},{value:"Add and Modify ValueObject",id:"add-and-modify-valueobject",level:2},{value:"Add and Modify ValueGroup",id:"add-and-modify-valuegroup",level:2}];function h(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"modification-of-entity",children:"Modification of Entity"}),"\n",(0,s.jsx)(t.h2,{id:"modify-entity",children:"Modify Entity"}),"\n",(0,s.jsx)(t.p,{children:"This chapter will explain how to add attributes to the Bar entity created in the previous chapter and modify the code."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img.png",src:i(8289).A+"",width:"1080",height:"894"}),"\nAfter adding the necessary attributes to the Bar class, you can define the required ValueObject and Enum types for these attributes. These classes are typically stored in the vo package. Define the Address ValueObject type and the BarStatus Enum type within the vo package.If @FieldImmutable is specified, it means that the generated code cannot be modified."]}),"\n",(0,s.jsx)(t.p,{children:"Code generation can be affected by setting certain specified annotations for attributes."}),"\n",(0,s.jsx)(t.p,{children:"If @FieldImmutable is specified for an attribute, it means an attribute cannot be modified. Therefore, this attribute code won\u2019t appear in the modifyAttribute method."}),"\n",(0,s.jsx)(t.p,{children:"If @FieldSourceId is specified for an attribute, this attribute refers to the ID of another entity."}),"\n",(0,s.jsx)(t.h2,{id:"add-and-modify-valueobject",children:"Add and Modify ValueObject"}),"\n",(0,s.jsxs)(t.p,{children:["foo-aggregate -> aggregate.entity package -> quick right click -> New -> Click \u2018Java Class\u2019.\n",(0,s.jsx)(t.img,{alt:"img_1.png",src:i(3377).A+"",width:"1926",height:"1016"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img_2.png",src:i(8487).A+"",width:"664",height:"340"})}),"\n",(0,s.jsx)(t.p,{children:"The vo package and the Address class will be generated simultaneously."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_3.png",src:i(3631).A+"",width:"1734",height:"756"}),"\nThe vo package and the Address class have been generated."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_4.png",src:i(8818).A+"",width:"1046",height:"1622"}),"\nHere's a sample code snippet for the Address value object class. Developers can modify it as needed."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_5.png",src:i(8372).A+"",width:"1648",height:"654"}),"\nAfter generating the above class, re-import the Address class in Entity."]}),"\n",(0,s.jsx)(t.p,{children:"The vo related to BarStatus needs to be generated as well."}),"\n",(0,s.jsxs)(t.p,{children:["foo-aggregate -> aggregate.entity package -> quick right click -> New -> Click \u2018Java Class\u2019.\n",(0,s.jsx)(t.img,{alt:"img_6.png",src:i(9543).A+"",width:"1988",height:"868"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img_7.png",src:i(6837).A+"",width:"658",height:"340"})}),"\n",(0,s.jsx)(t.p,{children:"Select the Enum type to generate the BarStatus."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_8.png",src:i(4010).A+"",width:"1738",height:"760"}),"\nBarStatus enum has been generated in vo package."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_9.png",src:i(929).A+"",width:"962",height:"338"}),"\nHere's a sample code snippet for the BarStatus. Developers can modify it as needed."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_10.png",src:i(8227).A+"",width:"1502",height:"710"}),"\nAfter generating the above class, re-import the BarStatus in Entity."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_11.png",src:i(6220).A+"",width:"1040",height:"902"}),"\nThe attributes of the Bar class have all been entered/updated. Developers can modify and add other attributes as needed."]}),"\n",(0,s.jsx)(t.p,{children:"After entering the above attributes, the contents of the modifyAttribute() method can be updated by using Visual Studio."}),"\n",(0,s.jsxs)(t.p,{children:["modifyAttributes -> quick right click -> Vizend Studio -> click the \u2018Update modifyAttbutes()...\u2019.\n",(0,s.jsx)(t.img,{alt:"img_12.png",src:i(4344).A+"",width:"1710",height:"1644"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_13.png",src:i(3420).A+"",width:"1488",height:"992"}),"\nThe modifyAttribute() method has been updated based on the entered attributes."]}),"\n",(0,s.jsx)(t.p,{children:"If the property is specified as @FieldImmutable, it means that the attribute cannot be modified, so there will be no updated code in the modifyAttribute() method."}),"\n",(0,s.jsx)(t.p,{children:"If the attribute is specified as @FieldSourceId, it means that the attribute is mutable,\nso the attribute code is updated in the modifyAttribute() method."}),"\n",(0,s.jsx)(t.p,{children:"The Address, which is a ValueObject, is transformed in JSON format."}),"\n",(0,s.jsx)(t.p,{children:"BarStatus is defined as an enum, so the values of this enum are converted to enum format using the valueOf() method."}),"\n",(0,s.jsxs)(t.p,{children:["bar -> quick right click -> Vizend Studio -> Click the \u2018Gen the field enum\u2019.\n",(0,s.jsx)(t.img,{alt:"img_14.png",src:i(7823).A+"",width:"1452",height:"752"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_15.png",src:i(6245).A+"",width:"886",height:"1054"}),"\nCreating a Field enum can prevent typos when defining the attribute name as String type outside of the Entity."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img_16.png",src:i(703).A+"",width:"920",height:"332"})}),"\n",(0,s.jsx)(t.p,{children:"From this example, it\u2019s difficult to notice the error while typos are not recognized as an error."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img_17.png",src:i(6509).A+"",width:"900",height:"294"})}),"\n",(0,s.jsx)(t.p,{children:"It\u2019s easy to detect typos by using BarField enum."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img_18.png",src:i(8591).A+"",width:"886",height:"304"})}),"\n",(0,s.jsx)(t.p,{children:"Here is an example code using the BarField enum. This allows you to select the correct field and prevent typos."}),"\n",(0,s.jsx)(t.h2,{id:"add-and-modify-valuegroup",children:"Add and Modify ValueGroup"}),"\n",(0,s.jsxs)(t.p,{children:["foo-aggregate -> vo package -> quick right click -> New -> Click the Java Class.\n",(0,s.jsx)(t.img,{alt:"img_19.png",src:i(6153).A+"",width:"1898",height:"1098"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"img_20.png",src:i(5488).A+"",width:"656",height:"342"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_21.png",src:i(3175).A+"",width:"1916",height:"1710"}),"\nA sample implementing ValueGroup in the EmailGroup class has been created. Creating method is the same as for ValueObject."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"img_22.png",src:i(5185).A+"",width:"1006",height:"1010"}),"\nAfter creating the ValueGroup class, add the relevant attributes to the Bar class."]})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5185:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-addVg-6211e22d6bd2fc51fca98c31518f35dc.png"},3420:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-attributes-modified-e7c5160ac7221b9f18c37234b871efcf.png"},9543:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-create-enum-6a09ac5ae0732157da15b25566a66fc7.png"},6153:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-create-vg-39bc829ec5475c525331fa63e8189097.png"},3377:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-create-vo-15931b1a51103b13702cb0614f7764cb.png"},5488:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-emailGroup-67cbdef47c574e296a9b2786eab317f2.png"},8289:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-enter-attributes-963a8ce296597dd451ae1f308d6f274f.png"},6220:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-entity-completed-078b7a5aef912068566d09e7a121f632.png"},6837:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-enum-class-7ecf05c170ce60a99c3f29af2db152e9.png"},929:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-enum-created-68f32c086dec9039a1137b0d9219a314.png"},4010:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-enum-75120a699c0a7564224306a0589021f6.png"},703:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-errorOfFieldname-79fe57a4f6dd8bd89bf3d7a3047ed034.png"},6509:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-errorOfFieldname2-4c3020cd07ceadb9dd616fc7aa31620c.png"},6245:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-fieldenum-created-b6a8f823b2d6607458101fb346bd8385.png"},7823:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-gen-fieldenum-4715ef3217b8d3e2520fb76cc6786aef.png"},8227:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-import-enum-a5afde8e572294439e09cf2085a32ce5.png"},8372:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-import-vo-035481a1cd7f87fe6186a9484e8ef141.png"},4344:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-modifyAttributes-4e8bd176c63f8602c48b437f70598898.png"},8591:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-usefieldname-da091cabd4821a9ee68aefd2d8c9ab17.png"},3175:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-vg-created-448b6650ed17a4af0c844a7fd7aab92f.png"},8487:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-vo-class-c95ac7a1e97f24f7f82bcef51d54ccd2.png"},3631:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-vo-created-49425a11ff29a1300d20373ac3357db0.png"},8818:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/emo-vo-sampleCode-6ed7572dc4c49b33f928a98586025ab9.png"},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var s=i(6540);const n={},a=s.createContext(n);function d(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
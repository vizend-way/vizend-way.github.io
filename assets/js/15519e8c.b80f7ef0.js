"use strict";(self.webpackChunkdocs_github_io=self.webpackChunkdocs_github_io||[]).push([[2686],{5731:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=i(4848),t=i(8453);const r={sidebar_position:1},o="SSO Login",c={id:"checkpoint-guide/sso-login",title:"SSO Login",description:"\uc774 \ubb38\uc11c\ub294 Checkpoint\ub97c \uc774\uc6a9\ud558\uc5ec SSO User\ub97c \ub4f1\ub85d\ud558\uace0, SSO Login\uc744 \uc774\uc6a9\ud558\uc5ec \ud1a0\ud070\uc744 \ubc1c\uae09\ubc1b\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/docs/checkpoint-guide/sso-login.md",sourceDirName:"checkpoint-guide",slug:"/checkpoint-guide/sso-login",permalink:"/docs/checkpoint-guide/sso-login",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/vizend/docs/-/edit/main/docs/checkpoint-guide/sso-login.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Checkpoint Guide",permalink:"/docs/category/checkpoint-guide"},next:{title:"Service User",permalink:"/docs/checkpoint-guide/service-user"}},l={},a=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"SSO \uc0ac\uc6a9\uc790 \ub4f1\ub85d API",id:"sso-\uc0ac\uc6a9\uc790-\ub4f1\ub85d-api",level:2},{value:"Login",id:"login",level:2},{value:"1. RSA Key Pair \uc0dd\uc131 API",id:"1-rsa-key-pair-\uc0dd\uc131-api",level:3},{value:"2. Checkpoint Yaml \uc124\uc815",id:"2-checkpoint-yaml-\uc124\uc815",level:3},{value:"3. SSO Login (Backend)",id:"3-sso-login-backend",level:3},{value:"4. SSO Login (Frontend)",id:"4-sso-login-frontend",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sso-login",children:"SSO Login"}),"\n",(0,s.jsx)(n.p,{children:"\uc774 \ubb38\uc11c\ub294 Checkpoint\ub97c \uc774\uc6a9\ud558\uc5ec SSO User\ub97c \ub4f1\ub85d\ud558\uace0, SSO Login\uc744 \uc774\uc6a9\ud558\uc5ec \ud1a0\ud070\uc744 \ubc1c\uae09\ubc1b\ub294 \ubc29\ubc95\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"\uac1c\uc694",children:"\uac1c\uc694"}),"\n",(0,s.jsx)(n.p,{children:"SSO \uc778\uc99d\uc744 \uc774\uc6a9\ud558\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\uc790 \uc778\uc99d\uc740 SSO \ub2e8\uacc4\uc5d0\uc11c \uc644\ub8cc\ub418\uc5c8\ub2e4\uace0 \uac00\uc815\ud558\uace0, checkpoint \uc5d0\uc11c\ub294 username \ub9cc\uc744 \uc774\uc6a9\ud558\uc5ec\n\ud1a0\ud070\uc744 \ubc1c\uae09\ubc1b\uac8c \ub429\ub2c8\ub2e4.\nUser \ub4f1\ub85d \uc2dc \ube44\ubc00\ubc88\ud638\ub294 TinyUUID\ub85c \uc784\uc758 \uc124\uc815\ub418\uba70(\uc77c\ubc18 \ub85c\uadf8\uc778 \ubc29\uc9c0), \ub85c\uadf8\uc778 \uc2dc\uc5d0\ub294 \uc554\ud638\ud654\ub41c username\uc73c\ub85c Token \ubc1c\uae09\uc744 \uc694\uccad\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"sso-\uc0ac\uc6a9\uc790-\ub4f1\ub85d-api",children:"SSO \uc0ac\uc6a9\uc790 \ub4f1\ub85d API"}),"\n",(0,s.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790 \ub4f1\ub85d\uc744 \uc704\ud55c API\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"}),": ",(0,s.jsx)(n.code,{children:"/restful/citizen-users?sso=true"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"BODY"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "pavilionId": "NT:1",\n  "username": "clienttest",\n  "email": "clienttest@text.com",\n  "displayName": "Client Test",\n  "additionalInformation": {}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RESPONSE"}),(0,s.jsx)(n.br,{}),"\n","\ub4f1\ub85d\ub41c Citizen\uc758 id\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "2@NT:1"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CLIENT"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import io.vizend.checkpoint.client.citizenuser.CitizenUserClient;\nimport io.vizend.checkpoint.client.citizenuser.sdo.RegisterSsoCitizenUserRequest;\n\npublic String registerSsoCitizenUser(String pavilionId, String username, String email, String displayName, Map<String, Object> additionalInformation) {\n  // \n  RegisterSsoCitizenUserRequest registerSsoCitizenUserRequest = RegisterSsoCitizenUserRequest.builder()\n          .pavilionId(pavilionId)\n          .username(username)\n          .email(email)\n          .displayName(displayName)\n          .additionalInformation(additionalInformation)\n          .build();\n  return citizenUserClient.registerSsoCitizenUser(registerSsoCitizenUserRequest);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,s.jsx)(n.h3,{id:"1-rsa-key-pair-\uc0dd\uc131-api",children:"1. RSA Key Pair \uc0dd\uc131 API"}),"\n",(0,s.jsxs)(n.p,{children:["Checkpoint API \ud639\uc740 \ub2e4\ub978 RSA Key Util\uc744 \uc0ac\uc6a9\ud558\uc5ec Key Pair\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,s.jsx)(n.br,{}),"\n","(ex. ",(0,s.jsx)(n.a,{href:"https://cryptotools.net/rsagen",children:"https://cryptotools.net/rsagen"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"POST"}),": ",(0,s.jsx)(n.code,{children:"/feature/citizenuser/generate-rsa-key-pair/query"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"BODY"}),(0,s.jsx)(n.br,{}),"\n","KeySize\ub294 Optional \uc774\uba70 \uc9c0\uc815\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 512\uac00 \uae30\ubcf8\uc73c\ub85c \uc124\uc815\ub429\ub2c8\ub2e4.\n\uc124\uc815\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 512\ubcf4\ub2e4 \ud06c\uac70\ub098 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "keySize": 512\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RESPONSE"}),(0,s.jsx)(n.br,{}),"\n","\uc0dd\uc131\ub41c key Pair\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "queryResult": {\n    "privateKey": "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAzXKOLymk30HCqHAy2qYlfvD40MKg7cn3QWVttXqaZY+Yduw1F2d3y+D2EbrJKM208sgf3s8xWGLEV5OeWGkdUwIDAQABAkABDnK+uVcYsszect1AFJSix3hwEmAjeONlmbDruvqqRQVlPAa6TjjjywGzSYW1GvcSWIs7xeed/N+xmhW2ByfxAiEA1PqIseYCUP4FFX7YDslWO4AyhM9VIQTmSjDv8h0zJUsCIQD28pKjmwYMNH1Of7m2GRGMM9N01mYEQOHAb7u+YIjLGQIgQxj3Dczf9/I/WclPekEWCMLXp53GPRPVFZSbU5S9c0cCIA8tgY3ErW56m2kDuKpUiBuR4+E+fC6uvjFRrLxauo2hAiEAwg2tvOHrz6eiKde8Hhr0mFTYCPpqgAiJyInQstG2CEg=",\n    "publicKey": "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAM1yji8ppN9BwqhwMtqmJX7w+NDCoO3J90FlbbV6mmWPmHbsNRdnd8vg9hG6ySjNtPLIH97PMVhixFeTnlhpHVMCAwEAAQ=="\n  },\n  "offset": {\n    "offset": 0,\n    "limit": 2147483647,\n    "totalCount": 0,\n    "previous": false,\n    "next": false,\n    "sortingField": null,\n    "sortDirection": "ASCENDING"\n  },\n  "requestFailed": false,\n  "failureMessage": null\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-checkpoint-yaml-\uc124\uc815",children:"2. Checkpoint Yaml \uc124\uc815"}),"\n",(0,s.jsx)(n.p,{children:"sso.enabled\ub97c true\ub85c \uc124\uc815\ud558\uace0 \uc0dd\uc131\ub41c private-key\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"vizend:\n  checkpoint:\n    sso:\n      enabled: 'true'\n      private-key: |\n        MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAzXKOLymk\n        30HCqHAy2qYlfvD40MKg7cn3QWVttXqaZY+Yduw1F2d3y+D2EbrJKM20\n        8sgf3s8xWGLEV5OeWGkdUwIDAQABAkABDnK+uVcYsszect1AFJSix3hw\n        EmAjeONlmbDruvqqRQVlPAa6TjjjywGzSYW1GvcSWIs7xeed/N+xmhW2\n        ByfxAiEA1PqIseYCUP4FFX7YDslWO4AyhM9VIQTmSjDv8h0zJUsCIQD2\n        8pKjmwYMNH1Of7m2GRGMM9N01mYEQOHAb7u+YIjLGQIgQxj3Dczf9/I/\n        WclPekEWCMLXp53GPRPVFZSbU5S9c0cCIA8tgY3ErW56m2kDuKpUiBuR\n        4+E+fC6uvjFRrLxauo2hAiEAwg2tvOHrz6eiKde8Hhr0mFTYCPpqgAiJ\n        yInQstG2CEg=\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-sso-login-backend",children:"3. SSO Login (Backend)"}),"\n",(0,s.jsx)(n.p,{children:"Backend \uc5d0\uc11c CitizenUserClient \ub85c \ub85c\uadf8\uc778\uc744 \ud558\ub294 \uacbd\uc6b0 Public Key\ub97c \uc774\uc6a9\ud558\uc5ec username\uc744 \uc554\ud638\ud654\ud55c \ud6c4\nCitizenUserClient \ub97c \uc774\uc6a9\ud558\uc5ec token \uc744 \ud68d\ub4dd\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"application.yaml"}),(0,s.jsx)(n.br,{}),"\n","publicKey\uc640 Basic token \uc744 \uc138\ud305\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Basic token\uc740 vizend.prologue.internal-auth.client\uc758 id\uc640 secret\uc744 \uc870\ud569\ud55c \ubb38\uc790\uc5f4\uc758 Base64 \uc778\ucf54\ub529 \ubb38\uc790\uc5f4\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",(0,s.jsx)(n.br,{}),"\n","ex) id: nextree, secret",":nextree1234"," \uc778 \uacbd\uc6b0",(0,s.jsx)(n.br,{}),"\n","nextree",":nextree1234"," \uc778\ucf54\ub529 \u21d2 bmV4dHJlZTpuZXh0cmVlMTIzNA=="]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"vizend:\n  checkpoint:\n    client:\n      rest:\n        base-url: http://localhost:9002\n        request-timeout-seconds: 600\nclient-test:\n  sso:\n    token:\n      dml6ZW5kOnZpemVuZHNlY3JldA==\n    public-key: |\n      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAM1yji8ppN9BwqhwMtqm\n      JX7w+NDCoO3J90FlbbV6mmWPmHbsNRdnd8vg9hG6ySjNtPLIH97P\n      MVhixFeTnlhpHVMCAwEAAQ==\n"})}),"\n",(0,s.jsx)(n.p,{children:"accent\uc758 RsaEncryptor\ub97c \uc774\uc6a9\ud558\uc5ec username\uc744 \uc554\ud638\ud654\ud558\uc5ec CitizenUserClient\uc758 ssoLogin \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 token\uc744 \ud68d\ub4dd\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'\npackage io.vizend.test.feature.checkpoint.flow;\n\nimport io.vizend.accent.util.crypto.RsaEncryptor;\nimport io.vizend.checkpoint.client.citizenuser.CitizenUserClient;\n\npublic class CheckpointFlow {\n    //\n    private final CitizenUserClient citizenUserClient; // \n    @Value("${client-test.sso.public-key}")\n    private String publicKey;\n    @Value("${client-test.sso.token}")\n    private String ssoToken;\n\n    public String ssoLogin(String pavilionId, String username) {\n        // \n        String encryptedUsername;\n        try {\n            encryptedUsername = RsaEncryptor.encrypt(username, publicKey.replaceAll("\\\\s", ""));\n        } catch (Exception e) {\n            throw new RuntimeException(e);\n        }\n        log.info("encryptedUsername: {}", encryptedUsername);\n        SsoAuthenticationToken ssoAuthenticationToken = citizenUserClient.ssoLogin(pavilionId, encryptedUsername, ssoToken);\n        log.info("token ==> {}", ssoAuthenticationToken.toPrettyJson());\n        return ssoAuthenticationToken.getAccessToken();\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-sso-login-frontend",children:"4. SSO Login (Frontend)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Work in progress"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
# fatpaper-login

用户登陆/注册的 web 页面

#### 目录结构
```
├─📁 public/------------ # 资源
│ └─📄 logo.ico
└─📁 src/
  ├─📁 assets/
  │ ├─📁 font/
  │ │ └─📄 font.css----- # 字体引入
  │ ├─📄 style.scss----- # 全局root CSS
  │ └─📄 ui.scss-------- # 全局UI样式 CSS
  ├─📁 components/
  │ ├─📁 background/---- # 背景组件
  │ └─📁 fp-message/---- # message组件
  ├─📁 utils/
  │ ├─📁 api/----------- # 请求
  │ │ └─📄 index.ts
  │ ├─📁 axios/--------- # axios配置
  │ │ └─📄 index.ts
  │ └─📄 index.ts------- # 工具函数集
  ├─📁 view/
  │ └─📁 login/--------- # 登陆页面
  │   └─📄 login.vue
  ├─📄 App.vue---------- # app.vue
  ├─📄 bace.ts---------- # 配置数据桥梁
  └─📄 main.ts---------- # main.ts
```

#### 运行

`yarn dev`

#### 打包

`yarn build`
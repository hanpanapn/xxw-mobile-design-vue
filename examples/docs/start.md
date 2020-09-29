
# 快速上手

----

## 使用前准备

> 在使用之前，推荐学习 `Vue` 和 `ES2015` ，并正确配置 `Node.js` v6.x 或以上版本
> 你还需要掌握`Vant`的使用

`xxw-mobile-design-vue` 基于 `Vant` 2.10.x 版本开发，所以有必要了解以下基础知识：
- [Vant 官网](https://vant-contrib.gitee.io/vant/#/zh-CN/)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

 
 
### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import xxwMobileDesign-vue from 'xxw-mobile-design-vue' // 引入组件库
import '../node_modules/xxw-mobile-design-vue/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(xxwMobileDesign)
```

### 单个组件按需使用

```js
import { WButton } from 'xxw-mobile-design-vue'

export default {
  components: {
    WButton
  }
}
```

在模板中，用 `<w-button></w-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <w-button>这是一个按钮</w-button>
  </div>
</template>
```

## 自定义主题

`xxw-mobile-design-vue` 各个组件的样式变量都存放在 `xxw-mobile-design-vue/packages/theme-defualt/common/var.css` 文件中。用户可根据实际需要，自定义组件的样式

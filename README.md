## fis3-preprocessor-noob-replace
fis3标准化前处理文本替换插件

由[noob-lab](https://github.com/Noob-Lab) 参考 [fis3-deploy-replace](https://github.com/fex-team/fis3-deploy-replace) 出品

## 安装
```bash
[sudo] npm i [-g] fis3-preprocessor-noob-replace
```
## 使用

```js
fis.match('**', {
    preprocessor:
        fis.plugin('noob-replace', {
            from: 'from/string',
            to: 'to/string'
        })
})
```

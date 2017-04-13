/**
 * noob-lab
 */
'use strict'
/**
 * Compile 阶段插件接口
 * @param  {string} content     文件内容
 * @param  {File}   file        fis 的 File 对象 [fis3/lib/file.js]
 * @param  {object} settings    插件配置属性
 * @return {string}             处理后的文件内容
 */
module.exports = function (content, file, settings) {
 
  if (!settings.from || typeof settings.to === 'undefined') {
    fis.log.error('Invalid, please set option: {from: `reg/string` to: `function/string` }');
  }

  if(fis.util.is(settings.from,'String')){
    settings.from = new RegExp(fis.util.escapeReg(settings.from), 'g');
  }
  if(!fis.util.is(settings.from, 'RegExp')){
    fis.log.error('fis3-prepackager-noob-replace: settings.from must a string or RegExp ')
  }

  return content.replace(settings.from, settings.to);
};
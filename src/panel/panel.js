goog.provide('anytest.panel');
goog.require('anytest.panel.interactive');
goog.require('anytest.panel.resize');
/**
 @namespace
 @ignore
 @name anytest.panel
 */


/**
 * Включает панель слева от теста.
 *
 * Использованние:
 *  - ('resize', 'chart')
 *  если нужна ресайз панель, то указываем первым параметром очевидное. в качестве второго параметра принимается
 *  строка(!) переменной объекта ресайза. Эта переменная должна быть глобальной(!) (спросить если не понимаешь).
 *  по дефолту второй параметр 'chart'.
 *
 *  - ('interactive')
 * @param {string} type
 * @return {*}
 */
anytest.panel.create = function(type) {
  var _div = anytest.utils.createDiv('sidePanel', true);
  var content = '';
  switch (type) {
    case 'resize':
      content = anytest.panel.resize.getHTMLContent.apply(anytest, arguments);
      break;
    case 'interactive':
      content = '<b>Interactive Panel</b><hr/>' +
          '<input type="button" value="Reset Layer" onclick="anytest.panel.interactive.reset()"><br/>' +
          '<input type="button" value="Toggle basic layer" onclick="anytest.panel.interactive.toggleBasicLayer()">' +
          '<input type="button" value="Remove last point" onclick="anytest.panel.interactive.removeLastPoint()">' +
          '<br/><br/><b>Coordinates log:</b><br/>' +
          '<textarea id="interactiveCoordinatesLogger" rows="10" style="width: 100%"></textarea>';

      anytest.panel.interactive.basicLayer = anytest.stage['layer']();
      anytest.stage['rect'](0, 0, anytest.stage['width'](), anytest.stage['height']())
          .fill('blue .05')
          .stroke('none')
          .parent(anytest.panel.interactive.basicLayer);
      anytest.panel.interactive.reset();
      break;
    default:
      content = null;
      break;
  }
  if (content) {
    _div.innerHTML = content;
    _div.style.display = 'block';
  }

  return window['anytest'];
};

/**
 * Включает панель слева от теста.<br/>
 * Использованние:<br/>
 *  - ('resize', 'chart')<br/>
 *  если нужна ресайз панель, то указываем первым параметром очевидное. в качестве второго параметра принимается
 *  строка(!) переменной объекта ресайза. Эта переменная должна быть глобальной(!) (спросить если не понимаешь).
 *  по дефолту второй параметр 'chart'.<br/>
 * <br/>
 *  - ('interactive')<br/>
 * @type {Function}
 */
anytest.createPanel = anytest.panel.create;

goog.exportSymbol('anytest.createPanel', anytest.panel.create);

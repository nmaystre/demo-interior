// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"quiz.js":[function(require,module,exports) {
var _this = this;

// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var allQuestions = [{
  id: 1,
  questionString: "Какое из нижеперечисленных утверждений характеризует вас наиболее точно?",
  choices: [{
    name: "q1",
    text: "Хочется, чтобы в каждой комнате был какой-то элемент неожиданности (вау-эффект), и мне нравятся интересные сочетания несовместимых вещей",
    value: "Фьюжн"
  }, {
    name: "q1",
    text: "Я — приверженец чистых линий, минимализма и природной цветовой гаммы",
    value: "Современный"
  }, {
    name: "q1",
    text: "Мне нравится, когда в интерьере присутствует много натурального дерева",
    value: "Рустика"
  }, {
    name: "q1",
    text: "Отдаю предпочтение простой лаконичной мебели без всяких украшательств",
    value: "Скандинавский"
  }, {
    name: "q1",
    text: "Люблю, когда дом украшен милыми сердцу вещицами, особенно сделанными своими руками",
    value: "Прованс"
  }, {
    name: "q1",
    text: "Предпочитаю интерьеры с открытой планировкой и высокими потолками, наполненные светом и воздухом",
    value: "Лофт"
  }, {
    name: "q1",
    text: "Мне нравится декорировать дом предметами, привезенными из путешествий",
    value: "Марокканский"
  }, {
    name: "q1",
    text: "Я — большой любитель посиделок у камина в семейном кругу",
    value: "Классика"
  }]
}, {
  id: 2,
  questionString: "Дом вашей мечты — это…",
  choices: [{
    name: "q2",
    text: "Квартира в центре мегаполиса",
    value: "Современный"
  }, {
    name: "q2",
    text: "Уединенный деревенский домик в горах",
    value: "Прованс"
  }, {
    name: "q2",
    text: "Просторные апартаменты с высокими потолками в бывшем промышленном квартале",
    value: "Лофт"
  }, {
    name: "q2",
    text: "Бревенчатый домик у озера в окружении леса",
    value: "Рустика"
  }, {
    name: "q2",
    text: "Большой дом за городом, подальше от суеты и поближе к природе",
    value: "Классика"
  }, {
    name: "q2",
    text: "Светлая квартира в северной стране с суровым климатом",
    value: "Скандинавский"
  }, {
    name: "q2",
    text: "Колоритный домик с живописной террасой в какой-нибудь жаркой стране",
    value: "Марокканский"
  }, {
    name: "q2",
    text: "Мои вкусы очень быстро меняются! Я люблю путешествовать, поэтому сегодня это может быть уютное бунгало на берегу океана, а завтра — мансарда в европейской столице",
    value: "Фьюжн"
  }]
}, {
  id: 3,
  questionString: "Какая цветовая гамма вам наиболее близка при оформлении интерьера?",
  choices: [{
    name: "q3",
    text: "Беспроигрышная комбинация — черный + белый",
    value: "Скандинавский"
  }, {
    name: "q3",
    text: "Буйство красок, неожиданные цветовые сочетания",
    value: "Фьюжн"
  }, {
    name: "q3",
    text: "Спокойные сдержанные цвета, особенно бежевые и кремовые",
    value: "Классика"
  }, {
    name: "q3",
    text: "Нежные пастельные оттенки",
    value: "Прованс"
  }, {
    name: "q3",
    text: "Нейтральная цветовая гамма, где в основе такие цвета, как белый, бежевый, серый, черный",
    value: "Современный"
  }, {
    name: "q3",
    text: "Благородная коричневая палитра от светло-бежевого до глубокого кофейного оттенка",
    value: "Рустика"
  }, {
    name: "q3",
    text: "Теплые природные тона, но обязательно с яркими акцентами",
    value: "Марокканский"
  }, {
    name: "q3",
    text: "Холодная цветовая гамма серебра, белого и черного",
    value: "Лофт"
  }]
}, {
  id: 4,
  questionString: "Какие материалы вы предпочитаете использовать при оформлении интерьера?",
  choices: [{
    name: "q4",
    text: "Древесина, кожа, ткани из простых натуральных материалов (хлопок, лен)",
    value: "Скандинавский"
  }, {
    name: "q4",
    text: "Что-то экзотическое и завораживающее: оригинальные металлы, редкие породы дерева с резьбой или инкрустацией, цветное стекло",
    value: "Марокканский"
  }, {
    name: "q4",
    text: "Материалы с состаренными поверхностями, чтобы чувствовался дух старины",
    value: "Прованс"
  }, {
    name: "q4",
    text: "Как можно больше натурального дерева",
    value: "Рустика"
  }, {
    name: "q4",
    text: "Материалы с грубой фактурой — например, кирпич или бетон",
    value: "Лофт"
  }, {
    name: "q4",
    text: "Дерево ценных пород, хрусталь, дорогое стекло, изысканные ткани",
    value: "Классика"
  }, {
    name: "q4",
    text: "Мне нравится обилие всевозможных материалов в одном интерьере",
    value: "Фьюжн"
  }, {
    name: "q4",
    text: "Неважно, какие материалы будут использоваться, — главное, чтобы было комфортно и практично",
    value: "Современный"
  }]
}, {
  id: 5,
  questionString: "Что бы вы хотели получить в подарок на новоселье?",
  choices: [{
    name: "q5",
    text: "Что-то простое, но стильное, будь то картина с абстрактным рисунком, лаконичная белая ваза или современный гаджет",
    value: "Современный"
  }, {
    name: "q5",
    text: "Латунный светильник из антикварного магазинчика",
    value: "Марокканский"
  }, {
    name: "q5",
    text: "То, что внесет в интерьер еще больше уюта и тепла — например, меховой плед",
    value: "Рустика"
  }, {
    name: "q5",
    text: "Что-то для кухни: милые баночки со специями, фарфоровый сервиз или натюрморт, написанный маслом",
    value: "Прованс"
  }, {
    name: "q5",
    text: "Нечто необычное, цепляющее взгляд, — скажем, ретро-часы или яркий постер в стиле поп-арт",
    value: "Лофт"
  }, {
    name: "q5",
    text: "Изящную вазу или зеркало в золотой раме с витиеватым узором",
    value: "Классика"
  }, {
    name: "q5",
    text: "Диковинный предмет, привезенный из зарубежной поездки",
    value: "Фьюжн"
  }, {
    name: "q5",
    text: "Вещи, сделанные вручную (hand-made), — вышитые салфетки, расписная витражная тарелка или вязаный чехол для подушки",
    value: "Скандинавский"
  }]
}, {
  id: 6,
  questionString: "Что для вас самое важное при обустройстве дома?",
  choices: [{
    name: "q6",
    text: "Долговечность",
    value: "Классика"
  }, {
    name: "q6",
    text: "Яркий внешний вид, который бы восхищал гостей",
    value: "Марокканский"
  }, {
    name: "q6",
    text: "Минимальные финансовые затраты (чтобы можно было через год-два быстро и без проблем сменить декорации)",
    value: "Скандинавский"
  }, {
    name: "q6",
    text: "Тепло домашнего очага",
    value: "Рустика"
  }, {
    name: "q6",
    text: "Функциональность",
    value: "Современный"
  }, {
    name: "q6",
    text: "Индивидуальность",
    value: "Фьюжн"
  }, {
    name: "q6",
    text: "Чтобы дом был отражением вашего внутреннего мира",
    value: "Лофт"
  }, {
    name: "q6",
    text: "Самобытная атмосфера",
    value: "Прованс"
  }]
}, {
  id: 7,
  questionString: "Наиболее привлекательным узором для вас является…",
  choices: [{
    name: "q7",
    text: "Шотландская клетка",
    value: "Рустика"
  }, {
    name: "q7",
    text: "Анималистические принты",
    value: "Фьюжн"
  }, {
    name: "q7",
    text: "Ненавязчивые цветочные узоры",
    value: "Прованс"
  }, {
    name: "q7",
    text: "Растительный симметричный рисунок «дамаск»",
    value: "Классика"
  }, {
    name: "q7",
    text: "Геометрические принты",
    value: "Современный"
  }, {
    name: "q7",
    text: "Этнические орнаменты с восточными нотками",
    value: "Марокканский"
  }, {
    name: "q7",
    text: "Цветная или черно-белая полоска",
    value: "Скандинавский"
  }, {
    name: "q7",
    text: "Предпочитаю однотонные поверхности без всяких узоров",
    value: "Лофт"
  }]
}, {
  id: 8,
  questionString: "Где бы вы предпочли провести ближайшие выходные?",
  choices: [{
    name: "q8",
    text: "В поисках сокровищ на колоритных блошиных рынках",
    value: "Лофт"
  }, {
    name: "q8",
    text: "В уютном гостевом домике в сельской местности, наслаждаясь природой",
    value: "Прованс"
  }, {
    name: "q8",
    text: "На выставке современных технологий",
    value: "Современный"
  }, {
    name: "q8",
    text: "В загородном доме у камина, в обнимку с любимой книгой",
    value: "Рустика"
  }, {
    name: "q8",
    text: "В художественной галерее или на выставке современного искусства",
    value: "Фьюжн"
  }, {
    name: "q8",
    text: "В гостях у родителей за чашечкой чая",
    value: "Классика"
  }, {
    name: "q8",
    text: "Люблю ткнуть пальцем на карте и отправиться исследовать новые места",
    value: "Марокканский"
  }, {
    name: "q8",
    text: "Мне и дома хорошо",
    value: "Скандинавский"
  }]
}];
var allAnswers = [{
  value: "\u041C\u0430\u0440\u043E\u043A\u043A\u0430\u043D\u0441\u043A\u0438\u0439",
  description: "\u041F\u043E-\u0432\u0438\u0434\u0438\u043C\u043E\u043C\u0443, \u0432\u0430\u0448\u0430 \u0434\u0443\u0448\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0447\u0435\u0433\u043E-\u0442\u043E \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0433\u043E \u0438 \u044D\u043A\u0437\u043E\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E, \u0432\u0435\u0434\u044C \u0440\u044F\u0434\u043E\u0432\u0430\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430 \u0438\u043B\u0438 \u0441\u0442\u0440\u043E\u0433\u0438\u0439 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C \u2014 \u044D\u0442\u043E \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0441\u043A\u0443\u0447\u043D\u043E. \u0412\u043E\u0441\u0442\u043E\u043A \u2014 \u0434\u0435\u043B\u043E \u0442\u043E\u043D\u043A\u043E\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043A\u043E\u043B\u043E\u0440\u0438\u0442\u043D\u044B\u0439 \u043C\u0430\u0440\u043E\u043A\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0441\u0442\u0438\u043B\u044C \u043F\u043E\u0434\u043E\u0439\u0434\u0435\u0442 \u0442\u0435\u043C, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u043C \u0434\u043E\u043C\u0435 \u043F\u043E-\u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0441\u043A\u0430\u0437\u043E\u0447\u043D\u0443\u044E \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443."
}, {
  value: "\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u043A\u0438\u0439",
  description: "\u0412\u044B \u043D\u0435 \u0433\u043E\u043D\u0438\u0442\u0435\u0441\u044C \u0437\u0430 \u0440\u043E\u0441\u043A\u043E\u0448\u044C\u044E, \u0432\u044B\u0447\u0443\u0440\u043D\u044B\u043C\u0438 \u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u0438 \u0447\u0440\u0435\u0437\u043C\u0435\u0440\u043D\u044B\u043C \u0443\u043A\u0440\u0430\u0448\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C. \u0421\u043A\u043E\u0440\u0435\u0435, \u0432 \u0432\u0435\u0449\u0430\u0445 \u0432\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u0446\u0435\u043D\u0438\u0442\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043D\u0435\u0436\u0435\u043B\u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u0443\u044E \u043E\u0431\u0435\u0440\u0442\u043A\u0443. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435\u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E, \u0447\u0442\u043E \u0432\u0430\u043C \u0438\u043C\u043F\u043E\u043D\u0438\u0440\u0443\u0435\u0442 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439, \u043D\u043E\u0440\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \u0441 \u0443\u043C\u0438\u0440\u043E\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u043E\u0439 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u043E\u0439, \u0433\u0434\u0435 \u0432\u0441\u0435 \u0434\u044B\u0448\u0438\u0442 \u0432\u043E\u0437\u0434\u0443\u0445\u043E\u043C \u0438 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u043C \u0441\u0432\u0435\u0442\u043E\u043C."
}, {
  value: "\u0420\u0443\u0441\u0442\u0438\u043A\u0430",
  description: "\u041F\u0440\u0438 \u043C\u044B\u0441\u043B\u044F\u0445 \u043E \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u043E\u043C \u0434\u043E\u043C\u0438\u043A\u0435 \u0432 \u0434\u0435\u0440\u0435\u0432\u043D\u0435 \u0432\u0430\u043C \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0442\u0435\u043F\u043B\u043E \u043D\u0430 \u0434\u0443\u0448\u0435, \u0432\u0435\u0434\u044C \u043E\u0431\u0438\u043B\u0438\u0435 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u0435\u0440\u0435\u0432\u0430 \u0431\u0435\u0437 \u043A\u0430\u043A\u0438\u0445-\u043B\u0438\u0431\u043E \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u043A\u0440\u0438\u0447\u0430\u0449\u0435\u0433\u043E \u0434\u0435\u043A\u043E\u0440\u0430 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u0432\u0430\u0441 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u044D\u043C\u043E\u0446\u0438\u0439. \u041D\u0443 \u0438, \u043A\u043E\u043D\u0435\u0447\u043D\u043E \u0436\u0435, \u0432\u044B \u043D\u0435 \u043C\u044B\u0441\u043B\u0438\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \u0431\u0435\u0437 \u043A\u0430\u043C\u0438\u043D\u0430 (\u043F\u0443\u0441\u0442\u044C \u0434\u0430\u0436\u0435 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043D\u043E\u0433\u043E), \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0433\u0440\u0435\u0432\u0430\u0435\u0442 \u0432 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u0434\u0430, \u043D\u043E \u0438 \u0441\u043E\u0437\u0434\u0430\u0435\u0442 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0443\u044E \u0443\u044E\u0442\u043D\u0443\u044E \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443 \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0433\u043E \u043E\u0447\u0430\u0433\u0430."
}, {
  value: "\u041F\u0440\u043E\u0432\u0430\u043D\u0441",
  description: "\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0434\u043E\u043C \u0441\u043E \u0441\u0432\u0435\u0442\u043B\u043E\u0439 \u0438 \u0443\u044E\u0442\u043D\u043E\u0439 \u043E\u0431\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u043E\u0439\u2014 \u0432\u0430\u0448\u0430 \u0434\u0430\u0432\u043D\u044F\u044F \u043C\u0435\u0447\u0442\u0430. \u0410 \u043F\u043E\u0434\u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430 \u0432 \u043F\u0430\u0441\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0442\u043E\u043D\u0430\u0445 \u0441 \u043B\u0435\u0433\u043A\u0438\u043C\u0438 \u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C\u0438 \u0437\u0430\u043D\u0430\u0432\u0435\u0441\u044F\u043C\u0438, \u0438\u0437\u044F\u0449\u043D\u043E\u0439 \u0431\u0435\u043B\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u044C\u044E \u0438 \u0444\u0430\u0440\u0444\u043E\u0440\u043E\u0432\u044B\u043C \u0434\u0435\u043A\u043E\u0440\u043E\u043C. \u0418 \u043A\u0430\u043A \u0436\u0435 \u043E\u0431\u043E\u0439\u0442\u0438\u0441\u044C \u0431\u0435\u0437 \u0446\u0432\u0435\u0442\u043E\u0447\u043D\u044B\u0445 \u043F\u0440\u0438\u043D\u0442\u043E\u0432 \u0438\u043B\u0438 \u0436\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0445 \u0436\u0438\u0432\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0430\u0440\u044F\u0442 \u0440\u0430\u0434\u043E\u0441\u0442\u044C \u0438 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u043E\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u0434\u0430!"
}, {
  value: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439",
  description: "\u0412\u044B \u043B\u044E\u0431\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u0441\u0435 \u0431\u044B\u043B\u043E \u043D\u0430 \u0441\u0432\u043E\u0438\u0445 \u043C\u0435\u0441\u0442\u0430\u0445, \u0438 \u0432\u0430\u0441 \u0440\u0430\u0437\u0434\u0440\u0430\u0436\u0430\u044E\u0442 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u043C\u0438\u043B\u044B\u0445 \u0441\u0442\u0430\u0442\u0443\u044D\u0442\u043E\u043A \u0438\u0437 \u0441\u0442\u0430 \u0441 \u043B\u0438\u0448\u043D\u0438\u043C \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432, \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0431\u0435\u0437\u0434\u0435\u043B\u0443\u0448\u043A\u0438, \u0446\u0432\u0435\u0442\u043E\u0447\u043A\u0438-\u0440\u044E\u0448\u0435\u0447\u043A\u0438 \u0438 \u0438\u0437\u0431\u044B\u0442\u043E\u043A \u043C\u0435\u0431\u0435\u043B\u0438, \u0437\u0430\u0433\u0440\u043E\u043C\u043E\u0436\u0434\u0430\u044E\u0449\u0435\u0439 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E. \u0412\u0430\u043C \u0431\u043B\u0438\u0437\u043A\u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0438 \u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u043E\u0441\u0442\u044C \u0444\u043E\u0440\u043C, \u0447\u0438\u0441\u0442\u044B\u0435 \u043B\u0438\u043D\u0438\u0438, \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E. \u0412\u0435\u0434\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u0441\u044C, \xAB\u043C\u0435\u043D\u044C\u0448\u0435 \u2014 \u0437\u043D\u0430\u0447\u0438\u0442 \u0431\u043E\u043B\u044C\u0448\u0435\xBB. "
}, {
  value: "\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430",
  description: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043F\u0440\u0438\u0448\u043B\u0438 \u043A \u044D\u0442\u043E\u043C\u0443 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0443, \u0442\u043E \u0432\u044B, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u043A\u043E\u043D\u0441\u0435\u0440\u0432\u0430\u0442\u043E\u0440. \u042D\u0442\u043E \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E, \u0432\u0435\u0434\u044C \u0432\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0435\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u043E\u043B\u0433\u043E\u0438\u0433\u0440\u0430\u044E\u0449\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0434\u0432\u0435\u0440\u0436\u0435\u043D \u0441\u043A\u043E\u0440\u043E\u0442\u0435\u0447\u043D\u044B\u043C \u0442\u0440\u0435\u043D\u0434\u0430\u043C. \u041F\u0440\u043E\u0447\u043D\u044B\u0435 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B, \u043F\u043E\u0437\u043E\u043B\u043E\u0442\u0430, \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u0435 \u043B\u044E\u0441\u0442\u0440\u044B \u0438 \u044D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u0438\u0437 \u0446\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0440\u043E\u0434 \u0434\u0435\u0440\u0435\u0432\u0430 \u2014 \u0432\u0430\u0448\u0438 \u043D\u0435\u043F\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0441\u043F\u0443\u0442\u043D\u0438\u043A\u0438 \u043D\u0430 \u043F\u0443\u0442\u0438 \u043A \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0431\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435."
}, {
  value: "\u041B\u043E\u0444\u0442",
  description: "\u041D\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u043F\u043E \u0434\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0443 \u043E\u0446\u0435\u043D\u0438\u0442 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0440\u043C \u0433\u043E\u043B\u043E\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u043E\u0439 \u043A\u043B\u0430\u0434\u043A\u0438, \u043D\u0430 \u0444\u043E\u043D\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0443\u0434\u0443\u0442 \u043A\u0440\u0430\u0441\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0432\u0435\u0442\u0438\u043B\u044C\u043D\u0438\u043A\u0438 \u0438 \u0432\u0438\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C \u0441 \u0431\u043B\u043E\u0448\u0438\u043D\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430. \u041D\u043E \u0432\u044B \u0442\u043E\u0447\u043D\u043E \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u0441\u044C \u043A \u0438\u0445 \u0447\u0438\u0441\u043B\u0443! \u041B\u043E\u0444\u0442 \u2014\u044D\u0442\u043E \u0442\u043E, \u0447\u0442\u043E \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0443\u0442\u043E\u043B\u0438\u0442\u044C \u0432\u0430\u0448\u0443 \u0436\u0430\u0436\u0434\u0443 \u0441\u0432\u043E\u0431\u043E\u0434\u044B \u0438 \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043E\u0431\u0449\u0435\u043F\u0440\u0438\u043D\u044F\u0442\u044B\u0445 \u043D\u043E\u0440\u043C."
}, {
  value: "\u0424\u044C\u044E\u0436\u043D",
  description: "\u041E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u0438\u043B\u0438 \u0434\u0430\u0436\u0435 5 \u043B\u0435\u0442 \u2014\u044D\u0442\u043E \u0436\u0435 \u0442\u0430\u043A \u0441\u043A\u0443\u0447\u043D\u043E! \u0412\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0438\u043C\u043F\u0440\u043E\u0432\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043C\u0438\u043A\u0441, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0449\u0438\u0439 \u0432 \u0441\u0435\u0431\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B, \u0446\u0432\u0435\u0442\u0430 \u0438 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0438\u0437 \u0440\u0430\u0437\u043D\u044B\u0445 \u044D\u043F\u043E\u0445, \u043A\u0443\u043B\u044C\u0442\u0443\u0440 \u0438 \u0441\u0442\u0438\u043B\u0438\u0441\u0442\u0438\u043A. \u0424\u044C\u044E\u0436\u043D, \u0438\u043B\u0438 \u044D\u043A\u043B\u0435\u043A\u0442\u0438\u043A\u0430, \u0441\u043B\u0430\u0432\u0438\u0442\u0441\u044F \u0441\u0432\u043E\u0438\u043C \u043D\u0435\u043F\u0440\u0435\u0432\u0437\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u043C \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435\u043C \u0438 \u044D\u043A\u0441\u0442\u0440\u0430\u0432\u0430\u0433\u0430\u043D\u0442\u043D\u043E\u0441\u0442\u044C\u044E. \u0412\u0435\u0434\u044C \u043D\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u043B\u0443\u0447\u0448\u0435, \u0447\u0435\u043C \u044F\u0440\u043A\u0438\u0435 \u0446\u0432\u0435\u0442\u0430, \u0432\u0438\u0442\u0438\u0435\u0432\u0430\u0442\u044B\u0435 \u0444\u043E\u0440\u043C\u044B, \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0438 \u0437\u0430\u0433\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0441\u0443\u0432\u0435\u043D\u0438\u0440\u044B \u0438\u0437 \u0434\u0430\u043B\u0435\u043A\u0438\u0445 \u0441\u0442\u0440\u0430\u043D."
}];
var quizQuestionsBlock = document.querySelector('.quiz__questions');
var quizHeader = document.querySelector('.quiz__header');
var quizFooter = document.querySelector('.quiz__footer');
var resultBlock = document.querySelector('.quiz__result');
var showPrevBtn = quizFooter.querySelector('#prev-question');
var showNextBtn = quizFooter.querySelector('#next-question');
var showResultsBtn = quizFooter.querySelector('#submit');
var quizQuestionsResult = document.querySelector('.quiz__results');
var quizQuestionAnswers = "";
var quizRecordedAnswers = [];

var Quiz = function Quiz(quizName) {
  _this.quizName = quizName;
  _this.questions = [];
  _this.id = "";
};

Quiz.prototype.renderQuestion = function (question) {
  Quiz.id = question.id;
  renderQuizNumber(question);
  renderQuizAnswers(question);
  var quizQuestionTemplate = "\n    <li class=\"quiz__question\" id=\"".concat(question.id, "\">\n      <h3 class=\"heading heading--m\">").concat(question.questionString, "</h3>\n      ").concat(quizQuestionAnswers, "\n    </li>");
  quizQuestionsBlock.innerHTML = quizQuestionsBlock.innerHTML + quizQuestionTemplate;
  setDefaultAnswer(question);
  setDisabledBtns();
};

var renderQuizAnswers = function renderQuizAnswers(question) {
  question.choices.forEach(function (item) {
    var quizAnswersTemplate = "\n    <label class=\"quiz__answer\">\n        <input class=\"visually-hidden\" name=\"".concat(item.name, "\" value=\"").concat(item.value, "\" type=\"radio\">\n        <span>").concat(item.text, "</span>\n    </label>");
    quizQuestionAnswers = quizQuestionAnswers + quizAnswersTemplate;
  });
};

var renderQuizNumber = function renderQuizNumber(question) {
  var quizQuestionNumber = quizHeader.querySelector('.quiz__num');
  var quizQuestionTotal = quizHeader.querySelector('.quiz__total');
  quizQuestionNumber.innerHTML = question.id;
  quizQuestionTotal.innerHTML = allQuestions.length;
};

var setDefaultAnswer = function setDefaultAnswer(question) {
  var allAnswers = document.querySelectorAll('input[type="radio"]');
  var checkId = quizRecordedAnswers[question.id - 1];

  if (checkId) {
    allAnswers[checkId.id].setAttribute("checked", "checked");
  } else {
    allAnswers[0].setAttribute("checked", "checked");
  }
};

var setDefaultButtons = function setDefaultButtons() {
  showNextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    saveAnswer();
    deleteQuestion();
    quiz.renderQuestion(allQuestions[Quiz.id]);
  });
  showPrevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    saveAnswer();
    deleteQuestion();
    quiz.renderQuestion(allQuestions[Quiz.id - 2]);
  });
  showResultsBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    saveAnswer();
    deleteQuestion();
    snowResult();
  });
};

var setDisabledBtns = function setDisabledBtns() {
  showPrevBtn.removeAttribute("disabled", "disabled");
  showNextBtn.removeAttribute("disabled", "disabled");
  showResultsBtn.setAttribute("disabled", "disabled");

  if (Quiz.id == 1) {
    showPrevBtn.setAttribute("disabled", "disabled");
  }

  if (Quiz.id == allQuestions.length) {
    showNextBtn.setAttribute("disabled", "disabled");
  }

  if (quizRecordedAnswers.length === allQuestions.length - 1) {
    showResultsBtn.removeAttribute("disabled", "disabled");
  }
};

var deleteQuestion = function deleteQuestion() {
  quizQuestionsBlock.innerHTML = "";
  quizQuestionAnswers = "";
};

var saveAnswer = function saveAnswer() {
  var answerText = document.querySelector('input[type="radio"]:checked').value;
  var answer = {
    id: Quiz.id,
    value: answerText
  };
  quizRecordedAnswers[Quiz.id - 1] = answer;
};

var snowResult = function snowResult() {
  var result = [];
  resultBlock.classList.remove('visually-hidden');
  quizFooter.classList.add('visually-hidden');
  quizHeader.classList.add('visually-hidden');
  resultBlock.querySelector('#result');
  var counter = quizRecordedAnswers.reduce(function (o, i) {
    if (!o.hasOwnProperty(i.value)) {
      o[i.value] = 0;
    }

    o[i.value]++;
    return o;
  }, {});
  var unsortedResult = Object.keys(counter).map(function (value) {
    return {
      value: value,
      sum: counter[value]
    };
  });
  result = unsortedResult.sort(function (a, b) {
    return a.sum > b.sum ? -1 : 1;
  });
  console.log('result', result);
  var resultName = resultBlock.querySelector('#result');
  var resultDescription = resultBlock.querySelector('#desc');

  if (result[0].sum > result[1].sum) {
    var answer = allAnswers.filter(function (item) {
      return item.value == result[0].value;
    });
    resultName.innerHTML = "\u0418\u0442\u0430\u043A, \u0432\u0430\u0448 \u0441\u0442\u0438\u043B\u044C \u2013 " + result[0].value + "!";
    resultDescription.innerHTML = answer[0].description;
  } else if (result[0].sum === result[1].sum) {
    var answer1 = allAnswers.filter(function (item) {
      return item.value == result[0].value;
    });
    var answer2 = allAnswers.filter(function (item) {
      return item.value == result[1].value;
    });
    resultName.innerHTML = "\u0418\u0442\u0430\u043A, \u0432\u0430\u0448 \u0441\u0442\u0438\u043B\u044C \u2013 " + result[0].value + " \u0438\u043B\u0438 " + result[1].value + "!";
    var desc1 = document.createElement("p");
    desc1.innerHTML = result[0].value + ": " + answer1[0].description;
    resultDescription.appendChild(desc1);
    var desc2 = document.createElement("p");
    desc2.innerHTML = result[1].value + ": " + answer2[0].description;
    resultDescription.appendChild(desc2);
  }
};

var quiz = new Quiz('My Quiz');
quiz.renderQuestion(allQuestions[0]);
setDefaultButtons();
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55487" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","quiz.js"], null)
//# sourceMappingURL=/quiz.a58f7c4d.js.map
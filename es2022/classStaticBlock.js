/**
 * 类静态初始化块
 */
class Translator {
  static translations = {
    yes: 'ja',
    no: 'nein',
    maybe: 'vielleicht',
  };
  static englishWords = [];
  static germanWords = [];
  static _ = initializeTranslator(); // (A)
}
// 初始化函数
function initializeTranslator() {
  for (const [english, german] of Object.entries(Translator.translations)) {
    Translator.englishWords.push(english);
    Translator.germanWords.push(german);
  }
}


// 使用静态块
class Translator {
  static translations = {
    yes: 'ja',
    no: 'nein',
    maybe: 'vielleicht',
  };
  static englishWords = [];
  static germanWords = [];

  // 静态块
  static { // (A)
    // 静态成员初始化
    for (const [english, german] of Object.entries(this.translations)) {
      this.englishWords.push(english);
      this.germanWords.push(german);
    }
    console.log(this.englishWords, this.germanWords);
  }
}
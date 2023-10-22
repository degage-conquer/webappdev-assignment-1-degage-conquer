// 所有的引文内容
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// 储存单字列表及目前要输入的单字索引
let words = [];
let wordIndex = 0;
// 开始时间
let startTime = Date.now();
// 网页物件连结
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');


//建立disableInputListener和enableInputListener函数，分别用于关闭、打开监听者
//typedValueElement.removeEventListener('input', inputListener)中inputListener为事件监听器的函数，用来移除监听器
function disableInputListener() {
    typedValueElement.removeEventListener('input', inputListener);
}
function enableInputListener() {
    typedValueElement.addEventListener('input', inputListener);
}

document.getElementById('start').addEventListener('click', () => {
    // 取得一行引文
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    // 将引文分成许多单字，存在矩阵中。
    words = quote.split(' ');
    // 重制单字索引来做追踪
    wordIndex = 0;

    // 更新使用者介面
    // 建立 span 元素的矩阵，设定 class 用。
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    // 转换成字串并以 innerHTML 显示引文
    quoteElement.innerHTML = spanWords.join('');
    // 标记第一个单字
    quoteElement.childNodes[0].className = 'highlight';
    // 清除讯息栏之前的讯息
    messageElement.innerText = '';
    // 设定文字框
    // 清除文字框
    typedValueElement.value = '';
    // 设定 focus
    typedValueElement.focus();

    //因为之后的inputListener函数中，在完成打字游戏后关闭了文本框，故在再次开始后重新开启文本框
    document.getElementById("typed-value").disabled = false;
    //点击开始后，打开监听器
    enableInputListener()
    // 设定事件驱动程式
    // 开始计时器
    startTime = new Date().getTime();
  });

  function inputListener(){
    const currentWord = words[wordIndex];
    // 取得目前输入的数值
    const typedValue = typedValueElement.value;
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      // 句子最末端
      // 显示成功
      const elapsedTime = new Date().getTime() - startTime;

      //将elapsedTime / 1000值赋给变量comp_time,记录本次打字游戏时间。
      //localStorage可以存储长期保留数据，运用getItem方法取出localStorage中存储的键highestScore对应的值，赋给变量score
      //若score为null,则说明之前并没有存储数据，故将本次花费时间comp_time赋给键highestscore
      const comp_time = elapsedTime / 1000;
      const score = localStorage.getItem('highestScore');
      if(score==null){
        localStorage.setItem('highestScore', comp_time );
      }
      //若存储的highestScore对应值大于comp_time，则说明本次花费时间为截至目前最小，故进行更新
      else if(score>comp_time){
        localStorage.setItem('highestScore', comp_time );
      }
      
      //将截至目前最快值合并在结束对话框中
      const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds;截止目前最快成绩为 ${localStorage.getItem('highestScore')} seconds.`;
      //完成打字游戏，关闭监听器
      disableInputListener()
      //完成打字游戏，关闭文本框
      document.getElementById("typed-value").disabled = true;
      //使用innerHTML属性将message添加到对话框中，使用appendChild将对话框添加到body中
      //使用showModel方法显示对话框；在对话框显示之后可直接点击Esc键退出对话框，再次开始游戏
      dialog.innerHTML = message
      document.body.appendChild(dialog);
      dialog.showModal();

}   else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      // 单字最末端
      // 清除输入的数值，准备给新的单字使用
      typedValueElement.value = '';
      // 移动到下一个单字
      wordIndex++;
      // 重设所有引文子元素的 class 名称
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      // 标记新单字
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      // 单字目前输入正确
      // 标记下一个单字
      typedValueElement.className = '';
    } else {
      // 单字输入错误
      typedValueElement.className = 'error';
    }
}
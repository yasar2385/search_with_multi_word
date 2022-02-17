// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var data = [
  'Latin small letter ALPHA',
  'Latin small letter turned ALPHA',
  'Latin letter PHARYNGEAL VOICED FRICATIVE',
  'ALPHA Greek lowercase letters with the TONOS',
  'Greek uppercase ALPHA',
  'Greek lowercase letters ALPHA',
  'Russian Alphabet',
  'Armenian Alphabet',
  'Hebrew Alphabet',
  'Arabic Alphabet',
  'Korean Combining Alphabet',
  'Latin small letter TOP half O',
  'Latin small letter P with acute',
  'Latin small letter P with dot above',
  'Terminal Graphic Characters',
  'Terminal Graphic Characters',
  'pentangle pentalpha',
  'VERTICAL IDEOGRAPHIC ITERATION MARK',
  'Ideographic Telegraph Symbols for Days',
  'Alphabetic Presentation Forms',
];

var keyupStack = [];
var keyword = document.getElementById('keyword');
keyword.addEventListener('keyup', function () {
  keyupStack.push(1);

  setTimeout(
    function () {
      keyupStack.pop();
      // 最後にkeyupされてから一定時間次の入力がなかったら実行
      if (keyupStack.length === 0) {
        // 部分一致を可能にする(例: .*a.*b.*c.*)
        //var buf = '.*' + this.value.replace(/(.)/g, "$1.*");
        //var reg = new RegExp(buf, 'g');

        var split = this.value.split(' ');
        var filteredLists = data.filter(function (d) {
          var IsFullyMatch = !1;
          Array.from(split).forEach((word, ind, ary) => {
            d = d.toLocaleUpperCase();
            word = word.toLocaleUpperCase();
            //console.log([word, d]);
            if (ind == 0 || (ind != 0 && IsFullyMatch)) {
              IsFullyMatch = d.includes(word) ? !0 : !1;
            }
          });
          console.log([d, IsFullyMatch]);
          return IsFullyMatch ? d : '';
        });
        createRow(filteredLists);
      }
    }.bind(this),
    300
  );
});

var createRow = function (lists) {
  var list = document.getElementById('list');
  list.textContent = null;
  lists.forEach(function (l) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(l));
    list.appendChild(li);
  });
};

// 初期表示
createRow(data);

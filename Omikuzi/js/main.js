'use strict'

{
  const btn = document.getElementById('btn');
  //ぼたんIDを取得し、クリックしたら文字列を変える
  btn.addEventListener('click', () => {

    // const items = ['大吉','吉','小吉','凶'];
    const n = Math.random();

  
    if (n < 0.10) {
      btn.textContent = '大吉';
    } else if (n < 0.5) {
      btn.textContent = '吉';
    } else {
      btn.textContent = '凶';
    }
    ///items[n];
  });
}
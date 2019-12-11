window.addEventListener('load', function () {
   var arrow_l = document.querySelector('.l');
   var arrow_r = document.querySelector('.r');
   var gridcol2 = document.querySelector('.grid-col2-t');
   var num = 0;
   var circle = 0;
   var flag = true;
   // 鼠标经过显示箭头
   gridcol2.addEventListener('mouseover', function () {
      arrow_l.style.display = 'block';
      arrow_r.style.display = 'block';
      clearInterval(timer);
      timer = null;
   })
   // 鼠标移开隐藏箭头
   gridcol2.addEventListener('mouseout', function () {
      arrow_l.style.display = 'none';
      arrow_r.style.display = 'none';
      timer = setInterval(function () {
         arrow_r.click();
      }, 2000)

   })
   var ul = gridcol2.querySelector('.focus');
   var ol = gridcol2.querySelector('.circle').querySelector('ul');
   for (var i = 0; i < ul.children.length; i++) {
      var li = document.createElement('li');
      li.setAttribute('index', i);

      var a = document.createElement('a');

      a.setAttribute('href', 'javascript:;')
      li.appendChild(a);
      ol.appendChild(li);
      a.addEventListener('click', function () {

         for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].children[0].className = '';
         }
         this.className = 'current';
         var index = this.parentNode.getAttribute('index') * 790;
         animate(ul, -index)
         num = this.parentNode.getAttribute('index');
         circle = this.parentNode.getAttribute('index');
      })
   }
   ol.children[0].children[0].className = 'current';
   var first = ul.children[0].cloneNode(true);
   ul.appendChild(first);
   arrow_r.addEventListener('click', function () {
      if (flag == true) {
         flag = false;
         if (num == ul.children.length - 1) {
            ul.style.left = 0 + 'px';
            num = 0;
         }
         console.log(num);
         num++;
         animate(ul, -num * gridcol2.offsetWidth, function () {
            flag = true;
         });
         circle++;
         if (circle == ol.children.length) {
            circle = 0;
         }
         for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].children[0].className = '';
         }
         ol.children[circle].children[0].className = 'current';

      }
   })
   arrow_l.addEventListener('click', function () {
      if (flag == true) {
         flag = false;
         if (num == 0) {
            ul.style.left = -(ul.children.length - 1) * gridcol2.offsetWidth + 'px';
            num = ul.children.length - 1;
         }
         console.log(num);
         num--;
         animate(ul, -num * gridcol2.offsetWidth, function () {
            flag = true;
         });
         circle--;
         if (circle < 0) {
            circle = ol.children.length - 1;
         }
         for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].children[0].className = '';
         }
         ol.children[circle].children[0].className = 'current';
      }
   })
   var timer = setInterval(function () {
      arrow_r.click();
   }, 2000)

})
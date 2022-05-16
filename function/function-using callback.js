 // callback
      function formattext(text,formatcb) {
        return typeof formatcb==='function' ? formatcb(text): text.toUpperCase();
      }

      const result=formattext("hello vivek",function func(text){
          return text.charAt(0).toUpperCase()+text.slice(1);

      });
      console.log(result); 
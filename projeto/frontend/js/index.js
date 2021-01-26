(function (wim, DOM, doc) {
  "use strict";

  var app = (function appController() {
    return {
      
      init: function init() {
        console.log("Init");
        
      },

      inputToDo: function inputToDo () {
        console.log("creating input");
        var elemento_pai = document.body;
        var ipt = document.createElement("input");
        ipt.setAttribute('type', 'text');
        ipt.setAttribute('placeholder', 'add uma tarefa');
        ipt.setAttribute('id', 'iptTodo');
        elemento_pai.appendChild(ipt);
        
        var bttInput = doc.createElement("button");
        bttInput.setAttribute('id', 'bttInput');
        bttInput.addEventListener("click", function () {
          var ipt = document.querySelector('#iptTodo');
          if(ipt.value != ''){
            var todo = document.getElementById('todo');
            var toDoList = document.createElement("LI");
            var t = document.createTextNode(ipt.value);
            toDoList.appendChild(t);
            todo.appendChild(toDoList);
          }
        })  
        elemento_pai.appendChild(bttInput);

      },

      todo: function todo() {
        console.log("creating todo");
        var elemento_pai = document.body;
        var titulo = document.createElement("h1");
        titulo.textContent = "TODO";
        var todo = doc.createElement("lu");
        todo.setAttribute('id','todo')
        elemento_pai.appendChild(todo);
        todo.appendChild(titulo);

      }
    };
  })();
  app.init();
  app.inputToDo();
  app.todo();
  
})(window, window.DOM, document);

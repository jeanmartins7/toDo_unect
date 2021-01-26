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
            var toDodiv = document.createElement("div");
            var toDoList = document.createElement("p");
            var t = document.createTextNode(ipt.value);
            toDoList.appendChild(t);
            var bttDone = app.bttDone();    
            var bttRemove = app.bttRemove();         
            toDodiv.appendChild(toDoList);
            toDodiv.appendChild(bttDone);
            toDodiv.appendChild(bttRemove);
            todo.appendChild(toDodiv);
            
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

      },

      bttDone: function bttDone() {
        var bttDone = doc.createElement("button");
        bttDone.setAttribute('id', 'bttDone');
        bttDone.addEventListener("click", function () {       
          
        })
        return bttDone
      },

      bttRemove: function bttRone() {
        var bttRemove = doc.createElement("button");
        bttRemove.setAttribute('id', 'bttDone');
        bttRemove.addEventListener("click", function () {
          var divRemove = document.querySelector();
          console.log(divRemove);
            
          
        })
        return bttRemove
      }




    };
  })();
  app.init();
  app.inputToDo();
  app.todo();
  
})(window, window.DOM, document);

'use strict';
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
const checkElem = document.querySelectorAll('input:checked');

function collectInputData([...elements]) {
  elements.map(element => element.value);
}

collectInputData(checkElem);
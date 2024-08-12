const delButtons = document.querySelectorAll('.del');

delButtons.forEach(button => {
  button.addEventListener('click', function() {
    const todoItem = this.closest('.todo');
    const textNode = todoItem.querySelector('.todo_value');
    textNode.value='';
  });
});
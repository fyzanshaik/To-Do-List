$(document).ready(function() {
  const inputField = $('#inputField');
  const addButton = $('#addButton');
  const itemList = $('#itemList');

  addButton.on('click', addItem);

  function addItem() {
    const text = inputField.val().trim();
    if (text !== '') {
      const listItem = $('<li>');
      const checkbox = $('<input>', { type: 'checkbox' });
      listItem.append(checkbox).append(text);
      itemList.append(listItem);
      inputField.val('');

      // Add event listener to toggle strike-through effect when the checkbox is clicked
      checkbox.on('click', function() {
        if (checkbox.prop('checked')) {
          listItem.css('text-decoration', 'line-through');
        } else {
          listItem.css('text-decoration', 'none');
        }
      });
    }
  }

  inputField.on('keydown', function(event) {
    if (event.key === 'Enter') {
      addItem();
    }
  });
});

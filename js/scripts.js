function newItem(){
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if(inputValue === '') {
    alert("you must write something!");
  } else {
    $('#list').append(li);
  }

  function crossOut(){
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  let crossOutButton = $('<crossOutButton></crossOutButton');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", function() {
    $(this).parent().addClass("delete");
  });

  $('#list').sortable();

}

$('button').click(newItem);

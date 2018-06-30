// Select color input
// Select size input
let height, width, color
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(){
    event.preventDefault()
    height = $("#inputHeight").val()
    width = $("#inputWeight").val()
    makeGrid(height, width);
})

function makeGrid(row, col) {
    $("tr").remove()
    let  x=1
    while(x <= height){
      $("#pixelCanvas").append('<tr></tr>');
      for (y = 1; y <= width; y++) {
        $('tr:last').append('<td></td>');
      }
      x++
    }

    $("td").click(function pickColor(){
        color = $("#colorPicker").val()
        if($(this).attr("style")){
          $(this).removeAttr("style")
        }
        else{
          $(this).attr("style", "background-color:"+color)
        }
  	})
}

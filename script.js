$("#task-add-btn").click(()=>{
    let inputTask = $("#input-text").val();
    if (inputTask){
        let parentElement = $("#task-items");
        let newChild = $(`<li class="item">
                    <div class="list-item">
                        <input type="checkbox" id="task-checkbox">
                        <span id="task-text">${inputTask}</span>
                        <button class="cross-icon-btn"><i class="fa-solid fa-x cross-icon"></i></button>
                    </div>
                </li>`);
        parentElement.append(newChild);
        $("#input-text").val("");
    }

})

$("#task-items").on("click", ".cross-icon-btn i", function() {
    let liElement = $(this).closest(".item");
    liElement.remove();
  });

$("#task-clear").click(()=>{
    $("#task-items").empty();
})
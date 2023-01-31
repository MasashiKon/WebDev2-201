/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {
    // code goes here
    $("#addTask").click(function() {
        const value = $(".textBox").val();
        console.log(value);
        if(!value) {alert("Error: Please enter a task first"); return};
        const task = $(`<div><span>${value}</span><span><i class="fa fa-check"></i> <i class="fa fa-trash-alt"></i></span></div>`);
        task.css({
            "display": "flex",
            "justify-content": "space-between",
            "margin": "0 15px",
            "padding": " 10px 10px",
            "background-color": "rgba(0, 0, 100, 0.2)"
        });
        task.find(".fa-check").click(function() {
            if($(this).parent().parent().parent().attr('class') === "completed") return;
            $(this).parent().parent().fadeOut().promise().done(function() {
                const item = $(this).detach();
                $(".completed").append(item);
                item.fadeIn();
            })

        });
        task.find(".fa-trash-alt").click(function() {
            $(this).parent().parent().fadeOut().promise().done(function() {
                $(this).remove();
            })
        });
        $(".notCompleted").append(task)
    })
});
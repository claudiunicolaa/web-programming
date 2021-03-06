/**
 * Created by claudiu on 20.05.2017.
 */

$(document).ready(function () {
    $("#menu").load("menu.html");
});

function showCollection() {
    $("#content").load("collection.html");
}

function showUpload() {
    $("#content").load("upload.html");
}

function edit(id) {
    $("#content").load("edit.html", function () {
        $.ajax({
            url: "http://localhost:8000/action/" + id,
            type: "GET",
            dataType: 'json',
        }).done(function (file) {
            $("#id").val(file.id);
            $("#name").val(file.name);
        });
    });

}

function remove(id) {
    $.ajax({
        url: "http://localhost:8000/action/" + id,
        type: "DELETE",
        dataType: 'text',
    }).done(function () {
        alert("Deleted with success");
        $("#content").load("collection.html");
    }).fail(function (error) {
        alert(error.responseText);
        console.log(error.responseText);
    });
}

"use strict";

function addListItem() {
    var $list__item = $("<div class=\"mdl-list__item\"></div>"),
        $primary_content = $("<span class=\"mdl-list__item-primary-content\"></span>");
    $(".demo-list-action").append($list__item);
    $list__item.append($primary_content);
    $primary_content.append("<i class=\"material-icons mdl-list__item-avatar\">person</i>", "<span></span>");
    $list__item.append("<a class=\"mdl-list__item-secondary-action\" href=\"#\"><i class=\"material-icons\">star</i></a>");

}

function updateItem(actors, pos) {
    $(".demo-list-action").find(":nth-child(" + (pos+1) + ")").find(":nth-child(1)").find(":nth-child(2)").text(actors[pos].name);
    if(actors[pos].starred === false) {
        $(".demo-list-action").find(":nth-child(" + (pos+1) + ")").find(":nth-child(2)").find(":nth-child(1)").text("star_border");
    }
}

$.getJSON("http://localhost:3000/actors", function (actors) {

    var i = 0;

    for (i = 0; i < actors.length; i++) {
        addListItem();
        updateItem(actors, i);
    }

    $(".mdl-list__item-secondary-action").click(function() {
        var index = ($(this).parent().index()+1);
        var star = $(this);

        $.getJSON("http://localhost:3000/actors/" + index, function (actor) {
            console.log(actor);
            var newActor = actor;
            if (star.find(":first-child").text() === "star") {
                star.find(":first-child").text("star_border");
                newActor.starred = false;

            } else {
                star.find(":first-child").text("star");
                newActor.starred = true;
            }
            console.log(index);
            $.ajax({
                url: "http://localhost:3000/actors/" + index,
                type: "PUT",
                data: newActor,
                dataType: "json",
            });
        });


    });

});

$(".mdl-button").click(function() {

    var person = { name: $(".mdl-textfield__input").val(), starred: false };

    $.ajax({
        url: "http://localhost:3000/actors",
        type: "POST",
        data: person,
        dataType: "json",
    });

    $.getJSON("http://localhost:3000/actors", function (actors) {
            addListItem();
            updateItem(actors, actors.length-1);
        });
});

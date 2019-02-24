$(function() {
    // on click event to add new burger
    $(".add-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        };

        // send ajax POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added a new burger.");
            // reload page for updates
            location.reload();
        });
    });
})
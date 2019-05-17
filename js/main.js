function getData() {
    $.ajax({
        url: "https://jquerycrud-ed8dc.firebaseio.com/dogs.json",
        type: "GET",
        success: function(response) {
            console.log(response);
        }
    });
}

var postObject = {
    'name': 'Gogdo',
    'breed': 'Black Cat'
}

function postData() {
    $.post("https://jquerycrud-ed8dc.firebaseio.com/dogs.json", JSON.stringify(postObject), function(data) {
        console.log(data);
    }, "json");
}

function updateData() {
    $.ajax({
        url: 'https://jquerycrud-ed8dc.firebaseio.com/dogs/-LeJgLYcUIR1OwHL49pW.json',
        type: 'PUT',
        data: JSON.stringify(postObject),
        success: function(response) {
            console.log(response)
        }
    });
}

function deleteData() {
    $.ajax({
        url: 'https://jquerycrud-ed8dc.firebaseio.com/dogs/-LeJgLYcUIR1OwHL49pW.json',
        type: 'DELETE',
        success: function(response) {
            console.log(response)
        }
    });
}



$("a.views-select").on("click", (event) => {
    let selectedview = $(event.target)[0].attributes[1].value;
    console.log(selectedview);
    viewContent(selectedview);
});


viewContent = (data) => {
    $(".container-views").load(`./views/${data}.html`, () => {
        //  console.log("vista cambiada");
    });
}


$("#btnRegister").click(() => {
    let name = $("#nameUser").val();
    let breed = $("#lastnameP").val();
    let age = $("#lastnameM").val();

    let petObject = { name, breed, age };
    console.log(petObject)
})

//viewContent("dashboard")
//viewContent("adoption")
viewContent("register");
//viewContent("adopt")
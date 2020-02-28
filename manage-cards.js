function addCard(id){
    var tweet = $('<div class="card"> ' +'<i class="btn material-icons" style="color:red; font-size: 1.8em; text-align:right" onclick="deleteCard(this.parentElement)"> remove_circle_outline </i>'+
        '<div class="card-body"> <img class="card-img-top embed-responsive-item"\n src="https://i.pinimg.com/originals/4b/9a/4f/4b9a4fb2d2ca53176a0b06be368b8018.jpg"> ' +
        '<h4>Tweet</h4>\n' +
        '<p>Sample tweet will go here</p> </div></div>');
    tweet.appendTo(document.getElementById(id));
}

function deleteCard(card){
    card.remove()
}
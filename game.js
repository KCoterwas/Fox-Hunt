var runSomeTests = function(){
    var actionLabel = document.getElementById('action');

    console.log(actionLabel.tagName);
    console.log(descrip.tagName);
    console.log(descrip.innerHTML);
    console.log(descrip.parentNode.tagName);

    var headings = document.querySelectorAll('aside > h1');
 
    for (i = 0; i < headings.length; i++){
        console.log(headings[i].innerHTML);
    }

    console.log(inventory.tagName);
    console.log(inventory.innerHTML);
    console.log(inventory.parentNode.tagName);

    var inputText = document.getElementById('action');
    console.log(inputText.placeholder);
    
    console.log(document.querySelector('body'));
    //following doesn't do anything
    var lookAtMyBody = document.querySelectorAll('body > h1');
    for (i = 0; i < lookAtMyBody.length; i++){
        console.log(lookAtMyBody[i].innerHTML);
    }


};


window.onload = runSomeTests;

/* ------------------------------------------------------------------------ *  
4 states per letter: Transparent | Line | Block | Visible.
These states are shuffled for a unique "decode" effect each time.
* ------------------------------------------------------------------------ */

function decodeText(){
    var text = document.getElementsByClassName('decode-text')[0];
    var text2 = document.getElementsByClassName('decode-text')[1];
    var text3 = document.getElementsByClassName('decode-text')[2];
    var text4 = document.getElementsByClassName('decode-text')[3];
    // debug with
    // console.log(text, text.children.length);

    // assign the placeholder array its places
    var state = [];
    for(var i = 0, j = text.children.length; i < j; i++ ){
        text.children[i].classList.remove('state-1','state-2','state-3');
        state[i] = i;
    }

    var state2 = [];
    for(var i = 0, j = text2.children.length; i < j; i++ ){
        text2.children[i].classList.remove('state-1','state-2','state-3');
        state2[i] = i;
    }

    var state3 = [];
    for(var i = 0, j = text3.children.length; i < j; i++ ){
        text3.children[i].classList.remove('state-1','state-2','state-3');
        state3[i] = i;
    }

    var state4 = [];
    for(var i = 0, j = text4.children.length; i < j; i++ ){
        text4.children[i].classList.remove('state-1','state-2','state-3');
        state4[i] = i;
    }

    // shuffle the array to get new sequences each time
    var shuffled = shuffle(state);
    var shuffled2 = shuffle(state2);
    var shuffled3 = shuffle(state3);
    var shuffled4 = shuffle(state4);
 
    for(var i = 0, j = shuffled.length; i < j; i++ ){
        var child = text.children[shuffled[i]];
        classes = child.classList;

        // fire the first one at random times
        var state1Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){ 
            setTimeout(firstStages.bind(null, child), state1Time);
        }
    }

    for(var i = 0, j = shuffled2.length; i < j; i++ ){
        var child = text2.children[shuffled2[i]];
        classes = child.classList;

        // fire the first one at random times
        var state2Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){ 
            setTimeout(firstStages.bind(null, child), state2Time);
        }
    }

    for(var i = 0, j = shuffled3.length; i < j; i++ ){
        var child = text3.children[shuffled3[i]];
        classes = child.classList;

        // fire the first one at random times
        var state3Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){ 
            setTimeout(firstStages.bind(null, child), state3Time);
        }
    }

    for(var i = 0, j = shuffled4.length; i < j; i++ ){
        var child = text4.children[shuffled4[i]];
        classes = child.classList;

        // fire the first one at random times
        var state4Time = Math.round( Math.random() * (2000 - 300) ) + 50;
        if(classes.contains('text-animation')){ 
            setTimeout(firstStages.bind(null, child), state4Time);
        }
    }
}

// send the node for later .state changes
function firstStages(child){
    if( child.classList.contains('state-2') ){   
        child.classList.add('state-3');
    } else if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
    } else if( !child.classList.contains('state-1') ){
        child.classList.add('state-1');
        setTimeout(secondStages.bind(null, child), 100);
    }    
}
function secondStages(child){
    if( child.classList.contains('state-1') ){
        child.classList.add('state-2')
        setTimeout(thirdStages.bind(null, child), 100);
    } 
    else if( !child.classList.contains('state-1') )
    {
        child.classList.add('state-1')
    }
}
function thirdStages(child){
    if( child.classList.contains('state-2') ){
        child.classList.add('state-3')
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Demo only stuff
decodeText();

// beware: refresh button can overlap this timer and cause state mixups
setInterval(function(){ decodeText(); }, 6000);
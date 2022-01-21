'use strict';

var hiddennumber=Math.trunc(Math.random()*20 +1) ;
var score=20;
var highscore=0;
document.querySelector('.score').textContent=score;
// document.querySelector('.number').textContent=Math.trunc(hiddennumber);

// document.querySelector('.check').addEventListener('click',check() );

function check(){
    var enteredno = Number(document.querySelector('.guess').value);
    // document.querySelector('.number').textContent=Math.trunc(enteredno);
    // console.log(hiddennumber);
    // console.log(enteredno);
    if(checkscore())
    {
        if(enteredno==hiddennumber){
            document.querySelector('.message').textContent='Yayy ! correct number ..!';
            document.querySelector('body').style.backgroundColor='#60b347';
            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
        }
        else if(enteredno==0){
            document.querySelector('.message').textContent='No Number Entered !';
        }
        else if(enteredno>hiddennumber && enteredno<=20)
        {
            document.querySelector('.message').textContent='Too High !';
            score--;
            document.querySelector('.score').textContent=score;
            checkscore();
        }
        else if(enteredno<hiddennumber && hiddennumber>=1)
        {
            document.querySelector('.message').textContent='Too Low !';
            score--;
            document.querySelector('.score').textContent=score;
            checkscore();
        }
        else{
            document.querySelector('.message').textContent='Enter a number between 1 to 20!';
        }
        // else
    }
}
function checkscore(){
    // console.log('hello');
    if(score>0){
        return true;
    }
    else{
        lostgame();
        return false;
    }
}

function lostgame(){
    document.querySelector('.message').textContent='You Lost the game :(';
    document.querySelector('body').style.backgroundColor='red';
    var element = document.querySelector('check');
    element.classList.add("disabled");
}

function reset(){
    hiddennumber=Math.trunc(Math.random()*20 +1) ;
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.message').textContent='Start guessing...';
}
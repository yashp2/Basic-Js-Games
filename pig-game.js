'use strict'

let doccs0=document.querySelector('#current--0');
let doccs1=document.querySelector('#current--1');
let docs0=document.querySelector('#score--0');
// console.log(docs0);
let docs1=document.querySelector('#score--1');
let dice=document.querySelector('.dice');
// console.log(dice);
var scores=[0,0];
var csref=[doccs0 , doccs1];
var sref=[docs0,docs1];
var apref=[document.querySelector('.player--0'),document.querySelector('.player--1')];
var ap=0;
var randomnumber=0;
var currentscore=0;
function newgame(){
    document.querySelector('#name--0').textContent=(prompt('Enter name of player 1'));
    document.querySelector('#name--1').textContent=(prompt('Enter name of player 2'));
    alert('Instructions\n1.The player who touches the score 100 first wins!\n2.If while rolling a dice..you roll a 1 ,your current score will become zero and the chance passes to the other player.\nEnjoy Playing!');
    scores[0]=0;scores[1]=0;
    doccs0.textContent=0;
    doccs1.textContent=0;

    docs0.textContent=0;
    docs1.textContent=0;
    currentscore=0;
    ap=0;
    dice.classList.remove('hidden');
    document.querySelector('.btn--roll').classList.remove('hidden');
    document.querySelector('.btn--hold').classList.remove('hidden');
    rolldice();

}
function rolldice(){
    randomnumber=Math.trunc(Math.random()*6 + 1);
    dice.src=`./dice-${randomnumber}.png`;
    if(randomnumber==1)
    {
        currentscore=0;
        csref[ap].textContent=currentscore;
        switchplayer();
    }
    else{
    currentscore+=randomnumber;
    csref[ap].textContent=currentscore;
    
    }
    
}
newgame();

function switchplayer(){
    scores[ap]+=currentscore;
    sref[ap].textContent=scores[ap];
    currentscore=0;
    csref[ap].textContent=0;
    ap=(ap+1)%2;
    // console.log(ap);
    // scores[ap];
    // console.log(scores[ap]);
    apref[ap].classList.add('player--active');
    apref[(ap+1)%2].classList.remove('player--active');
    checkwinner();
}

function checkwinner(){
    if(scores[(ap+1)%2]>=100){
        apref[(ap+1)%2].classList.add('player--winner');
        document.querySelector('.btn--roll').classList.add('hidden');
        document.querySelector('.btn--hold').classList.add('hidden');
        dice.classList.add('hidden');
    }

}
const szabbutton = document.getElementById("szabalyzat")
const startgame = document.querySelector("#startgame")
const nyitooldal = document.getElementById("nyitooldal")
const playernumber = document.getElementById("playernumber")
const jatekosnevekdiv= document.getElementById("jatekosnevek")
const game = document.getElementById("game")
let kartyak=document.getElementById("kartyak")
const selected=document.getElementById("selectedcards")
const selectedThree=document.getElementById("selectedthree")
const dowehaveasetsetting=document.getElementById("dowehaveset")
const showasetsetting=document.getElementById("showaset")
const helperbuttonsplace = document.getElementById("helperbuttons")
const versenymod=document.getElementById("verseny")
const gyakorlomod=document.getElementById("gyakorlo")
const dowehavesetlabel=document.getElementById("dowehavesetlabel")
const showasetlabel=document.getElementById("showasetlabel")
const playersandscores = document.getElementById("playersandscores")
let startingTime=0
let timeElapsed = 0
let cards = 
[
    {
        color:"red",
        number: 1,
        shape:"rombusz",
        src:"(1).png"
    },
    {
        color:"red",
        number: 2,
        shape:"rombusz",
        src:"(2).png"
    },
    {
        color:"red",
        number: 3,
        shape:"rombusz",
        src:"(3).png"
    },
    {
        color:"red",
        number: 1,
        shape:"line",
        src:"(4).png"
    },
    {
        color:"red",
        number: 2,
        shape:"line",
        src:"(5).png"
    },
    {
        color:"red",
        number: 3,
        shape:"line",
        src:"(6).png"
    },
    {
        color:"red",
        number: 1,
        shape:"wavey",
        src:"(7).png"
    },
    {
        color:"red",
        number: 2,
        shape:"wavey",
        src:"(8).png"
    },
    {
        color:"red",
        number: 3,
        shape:"wavey",
        src:"(9).png"
    },
    {
        color:"green",
        number: 1,
        shape:"rombusz",
        src:"(10).png"
    },
    {
        color:"green",
        number: 1,
        shape:"line",
        src:"(11).png"
    },
    {
        color:"green",
        number: 1,
        shape:"wavey",
        src:"(12).png"
    },
    {
        color:"green",
        number: 2,
        shape:"rombusz",
        src:"(13).png"
    },
    {
        color:"green",
        number: 2,
        shape:"line",
        src:"(14).png"
    },
    {
        color:"green",
        number: 2,
        shape:"wavey",
        src:"(15).png"
    },
    {
        color:"green",
        number: 3,
        shape:"rombusz",
        src:"(16).png"
    },
    {
        color:"green",
        number: 3,
        shape:"line",
        src:"(17).png"
    },
    {
        color:"green",
        number: 3,
        shape:"wavey",
        src:"(18).png"
    },
    {
        color:"purple",
        number: 1,
        shape:"rombusz",
        src:"(19).png"
    },
    {
        color:"purple",
        number: 1,
        shape:"line",
        src:"(20).png"
    },
    {
        color:"purple",
        number: 1,
        shape:"wavey",
        src:"(21).png"
    },
    {
        color:"purple",
        number: 2,
        shape:"rombusz",
        src:"(22).png"
    },
    {
        color:"purple",
        number: 2,
        shape:"line",
        src:"(23).png"
    },
    {
        color:"purple",
        number: 2,
        shape:"wavey",
        src:"(24).png"
    },
    {
        color:"purple",
        number: 3,
        shape:"rombusz",
        src:"(25).png"
    },
    {
        color:"purple",
        number: 3,
        shape:"line",
        src:"(26).png"
    },
    {
        color:"purple",
        number: 3,
        shape:"wavey",
        src:"(27).png"
    }
]


let threemorecards=false
let cardsOriginal=[...cards]
let exampleSet=[]
const timer=document.createElement("h4")
helperbuttonsplace.insertAdjacentElement('beforeend',timer)
setInterval(countTime,1000)


function countTime()
{
    timeElapsed=Math.floor((Date.now()-startingTime)/1000)
    timer.textContent=`Idő:${timeElapsed}`

    
}

function makeselections()
{
    if(versenymod.checked)
    {
        dowehaveasetsetting.checked=false
        showasetsetting.checked=false
        dowehaveasetsetting.style="visibility:hidden"
        showasetsetting.style="visibility:hidden"
        showasetlabel.style="visibility:hidden"
        dowehavesetlabel.style="visibility:hidden"
    }
    if(gyakorlomod.checked)
    {
        dowehaveasetsetting.style="visibility:visible"
        showasetsetting.style="visibility:visible"
        showasetlabel.style="visibility:visible"
        dowehavesetlabel.style="visibility:visible"

        dowehaveasetsetting.checked=true
        showasetsetting.checked=true
    }

}

let eredmeny =document.createElement("h3")
eredmeny.textContent="Jó játékot!"
helperbuttonsplace.insertAdjacentElement('afterend',eredmeny)
let isSet=false
let selectedCards = [] 
let elso = null
let masodik = null
let harmadik = null
let doWeHaveASet=false
let selectedPlayer=null
var timeout



let players=[]
function genPlayers()
{
    const allplayers = document.getElementById("allplayers")
    players=[]
    for(let idx=0; idx<jatekosnevekdiv.childElementCount;idx++)
    {players.push(
        {
        name : jatekosnevekdiv.children[idx].value,
        score : 0
        } 
        )}
    
    for(let idx=0; idx<players.length;idx++)
    {
        const tmpcell =document.createElement("td")
        const tmpcell2=document.createElement("td")
        const button = document.createElement("button")
        button.textContent = players[idx].name
        const score= document.createElement("h4") 
        score.textContent=`${players[idx].score}`
        button.addEventListener('click',selectPlayer)
        tmpcell.appendChild(button)
        tmpcell2.appendChild(score)
        playersandscores.rows[0].appendChild(tmpcell)
        playersandscores.rows[1].appendChild(tmpcell2)

    }
}
let gombsorszam=null
function selectPlayer(e)
{
    for(let idx=0; idx<players.length;idx++)
    {
        playersandscores.rows[0].children[idx].firstElementChild.style.background="lightgrey"
        console.log(0)
        if(e.target.innerText.split("\n")[0]==players[idx].name)
        {
            e.target.style.background="lightblue"
            selectedPlayer = players[idx]
            gombsorszam = idx
            timeout = window.setTimeout(deSelectPlayer,10000)
            
        }
        
    } 
}

function deSelectPlayer()
{
    playersandscores.rows[0].children[gombsorszam].firstElementChild.style.background="lightgrey"
    eredmeny.style.color="red"
    eredmeny.innerText="Lejárt az időd!(10mp) Töröltük a jelölésed."
    selectedPlayer=null
}

function randBtw(a,b){
    return Math.floor(Math.random() * b) + a
}

szabbutton.addEventListener('click',function(e){
    if(document.getElementById("szabalyok").style.visibility=="visible")
    {
        document.getElementById("szabalyok").style.visibility="hidden";
    }
    else
    {
        document.getElementById("szabalyok").style.visibility="visible";
    }
})

playernumber.addEventListener('click',insertJatekosNevek)

function insertJatekosNevek()
{
    for (let index = jatekosnevekdiv.childElementCount; jatekosnevekdiv.childElementCount > playernumber.value ; index--) {
        jatekosnevekdiv.lastChild.remove();
    }
    for(let idx=jatekosnevekdiv.childElementCount; idx<playernumber.value;idx++)
    {
       const tmp = document.createElement("input")
       tmp.type = "text"
       tmp.value = `Játékos${idx+1}`
       jatekosnevekdiv.appendChild(tmp);
    }
   
}

function insertHelperButtons()
{

if(dowehaveasetsetting.checked)
{
    const dowehaveasetbutton=document.createElement("button")
    dowehaveasetbutton.textContent="Van SET?"
    helperbuttonsplace.appendChild(dowehaveasetbutton)
    dowehaveasetbutton.addEventListener('click',function()
    {
        doWeHaveSet()
        if(!doWeHaveASet)
    {
            eredmeny.style.color="red"
            eredmeny.textContent="nincs benne SET!"
            helperbuttonsplace.insertAdjacentElement('afterend',eredmeny)
    }
    else
    {
            eredmeny.style.color="green"
            eredmeny.textContent="van benne SET!"
            helperbuttonsplace.insertAdjacentElement('afterend',eredmeny)
    }
    })
}
if(showasetsetting.checked)
{
    const showasetbutton=document.createElement("button")
    showasetbutton.textContent="Mutass egy SET-et!"
    helperbuttonsplace.appendChild(showasetbutton)
    showasetbutton.addEventListener('click',showExampleSet)
}
const threemorecards=document.createElement("button")
threemorecards.textContent="Plusz 3 lap"
helperbuttonsplace.appendChild(threemorecards)
threemorecards.addEventListener('click',plus3Cards)
}

function startnewgame()
{

    cards=[...cardsOriginal]
    selectedCards.splice(0,selectedCards.length)
    nyitooldal.style.visibility="hidden"
    nyitooldal.style.width="1px"
    nyitooldal.style.height="1px"
    
    
    startingTime=Date.now();

    game.style.visibility="visible"

    for(let idx=0; idx<players.length;idx++)
    {
        players[idx].score=0
        playersandscores.rows[1].children[idx].firstElementChild.innerText=`${players[idx].score}`
    }

    for(let idx=0;idx<3; idx++)
    {
        const tmp = document.createElement("tr")
        
        for(let jdx=0; jdx<4; jdx++)
        {
            const randnumb = randBtw(0,(cards.length)-1)
            console.log(randnumb)
            const tmptd = document.createElement("td")
            const myimg= document.createElement("img")
            myimg.src=`clear/   ${cards[randnumb].src}`
            myimg.addEventListener('click',selectCard)
            tmptd.appendChild(myimg)
            tmp.appendChild(tmptd)
            selectedCards.push(
                {
                    color: cards[randnumb].color,
                    number: cards[randnumb].number,
                    shape: cards[randnumb].shape,
                    src: cards[randnumb].src,
                    indexRow: idx,
                    indexCol: jdx
                })
            cards.splice(randnumb,1)
        }
        kartyak.appendChild(tmp)
    }
    if(players.length==0)
    {genPlayers()}
    
    insertHelperButtons()
}

startgame.addEventListener('click',startnewgame)
let idx = null

function selectCard(e)
{
    if(players.length==1)
    {
        selectedPlayer=players[0]
        gombsorszam=0
    }
    if(selectedPlayer==null)
    {return;}
    else
    {
        idx=0
        while(selectedThree.cells[idx]!=null && idx < selectedThree.cells.length && selectedThree.cells[idx].childElementCount!=0 )
        {++idx;}
        const myimg= document.createElement("img")
        myimg.src=e.target.src
        myimg.addEventListener('click',function(e){e.target.remove()})
        if(selectedThree.cells[idx]!=null)
        {selectedThree.cells[idx].appendChild(myimg)}
        
        if(idx==2)
        {
            getSelectedCards()
            decideIfSet(elso,masodik,harmadik)
            if(isSet)
            {

                for(let idx=0; idx<kartyak.rows.length;idx++)
                {
                    for(let jdx=0; jdx<kartyak.rows[0].cells.length;jdx++)
                    {
                        kartyak.rows[idx].cells[jdx].style.background="white"
                    }
                }
                getNewCards()
                if(threemorecards)
                {
                    minus3Cards()
                }
                eredmeny.style.color="green"
                eredmeny.textContent="Ez egy Set!"
                helperbuttonsplace.insertAdjacentElement('afterend',eredmeny)
                selectedPlayer.score++
                playersandscores.rows[1].children[gombsorszam].firstElementChild.innerText=`${selectedPlayer.score}`
                playersandscores.rows[0].children[gombsorszam].firstElementChild.style.background="lightgrey"
                for(let idx=0;idx<playersandscores.rows[0].children.length;idx++)
                {
                   playersandscores.rows[0].children[idx].firstElementChild.disabled=false
                }
                selectedPlayer=null       
                clearTimeout(timeout)
            }
            else
            {

                eredmeny.style.color="red"
                eredmeny.textContent="Ez nem set!"
                helperbuttonsplace.insertAdjacentElement('afterend',eredmeny)
                selectedPlayer.score--
                playersandscores.rows[1].children[gombsorszam].firstElementChild.innerText=`${selectedPlayer.score}`
                playersandscores.rows[0].children[gombsorszam].firstElementChild.disabled=true
                playersandscores.rows[0].children[gombsorszam].firstElementChild.style.background="lightgrey"
                let alldisabled=true
                for(let idx=0;idx<playersandscores.rows[1].children.length;idx++)
                {
                    alldisabled = alldisabled && (playersandscores.rows[0].children[idx].firstElementChild.disabled==true)
                }
                if(alldisabled)
                {
                    for(let idx=0;idx<playersandscores.rows[0].children.length;idx++)
                    {
                       playersandscores.rows[0].children[idx].firstElementChild.disabled=false
                    }
                }
                selectedPlayer=null
                clearTimeout(timeout)
            }
            window.setTimeout(deleteSelected,3000)   
            if(cards.length==0)
            {
                eredmeny.textContent="Elfogyott a pakliból a kártya. nem osztunk többet."
                doWeHaveSet()
                if(!doWeHaveASet)
                {
                eredmeny.textContent="Elfogytak a SET-ek. Szeretnél új játékot kezdeni?"
                const restartbutton = document.createElement("button")
                restartbutton.textContent="Restart"
                helperbuttonsplace.appendChild(restartbutton)
                restartbutton.addEventListener('click',function(){
                for(let idx=0; idx<3;idx++)
                {
                    kartyak.deleteRow(0)
                }
                setTimeout(startnewgame,3000)
                helperbuttonsplace.innerHTML="A kiválasztott kártyák"
                })

                }
            } 
        }
    }
}

function deleteSelected()
{
    for(let idx=0; idx<selectedThree.children.length; idx++)
        {
            selectedThree.children[idx].firstChild.remove()
        }
}


function getSelectedCards()
{
    for(let idx=0; idx<selectedCards.length;idx++)
    {
        if(selectedThree.cells[0].firstChild.src.split("%20%20%20")[1]==selectedCards[idx].src)
        {
            elso=selectedCards[idx]
        }
        if(selectedThree.cells[1].firstChild.src.split("%20%20%20")[1]==selectedCards[idx].src)
        {
            masodik=selectedCards[idx]
        }
        if(selectedThree.cells[2].firstChild.src.split("%20%20%20")[1]==selectedCards[idx].src)
        {
            harmadik=selectedCards[idx]
        }
    }
}

versenymod.addEventListener('click', makeselections)
gyakorlomod.addEventListener('click', makeselections)

function decideIfSet(elso,masodik,harmadik)
{
    isSet = ((elso.color == masodik.color && elso.color == harmadik.color && masodik.color == harmadik.color) 
            || (elso.color != masodik.color && elso.color != harmadik.color && masodik.color != harmadik.color))       
            &&
            ((elso.number == masodik.number && elso.number == harmadik.number  && masodik.number == harmadik.number) 
            || (elso.number != masodik.number && elso.number != harmadik.number && masodik.number != harmadik.number))  
            &&
            ((elso.shape == masodik.shape && elso.shape == harmadik.shape && masodik.shape == harmadik.shape) 
            || (elso.shape != masodik.shape && elso.shape != harmadik.shape && masodik.shape != harmadik.shape))
            && elso != masodik && elso != harmadik && masodik != harmadik
}



function doWeHaveSet()
{
    doWeHaveASet=false
    isSet=false
    exampleSet=[]
    for(let idx=0; idx<selectedCards.length;idx++)
    {
        for(let jdx=0;jdx<selectedCards.length;jdx++)
        {
            for(let zdx=0;zdx<selectedCards.length;zdx++)
            {
                if(idx != jdx && idx != zdx && jdx != zdx)
                {
                    decideIfSet(selectedCards[idx],selectedCards[jdx],selectedCards[zdx])
                    if(isSet && exampleSet.length == 0 )
                    {
                        exampleSet.push(selectedCards[idx])
                        exampleSet.push(selectedCards[jdx])
                        exampleSet.push(selectedCards[zdx])
                    }
                    doWeHaveASet = (doWeHaveASet || isSet)
                }
            }
        }
    }
}

function getNewCards()
{
    if(isSet)
    {
        let index = selectedCards.indexOf(elso)
        let index2 = selectedCards.indexOf(masodik)
        let index3 = selectedCards.indexOf(harmadik)
        if(cards.length!=0 && !threemorecards)
        {
            
            const randnumb=randBtw(0,cards.length)
            selectedCards[index]=
                {
                    color: cards[randnumb].color,
                    number: cards[randnumb].number,
                    shape: cards[randnumb].shape,
                    src: cards[randnumb].src,
                    indexRow: elso.indexRow,
                    indexCol: elso.indexCol
                }
            cards.splice(randnumb,1)
            kartyak.rows[elso.indexRow].cells[elso.indexCol].firstElementChild.src=`clear/   ${selectedCards[index].src}`

            
            const randnumb2=randBtw(0,cards.length)
            selectedCards[index2]=
                {
                    color: cards[randnumb2].color,
                    number: cards[randnumb2].number,
                    shape: cards[randnumb2].shape,
                    src: cards[randnumb2].src,
                    indexRow: masodik.indexRow,
                    indexCol: masodik.indexCol
                }
            cards.splice(randnumb2,1)
            kartyak.rows[masodik.indexRow].cells[masodik.indexCol].firstElementChild.src=`clear/   ${selectedCards[index2].src}`
            console.log(JSON.stringify(selectedCards[index]))
            console.log(JSON.stringify(selectedCards[index2]))
            console.log(JSON.stringify(selectedCards[index3]))
            console.log(JSON.stringify(index))
            console.log(JSON.stringify(index2))
            console.log(JSON.stringify(index3))
            
            const randnumb3=randBtw(0,cards.length)
            selectedCards[index3]=
            {
                color: cards[randnumb3].color,
                number: cards[randnumb3].number,
                shape: cards[randnumb3].shape,
                src: cards[randnumb3].src,
                indexRow: harmadik.indexRow,
                indexCol: harmadik.indexCol
            }
            cards.splice(randnumb3,1)
            kartyak.rows[harmadik.indexRow].cells[harmadik.indexCol].firstElementChild.src=`clear/   ${selectedCards[index3].src}`
        }
        else if(cards.length == 0 || threemorecards )
        {
                kartyak.rows[elso.indexRow].cells[elso.indexCol].firstElementChild.remove();
                kartyak.rows[masodik.indexRow].cells[masodik.indexCol].firstElementChild.remove();
                kartyak.rows[harmadik.indexRow].cells[harmadik.indexCol].firstElementChild.remove();
            
            selectedCards.splice(index,1)
            let index2=selectedCards.indexOf(masodik)
            selectedCards.splice(index2,1)
            let index3=selectedCards.indexOf(harmadik)
            selectedCards.splice(index3,1)
            threemorecards=false
            deleteSelected()
        }
    }
}

function showExampleSet()
{
    for(let idx=0; idx<kartyak.rows.length;idx++)
    {
        for(let jdx=0; jdx<kartyak.rows[0].cells.length;jdx++)
        {
            kartyak.rows[idx].cells[jdx].style.background="white"
        }

    }
    doWeHaveSet()
    if(doWeHaveASet)
    {
       kartyak.rows[exampleSet[0].indexRow].cells[exampleSet[0].indexCol].style.background="green";
       kartyak.rows[exampleSet[1].indexRow].cells[exampleSet[1].indexCol].style.background="green";
       kartyak.rows[exampleSet[2].indexRow].cells[exampleSet[2].indexCol].style.background="green";
    }
    else
    {
        eredmeny.style.color="red"
        eredmeny.textContent="nincs benne SET!"
        helperbuttonsplace.insertAdjacentElement('afterend',eredmeny)
    }
}

function plus3Cards()
{
    
    if(!threemorecards && cards.length > 2)
    {
        for(let idx=0; idx<3;idx++)
        {
                const randnumb = randBtw(0,(cards.length)-1)
                console.log(randnumb)
                const tmptd = document.createElement("td")
                const myimg= document.createElement("img")
                myimg.src=`clear/   ${cards[randnumb].src}`
                myimg.addEventListener('click',selectCard)
                tmptd.appendChild(myimg)
                kartyak.children[idx].appendChild(tmptd)
                selectedCards.push(
                    {
                        color: cards[randnumb].color,
                        number: cards[randnumb].number,
                        shape: cards[randnumb].shape,
                        src: cards[randnumb].src,
                        indexCol: kartyak.rows[0].cells.length-1,
                        indexRow: idx
                    })
                cards.splice(randnumb,1)
        }
    }
    threemorecards=true
}

function minus3Cards()
{
    if(threemorecards)
    {
        for(let idx=0;idx<3;idx++)
        {
        kartyak.children[idx].lastElementChild.remove();
        }
    }
    threemorecards=false
    
}



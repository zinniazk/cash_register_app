const billamt = document.querySelector("#billamt");
const cashgiven = document.querySelector("#cashgiven");
const checkbutton = document.querySelector("#checkbtn");

const notes = [2000, 500, 100, 50, 20, 10, 5, 1];
let notesgiven = [];
const finalnotesgiven = document.querySelectorAll(".noofnotes");
var notenumber;
var remainder;
var i=0;
//console.log(billamt.value);
checkbutton.addEventListener("click", logclick);

function logclick() {
    if (billamt.value > 0) {
        console.log(`Cash given ${cashgiven.value}`);
        console.log(`Bill amt ${billamt.value}`);
        // if (cashgiven.value <= billamt.value) {
        //     alert("Cash Given should be greater than bill amount");
        // }
        if (Number(billamt.value) < Number(cashgiven.value)) {
            var givebackamt = (cashgiven.value - billamt.value);
            // console.log(givebackamt);

            notes.forEach(item => {
                remainder = givebackamt % item;  // 16 = 116%100
                // console.log(remainder);
                if (remainder < givebackamt) {
                    notenumber = Math.trunc(givebackamt / item);  //116/100
                    console.log(notenumber);
                    notesgiven.push(notenumber);
                    // if (notenumber>0) {
                    //  notesgiven[item].innerText=notenumber;
                    // }
                    givebackamt = remainder;
                }
                else{
                    notesgiven.push(0);
                }
                finalnotesgiven[i].innerHTML=notesgiven[i];
                console.log(`Number of notes${i}${finalnotesgiven}`);
                i++;

            });

        }
        else{
            alert("Cash given should be greater than bill amount");
        }
    }
    finalnotesgiven.innerHTML=notesgiven;
}

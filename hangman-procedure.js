const list_symbols = ["ٱلرَّحْمَٰنُ", "ٱلرَّحِيمُ", "ٱلْمَلِكُ", "ٱلْقُدُّوسُ", "ٱلسَّلَامُ", "ٱلْمُؤْمِنُ", "ٱلْمُهَيْمِنُ", "ٱلْعَزِيزُ", "ٱلْجَبَّارُ", "ٱلْمُتَكَبِّرُ"]
const list_arabic = ["Ar-Rahmaan", "Ar-Raheem", "Al-Malik", "Al-Quddus", "As-Salaam", "Al-Mumin", "Al-Muhaymin", "Al-Azeez", "Al-Jabbaar", "Al-Mutakabbir"]
const list_English = ["The Most or Entirely Merciful", "The Bestower of Mercy", "The King and Owner of Dominion", "The Absolutely Pure", "The Perfection and Giver of Peace", "The One Who gives Emaan and Security", "The Guardian, The Witness, The Overseer", "The All Mighty", "The Compeller, The Restorer", "The Supreme, The Majestic"]
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
let currentindex = 0; 
let current_correct; 
let current_symbol = document.getElementById("main_symbol");
let current_arabic = document.getElementById("main_Arabic");

fill_options()

function Check_answer(choice) {
    let choice_button = document.getElementById(choice);
    let always_correct = document.getElementById(current_correct)
    if(choice_button.textContent == always_correct.textContent){
        choice_button.style.backgroundColor = "lightgreen";
        choice_button.style.color = "white";
    }
    else{
        choice_button.style.backgroundColor = "red";
        choice_button.style.color = "white"; 
        setTimeout(() => {
            always_correct.style.backgroundColor = "lightgreen";
            always_correct.style.color = "white";
          }, 700);
    }
    setTimeout(() => {
        currentindex++;
        always_correct.style.backgroundColor = "";
        always_correct.style.color = "";
        choice_button.style.backgroundColor = ""; 
        choice_button.style.color = "";
        fill_options()
      }, 2000);
    
}

function fill_options() {
    opt1.textContent = ""
    opt2.textContent = ""
    opt3.textContent = ""
    opt4.textContent = ""
    let i = currentindex; 
    let j = 0;
    current_symbol.textContent = list_symbols[i];
    current_arabic.textContent = list_arabic[i];
    let correct_translation = list_English[i]
    let correct_pos = Math.floor(Math.random() * 4);
    if (correct_pos == 0){
        opt1.textContent = correct_translation; 
        current_correct = "opt1";
    }   
    if (correct_pos == 1){
        opt2.textContent = correct_translation; 
        current_correct = "opt2";
    }   
    if (correct_pos == 2){
        opt3.textContent = correct_translation; 
        current_correct = "opt3";
    }   
    if (correct_pos == 3){
        opt4.textContent = correct_translation;
        current_correct = "opt4"; 
    }   

    while((opt1.textContent == "") || (opt2.textContent == "") || (opt3.textContent == "") || (opt4.textContent == "")){
        if(opt1.textContent == ""){
            let f1 = Math.floor(Math.random() * 10);
            if ((list_English[f1] != opt2.textContent) && (list_English[f1] != opt3.textContent) && (list_English[f1] != opt4.textContent)){
                opt1.textContent = list_English[f1]
            }
        }
        if(opt2.textContent == ""){
            let f1 = Math.floor(Math.random() * 10);
            if ((list_English[f1] != opt1.textContent) && (list_English[f1] != opt3.textContent) && (list_English[f1] != opt4.textContent)){
                opt2.textContent = list_English[f1]
            }
        }
        if(opt3.textContent == ""){
            let f1 = Math.floor(Math.random() * 10);
            if ((list_English[f1] != opt1.textContent) && (list_English[f1] != opt2.textContent) && (list_English[f1] != opt4.textContent)){
                opt3.textContent = list_English[f1]
            }
        }
        if(opt4.textContent == ""){
            let f1 = Math.floor(Math.random() * 10);
            if ((list_English[f1] != opt1.textContent) && (list_English[f1] != opt2.textContent) && (list_English[f1] != opt3.textContent)){
                opt4.textContent = list_English[f1]
            }
        }
}
}
const list_symbols = [
    "ٱلرَّحْمَٰنُ", "ٱلرَّحِيمُ", "ٱلْمَلِكُ", "ٱلْقُدُّوسُ", "ٱلسَّلَامُ", "ٱلْمُؤْمِنُ", "ٱلْمُهَيْمِنُ", "ٱلْعَزِيزُ", "ٱلْجَبَّارُ", "ٱلْمُتَكَبِّرُ",
    "ٱلْخَٰلِقُ", "ٱلْبَارِئُ", "ٱلْمُصَوِّرُ", "ٱلْغَفَّارُ", "ٱلْقَهَّارُ", "ٱلْوَهَّابُ", "ٱلْرَّزَّاقُ", "ٱلْفَتَّاحُ", "ٱلْعَلِيمُ", "ٱلْقَابِضُ",
    "ٱلْبَاسِطُ", "ٱلْخَافِضُ", "ٱلْرَّافِعُ", "ٱلْمُعِزُّ", "ٱلْمُذِلُّ", "ٱلسَّمِيعُ", "ٱلْبَصِيرُ", "ٱلْحَكَمُ", "ٱلْعَدْلُ", "ٱللَّطِيفُ",
    "ٱلْخَبِيرُ", "ٱلْحَلِيمُ", "ٱلْعَظِيمُ", "ٱلْغَفُورُ", "ٱلشَّكُورُ", "ٱلْعَلِيُّ", "ٱلْكَبِيرُ", "ٱلْحَفِيظُ", "ٱلْمُقيِتُ", "ٱلْحَسِيبُ",
    "ٱلْجَلِيلُ", "ٱلْكَرِيمُ", "ٱلْرَّقِيبُ", "ٱلْمُجِيبُ", "ٱلْوَاسِعُ", "ٱلْحَكِيمُ", "ٱلْوَدُودُ", "ٱلْمَجِيدُ", "ٱلْبَاعِثُ", "ٱلْشَّهِيدُ",
    "ٱلْحَقُّ", "ٱلْوَكِيلُ", "ٱلْقَوِيِيُ", "ٱلْمَتِينُ", "ٱلْوَلِيُ", "ٱلْحَمِيدُ", "ٱلْمُحْصِي", "ٱلْمُبْدِئُ", "ٱلْمُعِيدُ", "ٱلْمُحْيِي",
    "ٱلْمُمِيتُ", "ٱلْحَيِّيُ", "ٱلْقَيُّومُ", "ٱلْوَاجِدُ", "ٱلْمَاجِدُ", "ٱلْوَاحِدُ", "ٱلْأَحَدُ", "ٱلصَّمَدُ", "ٱلْقَادِرُ", "ٱلْمُقْتَدِرُ",
    "ٱلْمُقَدِّمُ", "ٱلْمُؤَخِّرُ", "ٱلْأوَّلُ", "ٱلْآخِرُ", "ٱلظَّٰهِرُ", "ٱلْبَاطِنُ", "ٱلْوَالِي", "ٱلْمُتَعَالِي", "ٱلْبَرُّ", "ٱلتَّوَابُ",
    "ٱلْمُنْتَقِمُ", "ٱلْعَفُوُ", "ٱلْرَّؤُوفُ", "مَالِكُ ٱلْمُلْكُ", "ذُوالْجَلاَلِ وَالإكْرَامِ", "ٱلْمُقْسِطُ", "ٱلْجَامِعُ", "ٱلْغَنيُّ", "ٱلْمُغْنِيُ", "ٱلْمَانِعُ",
    "ٱلضَّٰرَ", "ٱلنَّافِعُ", "ٱلْنُورُ", "ٱلْهَادِي", "ٱلْبَدِيعُ", "ٱلْبَاقِي", "ٱلْوَارِثُ", "ٱلرَّشِيدُ", "ٱلصَّبُورُ"
];
const list_arabic = [
    "1. Ar-Rahmaan", "2. Ar-Raheem", "3. Al-Malik", "4. Al-Quddus", "5. As-Salaam", "6. Al-Mu’min", "7. Al-Muhaymin", "8. Al-Azeez", "9. Al-Jabbaar", "10. Al-Mutakabbir",
    "11. Al-Khaaliq", "12. Al-Baari’", "13. Al-Musawwir", "14. Al-Ghaffaar", "15. Al-Qahhaar", "16. Al-Wahhaab", "17. Ar-Razzaaq", "18. Al-Fattah", "19. Al-‘Aleem", "20. Al-Qaabid",
    "21. Al-Baasit", "22. Al-Khaafid", "23. Ar-Raafi’", "24. Al-Mu’izz", "25. Al-Mudhill", "26. As-Samee’", "27. Al-Baseer", "28. Al-Hakam", "29. Al-‘Adl", "30. Al-Lateef",
    "31. Al-Khabeer", "32. Al-Haleem", "33. Al-‘Azeem", "34. Al-Ghafoor", "35. Ash-Shakoor", "36. Al-‘Aliyy", "37. Al-Kabeer", "38. Al-Hafeez", "39. Al-Muqeet", "40. Al-Haseeb",
    "41. Al-Jaleel", "42. Al-Kareem", "43. Ar-Raqeeb", "44. Al-Mujeeb", "45. Al-Waasi’", "46. Al-Hakeem", "47. Al-Wadud", "48. Al-Majeed", "49. Al-Ba’ith", "50. Ash-Shaheed",
    "51. Al-Haqq", "52. Al-Wakeel", "53. Al-Qawiyy", "54. Al-Mateen", "55. Al-Waliyy", "56. Al-Hameed", "57. Al-Muhsi", "58. Al-Mubdi’", "59. Al-Mu’eed", "60. Al-Muhyi",
    "61. Al-Mumeet", "62. Al-Hayy", "63. Al-Qayyoom", "64. Al-Waajid", "65. Al-Maajid", "66. Al-Waahid", "67. Al-Ahad", "68. As-Samad", "69. Al-Qaadir", "70. Al-Muqtadir",
    "71. Al-Muqaddim", "72. Al-Mu’akhkhir", "73. Al-Awwal", "74. Al-Aakhir", "75. Az-Zaahir", "76. Al-Baatin", "77. Al-Waali", "78. Al-Muta’aali", "79. Al-Barr", "80. At-Tawwaab",
    "81. Al-Muntaqim", "82. Al-‘Afuww", "83. Ar-Ra’oof", "84. Maalik-ul-Mulk", "85. Dhul-Jalaali wal-Ikraam", "86. Al-Muqsit", "87. Al-Jaami’", "88. Al-Ghaniyy", "89. Al-Mughni", "90. Al-Maani’",
    "91. Ad-Daarr", "92. An-Naafi’", "93. An-Noor", "94. Al-Haadi", "95. Al-Badee’", "96. Al-Baaqi", "97. Al-Waarith", "98. Ar-Rasheed", "99. As-Saboor"
];
const list_English = [
    "The Most or Entirely Merciful",
    "The Bestower of Mercy",
    "The King and Owner of Dominion",
    "The Absolutely Pure",
    "The Perfection and Giver of Peace",
    "The One Who gives Emaan and Security",
    "The Guardian, The Witness, The Overseer",
    "The All Mighty",
    "The Compeller, The Restorer",
    "The Supreme, The Majestic",
    "The Creator, The Maker",
    "The Originator",
    "The Fashioner",
    "The All- and Oft-Forgiving",
    "The Subduer, The Ever-Dominating",
    "The Giver of Gifts",
    "The Provider",
    "The Opener, The Judge",
    "The All-Knowing, The Omniscient",
    "The Withholder",
    "The Extender",
    "The Reducer, The Abaser",
    "The Exalter, The Elevator",
    "The Honourer, The Bestower",
    "The Dishonourer, The Humiliator",
    "The All-Hearing",
    "The All-Seeing",
    "The Judge, The Giver of Justice",
    "The Utterly Just",
    "The Subtle One, The Most Gentle",
    "The Acquainted, The All-Aware",
    "The Most Forbearing",
    "The Magnificent, The Supreme",
    "The Forgiving, The Exceedingly Forgiving",
    "The Most Appreciative",
    "The Most High, The Exalted",
    "The Greatest, The Most Grand",
    "The Preserver, The All-Heedful and All-Protecting",
    "The Sustainer, The Maintainer",
    "The Reckoner",
    "The Majestic",
    "The Most Generous, The Most Esteemed",
    "The Watchful, The All-Watchful",
    "The Responsive, The Answerer",
    "The All-Encompassing, The Boundless",
    "The All-Wise",
    "The Most Loving",
    "The Glorious, The Most Honorable",
    "The Infuser of New Life",
    "The All Observing Witnessing",
    "The Absolute Truth",
    "The Trustee, The Disposer of Affairs",
    "The All-Strong",
    "The Firm, The Steadfast",
    "The Protecting Associate",
    "The Praiseworthy",
    "The All-Enumerating, The Counter",
    "The Originator, The Initiator",
    "The Restorer, The Reinstater",
    "The Giver of Life",
    "The Creator of Death",
    "The Ever-Living",
    "The Sustainer, The Self-Subsisting",
    "The Perceiver",
    "The Illustrious, The Magnificent",
    "The One, The Indivisible",
    "The Unique, The Only One",
    "The Eternal, Satisfier of Needs",
    "The Omnipotent",
    "The Powerful",
    "The Expediter, The Promoter",
    "The Delayer",
    "The First",
    "The Last, The Utmost",
    "The Manifest, The All-Surpassing",
    "The Hidden One, Knower of the Hidden",
    "The Sole Governor",
    "The Self Exalted",
    "The Source of All Goodness",
    "The Ever-Pardoning",
    "The Avenger",
    "The Pardoner",
    "The Most Kind",
    "Master of the Dominion, Owner of the Kingdom",
    "Possessor of Glory and Honour",
    "The Just One",
    "The Gatherer, The Uniter",
    "The Self-Sufficient, The Wealthy",
    "The Enricher",
    "The Withholder",
    "The Distresser",
    "The Propitious, The Benefactor",
    "The Light",
    "The Guide",
    "The Incomparable Originator",
    "The Ever-Lasting",
    "The Inheritor",
    "The Guide to the Right Path",
    "The Patient"
  ];
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const LeftArrow = document.getElementById("LeftArrow");
const RightArrow = document.getElementById("RightArrow");
let currentindex = 0; 
let current_correct; 
let current_symbol = document.getElementById("main_symbol");
let current_arabic = document.getElementById("main_Arabic");
let horn = document.getElementById("horn");
let currentAudio = null;
let to_index = 98;
let from_index = 0;
let from_bar = document.getElementById('from');
let to_bar = document.getElementById('to');
let from_bar_val;
let to_bar_val;
let AllowShortcutOpt;
let quiz_screen = document.getElementById('quiz_screen');
let start_screen = document.getElementById('start-screen');
let names_screen = document.getElementById('names-screen');
let quiz_button = document.getElementById("quiz_button");
let names_button = document.getElementById("names_button");
let centered_symbols = document.getElementById('centered_symbols')
let name_title = document.getElementById("name_title");
let table_container = document.getElementById('table-container')

AllowShortcutOpt = true; // sentinel waarde om de optieshortcut te beheren 

hideArrows()
function hideArrows(){
    if (currentindex == 0){ // bij begin en eind één pijlknop verbergen 
        LeftArrow.style.display = "none";
    }else if (currentindex == 98){
        RightArrow.style.display = "none";
    }else{
        LeftArrow.style.display = "block"; 
        RightArrow.style.display = "block";
    }
}
function playAudio() {
    let currentName = document.getElementById("main_Arabic").textContent.trim();
    currentName = currentName.replace(/^\d+\.\s*/, ''); // deze regel code van chatGPT (voor nummering bij de namen weg te halen)
    let audioPath = `name_audios/${currentName}.mp3`;

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
    }
    currentAudio = new Audio(audioPath);
    
    horn.onclick = null;
    currentAudio.play()
    horn.style.color = "#00FF40";
    horn.style.fontSize = "4.4vw";

    currentAudio.onended = () => {
        horn.style.color = "";
        horn.style.fontSize = "4vw";
        horn.onclick = playAudio;
        currentAudio = null;
    };  
horn.onclick = playAudio;
}

var input = document.querySelector('input'); 
input.addEventListener('input', resizeInput); // inputbar die automatisch resized  
resizeInput.call(input); 
from_bar.addEventListener('blur', () => AllowShortcutOpt = true); // blur => JS functie dat checkt of er focus verloren is (hier in de inputfield)
from_bar.addEventListener('focus', () => AllowShortcutOpt = false); // focus => JS functie dat focust op kliks/wijzigingen in de input field van from
from_bar.addEventListener('input', function(event) {
    var currentValue = event.target.value;
    if ((isNaN(currentValue)) || (currentValue < 1) || (currentValue > 99)){
        from_bar.value = "";
    }else{ 
        from_bar_val =  Number(from_bar.value);
        if(to_bar_val < from_bar_val){
            to_bar.style.outline = "2px solid red";
            opt1.disabled = true;
            opt2.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;
        }else{
            currentindex = from_bar.value - 1; 
            hideArrows()
            from_index = currentindex;
            to_bar.style.outline = "none";
            opt1.disabled = false;
            opt2.disabled = false;
            opt3.disabled = false;
            opt4.disabled = false;
            fill_options()
        }
    }
  });
  to_bar.addEventListener('blur', () => AllowShortcutOpt = true);
  to_bar.addEventListener('focus', () => AllowShortcutOpt = false);
  to_bar.addEventListener('input', function(event) {
    var currentValue = event.target.value;
    if ((isNaN(currentValue)) || (currentValue < 1) || (currentValue > 99)){
        to_bar.value = "";
    }else{
        to_bar_val = Number(to_bar.value);
        if(to_bar_val < from_bar_val){
            to_bar.style.outline = "2px solid red";
            opt1.disabled = true;
            opt2.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;
        }else{
            to_index = to_bar.value - 1;
            to_bar.style.outline = "none";
            opt1.disabled = false;
            opt2.disabled = false;
            opt3.disabled = false;
            opt4.disabled = false;
        }
    }
  });

function switch_names(direction){
    if (to_bar_val < from_bar_val){
        return;
    }
    if (direction == "right"){
        currentindex++; 
        if (currentindex > 98){
            currentindex = 98;
            return;}
        fill_options()
    }else{
        currentindex--;
        if (currentindex < 0){
            currentindex = 0;
            return;
        }
        fill_options()
    }
    hideArrows()
}

const buttons = document.querySelectorAll('button'); // fancy mousehover effect voor elke optie
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
    button.style.transform = "scale(1.08)";

    });

    button.addEventListener('mouseout', () => {
    button.style.transform = "scale(1)";
    });
});
addEventListener("keyup", function(event) { // De keyinput handeler (o.a. voor shortcuts)
    if (to_bar_val < from_bar_val){
        return;
    }else if ((event.keyCode === 39)) {
        switch_names("right")
    }else if(event.keyCode === 37){
        switch_names("left")
    }else if(AllowShortcutOpt == false){
        return; 
    }else if(event.keyCode === 49){ // 49 = "1" => shortcut voor optie 1 te kiezen
        for (let i = 1; i < 4; i++) { 
            let check_opt = this.document.getElementById(`opt${i}`); // een flush om ervoor te zorgen dat je niet meerdere keren een antwoord kan kiezen -- performantie-doenbaar => slechts één forloop bij een antwoord
            if (check_opt.style.backgroundColor != ""){
                return; 
                }
            }
        Check_answer('opt1')

    }else if(event.keyCode === 50){ 
        for (let i = 1; i < 4; i++) { 
            let check_opt = this.document.getElementById(`opt${i}`);
            if (check_opt.style.backgroundColor != ""){
                return; 
                }
            }
        Check_answer('opt2')

    }else if(event.keyCode === 51){ 
        for (let i = 1; i < 4; i++) { 
            let check_opt = this.document.getElementById(`opt${i}`);
            if (check_opt.style.backgroundColor != ""){
                return; 
                }
            }
        Check_answer('opt3')

    }else if(event.keyCode === 52){ 
        for (let i = 1; i < 4; i++) { 
            let check_opt = this.document.getElementById(`opt${i}`);
            if (check_opt.style.backgroundColor != ""){
                return; 
                }
            }
        Check_answer('opt4')
    }
  });

function resizeInput() {
  this.style.width = this.value.length + "ch";
}

function Check_answer(choice) {
    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;
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

            setTimeout(() => {
                currentindex++;
                if (currentindex > to_index){
                    currentindex = from_index;
                    hideArrows()
                    fill_options() 
                }
                always_correct.style.backgroundColor = "";
                always_correct.style.color = "";
                choice_button.style.backgroundColor = ""; 
                choice_button.style.color = "";
                opt1.disabled = false;
                opt2.disabled = false;
                opt3.disabled = false;
                opt4.disabled = false;
                hideArrows()
                fill_options()
              }, 900);

          }, 700);

          return;
    }
    setTimeout(() => {
        currentindex++;
        if (currentindex > to_index){
            currentindex = from_index;
            hideArrows()
            fill_options() 
        }
        always_correct.style.backgroundColor = "";
        always_correct.style.color = "";
        choice_button.style.backgroundColor = ""; 
        choice_button.style.color = "";
        opt1.disabled = false;
        opt2.disabled = false;
        opt3.disabled = false;
        opt4.disabled = false;
        hideArrows()
        fill_options()
      }, 900);   
}


function generateTable() {
    const container = document.getElementById('table-container');
    container.innerHTML = ''; // Clear any existing content

    const table = document.createElement('table');
    table.className = 'container'; // Apply the same styling as your existing table

    // Create the header row
    const headerRow = document.createElement('tr');
    const headers = ['Arabic', 'Transliteration', 'English'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create the data rows
    for (let i = 0; i < list_symbols.length; i++) {
        const row = document.createElement('tr');

        // Arabic Name
        const arabicCell = document.createElement('td');
        const arabicSpan = document.createElement('span');
        arabicSpan.textContent = list_symbols[i];
        arabicCell.appendChild(arabicSpan);
        row.appendChild(arabicCell);

        // Transliteration
        const transliterationCell = document.createElement('td');
        transliterationCell.textContent = list_arabic[i].split('. ')[1];
        row.appendChild(transliterationCell);

        // English Translation
        const englishCell = document.createElement('td');
        englishCell.textContent = list_English[i];
        row.appendChild(englishCell);

        table.appendChild(row);
    }

    container.appendChild(table);
}

function MoveTo(where) {
    let quiz_button = document.getElementById("quiz_button");
    if (where == 'Quiz'){
        quiz_screen.style.display = "block";
        fill_options()
        start_screen.style.display = "none";
    }
    if (where == 'Names'){
        start_screen.style.display = "none";
        name_title.style.display = "block"
        generateTable();
        AnimateTable();
    }
}


function AnimateTable() {
    setTimeout(() => {
        table_container.classList.remove('hidden');
        table_container.classList.add('show');
    }, 300);
}
function move_horn() {
    let len = list_arabic[currentindex].length 
    let ref_len = list_arabic[0].length; // Ar-Rahmaan als referentie 
    diff = ref_len - len; // omdat zowel links als rechts een char opgeschoven wordt  
    if (diff == 0){
        horn.style.right = `30%`;
    }else if (diff > 0){
        horn.style.right = `${30 + diff}%`
    }else{
        horn.style.right = `${30 + diff}%` // -+ = - 
    }
}

function AnimateStartScreen(){
    setTimeout(() => {
        quiz_button.classList.remove('hidden');
        quiz_button.classList.add('show');
    }, 300);
    setTimeout(() => {
        names_button.classList.remove('hidden');
        names_button.classList.add('show');
    }, 600);
}
function fill_options() {
    
    if (currentindex > 0){
        move_horn()
    }
    opt1.textContent = "";
    opt2.textContent = "";
    opt3.textContent = "";
    opt4.textContent = "";
    let i = currentindex; 
    let j = 0;
    current_symbol.textContent = list_symbols[i];
    current_arabic.textContent = list_arabic[i];
    playAudio()
    let correct_translation = list_English[i];
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
            let f1 = Math.floor(Math.random() * 99);
            if ((list_English[f1] != opt2.textContent) && (list_English[f1] != opt3.textContent) && (list_English[f1] != opt4.textContent)){
                opt1.textContent = list_English[f1]
            }
        }
        if(opt2.textContent == ""){
            let f1 = Math.floor(Math.random() * 99);
            if ((list_English[f1] != opt1.textContent) && (list_English[f1] != opt3.textContent) && (list_English[f1] != opt4.textContent)){
                opt2.textContent = list_English[f1]
            }
        }
        if(opt3.textContent == ""){
            let f1 = Math.floor(Math.random() * 99);
            if ((list_English[f1] != opt1.textContent) && (list_English[f1] != opt2.textContent) && (list_English[f1] != opt4.textContent)){
                opt3.textContent = list_English[f1]
            }
        }
        if(opt4.textContent == ""){
            let f1 = Math.floor(Math.random() * 99);
            if ((list_English[f1] != opt1.textContent) && (list_English[f1] != opt2.textContent) && (list_English[f1] != opt3.textContent)){
                opt4.textContent = list_English[f1]
            }
        }
}
}
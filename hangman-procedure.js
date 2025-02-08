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
let currentindex = 0; 
let current_correct; 
let current_symbol = document.getElementById("main_symbol");
let current_arabic = document.getElementById("main_Arabic");
let to_index = 98;
let from_index = 0;
let from_bar_val;
let to_bar_val;


function playAudio() {
    let currentName = document.getElementById("main_Arabic").textContent.trim();
    currentName = currentName.replace(/^\d+\.\s*/, ''); // syntax van chatGPT om de nummering te vermijden
    let audioPath = `name_audios/${currentName}.mp3`;
    let audio = new Audio(audioPath);
    audio.play()
}

fill_options()
var input = document.querySelector('input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

from_bar = document.getElementById('from')
to_bar = document.getElementById('to')
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
}
addEventListener("keyup", function(event) {
    if (to_bar_val < from_bar_val){
        return;
    }else if ((event.keyCode === 39)) {
        currentindex++; 
        if (currentindex > 98){
            currentindex = 98;
            return;}
        fill_options()
    }else if(event.keyCode === 37){
        currentindex--;
        if (currentindex < 0){
            currentindex = 0;
            return;
        }
        fill_options()
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
    opt1.style.transparency = "";
    opt2.style.transparency = "";
    opt3.style.transparency = "";
    opt4.style.transparency = "";


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
                fill_options()
              }, 900);

          }, 700);

          return;
    }
    setTimeout(() => {
        currentindex++;
        if (currentindex > to_index){
            currentindex = from_index;
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
        fill_options()
      }, 900);
    
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
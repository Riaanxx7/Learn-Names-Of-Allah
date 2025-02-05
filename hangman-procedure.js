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
    "Ar-Rahmaan", "Ar-Raheem", "Al-Malik", "Al-Quddus", "As-Salaam", "Al-Mu’min", "Al-Muhaymin", "Al-Azeez", "Al-Jabbaar", "Al-Mutakabbir",
    "Al-Khaaliq", "Al-Baari’", "Al-Musawwir", "Al-Ghaffaar", "Al-Qahhaar", "Al-Wahhaab", "Ar-Razzaaq", "Al-Fattah", "Al-‘Aleem", "Al-Qaabid",
    "Al-Baasit", "Al-Khaafid", "Ar-Raafi’", "Al-Mu’izz", "Al-Mudhill", "As-Samee’", "Al-Baseer", "Al-Hakam", "Al-‘Adl", "Al-Lateef",
    "Al-Khabeer", "Al-Haleem", "Al-‘Azeem", "Al-Ghafoor", "Ash-Shakoor", "Al-‘Aliyy", "Al-Kabeer", "Al-Hafeez", "Al-Muqeet", "Al-Haseeb",
    "Al-Jaleel", "Al-Kareem", "Ar-Raqeeb", "Al-Mujeeb", "Al-Waasi’", "Al-Hakeem", "Al-Wadud", "Al-Majeed", "Al-Ba’ith", "Ash-Shaheed",
    "Al-Haqq", "Al-Wakeel", "Al-Qawiyy", "Al-Mateen", "Al-Waliyy", "Al-Hameed", "Al-Muhsi", "Al-Mubdi’", "Al-Mu’eed", "Al-Muhyi",
    "Al-Mumeet", "Al-Hayy", "Al-Qayyoom", "Al-Waajid", "Al-Maajid", "Al-Waahid", "Al-Ahad", "As-Samad", "Al-Qaadir", "Al-Muqtadir",
    "Al-Muqaddim", "Al-Mu’akhkhir", "Al-Awwal", "Al-Aakhir", "Az-Zaahir", "Al-Baatin", "Al-Waali", "Al-Muta’aali", "Al-Barr", "At-Tawwaab",
    "Al-Muntaqim", "Al-‘Afuww", "Ar-Ra’oof", "Maalik-ul-Mulk", "Dhul-Jalaali wal-Ikraam", "Al-Muqsit", "Al-Jaami’", "Al-Ghaniyy", "Al-Mughni", "Al-Maani’",
    "Ad-Daarr", "An-Naafi’", "An-Noor", "Al-Haadi", "Al-Badee’", "Al-Baaqi", "Al-Waarith", "Ar-Rasheed", "As-Saboor"
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

            setTimeout(() => {
                currentindex++;
                always_correct.style.backgroundColor = "";
                always_correct.style.color = "";
                choice_button.style.backgroundColor = ""; 
                choice_button.style.color = "";
                fill_options()
              }, 900);

          }, 700);

          return;
    }
    setTimeout(() => {
        currentindex++;
        always_correct.style.backgroundColor = "";
        always_correct.style.color = "";
        choice_button.style.backgroundColor = ""; 
        choice_button.style.color = "";
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
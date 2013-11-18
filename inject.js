
/*                 _                     _  _             _        
                  (_)                   | |(_)  _     _  | |       
  ____ _   _  ____ _  ___  _   _  ___   | | _ _| |_ _| |_| | _____ 
 / ___) | | |/ ___) |/ _ \| | | |/___)  | || (_   _|_   _) || ___ |
( (___| |_| | |   | | |_| | |_| |___ |  | || | | |_  | |_| || ____|
 \____)____/|_|   |_|\___/|____/(___/    \_)_|  \__)  \__)\_)_____)
                                                                   
      _     _                                                            ___  
     | |   (_)  _                               _                       / _ \ 
  ___| |__  _ _| |_    _____  ____ _____ ____'_| |_    _   _  ___  _   (_( ) )
 /___)  _ \| (_   _)  (____ |/ ___) ___ |  _ (_   _)  | | | |/ _ \| | | | (_/ 
|___ | | | | | | |_   / ___ | |   | ____| | | || |_   | |_| | |_| | |_| | _   
(___/|_| |_|_|  \__)  \_____|_|   |_____)_| |_| \__)   \__  |\___/|____/ (_)  
                                                      (___*/                  


    (function(){

      var CSC_Classes = ["Discrete Structures I", "Introduction to Interactive Entertainment", "Special Problems for Undergraduates", "Introduction to Computer Organization", "Programming for Engineering Students", "Computer Programming for Scientists and Engineers", "C and Unix", "Professional Responsibilities", "Music Programming", "Special Problems", "Applied Parallel Computing", "Mobile Application Development", "Theory of Computation I", "Introduction to Computer Security", "User-Centered Interface Design and Development", "Computer Architecture", "Computer Security", "Thesis Seminar", "Thesis I", "Thesis II", "Thesis III", "Software Engineering", "Computer Architecture", "Introduction to Database Systems", "Systems Programming", "Computer Vision", "Programming Languages I", "Capstone", "Operating Systems", "Networks"];

      var Suicide_Methods = ["fart myself to death", "eat copious ammounts of fan dust", "eat nails instead", "seppuku", "autosacrifice myself to Bender", "guillotine myself with a MacBook Air", "eat batteries", "take a 500 watt power suply directly to the nipples", "bathe myself in radiation instead", "divide myself by zero", "use emacs as my editor", "stockpile soylent", "turn to grain alcohol for comfort", "withdraw from society and friends", "be living a sad, sedentary life in the CSL", "make web apps instead of studying"];

      function chooseOne(arr) {
        return arr[parseInt((Math.random() * arr.length))];
      }

      window.onload = function() {
        var randomClass1, randomClass2, suicideMethod;
        
        // Choose your fate...
        randomClass1  = chooseOne(CSC_Classes);
        while (chooseOne(CSC_Classes) === randomClass1) // To avoid overlap
          randomClass2  = randomClass1chooseOne(CSC_Classes);
        suicideMethod = chooseOne(Suicide_Methods);

        // Apply the funnies...
        $('#class1').html(randomClass1);
        $('#class2').html(randomClass2);
        $('#feels').html(Math.random() > 0.5 ? "good" : "bad");
        $('#methodOfDeading').html(suicideMethod);

        // We'll need this for the facebook sharer
        var finishedMadLib = $('#madlib').text();
        // INITIATE THE SHARING!
        $('.fbShare').attr("href", "http://www.facebook.com/sharer.php?s=100&p[title]=Hey guys&hellip;&p[url]=http://www.mysexyurl.com&p[summary]=" + finishedMadLib);
      }

    })()

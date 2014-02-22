
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

      var CSC_Classes = ["Discrete Structures", "Introduction to Interactive Entertainment", "Introduction to Computer Organization", "Professional Responsibilities", "Music Programming", "Graduate Distributed Computing", "Applied Parallel Computing", "Mobile Application Development", "Theory of Computation", "User-Centered Interface Design and Development", "Computer Architecture", "Computer Security", "Thesis Seminar", "Software Engineering", "Introduction to Database Systems", "Systems Programming", "Computer Vision", "Programming Languages", "Capstone", "Operating Systems", "Networks"];

       // Credit to Timothy Adam for this list and some of the new verbs
      var CSC_Professors = ["Bellardo", "Buckalew", "Clements", "Dekhtyar", "Fisher", "Gharibyan", "Haungs", "Janzen", "Keen", "Khosmood", "Kurfess", "Lupo", "Nico", "Peterson", "Seng", "Smith", "Staley", "Staley", "Staley", "Staley", "Staley", "Turner", "Vakalis", "Wood"];

      var verbs = ["fart myself to death", "eat copious ammounts of fan dust", "eat nails instead", "seppuku", "autosacrifice myself to Bender", "guillotine myself with a MacBook Air", "eat batteries", "take a 500 watt power supply directly to the nipples", "bathe myself in radiation instead", "divide myself by zero", "use emacs as my editor", "stockpile soylent", "drink grain alcohol for comfort", "withdraw from society and friends", "live a sad, sedentary life in the CSL", "make web apps instead of studying", "cry softly into my dalek pillow", "outsource my homework", "add a math minor", "start using caffinated soap", "slit my wrists with papercuts from handouts", "exsanguinate myself by week 3", "cause myself irrevocable blood loss", "self-mutilate", "drown myself", "drink a vat of acid", "take an arrow to the knee", "have intercourse with a bazooka", "suffocate myself with a plastic bag", "take a long walk naked in arctic conditions", "leap from the new science building", "breathe in carbon monoxide", "revert to a life of cooking and selling meth", "electocute myself", "neuter myself with a rusty fork", "shoot myself in the face", "go on a date with the business end of shotgun", "hang myself", "drive off a cliff", "stand in front of a bullet train", "go skydiving without a parachute", "go for a walk on the freeway", "overdose on painkillers", "commit murder-suicide on Bender", "drown in the my own tears", "commit seppuku", "starve myself", "find a guillotine", "do more crack than Rob Ford"];

      function chooseOne(arr) {
        return arr[parseInt((Math.random() * arr.length))];
      }

      window.onload = function() {
        var randomClass1, randomClass2, verbage;
        
        // Choose your fate...
        randomClass1 = chooseOne(CSC_Classes);
        // To avoid overlap
        while (randomClass1 === (randomClass2 = chooseOne(CSC_Classes))){}

        randomProf1 = chooseOne(CSC_Professors);
        // To avoid overlap
        while (randomProf1 === (randomProf2 = chooseOne(CSC_Professors))){}

        verbage = chooseOne(verbs);

        // Apply the funnies...
        $('#class1').html(randomClass1);
        $('#class2').html(randomClass2);
        $('#prof1').html(randomProf1);
        $('#prof2').html(randomProf2);
        $('#feels').html(Math.random() > 0.5 ? "good" : "bad");
        $('#theFunnyGoesHere').html(verbage);

        // We'll need this for the facebook sharer         
        var finishedMadLib = $('#madlib').text();
        // INITIATE THE SHARING!
        $('.fbShare').attr("href", "http://www.facebook.com/sharer.php?s=100&p[title]=Hey guys, I'm thinking of taking...&p[url]=http://warpling.github.io/csc-mad-libs/&p[summary]=" + finishedMadLib);
      }
    })()

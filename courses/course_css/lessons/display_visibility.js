
contentOfTheLesson=create_title('Proprietatea display si proprietatea visibility in CSSS');
contentOfTheLesson+=create_textWithoutInterpretHTML("Proprietatea 'display' specifică dacă/cum este afișat un element. Fiecare element HTML are o valoare 'display' implicită, în funcție de tipul de element. Valoarea implicită de afișare pentru majoritatea elementelor este 'block' sau 'inline'");

contentOfTheLesson+=create_textWithoutInterpretHTML("Un element la 'nivel de block' începe întotdeauna pe o linie nouă și ocupă toată lățimea disponibilă (se întinde la stânga și la dreapta cât de mult poate).Exemple de elemente la nivel de bloc sunt :'<div>','<h1> - <h6>','<p>', '<form>', '<header>','<subsol>'");

contentOfTheLesson+=create_textWithoutInterpretHTML("Un element inline nu începe pe o linie nouă și ocupă doar atâta lățime cât este necesar.Exemple de elemente inline sunt : '<span>', '<a>', '<img>'");

contentOfTheLesson+=create_textWithoutInterpretHTML("ATENTIE : După cum sa menționat, fiecare element are o valoare de afișare implicită. Cu toate acestea, puteți trece peste acest lucru. Schimbarea unui element inline într-un element bloc, sau invers, poate fi utilă pentru ca pagina să arate într-un mod specific și să respecte în continuare standardele web. Un exemplu comun este crearea elementelor <li> inline pentru meniurile orizontale:");

contentOfTheLesson+=create_textWithoutInterpretHTML("Notă: Setarea proprietății de afișare a unui element schimbă doar modul în care este afișat elementul, NU ce fel de element este. Deci, un element inline cu afișare: bloc; nu are voie să aibă alte elemente de bloc în interiorul acestuia.");

contentOfTheLesson+=create_subtitle("Ascunde un element - display:none sau visibility:hidden?");

contentOfTheLesson+=create_textWithoutInterpretHTML("Ascunderea unui element se poate face prin setarea proprietății de 'display:none'. Elementul va fi ascuns, iar pagina va fi afișată ca și cum elementul nu ar fi acolo. In schimb proprietatea 'visibility:hidden' ascunde continutul ementului insa acel element inca ocupa spatiu -chiar daca este un spatiu gol. Elementul va ocupa în continuare același spațiu ca înainte sa fie ascuns. Elementul va fi ascuns, dar va afecta în continuare aspectul:");


contentOfTheLesson+=create_subtitle('Display:inline');
contentOfTheLesson+=create_textWithoutInterpretHTML("Display:inline face ca elementele ce sunt continute de acest element sa fie afisate in aceeasi linie. Deci pentru asta fiecare element copil va avea latimea exact cat are nevoie si nu va fi toata lungimea ecranului asa cum era setat in mod default la display:block ");
contentOfTheLesson+=create_textWithoutInterpretHTML("Atentie: Display:inline nu va pune elmentele in aceeasi line daca unul din elementele copil are setat default propriatatea displa:block");
contentOfTheLesson+=create_textWithoutInterpretHTML("Setarea proprietății de display:ineline se seteaza pe elementele care au aceasi clasa si vor ca acele elemente sa fie in line - si pt asta se selecteaza clasa si se introduce acesta linie de cod.");

contentOfTheLesson+=create_subtitle("Display:inline VS Display:inline-block");
contentOfTheLesson+=create_textWithoutInterpretHTML("Atat 'inline' cat si 'inline-block' seteaza elementele pe aceasi linie. O diferenta intre ele este ca inline nu permite setarea dimensiuni elementului ci va fi exact cat este continutul elementului..In schimb Display:Inline-block permite modificarea si setarea dimeniuni obiectului.  ");

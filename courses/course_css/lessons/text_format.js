

contentOfTheLesson=create_title('Proprietati formatare text');
text1='Propritatile de formatare a textului sunt acele proprietati care ne ajuta sa oferim un anumit stil si design textului dintr-o pagina web. Printre aceste proprietati avem urmatoarele : ';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);

arrayList=[
	'text-indent - ajuta sa indentam prima linie a textului spre dreapta',
	'text-align - ne ajuta sa selectam cum sa fie pozitionat textul pe axa orizontala. stanga, dreapta , centru sau justify',
	'text-align-last - ne ajuta sa specificam cum sa fie aliniata ultima linie a textului',
	'text-overflow -  proprietatea text-overflow CSS specifică modul în care conținutul, ce depaseste dimensiunea elementului, este afișat ar trebui să fie semnalat utilizatorului.Acesta poate fi tait sau elipsed',
	'text-transform - ne ajuta sa stabilim modul de scrire : litere mici, mari, prima litera mare etc',
	'text-decoration - este o scurtatura la fel ca background si seteaza mai multe proprietati, dar in principiu seteaza cum sa fie decorat un text - sa fie subliniat, taiat, cu linie deasupra etc',
	'direction;/unicode-bidi - ne ajuta sa stabilim directia de scrirere a textului - de la stanga la dreapta sau de la dreapta la stanga(ltr,rtl)',
	'vertical-align - seteaza cum sa fie pozitionat ,pe axa verticala, un elemente care se afala in interiorul altui element',
	'letter-spacing - proprietatea letter-spacing este folosită pentru a specifica spațiul dintre caracterele/literele dintr-un text.',
	'word-spacing -  este la fel ca proprietatea letter-spacing doar ca aceasta specifica spatiul dintre cuvinte in loc de litere',
	'line-height -  proprietatea line-height este folosită pentru a specifica inaltimea unei lini',
	'word-wrap - Proprietatea word-wrap permite cuvintelor lungi să poată fi rupte și să se încadreze pe linia următoare. Dacă un cuvânt este prea lung pentru a se încadra într-o zonă, se extinde în exterior:',
	'word-break - proprietatea specifică regulile de întrerupere a liniilor. Aceasta poate avea urm. valori : keep-all = Această linie se va rupe la cratime. VS  si break-all = Acest paragraf conține ceva text. Liniile se vor rupe la orice caracter.',
	'writing-mode - proprietatea specifică dacă liniile de text sunt dispuse orizontal sau vertical.',
	'white-space - proprietatea white-space specifică doua lucruri - 1. modul în care este tratat spațiul alb din interiorul unui element. - 2. si ce se intampla la sfarsitul liniei- daca se trece pe o linie urmatoare sau se continua textul pe aceasi linie',
	'font-family - seteaza stilul fontului',
	'font-size - seteaza dimensiunea fontului',
	'font-weight - seteaza grosimea caracterelor',
	'font-style - de obicei folosit pt a inclina textul si al seta la italic/oblic sau normal',
	'font-variant - Proprietatea font-variant specifică dacă un text trebuie sau nu afișat într-un font cu majuscule mici. Într-un font cu majuscule mici, toate literele mici sunt convertite în litere mari. Cu toate acestea, literele majuscule convertite apar într-o dimensiune mai mică a fontului decât literele majuscule originale din text.',
	'text-shadow - proprietatea text-shadow adaugă umbră textului. În cea mai simplă utilizare, este necesar sa specificați doar dim. umbra orizontală (2px) , dim. umbra verticală (2px) ,dimensiune blus si  culoare umbrei. Putem adauga mai multe umbrei separand prin virgula'	
	];

contentOfTheLesson+=create_listOfElem(arrayList);

text1='Valoarea mărimii fontului poate fi o dimensiune absolută sau relativă. Dimensiunea absolută: Setează textul la o dimensiune specificată, Nu permite unui utilizator să modifice dimensiunea textului în toate browserele (prost din motive de accesibilitate) Mărimea absolută este utilă atunci când dimensiunea fizică a ieșirii este cunoscută \n\n Mărime relativă: Setează dimensiunea în raport cu elementele din jur Permite unui utilizator să modifice dimensiunea textului în browsere.\n\n Dacă nu specificați o dimensiune a fontului, dimensiunea implicită pentru textul normal, cum ar fi paragrafele, este 16px (16px=1em).';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);


contentOfTheLesson+=create_textWithoutInterpretHTML("Valorile proprietati white-space sunt:");

arrayList=[
	'normal: valoarea implicită. Mai multe spații albe sunt restrânse într-unul singur. Textul se închide la rândul următor atunci când este necesar.',
	'nowrap: mai multe spații albe sunt restrânse într-unul singur, dar textul nu trece la rândul următor ci continua pe acealsi rand. - Folosiți valoarea nowrap pentru a preveni rupturile de linie.',
	'pre: Aceleași rezultate ca și folosirea tagul pre, unde toate spațiile albe vor fi păstrate așa cum sunt și textul trece la o linie noua numai atunci când se găsesc întreruperi de linie în conținut textului, daca nu textul va continua pe aceasi linie',
	'pre-line: mai multe spații albe sunt restrânse într-unul singur, textul se întrerupe la rândul următor când este necesar sau cu întreruperi de linie în conținut textului. Aici textul se rupe la nevoie, dar am rupt și manual ultimele cuvinte. Am inclus aceleași spații albe suplimentare, dar acum sunt restrânse.',
	'pre-wrap: similar cu pre (adica pastreaza spatile albe asa cum sunt si nu le restrange), dar textul trece la linie noua atunci când este necesar.'
	];

contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_textWithoutInterpretHTML('Specificația Text CSS conține o secțiune de restrângere și transformare care definește cu precizie ce înseamnă „spațiul alb este restrâns”, inclusiv un exemplu cu o ilustrație. De obicei, înseamnă reducerea secvențelor de mai multe caractere cu spații albe până la un singur caracter spațiu - deși în unele cazuri înseamnă reducerea lor la niciun caracter (șirul gol).');


text1='Notă: pentru a face cuvintele să se despartă în ele însele, utilizați în schimb proprietatile "overflow-wrap", "word-break" sau "hyphens".';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);

text1='Note: Alinierea la stânga este implicită dacă direcția textului este de la stânga la dreapta, iar alinierea la dreapta este implicită dacă direcția textului este de la dreapta la stânga):';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='Note: Când proprietatea text-align este setată la „justificare”, fiecare linie este întinsă astfel încât fiecare linie să aibă o lățime egală, iar marginile din stânga și din dreapta să fie drepte (ca în reviste și ziare):';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='Note: Principale propritati cand vine vorba de text-decoration sunt - text-decoration-line- care selecteaza stilul de sublinire-(deasupra, peste, subtext,atentie poti sa selectezi mai multe stiluri- ex: atat deasupra cat si subtext), text-decoration-color: seteaza culoare liniei de subliniere, text-decoration-thickness: seteaza grosimea liniei,text-decoration-style:seteaza stilul liniei de subliniere';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);

text1='Note: Proprietatea text-decoration = este o proprietate scurtă pentru: text-decoration-line (obligatoriu) text-decoration-color (opțional) text-decoration-style (opțional) text-decoration-thickness(opțional)';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='Note: Toate linkurile din HTML sunt subliniate implicit. Uneori vezi că link-urile sunt stilate fără subliniere. Deoarece proprietatea text-decoration-line:none; : a fost folosita pentru a elimina sublinierea din linkuri, astfel:';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);



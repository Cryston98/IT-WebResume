contentOfTheLesson=create_title("Porprietatea Position in CSS");
contentOfTheLesson+=create_textWithoutInterpretHTML("Proprietatea 'position' specifică tipul de metodă ales pt a pozition un element.");
contentOfTheLesson+=create_textWithoutInterpretHTML("Elementele sunt apoi poziționate folosind proprietățile de sus, jos, stânga și dreapta. Cu toate acestea, aceste proprietăți nu vor funcționa decât dacă proprietatea poziției este setată mai întâi. De asemenea, funcționează diferit în funcție de valoarea poziției.");

contentOfTheLesson+=create_textWithoutInterpretHTML("Atentie proprietatea 'position' nu seteaza pozitia unui element ci modul de positionare a unui element. Aceasta proprietate are 5 valori posibile si anume : (static, relativ, fix, absolut sau sticky).");
contentOfTheLesson+=create_textWithoutInterpretHTML("In functie de valoare proprietati 'position' elementul poate avea diferite pozitii/locatii pe ecran. Pentru a seta positia se foloseste impreuna cu aceasta proprietate urmatoarele proprietati: ");

arrayList=[
	'Proprietatea de margin - care seteaza o margine si implicit ii schimba si pozitia elementului',
	'Proprietatile de positionare absoluta - top,left,right,bottom - folosite cel mai des atunci cand proprietatea position are valoare absolute.',
	'Proprietatea de positionare relative - float - folosita cel mai des atunci cand proprietatea position are valoare relative',
	'Proprietatea display'
	];

contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_subtitle("position: static;");
contentOfTheLesson+=create_textWithoutInterpretHTML('Elementele HTML sunt poziționate statice în mod implicit. Elementele poziționate statice nu sunt afectate de proprietățile de sus, jos, stânga și dreapta. Un element cu poziție: static; nu este poziționat într-un mod special; este întotdeauna poziționat conform fluxului normal al paginii:');
contentOfTheLesson+=create_subtitle("position: relative;");
contentOfTheLesson+=create_textWithoutInterpretHTML('Un element cu poziție: relativă; este pozitionat fata de pozitia sa normala. Setarea proprietăților de sus, dreapta, jos și stânga ale unui element relativ poziționat va face ca acesta să fie ajustat departe de poziția sa normală. Alt conținut/elemente nu va/vor fi ajustat/e pentru a se potrivi în niciun gol lăsat de element.');
contentOfTheLesson+=create_subtitle("position: fixed;");
contentOfTheLesson+=create_textWithoutInterpretHTML('Un element cu poziție: fix; este poziționat în raport cu fereastra/viewport, ceea ce înseamnă că rămâne întotdeauna în același loc chiar dacă pagina este derulată. Proprietățile de sus, dreapta, jos și stânga sunt folosite pentru a poziționa elementul. Un element fix nu lasă un gol în pagina în care ar fi fost localizat în mod normal.');
contentOfTheLesson+=create_subtitle("position:absolute");
contentOfTheLesson+=create_textWithoutInterpretHTML("Un element cu poziție: absolut; este poziționat relativ la cel mai apropiat strămoș poziționat (în loc de poziționat în raport cu fereastra, ca fix). In orice caz; dacă un element poziționat absolut nu are strămoși poziționați, acesta utilizează corpul documentului și se deplasează odată cu derularea paginii. Notă: Elementele poziționate absolut sunt îndepărtate din fluxul normal și se pot suprapune elementelor.");
contentOfTheLesson+=create_subtitle("position:sticky");
contentOfTheLesson+=create_textWithoutInterpretHTML("Un element cu poziție: lipicios/sticky; este poziționat pe baza poziției de defilare/scrolare a utilizatorului. Un element lipicios comută între relativ și fix, în funcție de poziția derulării. Este poziționat relativ până când se întâlnește o anumită poziție de decalaj în fereastra de vizualizare - apoi se „lipește” pe loc (cum ar fi poziția: fixă).");


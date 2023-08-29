contentOfTheLesson=create_title("Porprietatea Float & Proprietatea Clear");
contentOfTheLesson+=create_textWithoutInterpretHTML("Proprietatea CSS float specifică modul în care un element ar trebui să plutească pe ecran iar Proprietatea 'clear' CSS specifică ce elemente pot pluti lângă elementul șters și pe ce parte.");
contentOfTheLesson+=create_subtitle('Porprietatea Float');
contentOfTheLesson+=create_textWithoutInterpretHTML("Proprietatea float este utilizată pentru poziționarea și formatarea conținutului, de ex. lăsați o imagine să plutească la stânga textului într-un container. În cea mai simplă utilizare, proprietatea float poate fi folosită pentru a încheia textul în jurul imaginilor. sProprietatea float poate avea una dintre următoarele valori:");
arrayList=[
	'left - Elementul plutește în stânga containerului său',
	'right - Elementul plutește în dreapta containerului său',
	'none - Elementul nu plutește (va fi afișat exact acolo unde apare în text). Acesta este implicit',
	'inherit - Elementul moștenește valoarea flotantă a părintelui său'];
contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_example('exemplu','În mod normal, elementele div vor fi afișate una peste alta. Cu toate acestea, dacă folosim float: left, putem lăsa elementele să plutească unul lângă celălalt.',1);


contentOfTheLesson+=create_subtitle('Porprietatea Clear');
contentOfTheLesson+=create_textWithoutInterpretHTML('Când folosim proprietatea float și dorim următorul element sa fie in partea de jos (nu în dreapta sau în stânga), va trebui să folosim proprietatea clear.');
contentOfTheLesson+=create_textWithoutInterpretHTML('Proprietatea clear specifică ce ar trebui să se întâmple cu elementul care se află lângă un element plutitor.Proprietatea clear poate avea una dintre următoarele valori:');

arrayList=[
	'none - Elementul nu este împins sub elementele plutitoare din stânga sau din dreapta. Acesta este implicit',
	'left - elementul este împins sub elementele plutitoare din stânga',
	'right- Elementul este împins sub elementele plutitoare din dreapta',
	'both - Elementul este împins sub ambele elemente plutitoare din stânga și din dreapta',
	'inherit - Elementul moștenește valoarea clară de la părintele său',];
contentOfTheLesson+=create_listOfElem(arrayList);
contentOfTheLesson+=create_textWithoutInterpretHTML('Când curățați flotă, ar trebui să potriviți clear cu float: dacă un element este plutit la stânga, atunci ar trebui să curățați la stânga. Elementul dvs. flotant va continua să plutească, dar elementul șters va apărea sub el pe pagina web');

contentOfTheLesson+=create_textWithoutInterpretHTML("Dacă un element plutit este mai înalt decât elementul care îl conține, acesta va „revărsa” în afara containerului său. Apoi putem adăuga un hack clearfix pentru a rezolva această problemă. si anume adaugam overflow:auto; . Overflow: auto clearfix funcționează bine atâta timp cât sunteți capabil să păstrați controlul asupra marginilor și a umpluturii (altfel este posibil să vedeți barele de defilare). Cu toate acestea, noul hack modern clearfix este mai sigur de utilizat și următorul cod este folosit pentru majoritatea paginilor web:");

contentOfTheLesson+=create_example("clearfix",'.clearfix::after {\n\tcontent: "";\n\tclear: both;\n\tdisplay: table;\n}',2);

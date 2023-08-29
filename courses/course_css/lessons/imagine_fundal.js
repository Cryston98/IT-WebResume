
contentOfTheLesson=create_title('Cum o imagine pe fundal');
text1='Setarea sau adaugarea unei imagini se poate face in doua moduri fie adaugand un element html "img"  fie selectand proprietatea background-imagine pentru elementul nostru caruia vrem sa ii adaugam o imagine. Proprietatea background-image specifică o imagine de utilizat ca fundal al unui element. În mod implicit, imaginea se repetă astfel încât să acopere întregul element.';
contentOfTheLesson+=create_textWithIcon(text1,'');

contentOfTheLesson+=create_example("exemplu setare imagine fundal",'div {\n\tbackground-image: url("paper.jpg");\n}',1);

contentOfTheLesson+=create_textWithoutInterpretHTML("In cadrul selectari unei imagini mai exista diferite proprietati care ne pot ajuta sa creem un design cat mai placut.Un dintre aceste proprietati este background-repeat - ce ne ajuta sa spune daca imaginea sa se repete atunci cand elementul este prea mare si mai ramane spatiu neocupat datorita dimensiuni mici a imagini. În mod implicit, proprietatea imagine de fundal repetă o imagine atât pe orizontală, cât și pe verticală.Pentru a selecta manual daca vrem sa se repete sau nu ori daca vrem sa e repete doar pe orizontala ori doar pe vertical putem folosi urmatoarele lini de cod:");

arrayList=[
	'background-repeat:repeat-x; - aceasta linie de cod seteaza ca imaginea sa se repete pe horizontala',
	'background-repeat:repeat-y; - aceasta linie de cod seteaza ca imaginea sa se repete pe vertical',
	'background-repeat:no-repeat; - seteaza ca imaginea sa nu se repete'];
contentOfTheLesson+=create_listOfElem(arrayList);
contentOfTheLesson+=create_textWithoutInterpretHTML("O alta proprietate cand vine vorba de setarea unei imagini este background-position - ce ne ajuta sa setam pozitia imagini in inteiorul elementului");
contentOfTheLesson+=create_example("proprietatea background-position",'body {\n\tbackground-image: url("img_tree.png");\n\tbackground-repeat: no-repeat;\n\tbackground-position: right top;\n}',2);
contentOfTheLesson+=create_textWithoutInterpretHTML('Proprietatea background-attachment specifică dacă imaginea de fundal ar trebui să deruleze sau să fie fixată (nu va derula cu restul paginii):Daca nu specificam noi manual atunci setarea default este scroll atunci cand adaugam o imagine.');
contentOfTheLesson+=create_example("image fixed",'body {\n\tbackground-image: url("img_tree.png");\n\tbackground-repeat: no-repeat;\n\tbackground-position: right top;\n\tbackground-attachment: fixed;\n}',3);

contentOfTheLesson+=create_example("image scroll",'body {\n\tbackground-image: url("img_tree.png");\n\tbackground-repeat: no-repeat;\n\tbackground-position: right top;\n\tbackground-attachment: scroll;\n}',4);

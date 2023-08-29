

contentOfTheLesson=create_title('Setare si calculare height/width');
text1='În CSS, termenul „model de cutie” este folosit atunci când se vorbește despre design și aspect. Modelul casetei CSS este, în esență, o casetă care înfășoară fiecare element HTML. Este alcătuit din: margini, bordura, pading-ul și conținutul real.Explicația diferitelor părți:';

arrayList=[
	'Conținut - Conținutul casetei, unde apar text și imagini',
	'Pading-ul - Șterge o zonă din jurul conținutului. Este o zona transparenta',
	'Border - Un chenar care înconjoară umplutura și conținut',
	'Marginea - Curăță o zonă din afara graniței. Este o zona transparentă'];

contentOfTheLesson+=create_textWithIcon(text1,'');
contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_textWithoutInterpretHTML('Important: Când setați proprietățile de lățime și înălțime ale unui element cu CSS, setați doar lățimea și înălțimea zonei de conținut. Pentru a calcula dimensiunea completă a unui element, trebuie să adăugați și pading-ul, marginile și bordura.');

arrayList=[
	'Lățimea totală a unui element ar trebui calculată astfel: Lățimea totală a elementului = lățime continut + pading-ul din stânga + pading-ul din dreapta + marginea din stânga + marginea din dreapta + bordura din stânga + bordura din dreapta',
	'Înălțimea totală a unui element ar trebui calculată astfel: Înălțimea totală a elementului = înălțime continut + pading-ul superior + pading-ul inferior + marginea superioară + marginea inferioară + bordura superioară + bordura inferioară'
	];

contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_textWithoutInterpretHTML('Aceast lucru trebuie tinut cont atunci cand latimea si inaltimea se face in mod dinamic in functie de latimea si inaltimea ecranului si trebuie sa folosim proprietatea "calc" pentru a calcula dimensiunea corecta a elementului.In exemplul urmator daca vrem ca elementul sa aiba latimea de 100% va trebui sa scadem pading, marginea si bordura. Cum noi am selectat decat pading-ul va trebui sa scadem decat pading-ul dreapta si pading-ul stanga = 20+20 = 40px');
contentOfTheLesson+=create_example("calc height corect",'<div id="elem"></div>\n<style>\n#elem{\n\twidth:calc(100% - 40px);\n\tpading-ul:20px; \n}\n</style>',1);

contentOfTheLesson+=create_textWithoutInterpretHTML("Atentie: Un lucru important atunci cand utilizam with 100% acest 100% nu inseamna intraga lungime a ecranului sau a dimensiuni ferestrei de browser si inseamna dimensiunea parintelui/containerului din care face parte elementul.");

contentOfTheLesson+=create_subtitle("box-sizing:border-box vs box-sizing:content-box;")
contentOfTheLesson+=create_textWithoutInterpretHTML("Un alt mod pentru a evita ca dimensiunea obiectului sa fie alt decat ceea care am setato noi este folosind proprietatea 'box-sizing:border-box'. In momentul cand folosim aceasta proprietatea dimensiunea elementului nu va fi afectata de dimensiunea pading-ul sau a borduri. Prin aceasta comanda specificam ca dimensiunile setate de noi pe element sa se aplice casutei border si nu a casutei content asa cum este setata in mod default.\n\nPrin setarea box-sizing:border-box; width si Height se seteaza pe casuta de border care contine in interiorul ei dimensiunea borduri cat si dimensiunea pading-ul iar atunci cand modificam valoarea acestor doua 'bordura si pading-ul' automat daca dimensiunea casetei bordura este fixa atunci nu mai ramane decat sa scadem/crestem din dimensiunea casetei de content");


contentOfTheLesson+=create_subtitle("Max-Width vs Width || Max-Height vs Height");
contentOfTheLesson+=create_textWithoutInterpretHTML("Diferentea inter Max-Width,Max-Height si Height, Width este ca atunci cand se modifica dimensiunea ecranului dimensiunea elementului va ramane statica/fixa la dimensiunea la care a fost setat. In schimb atunci cand se utilizeaza max-proprietate dimensiunea va fi redimensionata odata/in acelasi timp cu redimensionarea ecranului.");
contentOfTheLesson+=create_textWithoutInterpretHTML("O observatie este ca pentru a seta Max-Width si Max-Height ca sa aibe acea dimensiune trebuie sa setam propritatea 'display:block' altfel dimensiunea va fi atat cat este continutul.");


contentOfTheLesson+=create_textWithoutInterpretHTML("Un mod prin care putem set dimensiune ca sa poata fi responsiv este folosind valoare 'VW'. Aceasta valoare poate fi folosita atunci cand setap propritatea pt dimensiunea fontului dar si cand selectam inaltimea, latimea, marginile, padingul etc.  Dimensiunea 'VW' ce înseamnă 'VIEW WAVELENGHT - lățimea portului de vizualizare'... Viewport este dimensiunea ferestrei browserului. 1vw = 1% din lățimea ferestrei de vizualizare. Dacă fereastra de vizualizare are 50 cm lățime, 1vw este 0,5 cm.");

contentOfTheLesson+=create_textWithoutInterpretHTML("Dimensiunile pot fi specificate in mai multe moduri ca in exemplul de mai jos : ")
arrayList=[
	'PX - PIXELI - height:10px;',
	'EM - 16px -  height:1em;',
	'% - procente - height:16%;',
	'vm - latime viewport - height:16vw;'];

contentOfTheLesson+=create_listOfElem(arrayList);

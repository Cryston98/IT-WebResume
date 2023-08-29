

contentOfTheLesson=create_title('Ce este si de cate tipuri este un selector');
text1='Un selector este modul prin care selectam elementul/tag HTML caruia vrem sa ii schimbam designul. In functie de modul prin care selectam acest selector exista mai multe tipuri';
contentOfTheLesson+=create_textWithIcon(text1,'');

arrayList=[
	'Selectori Simpli - acestia se bazeaza pe numele elementului/tagului (ex: p,div,span,h1) ori pe numele ID / CLASS ce ia fost data',
	'Selectori Combinati - acestia se bazeaza pe o relatie specifica care exista intre doua elemente/taguri',
	'Selectori Pseudo-Clase - acestia se bazeaza pe selectarea unui elemente pe baza unui anumite stari.',
	'Selectori Pseudo-Element - acestia selecteaza o parte a unui element / tag',
	'Selectori Atribut - acestia selecteaza acele elemente/taguri care au o anumita valoare a unui atribut'];

contentOfTheLesson+=create_listOfElem(arrayList);
contentOfTheLesson+=create_subtitle('Tipul 1  - Despre Selectorii Simpli');

text1='In cadrul selectorilor simpli avem din nou mai multe categorii.In functie de modul cum se creaza referinta la ei, acestia se impart in trei clase.';
contentOfTheLesson+=create_textWithIcon(text1,'');
arrayList=[
	'Selector Element :> numele tagului -> exemplu: p{color:red;} - acesta va schimba culoare textului in rosu pt toate elementele de tip paragraf(p) - adica care sunt create cu tagul "p".In cadrul selectorilor elemente este bine sa amintim de selectorul univeral care se utilizeaxa prin simbolul steluta (*) pentru a setata acelasi stil pt toate elementele -> exemplu: *{color:red;}',
	'Selector ID :> numele id-ului iar in fata se trece simbolul diez -> exemplu: #myIDexample{color:red;} - aceasta va schimba culoare textului in rosu pt toate elementele care au ID-ul "myIDexample"',
	'Selector CLASS :> numele clasei iar in fata se trece simbolul punct -> exemplu:  .myCLASSexample{font-size:30px} - acesta va seta marimea textului la 30px pt toate elementele care au clasa "myCLASSexample"'];

contentOfTheLesson+=create_listOfElem(arrayList);
text1 = 'In cadrul selectorului class exista mai 2 moduri de utilizare\n\n'+
		'Varianta 1: p.myClassEx - va selectat doar elementele p ce au clasa "myClassEx" chiar daca exista si alte elemente ce au class aceasta acelea nu vor fi'+
		' modificate..\n EX: <h1 class="myClassEx">text</h1><p class="myClassEx">text<p>\n\nATENTIE: intre numele elementului si numele clasei nu se trece spatiu(la fel si cand e vorba de ID). Pt ca alfel am fi in cazul variantei 2 '+ 
		' cand din inteiorul elementului p selectam doar acele elemente care au class "myClassEx"\n\n'+
		'Varianta 2: .myClassEx p - va selecta elementele p ce se afla in interiorul elementului'+ 
		' ce are class "myClassEx" \n EX: <div class="myClassEx"><p>text<p></div>';


contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
contentOfTheLesson+=create_subtitle('Tipul 2  - Despre Selectorii Combinati');
text1='Un selector CSS poate conține mai mult de un selector simplu. Între selectoarele simple, putem include un combinator.Există patru combinatoare diferite în CSS:';
arrayList=[
	'selector descendent (spațiu)',
	'selector de copii (>)',
	'selector de frați adiacent (+)',
	'selector general de frați (~)'];

contentOfTheLesson+=create_textWithIcon(text1,'');
contentOfTheLesson+=create_listOfElem(arrayList);

text1='Selectorul descendent va schimba stilul pt toate elementele care sunt descendenți ai unui element specificat. Nu conteaza nivelul de descendenta ci doar daca este descendent sau nu.'+ 
' Următorul exemplu selectează toate elementele <p> din elementele <div>: '
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='div p { \n\tbackground-color: yellow;\n}';
contentOfTheLesson+=create_example('selector descendent',text1,1);
text1='Selectorul de copii selectează toate elementele care sunt copii ale unui element specificat. Diferente dintre selectorul copil si cel descendent este ca copilul modifica'+ 
' stilul doar descendentului care se afla pe nivelul 1, adica care este copil. Următorul exemplu selectează toate elementele <p> care sunt copii ale unui element <div>:';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='div > p {\n\tbackground-color: yellow;\n}';
contentOfTheLesson+=create_example('selector copil',text1,2);
text1='Selectorul de frați adiacent este folosit pentru a selecta un element care se află direct după un alt element specific. Elementele frate trebuie să aibă același element părinte,'+ 
' iar „adiacent” înseamnă „imediat următor”. Următorul exemplu selectează primul element <p> care este plasat imediat după elementele <div>: si care are acelasi parinte ca elementul <div>';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='div + p {\n\tbackground-color: yellow;\n}';
contentOfTheLesson+=create_example('selector adiacent',text1,3);
text1='Selectorul general de frați selectează toate elementele care sunt frați urmatori ai unui element specificat. Următorul exemplu selectează toate elementele <p> care sunt frați ai elementelor <div>:';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='div ~ p {\n\tbackground-color: yellow;\n}';
contentOfTheLesson+=create_example('selector general',text1,4);


contentOfTheLesson+=create_subtitle('Tipul 3  - Despre Selectorii Pseudo-Clase');
contentOfTheLesson+=create_textWithIcon('O pseudo-clasă este folosită pentru a defini o stare specială a unui element. De exemplu, poate fi folosit pentru a:','');
arrayList=[
	'Stilează un element atunci când un utilizator trece cu mouse-ul peste el',
	'Stilați diferit linkurile vizitate și nevizitate',
	'Stilează un element atunci când se focuseaza pe acesta'];
contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_textWithIcon("Dintre cele mai utilizate Pseudo-Clase este clasa :hover - care se activeaza atunci cand trecem cu cursorul mouse-ul peste un element. Un exemplu interesant de utilizarea a acestei clase este afisarea unui element atunci cand se trece cu mouse-ul peste un alt element ca in exemplu de mai jos",'');
text1='p {\n\tdisplay: none;\n\tbackground-color: yellow;\n\tpadding: 20px;\n}\ndiv:hover p {\n\tdisplay: block;\n}';
contentOfTheLesson+=create_example('exemplu Pseudo-Clase',text1,5);




contentOfTheLesson+=create_textWithIcon('In tabelul de mai jos avem o lista cu cele mai utilizate Pseudo-Clase din CSS pentru diferite elemente','')


tableList=[
	[':active','a:active','Selects the active link'],
	[':checked','input:checked','Selects every checked <input> element'],
	['disabled','input:disabled','Selects every disabled <input> element'],
	[':empty','p:empty','Selects every <p> element that has no children'],
	[':enabled','input:enabled','Selects every enabled <input> element'],
	[':first-child','p:first-child','Selects every <p> elements that is the first child of its parent'],
	[':first-of-type','p:first-of-type','Selects every <p> element that is the first <p> element of its parent'],
	[':focus','input:focus','Selects the <input> element that has focus'],
	[':hover','a:hover','Selects links on mouse over'],
	[':in-range','input:in-range','Selects <input> elements with a value within a specified range'],
	[':invalid','input:invalid','Selects all <input> elements with an invalid value'],
	[':lang(language)','p:lang(it)','Selects every <p> element with a lang attribute value starting with "it"'],
	[':last-child','p:last-child','Selects every <p> elements that is the last child of its parent'],
	[':last-of-type','p:last-of-type','Selects every <p> element that is the last <p> element of its parent'],
	[':link','a:link','Selects all unvisited links'],
	[':not(selector)',':not(p)','Selects every element that is not a <p> element'],
	[':nth-child(n)','p:nth-child(2)','Selects every <p> element that is the second child of its parent'],
	[':nth-last-child(n)','p:nth-last-child(2)','Selects every <p> element that is the second child of its parent, counting from the last child'],
	[':nth-last-of-type(n)','p:nth-last-of-type(2)','Selects every <p> element that is the second <p> element of its parent, counting from the last child'],
	[':nth-of-type(n)','p:nth-of-type(2)','Selects every <p> element that is the second <p> element of its parent'],
	[':only-of-type','p:only-of-type','Selects every <p> element that is the only <p> element of its parent'],
	[':only-child','p:only-child','Selects every <p> element that is the only child of its parent'],
	[':optional','input:optional','Selects <input> elements with no "required" attribute'],
	[':out-of-range','input:out-of-range','Selects <input> elements with a value outside a specified range'],
	[':read-only','input:read-only','Selects <input> elements with a "readonly" attribute specified'],
	[':read-write','input:read-write','Selects <input> elements with no "readonly" attribute'],
	[':required','input:required','Selects <input> elements with a "required" attribute specified'],
	[':root','root','Selects the document\'s root element'],
	[':target','#news:target','Selects the current active #news element (clicked on a URL containing that anchor name)'],
	[':valid','input:valid','Selects all <input> elements with a valid value'],
	[':visited','a:visited','Selects all visited links'],
	];

contentOfTheLesson+=create_table_3x('Selector','Example','Description',tableList);

contentOfTheLesson+=create_subtitle('Tipul 4  - Despre Selectorii Pseudo-Element');
contentOfTheLesson+=create_textWithIcon('Un pseudo-element CSS este folosit pentru a stila părțile specificate ale unui element.De exemplu, poate fi folosit pentru a: ','');
arrayList=[
	'Stilați prima literă sau linie a unui element',
	'Inserați conținut înainte sau după conținutul unui element'
	];
contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_textWithIcon('Modul prin care diferentiezi utilizarea unui Pseudo-Clase vs un Pseudo-Element este ca un Pseudo-Element se foloses de doua ori doua puncte ex: ::first-line, ::before etc O lista cu cele mai importante Pseudo-Element este reprezentata in tabelul de mai jos.','');
tableList=[
	['::after','p::after','Insert something after the content of each <p> element'],
	['::before','p::before','Insert something before the content of each <p> element'],
	['::first-letter','p::first-letter','Selects the first letter of each <p> element'],
	['::first-line','p::first-line','Selects the first line of each <p> element'],
	['::marker','::marker','Selects the markers of list items'],
	['::placeholder','::placeholder','Selects the placeholder items'],
	['::selection','p::selection','Selects the portion of an element that is selected by a user']];
contentOfTheLesson+=create_table_3x('Selector','Example','Description',tableList);
contentOfTheLesson+=create_subtitle('Tipul 5  - Despre Selectorii Atribut');
contentOfTheLesson+=create_textWithIcon('Selectorul [atribut] este folosit pentru a selecta elemente cu un atribut specificat. Următorul exemplu selectează toate elementele <a> cu un atribut țintă:','');
contentOfTheLesson+=create_example('selector atribut','a[target] {\n\tbackground-color: yellow;\n}',6);
contentOfTheLesson+=create_textWithIcon('In cadrul selectorilor atribut exista 7 moduri de utilizare ca in exemplele de mai jos','');

contentOfTheLesson+=create_example('1. CSS [attribute] Selector','Selectorul [atribut] este folosit pentru a selecta elemente cu un atribut specificat. Următorul exemplu selectează toate elementele <a> cu un atribut țintă: \na[target] {\n\tbackground-color: yellow;\n}',7);
contentOfTheLesson+=create_example('2. CSS [attribute="value"] Selector','Selectorul [attribute="value"] este folosit pentru a selecta elemente cu un atribut și o valoare specificate. Următorul exemplu selectează toate elementele <a> cu un atribut target="_blank":\n a[target="_blank"] {\n\tbackground-color: yellow;\n}',8);
contentOfTheLesson+=create_example('3. CSS [attribute~="value"] Selector','Selectorul [attribute~="value"] este folosit pentru a selecta elemente cu o valoare de atribut care conține un cuvânt specificat.Următorul exemplu selectează toate elementele cu un atribut titlu care conține o listă de cuvinte separate prin spațiu, dintre care unul este „floare”::\n[title~="flower"] {\n\tborder: 5px solid yellow;\n} \n\n Exemplul de mai sus va potrivi elemente cu title="flower", title="summer flower" și title="flower new", dar nu title="my-flower" sau title="flowers".',9);

contentOfTheLesson+=create_example('4. CSS [attribute|="value"] Selector',' Selectorul [atribut|="valoare"] este folosit pentru a selecta elemente cu atributul specificat, a căror valoare poate fi exact valoarea specificată, sau valoarea specificată urmată de o cratimă (-). Notă: valoarea trebuie să fie un cuvânt întreg, fie singur, cum ar fi class="top", fie urmat de o cratimă (- ), cum ar fi class="top-text". \n [class|="top"] {\n\tbackground: yellow;\n}',10);
contentOfTheLesson+=create_example('5. CSS [attribute^="value"] Selector','Selectorul [attribute^="value"] este folosit pentru a selecta elemente cu atributul specificat, a căror valoare începe cu valoarea specificată. Următorul exemplu selectează toate elementele cu o valoare a atributului de clasă care începe cu „top”: \n[class^="top"] {\n\tbackground: yellow;\n}',11);

contentOfTheLesson+=create_example('6. CSS [attribute$="value"] Selector','Selectorul [attribute$="value"] este folosit pentru a selecta elemente a căror valoare de atribut se termină cu o valoare specificată.Următorul exemplu selectează toate elementele cu o valoare a atributului de clasă care se termină cu „test”: Notă: valoarea nu trebuie să fie un cuvânt întreg! \n[class$="test"] {\n\tbackground: yellow;\n}',12);
contentOfTheLesson+=create_example('7. CSS [attribute*="value"] Selector','Selectorul [attribute*="value"] este folosit pentru a selecta elemente a căror valoare de atribut conține o valoare specificată. Următorul exemplu selectează toate elementele cu o valoare de atribut de clasă care conține „te” \n[class*="te"] {\n\tbackground: yellow;\n}',13);










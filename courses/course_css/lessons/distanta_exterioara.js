



contentOfTheLesson=create_title('Border / Margin / Padding / Outline intre elemente');

contentOfTheLesson+=create_subtitle("Proprietatea Margin");

text1='Pentru a distanta elementele una fata de alta se foloseste proprietatea "margin". Aceasta proprietatea poate fi setata in mai multe feluri.';
contentOfTheLesson+=create_textWithIcon(text1,'');
arrayList=[
	'varianta 1 :> margine:5px; - aceasta va seta toate cele 4 margini la aceasi dinstant',
	'varianta 2 :> margine:5px 10px; - aceasta va seta marginile de sus si jos la distanta de 5px iar ce de stanga dreapata la 10px',
	'varianta 3 :> margin: 4px 2px 5px 9px; - aceasta va seta distanta in sus de 4px in dreapta de 2px in jos de 5px iar in stanga de 9px '];
contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_subtitle("Proprietatea Outline");
contentOfTheLesson+=create_textWithoutInterpretHTML('Notă: Conturul/Outline diferă de Border! Spre deosebire de border/chenar, outline/conturul este desenat în afara chenarului/Borduri elementului și se poate suprapune cu alt conținut. De asemenea, conturul/outline NU face parte din dimensiunile elementului; lățimea și înălțimea totală a elementului nu sunt afectate de lățimea conturului/Outline.Un contul/outline ajuta elementul sa iasa in evidenta. Niciuna dintre celelalte proprietăți ale conturului/Outline (despre care veți afla mai multe în capitolele următoare) nu va avea niciun efect dacă nu este setată proprietatea "outline-style"!');
contentOfTheLesson+=create_textWithoutInterpretHTML("O setare folosita a  outline este 'proprietatea outline-offset' care adaugă spațiu între un contur/outline și chenarul/bordura unui element. Spațiul dintre un element și conturul său este transparent");






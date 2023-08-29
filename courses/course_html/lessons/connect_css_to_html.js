
contentOfTheLesson=create_title('3 Moduri de a conecta stilurile CSS la elementele HTML');
text1='Modul prin care conectam un stil css la o pagina html este foarte simplu si se poate realiza in trei moduri diferite si anume:';
contentOfTheLesson+=create_textWithIcon(text1,'');
arrayList=[
	'Modul 1 : conectarea unui fisier extern CSS',
	'Modul 2 : conectarea interna a unui stil CSS',
	'Modul 3 : conectarea in interiorul tagului HTML'];
contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_subtitle("Modul 1 - Conectarea Externa");
text1='Cu un fisier de stil extern, puteți schimba aspectul unui întreg site,'+ 
' schimbând doar un fișier fara sa mai trebuiasca sa mergi in toate fisiere si sa cautati codul css ! Fiecare pagină HTML trebuie să includă o referință la'+ 
' fișierul extern / foaie de stil în interiorul elementului <link>, în interiorul secțiunii head. \n\n Stilurile externe sunt definite în cadrul elementului <link>, în interiorul secțiunii <head> a unei pagini HTML. O foaie de stil externă poate fi scrisă în orice editor de text și trebuie salvată cu extensia .css';

contentOfTheLesson+=create_textWithIcon(text1,'');
text1 = '<!DOCTYPE html>\n<html>\n<head>\n\t<link rel="stylesheet" href="mystyle.css">\n</head>\n<body>\n\t<h1>This is a heading</h1>\n\t<p>This is a paragraph.</p>\n</body>\n</html>';
contentOfTheLesson+=create_example('Conectare fisier extern css cu ajutorul tagului "link"',text1,1);
contentOfTheLesson+=create_example('interiorul fisierului "mystyle.css"','body {\n\tbackground-color: lightblue;\n}\nh1 {\n\tcolor: navy;\n\tmargin-left: 20px;\n}',2);


contentOfTheLesson+=create_subtitle("Modul 2 - Conectarea interna");
text1='O foaie de stil internă poate fi utilizată dacă o singură pagină HTML are un stil unic. Stilul intern este definit în interiorul elementului <style>, în interiorul secțiunii head.';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='<head>\n<style>\nbody {\n\tbackground-color: linen;\n}\n\nh1 {\n\tcolor: maroon;\nmargin-left: 40px;\n}\n</style>\n</head>';
contentOfTheLesson+=create_example('exemplu declarere stil intern in interiorul tagului HEAD',text1,3);

contentOfTheLesson+=create_subtitle('Modul 3 - Conectarea in interiorul tagului html');
text1='Un stil inline poate fi folosit pentru a aplica un stil unic pentru un singur element. Pentru a utiliza stiluri inline, adăugați atributul de style la elementul relevant. Atributul style poate conține orice proprietate CSS.';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);
text1='<!DOCTYPE html>\n<html>\n<body>\n\t<h1 style="color:blue;text-align:center;">This is a heading</h1>\n\t<p style="color:red;">This is a paragraph.</p>\n</body>\n</html>';
contentOfTheLesson+=create_example('exemplu declare stil in interiorul tagului html',text1,4);

contentOfTheLesson+=create_textWithoutInterpretHTML('Dacă au fost definite unele proprietăți pentru același selector (element) în foi de stil diferite, se va folosi valoarea din ultima foaie de stil citită. La fel si daca avem o foaie externa si un stil intern - se va utiliza cel care a fost interpretat ultimul');
text1='Ce stil va fi folosit atunci când există mai mult de un stil specificat pentru un element HTML?'+
		'\nToate stilurile dintr-o pagină se vor „casca” într-o nouă foaie de stil „virtuală” după următoarele reguli, unde numărul unu are cea mai mare prioritate:'+
		'\n1 - Stil inline (în interiorul unui element HTML)'+
		'\n2 - Foi de stil externe și interne (în secțiunea de cap)'+
		'\n3 - Browser implicit\n'+
		'Deci, un stil inline are cea mai mare prioritate și va suprascrie stilurile externe și interne și setările implicite ale browserului.';
contentOfTheLesson+=create_textWithoutInterpretHTML(text1);




contentOfTheLesson=create_title('Outline Vs Border');
contentOfTheLesson+=create_textWithoutInterpretHTML("Ambele proprietati fac in principiu acelasi lucru si anume adauga un chenar in jurul elementului.Sintaxa de folosire este la fel ca la border si anume: 'outline:1px solid #fff;' pentru a adauga distanta intre chenar si continut se foloseste proprietatea 'outline-offset:10px' in schimb la border pt a face acelasi lucru selectam proprietatea 'padding:10px'.");
contentOfTheLesson+=create_textWithoutInterpretHTML("O propritate care merita mentionata atunci cand vorbim de outline, pading-ul, border este box-sizing care selecteaza daca dimensiunea elementului se se aplice pe casuta de content a elementului sau pe casuta de border a elementului. Revezi lectia cu with si Height pentru a intelege mai bine idea de casuta de border si casuta de content.Proprietatile pentru outline sunt la fel ca la border si anume : ");

tableList=[
	['boder-style:','outline-style:','Selecteaza ce stil are chenarul'],
	['border-width:','outline-width:','Selecteaza grosimea chenarului'],
	['border-color:','outline-color:','Selecteaza culoare chenarului'],
	['border:','outline:','Scurtatura liniara pt a introduce mai multe proprietati intro singura line']];

contentOfTheLesson+=create_table_3x("Proprietate Border","Proprietate Outline","Descriere",tableList);






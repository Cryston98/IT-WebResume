
contentOfTheLesson=create_title('Cum schimbi tranparenta unui obiect');
text1='Proprietatea opacitate specifică opacitatea/transparența unui element. Poate lua o valoare de la 0,0 - 1,0. Cu cât valoarea este mai mică, cu atât este mai transparent';
contentOfTheLesson+=create_textWithIcon(text1,'');

contentOfTheLesson+=create_example("exemplu setare transparența",'div {\n\tbackground-color: green;\n\topacity: 0.3;\n}',1);
contentOfTheLesson+=create_textWithoutInterpretHTML('Când utilizați proprietatea opacitate pentru a adăuga transparență la fundalul unui element, toate elementele sale secundare moștenesc aceeași transparență. Acest lucru poate face textul din interiorul unui element complet transparent greu de citit.Pe a evita asta poti selecta o opacitate diferita pt acel copil/descendent');
contentOfTheLesson+=create_textWithoutInterpretHTML('Dacă nu doriți să aplicați opacitatea elementelor copil, ca în exemplul nostru de mai sus, utilizați valori de culoare RGBA. Următorul exemplu setează opacitatea pentru culoarea de fundal și nu pentru text');
contentOfTheLesson+=create_example('setare transparența doar pe parinte nu si pe decendenti','div {\n\tbackground: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */\n}',2);

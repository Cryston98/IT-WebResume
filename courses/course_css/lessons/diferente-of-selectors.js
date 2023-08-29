
contentOfTheLesson=create_title('Diferenta dintre ID si CSSS');
contentOfTheLesson+=create_textWithoutInterpretHTML("In principiu se foloseste ID cand avem un element unic si sigular catre care vrem sa facem legatura iar CLASS se foloseste atunci cand avem mai multe elemente de acelasi tip si vrem sa le schimba la toate aceste elemente stilul in acelasi timp");

contentOfTheLesson+=create_subtitle('Atunci cand un element are si atributul ID cat si atributul CLASS nivelul cu prioritatea ce mai mare in selectarea stilului va fi cel al atributului ID. Ordinea de prioritatea a stilului este INLINE_STYLE > ID > CLASA >  NUME_TAG. De asemenea Selectorii de ID au o specificitate mai mare decât selectorii de atribute. Orinea dintre External file si stilul declarat intern este cu prioritate mai mare cel care a fost selectat ultimul.');
contentOfTheLesson+=create_example('ID prioritate fata de CLASS','<p id="st" class="sll"></p>\n<p class="sll"></p> \n\n #st{color:red;} .sll{color:blue}',1);

contentOfTheLesson+=create_textWithoutInterpretHTML("In exemplu de mai sus elementul p care are atributul ID va avea culoare rosie chiar daca are si atributul CLASS iar acesta seteaza culoare albastru..Din cauza ca stilul setat pe atributul ID are o prioritate mai mare ca stilul selectat pe atributul CLASS, culoare elementului va fi rosie. Iar elementul care are doar atributul CLASS va avea culoare albastra.");


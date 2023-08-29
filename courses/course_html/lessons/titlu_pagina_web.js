contentOfTheLesson = "hello world";


titleLesson = '<h4 id="titleLesson"><i class="fa-solid fa-file-lines"></i>Cum sa setezi titlul pagini tale web ? </h4>';


shortDescription1 = "Daca ai lucrat cu wordpress sau blogger sau alte editor pentru pagini web ai vazut ca cand creai un articol iti crea automat un link al pagini si un titlu al pagini.In acest capitol vom vedea cum putem sa setam noi manual titlul pagini web.";
shortDescriptionLesson1 = '<p id="shortDescriptionLesson"><i class="fa-solid fa-angles-right"></i>'+shortDescription1+'</p>';

shortDescription2 = "Pentru a ma face mai clar cand ma refer la titlul pagini web , ma refer la acel text care apare in tabul browserului atunci cand deschidem o noua pagina. "+
" Pentru a face acest lucru vom scrie urmatoare linie de cod <code> <title>Nume_Titlu_Pagina</title> </code> in interiorul tagului <head></head>";
shortDescriptionLesson2 = '<p id="shortDescriptionLesson"><i class="fa-solid fa-angles-right"></i>'+shortDescription2+'</p>';


exampleTitle = "index.html";

exampleContent = "<html>\n<head>\n<title>MyTitle</title>\n</head>\n<body>\n</body>\n</html>";
exampleSection1 = '<div class="examapleInLesson"><div class="exampleTitle">'+exampleTitle+'<p id="notification-message1" class="tt">Copied!</p>'+
'<i onclick="copyText(1)"class="fa-solid fa-copy"></i></div><div class="exampleContent"><textarea id="exampleCode1" readonly rows="2" cols="50" style="display:inline-table;line-height: 30px;border: none;resize:none; outline:0;width:100%;font-size:17px;font-family:monospace;background: transparent;color: #313131;">'+exampleContent+'</textarea></div></div>';





contentOfTheLesson = titleLesson+shortDescriptionLesson1+shortDescriptionLesson2+exampleSection1;





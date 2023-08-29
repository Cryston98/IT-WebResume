
contentOfTheLesson=create_title('Cum adauga comentari intrun fisier html vs fisier css');
text1='Comentariile sunt folosite pentru a explica codul și vă pot ajuta atunci când editați codul sursă la o dată ulterioară.'+
	  'Comentariile CSS nu sunt afișate în browser, dar vă pot ajuta să vă documentați codul sursă.';

contentOfTheLesson+=create_textWithIcon(text1,'');
contentOfTheLesson+=create_subtitle('Comentarile CSS');
contentOfTheLesson+=create_textWithoutInterpretHTML("Pentru a adauga comentari intrun fisier CSS sau in interiorul tagului STYLE atunci cand avem o coneciune internna se foloseste sintaxa '/* comentariul_tau_il_scri_ai */ '");
contentOfTheLesson+=create_example("comentari in css",'/* This is a single-line comment */\np {\n\tcolor: red;\n}',1);

contentOfTheLesson+=create_subtitle('Comentarile HTML');
contentOfTheLesson+=create_textWithoutInterpretHTML("Pentru a adauga comentari intrun fisier HTML se foloseste sintaxa '<!-- comentariul_tau_il_scri_ai -->'");
contentOfTheLesson+=create_example("comentari in HTML",'<!DOCTYPE html>\n<html>\n<head>\n<style>\np {\n\tcolor: red; /* Set text color to red */\n}\n</style>\n</head>\n<body>\n\t<h2>My Heading</h2>\n<!-- These paragraphs will be red -->\n\t<p>Hello World!</p>\n\t<p>This paragraph is styled with CSS.</p>\n\t<p>CSS comments are not shown in the output.</p>\n</body>\n</html>',2);



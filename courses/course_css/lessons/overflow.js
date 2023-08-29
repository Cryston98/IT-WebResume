contentOfTheLesson=create_title("Utilizarea overflow cand continutul depaseste dimensiunea parintelui");

contentOfTheLesson+=create_textWithoutInterpretHTML("Proprietatea CSS overflow controlează ce se întâmplă cu conținutul care este prea mare pentru a se încadra într-o zonă. Proprietatea overflow specifică dacă se decupează conținutul sau se adaugă bare de defilare/scrolare atunci când conținutul unui element este prea mare pentru a se încadra în zona specificată.Proprietatea overflow are următoarele valori:");

arrayList=[
	'visible - Este valoare Implicita. Continutul nu este tăiată. Conținutul este redat în afara casetei elementului',
	'hidden - continutul este tăiat, iar restul conținutului va fi invizibil',
	'scroll - Depășirea este tăiată și este adăugată o bară de defilare/scroll pentru a vedea restul conținutului',
	'auto - Similar cu defilarea, dar adaugă bare de defilare numai atunci când este necesar'];

contentOfTheLesson+=create_listOfElem(arrayList);

contentOfTheLesson+=create_textWithoutInterpretHTML("Notă: Proprietatea de 'overflow' funcționează numai pentru elementele bloc cu o înălțime specificată.");
contentOfTheLesson+=create_textWithoutInterpretHTML("Notă: În OS X Lion (pe Mac), barele de defilare sunt ascunse în mod implicit și sunt afișate numai atunci când sunt utilizate (chiar dacă „overflow:scroll” este setat)");

contentOfTheLesson+=create_subtitle("overflow-x vs overflow-y");
contentOfTheLesson+=create_textWithoutInterpretHTML("Proprietățile overflow-x și overflow-y specifică dacă se modifică depășirea conținutului doar orizontal sau vertical (sau ambele):");
arrayList=[
	'overflow-x specifică ce trebuie făcut cu marginile din stânga/dreapta ale conținutului.',
	'overflow-y specifică ce trebuie făcut cu marginile de sus/de jos ale conținutului.'];
contentOfTheLesson+=create_listOfElem(arrayList);
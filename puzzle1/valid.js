var puzzle = document.forms['form']['puzzle'];
var puzzle_error = document.getElementById('puzzle_error');


puzzle.addEventListener('textInput', puzzle_Verify);


//91186368
var key = "6a80133d279320eb52d33f0577798ebf4f1f0c6203dfd575fe6967c2f94c368b";

/*funkcja pobiera input okienka, zmienia na lowercase i hashuje
jesli znashowana wartość jest równa ustalonego zahashowanego klucza to przechodzisz dalej*/

function validated(){
	if (CryptoJS.SHA256(puzzle.value.toLowerCase()) != key) {
		puzzle.style.border = "1px solid red";
		puzzle_error.style.display = "block";
		puzzle.focus();
		return false;

	}
}

function puzzle_Verify(){
	if(CryptoJS.SHA256(puzzle.value.toLowerCase()) == key) {
		puzzle.style.border = "1px solid silver";
		puzzle_error.style.display = "none";
		puzzle.focus();	
		return true;
	}
}


/*
var str1 = 'klucz';
if (puzzle == key) {
    alert(puzzle.value.length);
} else {
    alert(puzzle.value.length);
}
*/
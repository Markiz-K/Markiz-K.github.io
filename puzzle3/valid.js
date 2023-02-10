var puzzle = document.forms['form']['puzzle'];
var puzzle_error = document.getElementById('puzzle_error');


puzzle.addEventListener('textInput', puzzle_Verify);

//tankred i klorynda
var key = "a4175e0e5c8724af88c947c9864ceb0c272e722fe08de5640dfd1e707e9879d4";

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
let screen = document.querySelector(".top");

let satu = document.querySelector(".satu");
let text1 = document.querySelector("p.one");

let dua = document.querySelector(".dua");
let text2 = document.querySelector("p.two");

let tiga = document.querySelector(".tiga");
let text3 = document.querySelector("p.three");

let empat = document.querySelector(".empat");
let text4 = document.querySelector("p.four");

let lima = document.querySelector(".lima");
let text5 = document.querySelector("p.five");


satu.onclick = () =>{
	satu.classList.toggle('zoom');
	text1.classList.toggle('one');
	screen.classList.toggle('active');
}

dua.onclick = () =>{
	dua.classList.toggle('zoom');
	text2.classList.toggle('two');
	screen.classList.toggle('active');
}

tiga.onclick = () =>{
	tiga.classList.toggle('zoom');
	text3.classList.toggle('three');
	screen.classList.toggle('active');
}

empat.onclick = () =>{
	empat.classList.toggle('zoom');
	text4.classList.toggle('four');
	screen.classList.toggle('active');
}

lima.onclick = () =>{
	lima.classList.toggle('zoom');
	text5.classList.toggle('five');
	screen.classList.toggle('active');
}

function heightplus100k() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = 100000 + parseInt(h, 10);
	getBlockInfo(h);
	
}
function heightplus10k() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = 10000 + parseInt(h, 10);
	getBlockInfo(h);
}
function heightplus1k() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = 1000 + parseInt(h, 10);
	getBlockInfo(h);
}
function heightplus100() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = 100 + parseInt(h, 10);
	getBlockInfo(h);

}
function heightplus10() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = 10 + parseInt(h, 10);
	getBlockInfo(h);
}
//next height
function nextheight() {
	var h = document.getElementById("searchTB").value;
	h++;
	document.getElementById("searchTB").value = h;
	getBlockInfo(h);

}
//Genesis
function genesis() {
	var h = 0;	
	document.getElementById("searchTB").value = h;
	getBlockInfo(h);

}
//previous height
function prevheight() {
	var h = document.getElementById("searchTB").value;
	h--;
	document.getElementById("searchTB").value = h;
	getBlockInfo(h);


}
function heightminus100k() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = parseInt(h, 10) - 100000;
	getBlockInfo(h);
}
function heightminus10k() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = parseInt(h, 10) - 10000;
	getBlockInfo(h);
}
function heightminus1k() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = parseInt(h, 10) - 1000;
	getBlockInfo(h);
}
function heightminus100() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = parseInt(h, 10) - 100;
	getBlockInfo(h);
}
function heightminus10() {
	var h = document.getElementById("searchTB").value;
	document.getElementById("searchTB").value = parseInt(h, 10) - 10;
	getBlockInfo(h);
}


function my_func() {
		var start = Number(document.getElementById('start1').value); 
		var caf = 1.0015;
		var caf = parseFloat(document.getElementById("caf1").value); 
		var kol = 1;
		var day = 5; 
		var week = 4;
		var mounth = Number(document.getElementById("mounth1").value);
		var pop = Number(document.getElementById("pop1").value);
		for (j=1;j<=mounth;j++){
			for (i=1;i<=(kol*week*day);i++){ 
			start*=caf;
			}
			start+=pop;
		}
		document.getElementById('result_block').style.display = 'block';
		document.getElementById('result').innerHTML = start.toFixed(2);
	}
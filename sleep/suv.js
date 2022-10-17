function start(){
	const time = JSON.parse(localStorage.getItem('sleeptime'));
	console.log(time)
	const a = Number(time.hour);
	const b = Number(time.minute);
	const c = time.ampm;
	
	
	let str1 = `am`
	let str2 = `pm`
	var Fh =  String(Math.abs(a+3)); //계산 식 다시 세워야함
	var Sh =  String(Math.abs(a+4)); // ㅅㄱㅋㅋ
	var Th =  String(Math.abs(a+6));
	var Ffh = String(Math.abs(a+7));
	var FFh = String(Math.abs(a+9));
	var Ssh = String(Math.abs(a+10));
	if(b< 30){
		var Sm = String(Math.abs(b+30));
		var Ffm = String(Math.abs(b+30));
		var Ssf= String(Math.abs(b+30));
	}else{
		var Sm = String(Math.abs(b-30));
		var Ffm = String(Math.abs(b-30));
		var Ssf= String(Math.abs(b-30));
	}
	
	if(Fh >=13){
		var Fh = '오전 ' + String(Math.abs(a+3-12));
	}else{
		var Fh = '오후 ' + String(Math.abs(a+3));
	}
	if(Sh>=13){
		var Sh ='오전 ' + String(Math.abs(a+4-11));
	}else{
		var Sh = '오후 ' + String(Math.abs(a+4));
	}
	if(Th>=13){
		var Th ='오전 ' + String(Math.abs(a+6-12));
	}else{
		var Th = '오후 ' + String(Math.abs(a+6));
	}
	if(Ffh>=13){
		var Ffh  ='오전 ' + String(Math.abs(a+7-12));
	}else{
		var Ffh ='오후 ' + String(Math.abs(a+7));
	}
	if(FFh>=13){
		var FFh= '오전 ' + String(Math.abs(a+9-12));
	}else{
		var FFh = '오후 ' +String(Math.abs(a+9));
	}
	if(Ssh>=13){
		var Ssh= '오전 ' + String(Math.abs(a+10-12));
	}else{
		var Ssh ='오후 ' + String(Math.abs(a+10));
	}
	//	var Sh = String(Math.abs(a+4-12));
	//	var Th = String(Math.abs(a+6-12));
	//	var Ffh = String(Math.abs(a+7-12));
	//	var FFh= String(Math.abs(a+9-12));
	//	var Ssh= String(Math.abs(a+10-12));
	//}
	if (b==5){
		document.write("<div class='main_section' styel='font-weight: 250;'>");
		document.write("<h1 class='hour1' style=' margin-top: 10%; color : #f5d042;font-weight: 300; text-align:center;'> 이 시간에 자면 좋겠네요...</h1>")
		document.write("<li class='hour1'>"+Fh+":"+"0"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Sh+":"+Sm+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Th+":"+"0"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Ffh+":"+Ffm+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+FFh+":"+"0"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Ssh+":"+Ssf+"&nbsp;"+"</li>"+"<li class='hour1'>"+"또는 ± 1시간30분"+"</li>")
		document.write("</div>")
	}else if(b==0){
		document.write("<div class='main_section' styel='font-weight: 250;'>");
		document.write("<h1 class='hour1' style=' margin-top: 10%; color : #f5d042;font-weight: 300; text-align:center;'> 이 시간에 자면 좋겠네요...</h1>")
		document.write("<li class='hour1'>"+Fh+":"+"0"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Sh+":"+Sm+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Th+":"+"0"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Ffh+":"+Ffm+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+FFh+":"+"0"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Ssh+":"+Ssf+"&nbsp;"+"</li>"+"<li class='hour1'>"+"또는 ± 1시간30분"+"</li>")
		document.write("</div>")
	}else if (b==30){
		document.write("<div class='main_section' styel='font-weight: 250;'>");
		document.write("<h1 class='hour1' style=' margin-top: 10%; color : #f5d042;font-weight: 300; text-align:center;'> 이 시간에 자면 좋겠네요...</h1>")
		document.write("<li class='hour1'>"+Fh+":"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Sh+":"+"0"+Sm+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Th+":"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Ffh+":"+"0"+Ffm+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+FFh+":"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Ssh+":"+"0"+Ssf+"&nbsp;"+"</li>"+"<li class='hour1'>"+"또는 ± 1시간30분"+"</li>")
		document.write("</div>")
	}else{
		document.write("<div class='main_section' styel='font-weight: 250;'>");
		document.write("<h1 class='hour1' style=' margin-top: 10%; color : #f5d042;font-weight: 300; text-align:center;'> 이 시간에 자면 좋겠네요...</h1>")
		document.write("<li class='hour1'>"+Fh+":"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Sh+":"+Sm+"&nbsp;"+","+"</li>"+"<li class='hour1'>"+"&nbsp;"+Th+":"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"</li>"+"<li class='hour1'>"+Ffh+":"+Ffm+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+FFh+":"+b+"&nbsp;"+","+"&nbsp;"+"</li>"+"<li class='hour1'>"+Ssh+":"+Ssf+"&nbsp;"+"</li>"+"<li class='hour1'>"+"또는 ± 1시간30분"+"</li>")
		document.write("</div>")
	}
}
console.log(Fhtime)

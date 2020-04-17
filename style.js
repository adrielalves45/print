// style CSS console.log
var inputStyle;
var print = {
	s:function(mes) {
		console.log("%c" + mes, "font-size: 20px; color:lightgreen");
	},
	d:function(mes) { 
		console.log("%c" + mes, "color:#ffe642; font-size:2em; background-color:black; padding: 5px");
	},
	w:function(mes){console.warn(mes);
	},
	e:function(mes){console.error(mes);
	},
	i:function(mes, inputS){
		if(inputS != null){
			inputStyle = inputS;
			console.warn("Style defined as: " + inputS);
			console.log("%c" + mes, inputS);
			
		} else if(inputStyle){
			console.log("%c" + mes, inputStyle);
		} else {
			console.log("%cYou must define a style: %c print.i('hi', 'color:lightblue; font-size:3em')", "font-size:3em", "color:lightblue;font-size:3em");
		}
				
	}
};

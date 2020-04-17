// style CSS console.log
var inputStyle = 'color:blue';
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
	i:function(mes, inputStyle){
		if(this.inputStyle != null){
			inputStyle = this.inputStyle;
			console.log("%cStyle defined as: " + this.inputStyle, this.inputStyle);
			console.log("%c" + mes, this.inputStyle);
			
		} else {
			console.log("You must define a style > %cprint.i('hi', 'color:red')", inputStyle);
		}
				
	}
};

function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

function firstToUpperCase(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function camelCase(input) {
    return input.toLowerCase().replace(/_(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}

function camelCaseWithFirstCharUpper(input){
    if(!input){return ""};
    input = camelCase(input);
    return input[0].toUpperCase()+input.substr(1);
}

function isDate(date) {
	// by leo 
    //return ((new Date(date) !== "Invalid Date" && !isNaN(new Date(date))) && isNaN((+date)));
	if(((new Date(date) !== "Invalid Date" && !isNaN(new Date(date))) && isNaN((+date)))){
		return true;
	}else{
		var r=/^\d{4}-\d{2}-\d{4}:\d{2}$/;
		if(r.test(date)){
			return true;
		}
	}
	return false;
}

function isInt(n) {
    return n % 1 === 0;
}


Date.prototype.Format = function (fmt) {
	    var o = {
	        "M+": this.getMonth() + 1, //月份 
	        "d+": this.getDate(), //日 
	        "h+": this.getHours(), //小时 
			"H+": this.getHours(), //小时 
	        "m+": this.getMinutes(), //分 
	        "s+": this.getSeconds(), //秒 
	        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
	        "S": this.getMilliseconds() //毫秒 
	    };
	    if (/(y+)/.test(fmt))fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	    for (var k in o){
	    if (new RegExp("(" + k + ")").test(fmt)) {fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));}
	    }
	    return fmt;
	}
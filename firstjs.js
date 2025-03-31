	window.onload = function () {
            var url = "data.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
            var request;
		if (window.XMLHttpRequest) { //检查浏览器的XMLHttpRequest属性，如果为真则支持XMLHttpRequest
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器支持XMLHttpRequest 
		request=new XMLHttpRequest(); 
		} else { 
		// IE6, IE5 浏览器使用ActiveXObject
		request=new ActiveXObject("Microsoft.XMLHTTP"); 
		}            
            request.open("get", url); /*设置请求方法与路径*/
            request.send(null); /*不发送数据到服务器*/
            request.onload = function () { /*XHR对象获取到返回信息后执行*/
                if (request.status == 200) { /*返回状态为200，即为数据获取成功*/
                    var json = JSON.parse(request.responseText);
                    for(var i=0;i<json.length;i++){
                           //console.log(JSON.stringify(json[i].location));
                    	document.getElementById("data").innerHTML+=("当前点"+json[i].name+": "+json[i].location.x+", "+json[i].location.y+"<br>");
                    }                    
                    document.getElementById("disance").innerHTML=
                    Math.sqrt(Math.pow((json[0].location.x-json[1].location.x),2)+Math.pow((json[0].location.y-json[1].location.y),2));
                }
            }
       }
(function (w,d) 
{ 
	'use_strict';
	
	function t3()
	{
		const t3rebra = {
		"version":
			{
				name:"T3rebra Achates",
				id:"1.0",
				description : "Vanilla Js Mini Library",
				filename: "achates.js",
				url:"https://t3rebra.github.io/src/js/achates.js",
				date :  "September 29, 2019 02:57am"
			},
		"author":
			{
				name:"Bradley B. Dalina",
				profession:"Senior System Engineer IV, Wordpress Fullstack Developer",
				email:"bdalina54@gmail.com",
				number:"(+63)9264482952",
				url:"https://bdalina54.github.io/"
			},
		"ready": (callback=null) =>
			{
				w.onload = callback();
			},	
		"id" : (str=null) =>
			{
				if(str)
				{
					str = String (str);
					let invalid_id = str.match(/[^#a-z0-9-_]/gmi); // a valid id #a-zA-Z0-9-_
					if(!invalid_id)
					{
						if(str.indexOf("#") == -1 || str.indexOf("#") == 0)
						{
							return d.getElementById( str.replace(/#/gmi,'') );
						}
					}
					else
					{
						return t3rebra.qr(str);
					}
				}
				return false;
			},
		"cs" : (str=null) =>
			{
				if(str)
					{
						str = String (str);
						let invalid_class = str.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
						if(!invalid_class)
							{
								if(str.indexOf(".") == -1 || str.indexOf(".") == 0)
									{
										return d.getElementsByClassName( str.replace(/\./gmi,'') )[0];
									}
							}
						else
							{
								return t3rebra.qr(str);
							}
						}
				return false;
			},
		"ca" : (str=null) =>
			{
				if(str)
					{
						str = String (str);
						let invalid_class = str.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
						if(!invalid_class)
							{
								if(str.indexOf(".") == -1 || str.indexOf(".") == 0)
									{
										return d.getElementsByClassName( str.replace(/\./gmi,'') );
									}
							}
						else
							{
								return t3rebra.qa(str);
							}
					}
				return false;
			},
		"qr" : (str=null) => 
				{ 
					if(str)
					{
						return d.querySelector(str);
					}
					return false;		 
				},
		"qa" : (str=null) => 
				{
					if(str)
					{ 
						return d.querySelectorAll(str);
					}
					return;	 
				},
		"ts" : (str=null) =>
				{ 
					if(str)
						{
							let invalid_tag = str.match(/[^a-z]/gmi); // a valid tag a-zA-Z
							if(!invalid_tag)
								{
									return d.getElementsByTagName(str)[0];
								}
							else
								{
									return t3rebra.qa(str)[0];
								}
						}
					return false;
				},
		"ta" : (str=null) =>
				{ 
					if(str)
						{
							let invalid_tag = str.match(/[^a-z]/gmi); // a valid tag a-zA-Z
							if(!invalid_tag)
								{
									return d.getElementsByTagName(str);
								}
							else
								{
									return t3rebra.qa(str);
								}
						}
					return false;
				},
		"hash": () =>
			{
				if(typeof w.location.hash !='undefined' && w.location.hash !='')
				{
					return w.location.hash;		
				}
				return false;
			}
		} 
	
		return t3rebra;
	}
		
	if(typeof (t3rebra) === "undefined")
	{
		w.t3rebra = t3();
		w.t3 = t3();
		//console.log(JSON.stringify(t3rebra));
	}
	else
	{
		//console.info(JSON.stringify(t3rebra));
	}
		
})(window, document);

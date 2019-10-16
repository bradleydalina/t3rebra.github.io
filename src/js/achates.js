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
		"id" : (parent = null, str=null) =>
			{
				if(parent && str)
				{
					str = String (str);
					let invalid_id = str.match(/[^#a-z0-9-_]/gmi); // a valid id #a-zA-Z0-9-_
					if(!invalid_id)
					{
						if(str.indexOf("#") == -1 || str.indexOf("#") == 0)
						{
							return parent.getElementById( str.replace(/#/gmi,'') );
						}
					}
					else
					{
						return t3rebra.qr(parent, str);
					}
				}
				else if(parent)
				{
					parent = String (parent);
					let invalid_id = parent.match(/[^#a-z0-9-_]/gmi); // a valid id #a-zA-Z0-9-_
					if(!invalid_id)
					{
						if(parent.indexOf("#") == -1 || parent.indexOf("#") == 0)
						{
							return d.getElementById( parent.replace(/#/gmi,'') );
						}
					}
					else
					{
						return t3rebra.qr(parent);
					}
				}
				return false;
			},
		"class" : (parent=null, str=null) =>
			{
				if(parent && str)
					{
						str = String (str);
						let invalid_class = str.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
						if(!invalid_class)
							{
								if(str.indexOf(".") == -1 || str.indexOf(".") == 0)
									{
										return parent.getElementsByClassName( str.replace(/\./gmi,'') )[0];
									}
							}
						else
							{
								return t3rebra.qr(parent,str);
							}
					}
				else if(parent)
					{
						parent = String (parent);
						let invalid_class = parent.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
						if(!invalid_class)
							{
								if(parent.indexOf(".") == -1 || parent.indexOf(".") == 0)
									{
										return d.getElementsByClassName( parent.replace(/\./gmi,'') )[0];
									}
							}
						else
							{
								return t3rebra.qr(parent);
							}
					}	
				return false;
			},
		"classes" : (parent=null, str=null) =>
			{
				if(str)
					{
						str = String (str);
						let invalid_class = str.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
						if(!invalid_class)
							{
								if(str.indexOf(".") == -1 || str.indexOf(".") == 0)
									{
										return parent.getElementsByClassName( str.replace(/\./gmi,'') );
									}
							}
						else
							{
								return t3rebra.qa(parent, str);
							}
					}
				else if(parent)
					{
						parent = String (parent);
						let invalid_class = parent.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
						if(!invalid_class)
							{
								if(parent.indexOf(".") == -1 || parent.indexOf(".") == 0)
									{
										return d.getElementsByClassName( parent.replace(/\./gmi,'') );
									}
							}
						else
							{
								return t3rebra.qa(parent);
							}
					}
				return false;
			},
		"query" : (parent=null, str=null) => 
				{ 
					if(parent, str)
					{
						return parent.querySelector(str);
					}
					else if(parent)
					{
						return d.querySelector(parent);
					}
					return false;		 
				},
		"queries" : (parent=null, str=null) => 
				{
					if(parent && str)
					{ 
						return parent.querySelectorAll(str);
					}
					else if(parent)
					{ 
						return d.querySelectorAll(parent);
					}
					return;	 
				},
		"queryall" : t3rebra.queries,	
		"tagname" : (parent=null, str=null) =>
				{ 
					if(parent && str)
						{
							let invalid_tag = str.match(/[^a-z]/gmi); // a valid tag a-zA-Z
							if(!invalid_tag)
								{
									return parent.getElementsByTagName(str)[0];
								}
							else
								{
									return t3rebra.qa(parent, str)[0];
								}
						}
					else if(parent)
						{
							let invalid_tag = parent.match(/[^a-z]/gmi); // a valid tag a-zA-Z
							if(!invalid_tag)
								{
									return d.getElementsByTagName(parent)[0];
								}
							else
								{
									return t3rebra.qa(parent)[0];
								}
						}	
					return false;
				},
		"tagnames" : (parent=null, str=null) =>
				{ 
					if(parent && str)
						{
							let invalid_tag = str.match(/[^a-z]/gmi); // a valid tag a-zA-Z
							if(!invalid_tag)
								{
									return parent.getElementsByTagName(str);
								}
							else
								{
									return t3rebra.qa(parent, str);
								}
						}
					else if(parent)
						{
							let invalid_tag = parent.match(/[^a-z]/gmi); // a valid tag a-zA-Z
							if(!invalid_tag)
								{
									return d.getElementsByTagName(parent);
								}
							else
								{
									return t3rebra.qa(parent);
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

(function(w, d)
{
	'use_strict';
	function fn_aciculina() {
		
		function isElement(parent = null){
			if(typeof parent !=='object'){
				return false;
			}
		}
		let toId = (parent = null, child=null) => {
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return parent.getElementById( child.replace(/#/gmi,'') );
			}
			else if(parent) {
				parent = String (parent);
				return d.getElementById( parent.replace(/#/gmi,'') );
			}
			return false;
		}
		
		let toClass = (parent = null, child=null) => {
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return parent.getElementsByClassName( str.replace(/\./gmi,'') )[0];
			}
			else if(parent) {
				parent = String (parent);
				return d.getElementsByClassName( parent.replace(/\./gmi,'') )[0];
			}
			return false;
		}
		
		let toClasses = (parent = null, child=null) => {
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return parent.getElementsByClassName( str.replace(/\./gmi,'') );
			}
			else if(parent) {
				parent = String (parent);
				return d.getElementsByClassName( parent.replace(/\./gmi,'') );
			}
			return false;
		}
		
		let toTag = (parent = null, child=null) => {
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return parent.getElementsByTagName(str)[0];
			}
			else if(parent) {
				parent = String (parent);
				return d.getElementsByTagName(parent)[0];
			}
			return false;
		}
		
		let toTags = (parent = null, child=null) => {
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return parent.getElementsByTagName(str);
			}
			else if(parent) {
				parent = String (parent);
				return d.getElementsByTagName(parent);
			}
			return false;
		}
		
		let toQuery = (parent = null, child=null) => {
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return parent.querySelector(child);
			}
			else if(parent) {
				parent = String (parent);
				return d.querySelector(parent);
			}
			return false;
		}
		
		let toQueryAll = (parent = null, child=null) => {
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return parent.querySelectorAll(child);
			}
			else if(parent) {
				parent = String (parent);
				return d.querySelectorAll(parent);
			}
			return false;
		}
		
		let toQueries = toQueryAll;
		
		const aciculina = {			
            version : {
				name:"Terebra Aciculina",
				id:"1.0",
				description : "Centralized form validation in a single ajax request template",
				filename: "aciculina.js",
				date :  "June 29, 2019 2:00pm",
				author:"t3rebra@gmail.com",
			},
			/*
			=================================================
			Ajax Object Functions & Variables
			=================================================
			*/
			ajax_data : {
				/*
				=================================================
				Ajax Data Sent to Server
				=================================================
				*/
				rawdata:[],
				filedata:[],
				formdata: new FormData(),
				response:[],
				get sent(){return this.formdata;},				
				get received(){return this.response;}
			},
            ajax_settings: {
				/*
				=================================================
				Ajax Settings Sent to Server
				=================================================
				*/
				type:"POST",
				url: "/",
				async: true,
				responseType:"json",
				withCredentials: true,
				crossDomain:true,
				cache: false,
				user: null,
				password: null,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",//'multipart/form-data',
				processData: true,
				xrequestedWith:'XMLHttpRequest'
			},
			ajax_timeout : function ajax_timeout(ms, callback=null) {
				/*
				=================================================
				Timeout or delay function
				=================================================
				*/
				return new Promise(function(resolve, reject)
				{
					setTimeout(function() {
						(callback) ? callback() : '';
					}, ms);
				});
			},
			/*
			=================================================
			Ajax Status
			=================================================
			*/
			ajax_run:null,
			ajax_done:null,
			ajax_fail:null,
			ajax_complete:null,			
			/*
			=================================================
			Forms Object Functions & Variables
			=================================================
			*/
			form_field_form_field_parent : null,
			form_field_form_field_child : null,
			form_form_button :null,
			form_field_ignore : 'ignore',	
			
			form_init : function form_init(form_field_parent=null, form_field_child=null, form_button=null) {
				if(form_field_parent===null) {
					this.form_field_parent = String (form_field_parent);
					this.form_field_child = String (form_field_child);
					this.form_button = String (form_button);
				}
				else if(Array.isArray(form_field_parent)) {
					this.form_field_parent = String (form_field_parent[0]);
					this.form_field_child = String (form_field_parent[1]);
					this.form_button = String (form_field_parent[2]);
				}
				else if(typeof form_field_parent == 'string') {
					this.form_field_parent = String (form_field_parent);
					this.form_field_child = String (form_field_child);
					this.form_button = String (form_button);
				}
				else if(Object.keys(form_field_parent) && typeof form_field_parent === "object") {
					this.form_field_parent = String (form_field_parent.form_field_parent);
					this.form_field_child = String (form_field_parent.form_field_child);
					this.form_button = String (form_field_parent.form_button);
				}
				else if(Object.keys(form_field_parent[0]) && typeof form_field_parent === "object" ) {
					this.form_field_parent = String (form_field_parent[0].form_field_parent);
					this.form_field_child = String (form_field_parent[0].form_field_child);
					this.form_button = String (form_field_parent[0].form_button);
				}
				aciculina.form_oninput();
				aciculina.form_reset();
				aciculina.form_focus();
			}
		}
		//return function
		return aciculina;
	};

	if(typeof (w.t3rebra) === "undefined" || w.t3rebra == null) {
		function dynamicallyLoadScript(url) {
			return new Promise(function(resolve, reject) {
				var script = document.createElement("script");
				script.src = url;
				script.onload = resolve;
				script.onerror = () => reject(new Error(`Error when loading ${url}!`));

				var firstScript = d.getElementsByTagName('script')[0];
				firstScript.form_field_parentNode.insertBefore(script, firstScript);
				//document.body.appendform_field_child(script);
			});
			dynamicallyLoadScript("https://t3rebra.github.io/src/js/achates.js");
			//w.t3rebra = fn_aciculina();
			//var t3 = w.t3rebra;
		}
	}
	else {
		var append_aciculina = fn_aciculina();	    
		function extend(obj, src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) obj[key] = src[key];
			}
			return obj;
		}
		w.t3rebra = extend(append_aciculina, w.t3rebra);
		var t3 = w.t3rebra;
	}

})(window, document);

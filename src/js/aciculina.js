(function(w, d)
{
	'use_strict';
	function fn_aciculina() {
		
		function isElement(parent = null){
		/*
		=================================================
		Object Validator
		=================================================
		*/
			if(typeof parent !=='object' && typeof parent.nodeName !=="number" && typeof parent.nodeName !== "string"){
				return false;
			}
		}		
		let toId = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementById
		=================================================
		*/
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return (parent.getElementById( child.replace(/#/gmi,'') )) ? parent.getElementById( child.replace(/#/gmi,'') ) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementById( parent.replace(/#/gmi,'') )) ? d.getElementById( parent.replace(/#/gmi,'') ) : null;
			}
			return false;
		}		
		let toClass = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByClassName Zero index
		=================================================
		*/
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return (parent.getElementsByClassName( str.replace(/\./gmi,'') )[0]) ? parent.getElementsByClassName( str.replace(/\./gmi,'') )[0] : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByClassName( parent.replace(/\./gmi,'') )[0]) ? d.getElementsByClassName( parent.replace(/\./gmi,'') )[0] : null;
			}
			return false;
		}		
		let toClasses = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByClassName All indexes
		=================================================
		*/
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return (parent.getElementsByClassName( str.replace(/\./gmi,'') )) ? parent.getElementsByClassName( str.replace(/\./gmi,'') ) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByClassName( parent.replace(/\./gmi,'') )) ? d.getElementsByClassName( parent.replace(/\./gmi,'') ): null;
			}
			return false;
		}		
		let toTag = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByTagName Zero index
		=================================================
		*/
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return (parent.getElementsByTagName(str)[0]) ? parent.getElementsByTagName(str)[0] : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByTagName(parent)[0]) ? d.getElementsByTagName(parent)[0] : null;
			}
			return false;
		}		
		let toTags = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByTagName All indexes
		=================================================
		*/
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return (parent.getElementsByTagName(str)) ? parent.getElementsByTagName(str) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByTagName(parent)) ? d.getElementsByTagName(parent) : null;
			}
			return false;
		}
		let toQuery = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for QuerySelector Zero index
		=================================================
		*/
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return (parent.querySelector(child)) ? parent.querySelector(child) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.querySelector(parent)) ? d.querySelector(parent) : null;
			}
			return false;
		}
		let toQueryAll = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for QuerySelector All indexes
		=================================================
		*/
			if(parent && child) {
				isElement(parent);
				child = String (child);
				return (parent.querySelectorAll(child)) ? parent.querySelectorAll(child) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.querySelectorAll(parent)) ? d.querySelectorAll(parent) : null;
			}
			return false;
		}		
		let toQueries = toQueryAll;
		
		const aciculina = {			
            version : {				
				/*
				=================================================
				Plugin Destails 
				=================================================
				*/
				name:"Terebra Aciculina",
				id:"1.0",
				description : "Centralized form validation in a single ajax request template",
				filename: "aciculina.js",
				date :  "June 29, 2019 2:00pm",
				author:"t3rebra@gmail.com",
			},
			isEmail : function isEmail(email) {
				/*
				=================================================
				Email validator
				=================================================
				*/
				const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			},
			isUrl = function isUrl(url) {
				/*
				=================================================
				URL validator
				=================================================
				*/
				if(String (url).toLowerCase().replace(/http:\/\//, '') == 'localhost' ) {
					return true;
				}
				const res = new RegExp('^((ft|htt)ps?:\\/\\/)?'+ // protocol
					'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
					'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
					'(\\:\\d+)?(\\/[-a-z\\d%_@.~+]*)*'+ // port and path
					'((\\?|\\#)[:;&a-z\\d%_.~+=\\/-]*)?'+ // query string
					'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
					return res.test(String(url));
			},
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
				return new Promise(function(resolve, reject) {
					setTimeout(function() {
						(callback) ? callback() : '';
					}, ms);
				});
			},
			ajax_run:null,
			ajax_done:null,
			ajax_fail:null,
			ajax_complete:null,	
			ajax_request : function ajax_request(ajax_run=null, ajax_done =null, ajax_fail=null, ajax_complete=null) {
				/*
				=================================================
				Centralized ajax request
				=================================================
				*/
				ajax_run = (ajax_run!=null) ? ajax_run : this.ajax_run;
				ajax_done = (ajax_done!=null) ? ajax_done : this.ajax_done;
				ajax_fail= (ajax_fail!=null) ? ajax_fail : this.ajax_fail;
				ajax_complete =(ajax_complete!=null) ? ajax_complete : this.ajax_complete;
				
				// code for modern browsers and code for old IE browsers
				const xhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				
				xhttp.onreadystatechange = function() {
					if (this.readyState == 1) {
						console.info('The request to server connection established...');
					}
					if (this.readyState == 2) {
						console.info('The request received ...');
					}
					if (this.readyState == 3) {
						if(ajax_run) {
							return ajax_run();
						}
						else {
							console.info('The processing request...');
						}
					}
					if (this.readyState == 4 && this.status == 200) {
						if(aciculina.settings['responseType']=='json') {
						  	aciculina.ajax_data['response'] = this.response;
						}
						else {
						  	aciculina.ajax_data['response'] = this.responseText;
						}
						if(ajax_done) {
						  	return ajax_done(aciculina.ajax_data['response']);
						}
						else {
							console.group('Server Request - Result');
							console.info(aciculina.ajax_data['response']);
							console.info(`Success ${xhttp.status}: ${xhttp.statusText}`);
							console.table(xhttp.getAllResponseHeaders());
							console.groupEnd();
							//return aciculina.ajax_data['response'];
						}
					}
					else if(this.readyState == 4 && this.status != 200) {
						if(ajax_fail) {
							return ajax_fail();
						}
						else {
							console.error(`Error ${xhttp.status}: ${xhttp.statusText}`);
						}
					}
					if (this.readyState == 4) {
						if(ajax_complete) {
							return ajax_complete();
						}
						else {
							console.table(aciculina.ajax_data);
							console.info(`Server Complete Response ${xhttp.status}: ${xhttp.statusText}`);
						}
						let fd = [];
						for(let key of aciculina.ajax_data['formdata'].keys()) {
							fd.push(key);
						}
						for(let i =0; i < fd.length; i++) {
							aciculina.ajax_data['formdata'].delete(fd[i]);
						}
					}
				}
				xhttp.open(aciculina.ajax_settings['type'], 'https://cors-anywhere.herokuapp.com/'+aciculina.ajax_settings['url'], aciculina.ajax_settings['async'], aciculina.ajax_settings['user'], aciculina.ajax_settings['password']);
				xhttp.responseType = aciculina.ajax_settings['responseType'];
				xhttp.setRequestHeader("Accept", aciculina.ajax_settings['responseType']);

				xhttp.send(aciculina.ajax_data['formdata']);
			},					
			form_field_form_field_parent : null,
			form_field_form_field_child : null,
			form_form_button :null,
			form_field_ignore : 'ignore',				
			form_init : function form_init(form_field_parent=null, form_field_child=null, form_button=null) {				
				/*
				=================================================
				Initialize Form 
				=================================================
				*/
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
			},			
			form_oninput : function form_oninput(el=null) {
				/*
				=================================================
				On input event reset input field border and value
				=================================================
				*/
				if(el) {
					for(let i=0; i < toQueries(el).length; i++) {
						toQueries(el)[i].oninput = (e)=>{ toQueries(el)[i].style.border=''; };
					}
				}
				else {
					if(typeof this.form_field_child =='string') {
						this.form_oninput(this.form_field_child);
					}
					else {
						if(this.form_field_child===null) {
							console.warn('No value was set for the inputs');
							return false;
						}
						for(let i =0; i < this.form_field_child.length; i++) {
							this.form_oninput(this.form_field_child[i]);
						}
					}
				}
			},
			form_focus : function form_focus(el=null) {
				/*
				=================================================
				On focus input field event
				=================================================
				*/
				if(el) {
					let array = toQueries(this.form_field_parent+' '+el);
					for(let i =0; i < array.length; i++) {
						if( (array[i].tagName).toLowerCase() != 'form_button' && (array[i].type).toLowerCase() !='submit') {
							if( array[i].value === '' || array[i].value === 0 || array[i].value === '0' ) {
								array[i].focus();
								return false;
							}
						}
					}
				}
				else {
					if(typeof this.form_field_child == 'string') {
						this.focus(this.form_field_child);
					}
					else {
						if(this.form_field_child===null) {
							console.warn('No value was set for the inputs');
							return false;
						}
						for(let i =0; i < (this.form_field_child).length; i++) {
							this.focus(this.form_field_child[i]);
						}
					}
				}
			},
			form_reset : function form_reset(el=null) {
				/*
				=================================================
				On reset form inputs field border and values
				=================================================
				*/
				if(el) {
					let array = toQueries(this.form_field_parent+' '+el);
					for(let i =0; i < array.length; i++) {
						if( (array[i].tagName).toLowerCase() != 'form_button' && (array[i].type).toLowerCase() !='submit') {
							if(array[i] !== toClass(this.ignore)) {
								if( array[i].tagName != 'select' || array[i].type != 'checkbox' || array[i].type != 'radio' ) {
									array[i].value='';
									array[i].style.border='';
								}
								//console.group('Comparison');
								//	console.log(array[i]);
								//  console.log( toClass(this.ignore)[0]);
								//console.groupEnd();
							}
						}
					}
				}
				else {
					if(typeof this.form_field_child =='string') {
						this.reset(this.form_field_child);
					}
					else {
						if(this.form_field_child===null) {
							console.warn('No value was set for the inputs');
							return false;
						}
						for(let i =0; i < this.form_field_child.length; i++) {
							this.reset(this.form_field_child[i]);
						}
					}
				}
			},
			form_click : function form_click(callback) {
				/*
				=================================================
				Trigger on click event
				=================================================
				*/
				toId(this.form_button).onclick = function(e){ e.preventDefault(); return callback();};
			},
			form_submit : function form_submit() {
				/*
				=================================================
				Trigger submit form
				=================================================
				*/
				toId(this.form_field_parent).submit();
			},						
			form_validate : function form_validate(callback=null) {
				/*
				=================================================
				Validate form input fields
				=================================================
				*/
				let first_empty=null;
				let partial=null;
				let count=0;

				let validEmail = this.isEmail;
				let validUrl = this.isUrl;
				
				function input_validator(el) {
					if(el.getAttribute("type").toLowerCase() =='number') {
						let int_value = Number ((el.value).trim());
						if( (int_value !== 0  && String (int_value).length > 0) {
							is_valid(el);
						}
						else {
							is_invalid(el);
						}
					}
					else if(el.getAttribute("type").toLowerCase() =='email') {
						if( isEmail( el.value ) ) {
							is_valid(el);
						}
						else {
							is_invalid(el);
						}
					}
					else if(el.getAttribute("type").toLowerCase() =='url' ) {
						if(isUrl( el.value ) ) {
							is_valid(el);
						}
						else {
							is_invalid(el);
						}
					}
					else if( (el.value).trim() === '' || (el.value).trim().length === 0 ) {
						is_invalid(el);
					}
					else {
						is_valid(el);
					}
				}
				function push_data(el) {
					if( el.tagName =='select') {
						aciculina.data['rawdata'].push({'name':el.getAttribute('name'), 'value': el.value });
						aciculina.data['formdata'].append(el.getAttribute('name'), el.value );
					}
					else if( el.getAttribute('type') =='checkbox') {
						if( el.checked ) {
							aciculina.data['rawdata'].push({'name':el.getAttribute('name'), 'value': el.value });
							aciculina.data['formdata'].append(el.getAttribute('name'), el.value );
						}
					}
					else if( el.getAttribute('type') =='radio') {
						if( el.checked ) {
							aciculina.data['rawdata'].push({'name':el.getAttribute('name'), 'value': el.value });
							aciculina.data['formdata'].append(el.getAttribute('name'), el.value );
						}
					}
					else if( el.getAttribute('type') =='file') {
						if( toId(el.getAttribute('id')).files.length > 0 )
						{
							aciculina.data['filedata'].push({'name':el.getAttribute('name'), 'id':el.getAttribute('id')});
						}
					}
					else {
						aciculina.data['rawdata'].push({'name': el.getAttribute('name'), 'value': el.value });
						aciculina.data['formdata'].append(el.getAttribute('name'), el.value );
					}
				}
				function is_valid(el){
					el.style.border='';
				}
				function is_invalid(el){
					el.value='';
					el.style.border='solid 1px #ff0000';
					first_empty = (!first_empty) ? el : null;					
				}

				if(typeof this.form_field_child =='string') {
					let array = toQueries(this.form_field_parent+' '+this.form_field_child);
					for(let i =0; i < array.length; i++) {
						if( (array[i].tagName).toLowerCase() != 'button' && (array[i].type).toLowerCase() !='submit') {
							if("required" in array[i].attributes) {
								input_validator(array[i]);
							}
							else {
								input_validator(array[i]);
							}							
							push_data(array[i]);
							
						}
					}
				}
				else {
					for( let i =0; i < this['form_field_child'].length; i++) {
						let array = toQueries(this.form_field_parent+' '+this.form_field_child[i]);
						for(let j =0; j < array.length; j++) {
							if( (array[j].tagName).toLowerCase() != 'button' && (array[j].type).toLowerCase() !='submit') {
								if("required" in array[j].attributes) {
									input_validator(array[j]);									
								}
								else {
									input_validator(array[j]);
								}
								push_data(array[j]);
							}
						}
					}
				}

				if(first_empty) {
					aciculina.ajax_data['rawdata'] = [];
					for(let pair of aciculina.ajax_data['formdata'].entries()) {
						aciculina.ajax_data['formdata'].delete(pair[0]);
					}
					aciculina.ajax_data['filedata'] = [];
					first_empty.focus();
					first_empty.value='';
					first_empty=null;
					return false;
				}
				else {					
					first_empty=null;
					(typeof callback =="function") && callback();	
					if(aciculina.ajax_data['filedata'].length > 0) {
						for(let i =0; i < aciculina.ajax_data['filedata'].length; i++) {
							let attachments = toId(aciculina.ajax_data['filedata'][i].id).files;
							let files = attachments;
							// Loop through each of the selected files.
							for (let x = 0; x < files.length; x++) {
								let file = files[x];
								// Add the file to the request.
								aciculina.ajax_data['formdata'].append(aciculina.ajax_data['filedata'][i].name, file, file.name);
							}
						}
						aciculina.ajax_settings['cache']=false;
						aciculina.ajax_settings['contentType']='multipart/form-data';
						aciculina.ajax_settings['processData']=false;
						aciculina.ajax_data['filedata'] =null;
						console.warn('There is a present file for upload!');
					}
					return aciculina.ajax_data['formdata'];
				}
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

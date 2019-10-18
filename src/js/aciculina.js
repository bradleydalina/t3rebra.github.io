(function(w, d)
{
	'use_strict';
	function fn_aciculina() {
		const aciculina = {
			data : {
				rawdata:[],
				filedata:[],
				formdata: new FormData(),
				response:[],
				get sent(){return this.formdata;},				
				get received(){return this.response;}
			},
            version : {
				name:"Terebra Aciculina",
				id:"1.0",
				description : "Centralized form validation in a single ajax request template",
				filename: "aciculina.js",
				date :  "June 29, 2019 2:00pm",
				author:"t3rebra@gmail.com",
			},
            settings: {
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
			parent : null,
			child : null,
			button :null,
			ignore : 'ignore',	
			run:null,
			done:null,
			fail:null,
			complete:null,
			init : function init(parent=null, child=null, button=null) {
				if(parent===null) {
					this.parent = parent;
					this.child = child;
					this.button =button;
				}
				else if(Array.isArray(parent)) {
					this.parent = parent[0];
					this.child = parent[1];
					this.button =parent[2];
				}
				else if(typeof parent == 'string') {
					this.parent = parent;
					this.child = child;
					this.button = button;
				}
				else if(Object.keys(parent) && typeof parent === "object") {
					this.parent = parent.parent;
					this.child = parent.child;
					this.button = parent.button;
				}
				else if(Object.keys(parent[0]) && typeof parent === "object" ) {
					this.parent = parent[0].parent;
					this.child = parent[0].child;
					this.button = parent[0].button;
				}
				aciculina.oninput();
				aciculina.reset();
				//aciculina.focus();
			},
			timeout : function timeout(ms, callback=null) {
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
			oninput : function oninput(el=null) {
				/*
				=================================================
				On input event reset input field border and value
				=================================================
				*/
				if(el) {
					for(let i=0; i < qa(el).length; i++) {
						t3.queries(el)[i].oninput = function(e) { t3.queries(el)[i].style.border=''; };
					}
					//qr(el).oninput = (e)=> { qr(el).style.border=''; };
					//qr(el).oninput = function(e) { qr(el).style.border=''; };
					//qr(el).addEventListener('input', (e)=> { qr(el).style.border=''; } );
				}
				else {
					if(typeof this.child =='string') {
						this.oninput(this.child);
					}
					else {
						if(this.child===null) {
							console.warn('No value was set for the inputs');
							return false;
						}
						for(let i =0; i < this.child.length; i++) {
							this.oninput(this.child[i]);
						}
					}
				}
			},
			focus : function focus(el=null) {
				/*
				=================================================
				On focus input field event
				=================================================
				*/
				if(el) {
					let array = qa(this.parent+' '+el);
					for(let i =0; i < array.length; i++) {
						if( (array[i].tagName).toLowerCase() != 'button' && (array[i].type).toLowerCase() !='submit') {
							if( array[i].value === '' || array[i].value === 0 || array[i].value === '0' ) {
								array[i].focus();
								return false;
							}
						}
					}
				}
				else {
					if(typeof this.child == 'string') {
						this.focus(this.child);
					}
					else {
						if(this.child===null) {
							console.warn('No value was set for the inputs');
							return false;
						}
						for(let i =0; i < (this.child).length; i++) {
							this.focus(this.child[i]);
						}
					}
				}
			},
			reset : function reset(el=null) {
				/*
				=================================================
				On reset form inputs field border and values
				=================================================
				*/
				if(el) {
					let array = qa(this.parent+' '+el);
					for(let i =0; i < array.length; i++) {
						if( (array[i].tagName).toLowerCase() != 'button' && (array[i].type).toLowerCase() !='submit') {
							if(array[i] !== cl(this.ignore)[0]) {
								if( array[i].tagName != 'select' || array[i].type != 'checkbox' || array[i].type != 'radio' ) {
									array[i].value='';
									array[i].style.border='';
								}
								//console.group('Comparison');
								//	console.log(array[i]);
								//  console.log( cl(this.ignore)[0]);
								//console.groupEnd();
							}
						}
					}
				}
				else {
					if(typeof this.child =='string') {
						this.reset(this.child);
					}
					else {
						if(this.child===null) {
							console.warn('No value was set for the inputs');
							return false;
						}
						for(let i =0; i < this.child.length; i++) {
							this.reset(this.child[i]);
						}
					}
				}
			},
			click : function click(callback) {
				/*
				=================================================
				Trigger on click event
				=================================================
				*/
				id(this.button).onclick = function(e){ e.preventDefault(); return callback();};
			},
			submit : function submit() {
				/*
				=================================================
				Trigger submit form
				=================================================
				*/
				id(this.parent).submit();
			},
			validEmail : function validEmail(email) {
				/*
				=================================================
				Email validator
				=================================================
				*/
				const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			},
			validUrl = function validUrl(url) {
				/*
				=================================================
				URL validator
				=================================================
				*/
				const res = new RegExp('^((ft|htt)ps?:\\/\\/)?'+ // protocol
					'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
					'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
					'(\\:\\d+)?(\\/[-a-z\\d%_@.~+]*)*'+ // port and path
					'((\\?|\\#)[:;&a-z\\d%_.~+=\\/-]*)?'+ // query string
					'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
					return res.test(String(url));
			},
			request : function request(run=null, done =null, fail=null, complete=null) {
				/*
				=================================================
				Centralized ajax request
				=================================================
				*/
				run = (run!=null) ? run : this.run;
				done = (done!=null) ? done : this.done;
				fail= (fail!=null) ? fail : this.fail;
				complete =(complete!=null) ? complete : this.complete;
				
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
						if(run) {
							return run();
						}
						else {
							console.info('The processing request...');
						}
					}
					if (this.readyState == 4 && this.status == 200) {
						if(aciculina.settings['responseType']=='json') {
						  	aciculina.data['response'] = this.response;
						}
						else {
						  	aciculina.data['response'] = this.responseText;
						}
						if(done) {
						  	return done(aciculina.data['response']);
						}
						else {
							console.group('Server Request - Result');
							console.info(aciculina.data['response']);
							console.info(`Success ${xhttp.status}: ${xhttp.statusText}`);
							console.table(xhttp.getAllResponseHeaders());
							console.groupEnd();
							//return aciculina.data['response'];
						}
					}
					else if(this.readyState == 4 && this.status != 200) {
						if(fail) {
							return fail();
						}
						else {
							console.error(`Error ${xhttp.status}: ${xhttp.statusText}`);
						}
					}
					if (this.readyState == 4) {
						if(complete) {
							return complete();
						}
						else {
							console.table(aciculina.data);
							console.info(`Server Complete Response ${xhttp.status}: ${xhttp.statusText}`);
						}
						let fd = [];
						for(let key of aciculina.data['formdata'].keys()) {
							fd.push(key);
						}
						for(let i =0; i < fd.length; i++) {
							aciculina.data['formdata'].delete(fd[i]);
						}
					}
				}
				xhttp.open(aciculina.settings['type'], 'https://cors-anywhere.herokuapp.com/'+aciculina.settings['url'], aciculina.settings['async'], aciculina.settings['user'], aciculina.settings['password']);
				xhttp.responseType = aciculina.settings['responseType'];
				xhttp.setRequestHeader("Accept", aciculina.settings['responseType']);

				xhttp.send(aciculina.data['formdata']);
			},
			validate : function validate(callback=null) {
				/*
				=================================================
				Validate form input fields
				=================================================
				*/
				let first_empty=null;
				let partial=null;
				let count=0;

				let validEmail = this.fn_validEmail;
				let validUrl = this.fn_validUrl;

				if(typeof this.child =='string') {
					let array = qa(this.parent+' '+this.child);
					for(let i =0; i < array.length; i++) {
						if( (array[i].tagName).toLowerCase() != 'button' && (array[i].type).toLowerCase() !='submit') {
							if("required" in array[i].attributes) {
								if(array[i].getAttribute("type").toLowerCase() =='number') {
									if( (array[i].value).trim() != 0 && (array[i].value).trim() != '0' && (array[i].value).trim().length > 0) {
										array[i].style.border='';
									}
									else {
										array[i].value='';
										array[i].style.border='solid 1px #ff0000';

										if(!first_empty) {
											first_empty = array[i];
										}
									}
								}
								else if(array[i].getAttribute("type").toLowerCase() =='email') {
									if( validEmail( array[i].value ) ) {
										array[i].style.border='';
									}
									else {
										array[i].value='';
										array[i].style.border='solid 1px #ff0000';

										if(!first_empty) {
										first_empty = array[i];
										}
									}
								}
								else if(array[i].getAttribute("type").toLowerCase() =='url' ) {
									if(validUrl( array[i].value ) ) {
										array[i].style.border='';
									}
									else {
										array[i].value='';
										array[i].style.border='solid 1px #ff0000';

										if(!first_empty) {
											first_empty = array[i];
										}
									}
								}
								else if( (array[i].value).trim() === '' || (array[i].value).trim().length === 0 ) {
									array[i].value='';
									array[i].style.border='solid 1px #ff0000';

									if(!first_empty) {
										first_empty = array[i];
									}
								}
								else {
									array[i].style.border='';
								}
							}
							else {
								if(array[i].getAttribute("type").toLowerCase() =='email' ) {
									if( (array[i].value).trim() != '' || (array[i].value).trim().length > 0  ) {
										if( validEmail( array[i].value ) ) {
											array[i].style.border='';
										}
										else {
											array[i].value='';
											array[i].style.border='solid 1px #ff0000';

											if(!first_empty) {
												first_empty = array[i];
											}
										}
									}
								}
								else if(array[i].getAttribute("type").toLowerCase() =='url' ) {
									if( (array[i].value).trim() != '' || (array[i].value).trim().length > 0  ) {
										if( validUrl( array[i].value ) ) {
											array[i].style.border='';
										}
										else {
											array[i].value='';
											array[i].style.border='solid 1px #ff0000';

											if(!first_empty) {
												first_empty = array[i];
											}
										}
									}
								}
							}

							if( array[i].tagName =='select') {
								aciculina.data['rawdata'].push({'name':array[i].getAttribute('name'), 'value': array[i].value });
								aciculina.data['formdata'].append(array[i].getAttribute('name'), array[i].value );
							}
							else if( array[i].getAttribute('type') =='checkbox') {
								if( array[i].checked ) {
									aciculina.data['rawdata'].push({'name':array[i].getAttribute('name'), 'value': array[i].value });
									aciculina.data['formdata'].append(array[i].getAttribute('name'), array[i].value );
								}
							}
							else if( array[i].getAttribute('type') =='radio') {
								if( array[i].checked ) {
									aciculina.data['rawdata'].push({'name':array[i].getAttribute('name'), 'value': array[i].value });
									aciculina.data['formdata'].append(array[i].getAttribute('name'), array[i].value );
								}
							}
							else if( array[i].getAttribute('type') =='file') {
								if( document.getElementById(array[i].getAttribute('id')).files.length > 0 )
								{
									aciculina.data['filedata'].push({'name':array[i].getAttribute('name'), 'id':array[i].getAttribute('id')});
								}
							}
							else {
								aciculina.data['rawdata'].push({'name': array[i].getAttribute('name'), 'value': array[i].value });
								aciculina.data['formdata'].append(array[i].getAttribute('name'), array[i].value );
							}
						}
					}
				}
				else {
					for( let i =0; i < this['child'].length; i++) {
						let array = qa(this.parent+' '+this.child[i]);
						for(let j =0; j < array.length; j++) {
							if( (array[j].tagName).toLowerCase() != 'button' && (array[j].type).toLowerCase() !='submit') {
								if("required" in array[j].attributes) {
									if(array[j].getAttribute("type").toLowerCase() =='number') {
										if( (array[j].value).trim() != 0 && (array[j].value).trim() != '0' && (array[j].value).trim().length > 0) {
											array[j].style.border='';
										}
										else {
											array[j].style.border='solid 1px #ff0000';
											array[j].value='';
											if(!first_empty) {
												first_empty = array[j];
											}
										}
									}
									else if(array[j].getAttribute("type").toLowerCase() =='email') {
										if( validEmail( array[j].value ) ) {
											array[j].style.border='';
										}
										else {
											array[j].style.border='solid 1px #ff0000';
											array[j].value='';
											if(!first_empty) {
												first_empty = array[j];
											}
										}
									}
									else if(array[j].getAttribute("type").toLowerCase() =='url' ) {
										if(validUrl( array[j].value ) ) {
											array[j].style.border='';
										}
										else {
											array[j].style.border='solid 1px #ff0000';
											array[j].value='';
											if(!first_empty) {
												first_empty = array[j];
											}
										}
									}
									else if( (array[j].value).trim() === '' || (array[j].value).trim().length === 0 ) {
										array[j].style.border='solid 1px #ff0000';
										array[j].value='';
										if(!first_empty) {
											first_empty = array[j];
										}
									}
									else {
										array[j].style.border='';
									}
								}
								else {
									if(array[j].getAttribute("type").toLowerCase() =='email' ) {
										if( (array[j].value).trim() != '' || (array[j].value).trim().length > 0  ) {
											if( validEmail( array[j].value ) ) {
												array[j].style.border='';
											}
											else {
												array[j].style.border='solid 1px #ff0000';
												array[j].value='';
												if(!first_empty) {
													first_empty = array[j];
												}
											}
										}
									}
									else if(array[j].getAttribute("type").toLowerCase() =='url' ) {
										if( (array[j].value).trim() != '' || (array[j].value).trim().length > 0  ) {
											if( validUrl( array[j].value ) ) {
												array[j].style.border='';
											}
											else {
												array[j].style.border='solid 1px #ff0000';
												array[j].value='';
												if(!first_empty) {
													first_empty = array[j];
												}
											}
										}
									}
								}

								if( array[j].tagName =='select') {
									aciculina.data['rawdata'].push({'name':array[j].getAttribute('name'), 'value':array[j].value });
									aciculina.data['formdata'].append(array[j].getAttribute('name'), array[j].value );
								}
								else if( array[j].getAttribute('type') =='checkbox') {
									if(array[j].checked) {
										aciculina.data['rawdata'].push({'name':array[j].getAttribute('name'), 'value':array[j].value });
										aciculina.data['formdata'].append(array[j].getAttribute('name'), array[j].value );
									}
								}
								else if( array[j].getAttribute('type') =='radio') {
									if(array[j].checked) {
										aciculina.data['rawdata'].push({'name':array[j].getAttribute('name'), 'value':array[j].value });
										aciculina.data['formdata'].append(array[j].getAttribute('name'), array[j].value );
									}
								}
								else if( array[j].getAttribute('type') =='file') {
									if( array[j].files.length > 0 ) {
										aciculina.data['filedata'].push({'name':array[j].getAttribute('name'), 'id':array[j].getAttribute('id')});
									}
								}
								else {
									aciculina.data['rawdata'].push({'name':array[j].getAttribute('name'), 'value':array[j].value });
									aciculina.data['formdata'].append(array[j].getAttribute('name'), array[j].value );
								}
							}
						}
					}
				}

				if(first_empty) {
					aciculina.data['rawdata'] = [];
					for(let pair of aciculina.data['formdata'].entries()) {
						aciculina.data['formdata'].delete(pair[0]);
					}
					aciculina.data['filedata'] = [];
					first_empty.focus();
					first_empty.value='';
					first_empty=null;
					return false;
				}
				else {
					if(callback) {
						callback();
					}
					first_empty=null;

					if(aciculina.data['filedata'].length > 0) {
						for(let i =0; i < aciculina.data['filedata'].length; i++) {
							let attachments = document.getElementById(aciculina.data['filedata'][i].id).files;
							let files = attachments;
							// Loop through each of the selected files.
							for (let x = 0; x < files.length; x++) {
								let file = files[x];
								// Add the file to the request.
								aciculina.data['formdata'].append(aciculina.data['filedata'][i].name, file, file.name);
							}
						}
						aciculina.settings['cache']=false;
						aciculina.settings['contentType']='multipart/form-data';
						aciculina.settings['processData']=false;
						aciculina.data['filedata'] =null;
						console.warn('There is a present file for upload!');
					}
					return aciculina.data['formdata'];
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
				firstScript.parentNode.insertBefore(script, firstScript);
				//document.body.appendChild(script);
			});
			dynamicallyLoadScript("https://t3rebra.github.io/src/js/achates.js");
			//w.t3rebra = fn_aciculina();
			//var t3 = w.t3rebra;
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

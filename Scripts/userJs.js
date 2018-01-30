$(function() {
	// 'use strict'
	var back = $('<div>', {
 	  		'class': 'cont'}),
		myTd = $('<td>'),
    	myTr = $('<tr>').append(myTd),
		myTfoot = $('<tfoot>'),
		myTbody2 = $('<tbody>', { id: 'two' })
		myTbody = $('<tbody>', { id: 'one'}),
		myCaption = $('<caption>', { 'text': 'Sys User' }),
	 	myTable = $('<table>').append([myCaption, myTbody, myTbody2, myTfoot]),
		myForm = $('<form>').append(myTable),
		myDiv = $('<div>').append(myForm),
		myMain = $('<main>').append(myDiv);
		
		$(document.body).append([back, myMain]);

	var arrTr = [],
	    arrTd = [],
	    arrTh = [];

	window.myFunction = function () {
		$("#one").css('display', 'none');
		$("#two").css('display', 'block');
	}
	window.myFunctionTwo = function () {

		$("#one").css('display', 'block');
		$("#two").css('display', 'none');
	}

	for (var i in tbody1) {
		arrTr[i] = $('<tr>');
		$(myTbody).append(arrTr[i]);

		arrTd[i] = $('<td>');
		$(arrTr[i]).append(arrTd[i]);

		for (var j in tbody1[i]) {
			arrTd[i].append($tagName = $('<' + tbody1[i][j].tagName + '>'));
			$tagName.text(tbody1[i][j].text).attr({
									'class': tbody1[i][j].class, 'for': tbody1[i][j].for, 'text': tbody1[i][j].text,
									'type': tbody1[i][j].type, 'required': tbody1[i][j].required, 'accesskey': tbody1[i][j].accesskey,
									'pattern': tbody1[i][j].pattern, 'tabindex': tbody1[i][j].tabindex, 'autocomplete': tbody1[i][j].autocomplete
								});
		}
	};
for(var i in tbody2){
		arrTr[i] = $('<tr>');
		$(myTbody2).append(arrTr[i]);
		
		arrTd[i] = $('<td>');
		$(arrTr[i]).append(arrTd[i]);
		
		for(var j in tbody2[i]) {
			arrTd[i].append($tagName = $('<' + tbody2[i][j].tagName + '>'));
			//$tagName.innerText = 'text';
			$tagName.text(tbody2[i][j].text).attr({
                        'class': tbody2[i][j].class, 'for': tbody2[i][j].for, 'text': tbody2[i][j].text,
                           'type': tbody2[i][j].type, 'required': tbody2[i][j].required, 'accesskey': tbody2[i][j].accesskey,
                              'pattern': tbody2[i][j].pattern, 'tabindex': tbody2[i][j].tabindex, 'autocomplete': tbody2[i][j].autocomplete
                    });
		}
}
for (var i in tFoot) {
	arrTr[i] = $('<tr>');
	$(myTfoot).append(arrTr[i]);

	arrTd[i] = $('<td>');
	$(arrTr[i]).append(arrTd[i]);

	for (var j in tFoot[i]) {
		arrTd[i].append($tagName = $('<' + tFoot[i][j].tagName + '>'));
		//$tagName.innerText = 'text';
		$tagName.text(tFoot[i][j].text).attr({
			'class': tFoot[i][j].class, 'type': tFoot[i][j].type, 'text': tFoot[i][j].text,
		});
		if (tFoot[i][j].click) {
			$tagName.click(window[tFoot[i][j].click]);
		}
	}
}


// for (let i = 0; i < tbody2.length; ++i) {
//             arrTr[i] = $('<tr>');
//             $(tbody2).append(arrTr);

//             for (let j = 0; j < user[i].length; ++j) {
//                 arrTr[j] = $('<td>');
//                 arrTr[i].append(arrTD[j]);
//                 arrTd[j].append($tagName = $('<' + user[i][j].tagName + '>'));
//                 }
//         };

});
 
var arrtfootButtons = ['Cancel', 'Save'],
	$tfoot2 = $('<tfoot>'),
	$tfoot1 = $('<tfoot>'),
	$table2 = $('<table>').append($tfoot2),
	$table1 = $('<table>').append($tfoot1),
	$legend2 = $('<legend>', { text: 'FORM GOOGLE' }),
	$legend1 = $('<legend>', { text: 'FORM GOOGLE' }),
	$fieldset2 = $('<fieldset>').append([$legend2, $table2]),
	$fieldset1 = $('<fieldset>').append([$legend1, $table1]),
	$form2 = $('<form>', { 'class': 'right', "color": "pink"}).append($fieldset2),
	$form1 = $('<form>', { 'class': 'left', "color": "pink", 'display': 'none' }).append($fieldset1),
	$td2 = $('<td>').append($form2),
	$td1 = $('<td>').append($form1),
	$tr = $('<tr>').append([$td1, $td2]),
	$caption = $('<caption>', { text: 'Sys User' }),
	$table = $('<table>').append([$caption, $tr, ]),
	$main = $('<main>').append($table);

$(document.body).append($main);

var arrTr = [],
	arrTd = [],
	arrTh = [],
	$tagName;

for (var i in table1) {
	//console.log(table1[i])
	arrTr[i] = $('<tr>');
	$($table1).append(arrTr[i]);
	arrTh[i] = $('<th>');
	$(arrTr[i]).append(arrTh[i]);
	arrTd[i] = $('<td>');
	$(arrTr[i]).append(arrTd[i]);

	for (var j in table1[i]) {
		if ('label' === table1[i][j].tagName) {
			arrTh[i].append($tagName = $('<' + table1[i][j].tagName + '>'));
			$tagName.text(table1[i][j].text).attr({
				'class': table1[i][j].class, 'for': table1[i][j].for, type: table1[i][j].type, required: table1[i][j].required,
			});
		} else {
			arrTd[i].append($tagName = $('<' + table1[i][j].tagName + '>'));
			$tagName.text(table1[i][j].text).attr({
				'class': table1[i][j].class, 'for': table1[i][j].for, type: table1[i][j].type, required: table1[i][j].required,
				'accesskey': table1[i][j].accesskey,
				'pattern': table1[i][j].pattern, 'tabindex': table1[i][j].tabindex, 'autocomplete': table1[i][j].autocomplete
			});
		}
	};
};
for (var i in table2) {
	//console.log(table2)
	arrTr[i] = $('<tr>');
	$($table2).append(arrTr[i]);
	arrTh[i] = $('<th>');
	$(arrTr[i]).append(arrTh[i]);
	arrTd[i] = $('<td>');
	$(arrTr[i]).append(arrTd[i]);

	for (var j in table2[i]) {
		if ('label' === table2[i][j].tagName) {
			arrTh[i].append($tagName = $('<' + table2[i][j].tagName + '>'));
			$tagName.text(table2[i][j].text).attr({
				'class': table2[i][j].class, 'for': table2[i][j].for, type: table2[i][j].type, required: table2[i][j].required,
			});
		} else {
			arrTd[i].append($tagName = $('<' + table2[i][j].tagName + '>'));
			$tagName.text(table2[i][j].text).attr({
				'class': table2[i][j].class, 'for': table2[i][j].for, type: table2[i][j].type, required: table2[i][j].required,
				'accesskey': table2[i][j].accesskey,
				'pattern': table2[i][j].pattern, 'tabindex': table2[i][j].tabindex, 'autocomplete': table2[i][j].autocomplete
			});
		}
	}
};
for (let i = 0; i < arrtfootButtons.length; ++i) {
	$($tfoot1).append($[i] = $('<button>').text(arrtfootButtons[i]));
}
for (let i = 0; i < arrtfootButtons.length; ++i) {
	$($tfoot2).append($[i] = $('<button>').text(arrtfootButtons[i]));
}
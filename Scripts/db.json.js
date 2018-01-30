var tbody1 = [
[
	{ 'tagName': 'label', 'for': 'firstName', text: 'First Name:', title: 'First Name' },
	{
		'tagName': 'input',
		'type': 'text',
		id: 'firstName',
		name: 'firstName',
		'class': 'sameWidth',
		maxlength: '40',
		required: 'required',
		pattern: '[A-Za-z]{2,}',
		tabindex: '1',
		autocomplete: 'on',
		placeholder: 'Enter your first name...',
		title: 'First name',
		autofocus: 'autofocus'
	}
],
[
	{ 'tagName': 'label', 'for': 'lastName', text: 'Last Name:', title: 'Last Name' },
	{
		'tagName': 'input',
		'type': 'text',
		type: 'text',
		id: 'lastName',
		name: 'lastName',
		'class': 'sameWidth',
		maxlength: '50',
		required: 'required',
		pattern: '[A-Za-z]{2,}',
		tabindex: '2',
		autocomplete: 'on',
		placeholder: 'Enter your last name...',
		title: 'Last name',
		autofocus: 'autofocus'
	}
],
[
	{ 'tagName': 'label', 'for': 'loginName', text: 'Login Name:', title: 'Login Name' },
	{
		'tagName': 'input',
		type: 'text',
		id: 'loginName',
		name: 'lastName',
		'class': 'sameWidth',
		maxlength: '50',
		required: 'required',
		pattern: '[A-Za-z]{3,}',
		tabindex: '2',
		autocomplete: 'off',
		placeholder: 'Enter your login name...',
		title: 'Login name'
	}
],
[
	{ 'tagName': 'label', 'for': 'password', text: 'Password:', title: 'Password' },
	{
		'tagName': 'input',
		'type': 'password',
		id: 'password',
		name: 'password',
		'class': 'sameWidth',
		maxlength: '20',
		required: 'required',
		pattern: '[A-Za-z]{5,}',
		tabindex: '4',
		autocomplete: 'on',
		placeholder: 'Enter your password...',
		title: 'Password'
	}
],
[
	{ 'tagName': 'label', 'for': 'confPassword', text: 'Confirm Pass:', title: 'Confirm Pass' },
	{
		'tagName': 'input',
		'type': 'password',
		id: 'confPassword',
		name: 'confPassword',
		'class': 'sameWidth',
		maxlength: '20',
		required: 'required',
		pattern: '[A-Za-z]{5,}',
		tabindex: '5',
		autocomplete: 'on',
		placeholder: 'Confirm your password...',
		title: 'Confirm Password'
	}
],
[
	{ 'tagName': 'label', 'for': 'jobTitle', text: 'Job Title:', title: 'Job Title' },
	{
		'tagName': 'input',
		'type': 'password',
		id: 'confPassword',
		name: 'confPassword',
		'class': 'sameWidth',
		maxlength: '20',
		required: 'required',
		pattern: '[A-Za-z]{5,}',
		tabindex: '5',
		autocomplete: 'on',
		placeholder: 'Confirm your password...',
		title: 'Confirm Password'
	}
]
];

var tbody2 = [
 [
     { 'tagName': 'label', 'text': 'Gender' },
     { 'tagName': 'input', 'class': 'inputwidth', 'id': 'female', 'type': 'radio', 'name': 'gender', 'value': 'female' },
     { 'tagName': 'label', 'text': 'F', 'class': 'gender', 'for': 'female' },
     { 'tagName': 'input', 'class': 'inputwidth', 'id': 'male', 'type': 'radio', 'name': 'gender', 'value': 'male' },
     { 'tagName': 'label', 'text': 'M', 'class': 'gender', 'for': 'male' }
 ],
 [
  { 'tagName': 'label', 'text': 'Profit', 'class': 'profit_td' },
  { 'tagName': 'input', 'class': 'a', 'type': 'checkbox', 'value': 'a' },
  { 'tagName': 'label', 'text': 'A', 'class': 'profit', 'for': 'a' },
  { 'tagName': 'input', 'class': 'b', 'type': 'checkbox', 'name': 'profit', 'value': 'b' },
  { 'tagName': 'label', 'text': 'B', 'class': 'profit', 'for': 'b' },
  { 'tagName': 'input', 'class': 'inputwidth', 'id': 'c', 'type': 'checkbox', 'name': 'profit', 'value': 'c' },
  { 'tagName': 'label', 'text': 'C', 'class': 'profit', 'for': 'c' }
 ],
 [
  { 'tagName': 'label', 'text': 'Teletype', 'for': 'textarea' },
     { 'tagName': 'textarea', 'id': 'textarea', 'placeholder': 'call me ...', 'autofocus': 'off' }
 ],
 [
  { 'tagName': 'label', 'text': 'Country', 'for': 'CountryId' },
  { 'tagName': 'input', 'class': 'country_input', 'name': 'CountryId', 'placeholder': 'Select ...', 'title': 'country', 'list': 'CountryId' },
     { 'tagName': 'datalist', 'id': 'CountryId' }
 ],
 [
  { 'tagName': 'label', 'class': 'file', 'title': 'Upload', 'text': 'U', 'for': 'file' },
     { 'tagName': 'input', type: 'file', 'id': 'file', 'name': 'file' }
 ]
];
var tFoot = [
 [
  { 'tagName': 'button', 'class': 'cancelBtn', type: 'reset', title: 'Cancel', text: 'Save' },
  { 'tagName': 'button', 'class': 'saveBtn', type: 'submit', title: 'Save', text: 'Cancel' },
  { 'tagName': 'button', 'class': 'prev', title: 'Prev', click: 'myFunctionTwo'},
  { 'tagName': 'button', 'class': 'next', title: 'Next', click: 'myFunction' }
 ]
];
var table1 = [
	[
		{ tagName: 'label', 'for': 'firstName', text: 'First Name: ', 'class': 'f_name' },
		{
			tagName: 'input',
			type: 'text',
			name: 'firstName',
			required: 'required',
			pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$',
			tabindex: '1',
			autocomplete: 'on',
			placeholder: 'Enter your first name..',
			title: 'First Name'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'lastName', text: 'Last Name:' },
		{
			'tagName': 'input',
			id: 'lastName',
			type: 'text',
			name: 'lastName',
			maxlength: '50',
			required: 'required',
			pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$',
			tabindex: '2',
			autocomplete: 'on',
			placeholder: 'Enter your last name...',
			title: 'Last Name'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'middleName', text: 'Middle Name: ' },
		{
			'tagName': 'input',
			id: 'middleName',
			type: 'text',
			name: 'middleName',
			maxlength: '50',
			required: 'required',
			pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$',
			tabindex: '3',
			autocomplete: 'on',
			placeholder: 'Enter your middle  name...',
			title: 'Middle  Name'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'password', text: 'Password: ' },
		{
			'tagName': 'input',
			id: 'password',
			type: 'password',
			name: 'password',
			maxlength: '50',
			required: 'required',
			pattern: '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$',
			tabindex: '4',
			autocomplete: 'on',
			placeholder: 'Enter your password...',
			title: 'Password'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'confpassword', text: 'Confirm Pass: ' },
		{
			'tagName': 'input',
			id: 'confpassword',
			type: 'password',
			name: 'confpassword',
			maxlength: '20',
			required: 'required',
			pattern: '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$',
			tabindex: '5',
			autocomplete: 'on',
			placeholder: 'Confirm your password...',
			title: 'Confirm password'
		}
	]
];

var table2 = [
	[
		{ 'tagName': 'label', 'for': 'phone', text: 'Phone: ' },
		{
			'tagName': 'input',
			id: 'phone',
			type: 'tel',
			name: 'phone',
			maxlength: '50',
			required: 'required',
			pattern: '[\+]\d{3}[\(]\d{2}[\)]\d{3}[\-]\d{3}',
			tabindex: '6',
			autocomplete: 'on',
			placeholder: 'Enter your phone number...',
			title: 'Phone'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'cell', text: 'Cell:' },
		{
			'tagName': 'input',
			id: 'cell',
			type: 'tel',
			name: 'cell',
			maxlength: '20',
			required: 'required',
			pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$',
			tabindex: '7',
			autocomplete: 'on',
			placeholder: 'Enter your cell number...',
			title: 'Cell'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'middleName', text: 'Middle Name: ' },
		{
			'tagName': 'input',
			id: 'middleName',
			type: 'text',
			name: 'middleName',
			maxlength: '50',
			required: 'required',
			pattern: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,50}$',
			tabindex: '8',
			autocomplete: 'on',
			placeholder: 'Enter your middle  name...',
			title: 'Middle  Name'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'email', text: 'Email: ' },
		{
			'tagName': 'input',
			id: 'email',
			type: 'email',
			name: 'email',
			maxlength: '20',
			required: 'required',
			pattern: '^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$',
			tabindex: '9',
			autocomplete: 'on',
			placeholder: 'Enter your EMail...',
			title: 'EMail'
		}
	],
	[
		{ 'tagName': 'label', 'for': 'age', text: 'Age: ' },
		{
			'tagName': 'input',
			id: 'age',
			type: 'number	',
			name: 'age',
			maxlength: '3',
			min: '1',
			max: '110',
			required: 'required',
			pattern: 'https?://.+',
			tabindex: '10',
			autocomplete: 'on',
			placeholder: 'Age...',
			title: 'Age'
		}
	],
];
var server = 'https://esta-ed.sd.di.huc.knaw.nl/';

var ccfOptions = {
    uploadButton: {
        actionURI: server + 'upload.php'
    },
    submitButton: {
        actionURI: '#',
        label: 'Submit'
    },
    saveButton: {
        actionURI: '#',
        label: 'Save'  
    },
    resetButton: {
        actionURI: '#',
        label: 'Back'
    },
    language: 'en',
    alert: {
      mandatory_field: 'This field is mandatory!',
      mandatory_field_box: ' : mandatory!',
      no_valid_date: 'This is not a valid date!',
      no_valid_date_box: ': not a valid date!',
      date_string: 'yyyy-mm-dd',
      int_field: 'The value of this field must be an integer!',
      int_field_box: 'must be an integer!',
      attr_not_empty_field: 'Attribute(s) mandatory'
    }
};




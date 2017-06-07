var MCapi = require('mailchimp-api');
var conf = require('./config')

subscribe_to_list = function (p_email,p_name,p_templateid) {
	var MC = new MCapi.Mailchimp(conf.mailchimp.api_key);

	var mcReq = {
	    id: conf.mailchimp.list_id,
	    email: { email: p_email },
	    merge_vars: {
	        EMAIL: p_email,
	        FNAME: p_name,
	        vars: [
                        {
                            "name": "template",
                            "content": p_templateid
                        }
                    ]
	    }
	};

	// submit subscription request to mail chimp
	MC.lists.subscribe(mcReq, function(data) {
	    console.log(data);
	}, function(error) {
	    console.log(error);
	});
}

module.exports = subscribe_to_list

/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	// strict schema
	schema: true,

	// attributes
	attributes: {
    admin0pcode: {
			type: 'string',
			required: true
    },
    admin0pcode: {
			type: 'string',
			required: true
    },		
		organization_id: {
			type: 'string'
		},
		organization: {
			type: 'string',
			required: true
		},
		cluster_id: {
			type: 'string',
			required: true
		},
		cluster: {
			type: 'string',
			required: true
		},
		user_id: {
			type: 'string',
			required: true
		},
		username: {
			type: 'string',
			required: true
		},
		name: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			required: true
		},
		token: {
			type: 'string',
			required: true
		}
	}

};


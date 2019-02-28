var products = [
	{
		"Id": 1,
		"Name": "first Case",
		"target": [
			{
				"targetId": 1,
				"name": "targetname",
				"lastText": "some text some text some text",
				"link": "target-link",
				"note": "some note  to target",
				"imageUrl": "images/resource_img/imag1.jpg",
			},
			{
				"targetId": 4,
				"name": "targetname",
				"lastText": "some text some text some text",
				"link": "target-link",
				"note": "some note  to target",
				"imageUrl": "images/resource_img/imag1.jpg",
				"marker": {
					"works": [{
						"id": "w1",
						"coordinates": {
							"lag": 0,
							"lat": 0

						},
						"location": {
							"id": 325,
							"name": "location of work name"
						},
						"startDate": "date",
						"employer": {
							"id": 345235234,
							"name": "employer name"
						},
						"position": {
							"id": 6568784,
							"name": "Position name"
						}


					}
					],//end of work[0]  

					"educations": [
						{
							"id": "e1",
							"coordinates": {
								"lag": 0,
								"lat": 0
							},
							"type": " HighSchool",
							"year": {
								"id": 97946,
								"name": 2014
							},
							"school": {
								"id": 46646,
								"name": "schoolName"
							},
							"faculties": {
								"id": 554654,
								"name": "Faculty name"
							},
							"note": {
								"id": 5464,
								"text": "note of education"

							}
						}//end of educations[0]
					]//emd of education marker


				} //end of marker  object
			}// end  of target [0]
		] // end  of target  arry
	}, //end of case[0]
	{
		"Id": 2,
		"Name": "2 Case",
		"target": [
			{
				"targetId": 3,
				"name": "targetname",
				"lastText": "some text some text some text",
				"link": "target-link",
				"note": "some note  to target",
				"imageUrl": "images/resource_img/imag1.jpg",
			},
			{
				"targetId": 2,
				"name": "targetname",
				"lastText": "some text some text some text",
				"link": "target-link",
				"note": "some note  to target",
				"imageUrl": "images/resource_img/imag1.jpg",
				"marker": {
					"works": [{
						"id": "w2",
						"coordinates": {
							"lag": 0,
							"lat": 0

						},
						"location": {
							"id": 325,
							"name": "location of work name"
						},
						"startDate": "date",
						"employer": {
							"id": 345235234,
							"name": "employer name"
						},
						"position": {
							"id": 6568784,
							"name": "Position name"
						}


					}
					],//end of work[0]  

					"educations": [
						{
							"id": "e2",
							"coordinates": {
								"lag": 0,
								"lat": 0
							},
							"type": " HighSchool",
							"year": {
								"id": 97946,
								"name": 2014
							},
							"school": {
								"id": 46646,
								"name": "schoolName"
							},
							"faculties": {
								"id": 554654,
								"name": "Faculty name"
							},
							"note": {
								"id": 5464,
								"text": "note of education"

							}
						}//end of educations[0]
					]//emd of education marker


				} //end of marker  object
			}// end  of target [1]
		] // end  of target  arry
	}, //end of case[1]
	{
		"Id": 3,
		"Name": "3 Case",
	},
	{
		"Id": 4,
		"Name": "3 Case",
		"target": [{
			"targetId": 1,
			"name": "targetname",
			"lastText": "some text some text some text",
			"link": "target-link",
			"note": "some note  to target",
			"imageUrl": "images/resource_img/imag1.jpg",
			"marker": {
				"works": [{
					"id": "w2",
					"coordinates": {
						"lag": 0,
						"lat": 0

					},
					"location": {
						"id": 325,
						"name": "location of work name"
					},
					"startDate": "date",
					"employer": {
						"id": 345235234,
						"name": "employer name"
					},
					"position": {
						"id": 6568784,
						"name": "Position name"
					}


				}
				],//end of work[0]  

				"educations": [
					{
						"id": "e2",
						"coordinates": {
							"lag": 0,
							"lat": 0
						},
						"type": " HighSchool",
						"year": {
							"id": 97946,
							"name": 2014
						},
						"school": {
							"id": 46646,
							"name": "schoolName"
						},
						"faculties": {
							"id": 554654,
							"name": "Faculty name"
						},
						"note": {
							"id": 5464,
							"text": "note of education"

						}
					}//end of educations[0]
				]//emd of education marker


			} //end of marker  object
		}// end  of target [2]
		] // end  of target  arry
	}, //end of case[4]
	{
		"Id": 5,
		"Name": "3 Case",
	}

];
var caselist = [{
	"Id": 1,
	"Name": "airst Case",
	"target": [{
		"targetId": 1,
		"name": "abgetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 3,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 4,
		"name": "aargetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	}]

}, {
	"Id": 2,
	"Name": "Case2",
	"target": [{
		"targetId": 1,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 2,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 3,
		"name": "aargetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	]
}, {
	"Id": 3,
	"Name": "Case3",
	"target": [{
		"targetId": 1,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 2,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 3,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 4,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	}]

},
{
	"Id": 4,
	"Name": "Case4",
	"target": [{
		"targetId": 1,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 2,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 3,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	},
	{
		"targetId": 4,
		"name": "targetname",
		"imageUrl": "images/resource_img/imag1.jpg"
	}]
}

]
var fb = {
	"targetId": 99,
	"name": "targetname",
	"imageUrl": "images/resource_img/imag1.jpg"
}
var alltarget = [{
	"targetId": 1,
	"name": "targetname",
	"imageUrl": "images/resource_img/imag1.jpg"
}, {
	"targetId": 2,
	"name": "bbb",
	"imageUrl": "images/resource_img/imag1.jpg"
}, {
	"targetId": 3,
	"name": "cccc",
	"imageUrl": "images/resource_img/imag1.jpg"
}, {
	"targetId": 4,
	"name": "dddd",
	"imageUrl": "images/resource_img/imag1.jpg"
}, {
	"targetId": 5,
	"name": "eeee",
	"imageUrl": "images/resource_img/imag1.jpg"
}, {
	"targetId": 6,
	"name": "ffffff",
	"imageUrl": "images/resource_img/imag1.jpg"
}, {
	"targetId": 7,
	"name": "gggggg",
	"imageUrl": "images/resource_img/imag1.jpg"
},

]
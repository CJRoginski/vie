/* Question conditionals that can be used for either single player or multiplayer */


var qcount = 1; /* Total number of questions done */

var randqnum; /* Random question number */

var toearn = 0;
var topay = 0;

var positionnum;

/* Easy Questions */
var easy = {
	numdone: 0, /* Number of easy questions done */
	q01: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What does FBLA stand for?",
		a: "Fellowship of Business Leaders in America",
		b: "Forthcoming Business Leaders Administration",
		c: "Future Business Leaders of America",
		d: "Future Business Leaders Alliance",
		
		correct: "C"
	},
	q02: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "FBLA is a nonprofit student organization built to provide opportunities and prepare students for the business world and inform them about the American free enterprise system.",
		
		correct: "true"
	},
	q03: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What are the FBLA colors?",
		a: "Navy Blue and White",
		b: "Navy Blue and Gold",
		c: "Gold and White",
		d: "Maroon and Navy Blue",
		
		correct: "B"
	},
	q04: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What does BAA stand for?",
		a: "Business Achievement Awards",
		b: "Business Aptitude Accolades",
		c: "Business Advisor's Association",
		d: "Business Ability Advancement",
		
		correct: "A"
	},
	q05: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "The BAA&rsquo;s is a business and leadership program wherein FBLA chapter advisors choose what their students must achieve in academics in order to advance the students&rsquo; leadership skills.",
		
		correct: "false"
	},
	q06: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "When is FBLA Week?",
		a: "First week of November",
		b: "Second week of February",
		c: "Third week of April",
		d: "Fourth week of September",
		
		correct: "B"
	},
	q07: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What does FBLA celebrate on November 15<sup>th</sup>?",
		a: "Nothing",
		b: "The founding of FBLA",
		c: "Career’s Day",
		d: "American Enterprise Day",
		
		correct: "D"
	},
	q08: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What state is FBLA’s headquarters in?",
		a: "Virgina",
		b: "Illinois",
		c: "Tennessee",
		d: "Iowa",
		
		correct: "A"
	},
	q09: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Which state in the United States has the highest number of FBLA members?",
		a: "Virgina",
		b: "Tennessee",
		c: "Georgia",
		d: "Iowa",
		
		correct: "C"
	},
	q10: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What does CSA stand for?",
		a: "Conductive Scholarly Assessment",
		b: "Computer Science Academics",
		c: "Commercial Selling Accolade",
		d: "Community Service Awards",
		
		correct: "D"
	},
	q11: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "The CSA&rsquo;s is an award wherein FBLA members can be recognized for their remarkable dedication to their community.",
		
		correct: "true"
	},
	q12: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What are the three levels of recognition for the CSA&rsquo;s?",
		a: "CSA Novice, CSA Master, CSA Expert",
		b: "CSA Community, CSA Service, CSA Achievement",
		c: "CSA Level I, CSA Level II, CSA Level III",
		d: "There is only one level of CSA&rsquo;s",
		
		correct: "B"
	},
	q13: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Approximately how many students are a part of FBLA?",
		a: "147,200",
		b: "196,900",
		c: "200,000",
		d: "223,700",
		
		correct: "B"
	},
	q14: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Approximately how many advisers are a part of FBLA?",
		a: "11,500",
		b: "32,400",
		c: "44,700",
		d: "50,100",
		
		correct: "A"
	},
	q15: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "When was FBLA established?",
		a: "2005",
		b: "1990",
		c: "1983",
		d: "1940",
		
		correct: "D"
	},
	q16: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who was the founder of FBLA?",
		a: "Dr. Edward D. Miller",
		b: "Jean Buckley",
		c: "Hamden L. Forkner",
		d: "Conrad N. Hilton",
		
		correct: "C"
	},
	q17: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "When was the first high school FBLA chapter chartered?",
		a: "1940",
		b: "1942",
		c: "1945",
		d: "1950",
		
		correct: "B"
	},
	q18: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "These kinds of skills enable you to interact with other people. Having this skill-set means that you can satisfy the expectations of others, can easily negotiate, and communicate with your peers easily and work with them effectively."
		},
		a: "Teamwork",
		b: "Dependability",
		c: "Communication Skills",
		d: "Interpersonal Skills",
		
		correct: "D"
	},
	q19: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "These kinds of skills enable you to retain and impart information and/or news to others, whether you are writing it or speaking it. These skills are invaluable in the workforce, as listening to others creates fewer mistakes and excellent speaking and writing skills produces a lesser chance of misunderstanding. It is said that if you lose everything but this skill-set, you will be able to obtain everything you lost and more."
		},
		a: "Organizational Skills",
		b: "Dependability",
		c: "Communication Skills",
		d: "Interpersonal Skills",
		
		correct: "C"
	},
	q20: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "These kinds of skills enable you to solve problems and make decisions effectively. With these skills, finding the most effective and appropriate option is easy and very desirable in the workforce. People with this skill-set also bring new perspectives to their coworkers and bosses that may have not been seen before."
		},
		a: "Organizational Skills",
		b: "Teamwork",
		c: "Leadership Skills",
		d: "Critical Thinking Skills",
		
		correct: "D"
	},
	q21: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "These kinds of skills enable you to guide others in an action. People with this skill-set are strong, confident, and respectful to others and their ideas. They know what is best for the group and are what keeps the jobs working."
		},
		a: "Leadership Skills",
		b: "Communication Skills",
		c: "Interpersonal Skills",
		d: "Critical Thinking Skills",
		
		correct: "A"
	},
	q22: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "These kinds of skills enable you to deal with a set period of time accordingly. People with this skill-set can get their job done quickly and efficiently in the time allotted to them."
		},
		a: "Time Management Skills",
		b: "Dependability",
		c: "Organizational Skills",
		d: "Critical Thinking Skills",
		
		correct: "A"
	},
	q23: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "These kinds of skills enable you to arrange and prepare objects and/or events efficiently. Having this skill-set is very important in the workforce, as it can make finding important documents or files easy for another person without having to search endlessly."
		},
		a: "Time Management Skills",
		b: "Dependability",
		c: "Organizational Skills",
		d: "Critical Thinking Skills",
		
		correct: "C"
	},
	q24: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "People with this skill-set are often trusted with important tasks, projects, or information."
		},
		a: "Leadership Skills",
		b: "Dependability",
		c: "Organizational Skills",
		d: "Critical Thinking Skills",
		
		correct: "B"
	},
	q25: {
		type: "mixed", /* Mixed question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "employability skill",
			description: "These kinds of skills enable you to work with others and be open and flexible to their ideas."
		},
		a: "Leadership Skills",
		b: "Interpersonal Skills",
		c: "Teamwork",
		d: "Communication Skills",
		
		correct: "C"
	},
	q26: {
		type: "norm", /* Normal question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, what are general rules of thumb to follow in an interview?",
		a: "Ask some opening questions",
		b: "Dress appropriately for the job",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "C"
	},
	q27: {
		type: "norm", /* Normal question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, what are general rules of thumb to follow in an interview?",
		a: "Be on time",
		b: "Come alone",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "C"
	},
	q28: {
		type: "norm", /* Normal question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, what are general rules of thumb to follow in an interview?",
		a: "Smile and relax",
		b: "Avoid distracting habits",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "C"
	},
	q29: {
		type: "norm", /* Normal question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, what are general rules of thumb to follow in an interview?",
		a: "Pay attention to the interviewer",
		b: "Have necessary references with you",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "C"
	},
	q30: {
		type: "tf", /* True/False question setup */
		topic: "Business Skills and Knowledge", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "A good first impression includes a firm handshake and eye contact.",
		
		correct: "true"
	}
}
var easyqarray = [easy.q01, easy.q02, easy.q03, easy.q04, easy.q05, easy.q06, easy.q07, easy.q08, easy.q09, easy.q10,  easy.q11, easy.q12, easy.q13, easy.q14, easy.q15, easy.q16, easy.q17, easy.q18, easy.q19, easy.q20, easy.q21, easy.q22, easy.q23, easy.q24, easy.q25, easy.q26, easy.q27, easy.q28, easy.q29, easy.q30];
/* Medium Questions */
var medium = {
	numdone: 0, /* Number of medium questions done */
	q01: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What three words surround the FBLA crest?",
		a: "Fellowship, Professionalism, Network",
		b: "Service, Education, Progress",
		c: "Advancement, Enterprise, Teamwork",
		d: "Entrepreneurship, Leadership, Achievement",
		
		correct: "B"
	},
	q02: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the FBLA creed, it states that everyone has a right to education.",
		
		correct: "true"
	},
	q03: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the FBLA creed, it states that only people in the workforce have to work together to better the future and everyone else in the world doesn’t have an impact.",
		
		correct: "false"
	},
	q04: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the FBLA creed, it states that everyone should choose and prepare for a field of work that will most positively impact the most people.",
		
		correct: "true"
	},
	q05: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the FBLA creed, it states that it is not necessary to improve the community in its social and political entirety as well as life with family.",
		
		correct: "false"
	},
	q06: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the FBLA creed, it states that earning a living through a useful career is a right that everyone has.",
		
		correct: "true"
	},
	q07: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the FBLA creed, it states that everyone must take responsibility for doing tasks that are assigned to them to bring the proper credit to themselves, fellow members and peers, and their school and community.",
		
		correct: "true"
	},
	q08: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the FBLA creed, it states that everyone has the responsibility to work with the upmost efficiency and clarity of mind.",
		
		correct: "true"
	},
	q09: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "FBLA is the largest career student business organization in the world.",
		
		correct: "true"
	},
	q10: {
		type: "mixed", /* Mixed question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: {
			descriptor: "fundraiser",
			description: "An American non-profit organization that is dedicated to raising money to improve the health of mothers and babies."
		},
		a: "Health Leads",
		b: "D-Tree International",
		c: "March of Dimes",
		d: "PATH",
		
		correct: "C"
	},
	q11: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Approximately how much money has FBLA raised for the March of Dimes?",
		a: "$5 thousand",
		b: "$5 million",
		c: "$15 thousand",
		d: "$15 million",
		
		correct: "D"
	},
	q12: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "How long, in years, has FBLA been a March of Dimes youth fundraising partner?",
		a: "20 years",
		b: "30 years",
		c: "40 years",
		d: "50 years",
		
		correct: "C"
	},
	q13: {
		type: "tf", /* True/False question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "In the past 40 years, FBLA has been consistently been the #1 March of Dimes youth fundraising partner.",
		
		correct: "true"
	},
	q14: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "When was the first state FBLA chapter chartered?",
		a: "1940",
		b: "1942",
		c: "1945",
		d: "1947",
		
		correct: "D"
	},
	q15: {
		type: "tf", /* True/False question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "The National President of FBLA serves on the FBLA Board of Directors.",
		
		correct: "true"
	},
	q16: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Which of the following National Officers represent the members of FBLA on the national level?",
		a: "President",
		b: "Treasurer",
		c: "Secretary",
		d: "All of the Above",
		
		correct: "D"
	},
	q17: {
		type: "tf", /* True/False question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "The National Vice Presidents of FBLA represent the members of FBLA on the national level, regardless of region.",
		
		correct: "false"
	},
	q18: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National President of FBLA?",
		a: "Eu Ro Wang",
		b: "Galadriel Coury",
		c: "Keerti Soundappan",
		d: "Michael Zhao",
		
		correct: "A"
	},
	q19: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Secretary of FBLA?",
		a: "Eu Ro Wang",
		b: "Galadriel Coury",
		c: "Keerti Soundappan",
		d: "Michael Zhao",
		
		correct: "C"
	},
	q20: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Treasurer of FBLA?",
		a: "Eu Ro Wang",
		b: "Galadriel Coury",
		c: "Keerti Soundappan",
		d: "Michael Zhao",
		
		correct: "B"
	},
	q21: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Parliamentarian of FBLA?",
		a: "Eu Ro Wang",
		b: "Galadriel Coury",
		c: "Keerti Soundappan",
		d: "Michael Zhao",
		
		correct: "D"
	},
	q22: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Vice President of the Eastern Region?",
		a: "Garett Koch",
		b: "Eli Amyx",
		c: "Madelyn Remington",
		d: "Ty Rickard",
		
		correct: "A"
	},
	q23: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Vice President of the Mountain Plains Region?",
		a: "Trentyn Tennant",
		b: "Eli Amyx",
		c: "Madelyn Remington",
		d: "Ty Rickard",
		
		correct: "C"
	},
	q24: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Vice President of the North Central Region?",
		a: "Trentyn Tennant",
		b: "Eli Amyx",
		c: "Garett Koch",
		d: "Ty Rickard",
		
		correct: "B"
	},
	q25: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Vice President of the Southern Region?",
		a: "Trentyn Tennant",
		b: "Madelyn Remington",
		c: "Garett Koch",
		d: "Ty Rickard",
		
		correct: "D"
	},
	q26: {
		type: "norm", /* Normal question setup */
		topic: "National Officers", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Who is the 2018-2019 National Vice President of the Western Region?",
		a: "Trentyn Tennant",
		b: "Madelyn Remington",
		c: "Garett Koch",
		d: "Eli Amyx",
		
		correct: "A"
	},
	q27: {
		type: "norm", /* Normal question setup */
		topic: "National Sponsors and Partners", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Which of the following is a national sponsor of FBLA?",
		a: "Amazon",
		b: "Domino's Pizza",
		c: "Google",
		d: "Days Inn",
		
		correct: "A"
	},
	q28: {
		type: "norm", /* Normal question setup */
		topic: "National Sponsors and Partners", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Which of the following is a national sponsor of FBLA?",
		a: "Apple",
		b: "Balfour",
		c: "Pizza Hut",
		d: "Target",
		
		correct: "B"
	},
	q29: {
		type: "norm", /* Normal question setup */
		topic: "National Sponsors and Partners", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Which of the following is a national sponsor of FBLA?",
		a: "AT&amp;T",
		b: "Bank of America",
		c: "GEICO",
		d: "Ingles",
		
		correct: "C"
	},
	q30: {
		type: "norm", /* Normal question setup */
		topic: "National Sponsors and Partners", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Which of the following is a national sponsor of FBLA?",
		a: "Chick-fil-A",
		b: "Visa Inc.",
		c: "Custom Ink",
		d: "Ebay",
		
		correct: "B"
	}
}
var mediumqarray = [medium.q01, medium.q02, medium.q03, medium.q04, medium.q05, medium.q06, medium.q07, medium.q08, medium.q09, medium.q10,  medium.q11, medium.q12, medium.q13, medium.q14, medium.q15, medium.q16, medium.q17, medium.q18, medium.q19, medium.q20, medium.q21, medium.q22, medium.q23, medium.q24, medium.q25, medium.q26, medium.q27, medium.q28, medium.q29, medium.q30];
/* Hard Questions */
var hard = {
	numdone: 0, /* Number of hard questions done */
	q01: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "How many states in America have FBLA (High School Division) chapters?",
		a: "47",
		b: "48",
		c: "49",
		d: "50",
		
		correct: "A"
	},
	q02: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "How many countries have FBLA (High School Division) chapters?",
		a: "0",
		b: "1",
		c: "3",
		d: "7",
		
		correct: "D"
	},
	q03: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Approximately how many chapters are in FBLA (High School Division)?",
		a: "&lt;3,900",
		b: "&lt;4,600",
		c: "&gt;5,200",
		d: "&gt;6,700",
		
		correct: "D"
	},
	q04: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the members of FBLA (High School Division), what percent are female?",
		a: "37%",
		b: "42%",
		c: "50%",
		d: "58%",
		
		correct: "D"
	},
	q05: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the members of FBLA (High School Division), what percent are male?",
		a: "42%",
		b: "50%",
		c: "58%",
		d: "66%",
		
		correct: "A"
	},
	q06: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the members of FBLA (High School Division), what percent are in 9<sup>th</sup> grade?",
		a: "18%",
		b: "25%",
		c: "28%",
		d: "29%",
		
		correct: "A"
	},
	q07: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the members of FBLA (High School Division), what percent are in 10<sup>th</sup> grade?",
		a: "18%",
		b: "25%",
		c: "28%",
		d: "29%",
		
		correct: "B"
	},
	q08: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the members of FBLA (High School Division), what percent are in 11<sup>th</sup> grade?",
		a: "18%",
		b: "25%",
		c: "28%",
		d: "29%",
		
		correct: "C"
	},
	q09: {
		type: "norm", /* Normal question setup */
		topic: "About FBLA", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the members of FBLA (High School Division), what percent are in 12<sup>th</sup> grade?",
		a: "18%",
		b: "25%",
		c: "28%",
		d: "29%",
		
		correct: "D"
	},
	q10: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Where was the first high school FBLA chapter chartered?",
		a: "St. Albans, West Virginia",
		b: "New York City, New York",
		c: "Chicago, Illinois",
		d: "Johnson City, Tennessee",
		
		correct: "D"
	},
	q11: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What was the 2016-2017 national membership theme for FBLA’s 75<sup>th</sup> anniversary?",
		a: "75 Years of Leadership in Action",
		b: "Step Up to the Challenge",
		c: "Legacy of Leadership",
		d: "CONNECT",
		
		correct: "C"
	},
	q12: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What was the 2011-2012 national membership theme for FBLA’s 70<sup>th</sup> anniversary?",
		a: "70 Years of Simply the Best",
		b: "Gateway to Greatness",
		c: "Breaking Barriers",
		d: "Get the Edge",
		
		correct: "C"
	},
	q13: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What was the 2006-2007 national membership theme for FBLA’s 65<sup>th</sup> anniversary?",
		a: "65 Years of Achievements",
		b: "Unlock Your Potential",
		c: "Igniting Innovation",
		d: "Your Ticket to the Future",
		
		correct: "D"
	},
	q14: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What was the 2001-2002 national membership theme for FBLA’s 60<sup>th</sup> anniversary?",
		a: "60 Years of Business Leadership",
		b: "Soaring to New Heights",
		c: "Tune In To Leadership",
		d: "Destination: Leadership",
		
		correct: "B"
	},
	q15: {
		type: "norm", /* Normal question setup */
		topic: "FBLA History", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "What was the 1991-1992 national membership theme for FBLA’s 50<sup>th</sup> anniversary?",
		a: "50 Years Investing in Future",
		b: "Proud to be American",
		c: "Spotlight on the Stars",
		d: "The Road to Your Success",
		
		correct: "A"
	},
	q16: {
		type: "norm", /* Normal question setup */
		topic: "National Conference Dates and Locations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "When was the first National Leadership Conference held?",
		a: "1942",
		b: "1946",
		c: "1951",
		d: "1952",
		
		correct: "D"
	},
	q17: {
		type: "norm", /* Normal question setup */
		topic: "National Conference Dates and Locations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Where was the first National Leadership Conference held?",
		a: "St. Albans, West Virginia",
		b: "Johnson City, Tennessee",
		c: "Chicago, Illinois",
		d: "San Antonio, Texas",
		
		correct: "C"
	},
	q18: {
		type: "norm", /* Normal question setup */
		topic: "National Conference Dates and Locations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "When was the last National Leadership Conference held in Washington, D.C.?",
		a: "1991",
		b: "1996",
		c: "1997",
		d: "2000",
		
		correct: "B"
	},
	q19: {
		type: "norm", /* Normal question setup */
		topic: "Competitive Events", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Approximately how many competitive events are there in FBLA?",
		a: "50",
		b: "70",
		c: "80",
		d: "100",
		
		correct: "B"
	},
	q20: {
		type: "norm", /* Normal question setup */
		topic: "Competitive Events", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "How many career clusters do the competitive events of FBLA cover?",
		a: "10",
		b: "15",
		c: "25",
		d: "50",
		
		correct: "A"
	},
	q21: {
		type: "norm", /* Normal question setup */
		topic: "FBLA Affiliations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, which organizations are affiliated with FBLA?",
		a: "U.S. Department of Education",
		b: "National Association of Secondary School Principals (NASSP)",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "C"
	},
	q22: {
		type: "norm", /* Normal question setup */
		topic: "FBLA Affiliations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, which organizations are affiliated with FBLA?",
		a: "National Technical Honor Society (NTHS)",
		b: "BETA Club",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "A"
	},
	q23: {
		type: "norm", /* Normal question setup */
		topic: "FBLA Affiliations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, which organizations are affiliated with FBLA?",
		a: "Association for Career and Technical Education (ACTE)",
		b: "National Research Center for Career and Technical Education",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "C"
	},
	q24: {
		type: "norm", /* Normal question setup */
		topic: "FBLA Affiliations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, which organizations are affiliated with FBLA?",
		a: "HoPe",
		b: "SkillsUSA",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "D"
	},
	q25: {
		type: "norm", /* Normal question setup */
		topic: "FBLA Affiliations", /* Topic of question */
		done: false, /* Whether or not a question has been answered */
		
		question: "Of the following, which organizations are affiliated with FBLA?",
		a: "National Business Education Association (NBEA)",
		b: "DECA (formerly Distributive Education Clubs of America)",
		c: "Both A and B",
		d: "Neither A nor B",
		
		correct: "A"
	}
}
var hardqarray = [hard.q01, hard.q02, hard.q03, hard.q04, hard.q05, hard.q06, hard.q07, hard.q08, hard.q09, hard.q10,  hard.q11, hard.q12, hard.q13, hard.q14, hard.q15, hard.q16, hard.q17, hard.q18, hard.q19, hard.q20, hard.q21, hard.q22, hard.q23, hard.q24, hard.q25, hard.q26, hard.q27, hard.q28, hard.q29, hard.q30];



/* Prepare the questions */
function prepquestions() {
	/* Display the current question number */
	document.getElementById("qnum").innerHTML = qcount;
	
	/* Reset question layouts */
	document.getElementById("normq").style.display = "none";
	document.getElementById("tfq").style.display = "none";
	document.getElementById("mixedq").style.display = "none";
	
	if (currentdiff == "easy") {
		/* Generate random question number (max 29, min 0; inclusive) */
		randqnum = Math.floor(Math.random() * 30);
		
		/* Find the correct question number */
		randqnum = easyqarray[randqnum];

	} else if (currentdiff == "medium") {
		/* Generate random question number (max 29, min 0; inclusive) */
		randqnum = Math.floor(Math.random() * 30);
		
		/* Find the correct question number */
		randqnum = mediumqarray[randqnum];

	} else if (currentdiff == "hard") {
		/* Generate random question number (max 29, min 0; inclusive) */
		randqnum = Math.floor(Math.random() * 25);
		
		/* Find the correct question number */
		randqnum = hardqarray[randqnum];
	}
	
	/* Display the question's topic */
	document.getElementById("qtopic").innerHTML = randqnum.topic;
	
	/* Add keyboard shortcuts */
	document.addEventListener('keydown', answershortcut);

	if (randqnum.type == "mixed") {
		runq_mixed(randqnum);
	} else {
		runq(randqnum);
	}
}

/* Normal and True/False questions (difficulty doesn't matter now because of the question prep) */
function runq(qnum) {
	if (qnum.done == false) {
		/* Display the correct setup */
		document.getElementById(qnum.type + "q").style.display = "block";
	
		/* Write question */
		document.getElementById("qof" + qnum.type).innerHTML = qnum.question;

		if (qnum.type == "norm") {
			/* Write answers */
			document.getElementById("lua").innerHTML = qnum.a; /* Left Upper Answer (A.) */
			document.getElementById("lla").innerHTML = qnum.b; /* Left Lower Answer (B.) */
			document.getElementById("rua").innerHTML = qnum.c; /* Right Upper Answer (C.) */
			document.getElementById("rla").innerHTML = qnum.d; /* Right Lower Answer (D.) */

			/* Set which answers are correct and incorrect */
			if (qnum.correct == "A") {
				document.getElementById("luabtn").onclick = function() { show_correct(qnum) }; /* Left Upper Answer (A.) */
				document.getElementById("llabtn").onclick = function() { show_incorrect(qnum) }; /* Left Lower Answer (B.) */
				document.getElementById("ruabtn").onclick = function() { show_incorrect(qnum) }; /* Right Upper Answer (C.) */
				document.getElementById("rlabtn").onclick = function() { show_incorrect(qnum) }; /* Right Lower Answer (D.) */
			
				/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
				document.getElementById("correctextended").innerHTML = qnum.a;
			} else if (qnum.correct == "B") {
				document.getElementById("luabtn").onclick = function() { show_incorrect(qnum) }; /*Left Upper Answer (A.)  */
				document.getElementById("llabtn").onclick = function() { show_correct(qnum) }; /* Left Lower Answer (B.) */
				document.getElementById("ruabtn").onclick = function() { show_incorrect(qnum) }; /* Right Upper Answer (C.) */
				document.getElementById("rlabtn").onclick = function() { show_incorrect(qnum) }; /* Right Lower Answer (D.) */
			
				/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
				document.getElementById("correctextended").innerHTML = qnum.b;
			} else if (qnum.correct == "C") {
				document.getElementById("luabtn").onclick = function() { show_incorrect(qnum) }; /* Left Upper Answer (A.) */
				document.getElementById("llabtn").onclick = function() { show_incorrect(qnum) }; /* Left Lower Answer (B.) */
				document.getElementById("ruabtn").onclick = function() { show_correct(qnum) }; /* Right Upper Answer (C.) */
				document.getElementById("rlabtn").onclick = function() { show_incorrect(qnum) }; /* Right Lower Answer (D.) */
			
				/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
				document.getElementById("correctextended").innerHTML = qnum.c;
			} else if (qnum.correct == "D") {
				document.getElementById("luabtn").onclick = function() { show_incorrect(qnum) }; /* Left Upper Answer (A.) */
				document.getElementById("llabtn").onclick = function() { show_incorrect(qnum) }; /* Left Lower Answer (B.) */
				document.getElementById("ruabtn").onclick = function() { show_incorrect(qnum) }; /* Right Upper Answer (C.) */
				document.getElementById("rlabtn").onclick = function() { show_correct(qnum) }; /* Right Lower Answer (D.) */
			
				/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
				document.getElementById("correctextended").innerHTML = qnum.d;
			}
		
			/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
			document.getElementById("multionly").style.display = "block";
		} else if (qnum.type == "tf") {
			/* Set which answers are correct and incorrect */
			if (qnum.correct == "true") {
				document.getElementById("tabtn").onclick = function() { show_correct(qnum) }; /* True Answer */
				document.getElementById("fabtn").onclick = function() { show_incorrect(qnum) }; /* False Answer */
			} else if (qnum.correct == "false") {
				document.getElementById("tabtn").onclick = function() { show_incorrect(qnum) }; /* True Answer */
				document.getElementById("fabtn").onclick = function() { show_correct(qnum) }; /* False Answer */
			}
		
			/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
			document.getElementById("multionly").style.display = "none";
		}
	
		/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
		document.getElementById("correctletter").innerHTML = qnum.correct;
	} else if (qnum.done == true) {
		/* Rerun the question prep to get a question that isn't done yet */
		prepquestions();
	}
}
/* Mixed questions (difficulty doesn't matter now because of the question prep) */
function runq_mixed(qnum) {
	if (qnum.done == false) {
		/* Display the correct setup */
		document.getElementById(qnum.type + "q").style.display = "block";
	
		/* Write question */
		document.getElementById("qdescriptor").innerHTML = qnum.question.descriptor;
		document.getElementById("qof" + qnum.type).innerHTML = qnum.question.description;

		/* Write answers */
		document.getElementById("mixedlua").innerHTML = qnum.a; /* Left Upper Answer (A.) */
		document.getElementById("mixedlla").innerHTML = qnum.b; /* Left Lower Answer (B.) */
		document.getElementById("mixedrua").innerHTML = qnum.c; /* Right Upper Answer (C.) */
		document.getElementById("mixedrla").innerHTML = qnum.d; /* Right Lower Answer (D.) */

		/* Set which answers are correct and incorrect */
		if (qnum.correct == "A") {
			document.getElementById("mixedluabtn").onclick = function() { show_correct(qnum) }; /* Left Upper Answer (A.) */
			document.getElementById("mixedllabtn").onclick = function() { show_incorrect(qnum) }; /* Left Lower Answer (B.) */
			document.getElementById("mixedruabtn").onclick = function() { show_incorrect(qnum) }; /* Right Upper Answer (C.) */
			document.getElementById("mixedrlabtn").onclick = function() { show_incorrect(qnum) }; /* Right Lower Answer (D.) */
			
			/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
			document.getElementById("correctextended").innerHTML = qnum.a;
		} else if (qnum.correct == "B") {
			document.getElementById("mixedluabtn").onclick = function() { show_incorrect(qnum) }; /*Left Upper Answer (A.)  */
			document.getElementById("mixedllabtn").onclick = function() { show_correct(qnum) }; /* Left Lower Answer (B.) */
			document.getElementById("mixedruabtn").onclick = function() { show_incorrect(qnum) }; /* Right Upper Answer (C.) */
			document.getElementById("mixedrlabtn").onclick = function() { show_incorrect(qnum) }; /* Right Lower Answer (D.) */
			
			/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
			document.getElementById("correctextended").innerHTML = qnum.b;
		} else if (qnum.correct == "C") {
			document.getElementById("mixedluabtn").onclick = function() { show_incorrect(qnum) }; /* Left Upper Answer (A.) */
			document.getElementById("mixedllabtn").onclick = function() { show_incorrect(qnum) }; /* Left Lower Answer (B.) */
			document.getElementById("mixedruabtn").onclick = function() { show_correct(qnum) }; /* Right Upper Answer (C.) */
			document.getElementById("mixedrlabtn").onclick = function() { show_incorrect(qnum) }; /* Right Lower Answer (D.) */
			
			/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
			document.getElementById("correctextended").innerHTML = qnum.c;
		} else if (qnum.correct == "D") {
			document.getElementById("mixedluabtn").onclick = function() { show_incorrect(qnum) }; /* Left Upper Answer (A.) */
			document.getElementById("mixedllabtn").onclick = function() { show_incorrect(qnum) }; /* Left Lower Answer (B.) */
			document.getElementById("mixedruabtn").onclick = function() { show_incorrect(qnum) }; /* Right Upper Answer (C.) */
			document.getElementById("mixedrlabtn").onclick = function() { show_correct(qnum) }; /* Right Lower Answer (D.) */
			
			/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
			document.getElementById("correctextended").innerHTML = qnum.d;
		}
		
		/* In the event the player answers this question incorrectly, this is what will be displayed on the identifier page */
		document.getElementById("multionly").style.display = "block";
		document.getElementById("correctletter").innerHTML = qnum.correct;
	} else if (qnum.done == true) {
		/* Rerun the question prep to get a question that isn't done yet */
		prepquestions();
	}
}

/* Show the player that they got the question correct */
function show_correct(qnum) {
	/* Display the correct version of the identifier page */
	document.getElementById("correct").style.display = "block";
	document.getElementById("incorrect").style.display = "none";
	
	/* Flip the card to show identifier side */
	$("#card #container").toggleClass("flipped");
	
	setTimeout(function() {
		correct(qnum);
	}, 1050); /* 0.25 second delay after the 0.8 second animation */
}
/* What to do if the current player correctly answers a question */
function correct(qnum) {
	var player = playerorder[currentuser];

	document.getElementById("gain-loss").innerHTML = "+";
	
	/* Reward the player */
	if (currentdiff == "easy") {
		if (player.position.owner == "unowned") {
			toearn = player.position.rent;
		} else if (player.position.owner == "grant") {
			toearn = player.position.rent; /* Current rent is the grant money */
		} else if (player.position.owner == player.call) {
			toearn = player.position.rent * 2;
		} else {
			toearn = 0;
			topay = Math.ceil(player.position.rent / 4);
			
			var paidrent = Math.ceil((player.position.rent / 4) * 3);
			findowner(paidrent);
		}
	} else if (currentdiff == "medium") {
		if (player.position.owner == "unowned") {
			toearn = Math.ceil(player.position.rent * 1.5);
		} else if (player.position.owner == "grant") {
			toearn = player.position.rent; /* Current rent is the grant money */
		} else if (player.position.owner == player.call) {
			toearn = player.position.rent * 3;
		} else {
			toearn = 0;
			topay = Math.ceil(player.position.rent / 2);
			
			var paidrent = Math.ceil(player.position.rent / 2);
			findowner(paidrent);
		}
	} else if (currentdiff == "hard") {
		if (player.position.owner == "unowned") {
			toearn = player.position.rent * 2;
		} else if (player.position.owner == "grant") {
			toearn = player.position.rent; /* Current rent is the grant money */
		} else if (player.position.owner == player.call) {
			toearn = player.position.rent * 5;
		} else {
			toearn = 0;
			topay = player.position.rent;
			
			findowner(player.position.rent);
		}
	}
	
	if (player.position.owner !== "unowned" && player.position.owner !== "grant" && player.position.owner !== player.call) {
		moneysubtraction(player, topay);
		document.getElementById("gain-loss").innerHTML = "&minus;";
		document.getElementById("earning-count").innerHTML = topay.toLocaleString('en');
	} else {
		player.money += toearn;
		document.getElementById("earning-count").innerHTML = toearn.toLocaleString('en');
	}
	
	/* Show how much the player earned/lost */
	whentoshow(qnum);
}

/* Show the player that they got the question wrong */
function show_incorrect(qnum) {
	/* Display the incorrect version of the identifier page */
	document.getElementById("incorrect").style.display = "block";
	document.getElementById("correct").style.display = "none";
	
	/* Flip the card to show identifier side */
	$("#card #container").toggleClass("flipped");
	
	setTimeout(function() {
		incorrect(qnum);
	}, 1050); /* 0.25 second delay after the 0.8 second animation */
}
/* What to do if the current player incorrectly answers a question */
function incorrect(qnum) {
	var player = playerorder[currentuser];

	document.getElementById("gain-loss").innerHTML = "&minus;";
	
	/* Penalize the player */
	if (currentdiff == "easy") {
		if (player.position.owner == "unowned") {
			topay = player.position.rent;
		} else if (player.position.owner == "grant") {
			toearn = player.position.rent; /* Current rent is the grant money */
			topay = 0;
		} else if (player.position.owner == player.call) {
			document.getElementById("gain-loss").innerHTML = "";
			
			toearn = 0;
			topay = 0;
		} else {
			topay = player.position.rent * 2;
			
			var paidrent = player.position.rent * 2;
			findowner(paidrent);
		}
	} else if (currentdiff == "medium") {
		if (player.position.owner == "unowned") {
			topay = Math.ceil(player.position.rent * 1.5);
		} else if (player.position.owner == "grant") {
			toearn = player.position.rent; /* Current rent is the grant money */
			topay = 0;
		} else if (player.position.owner == player.call) {
			document.getElementById("gain-loss").innerHTML = "";

			toearn = 0;
			topay = 0;
		} else {
			topay = player.position.rent * 3;
			
			var paidrent = player.position.rent * 3;
			findowner(paidrent);
		}
	} else if (currentdiff == "hard") {
		if (player.position.owner == "unowned") {
			topay = player.position.rent * 2;
		} else if (player.position.owner == "grant") {
			toearn = player.position.rent; /* Current rent is the grant money */
			topay = 0;
		} else if (player.position.owner == player.call) {
			document.getElementById("gain-loss").innerHTML = "";

			toearn = 0;
			topay = 0;
		} else {
			topay = player.position.rent * 5;
			
			var paidrent = player.position.rent * 5;
			findowner(paidrent);
		}
	}
	if (player.position.owner == "grant") {
		player.money += toearn;
		document.getElementById("gain-loss").innerHTML = "+";
		document.getElementById("earning-count").innerHTML = toearn.toLocaleString('en');
	} else {
		moneysubtraction(player, topay);
		document.getElementById("earning-count").innerHTML = topay.toLocaleString('en');
	}
	
	/* Show how much the player earned/lost */
	whentoshow(qnum);
}

/* Check the difficulty before moving on to the next question */
function diffCheck(qnum) {
	var player = playerorder[currentuser];
	
	/* Update displayed money to match the current player's money value */
	document.getElementById("money-count1").innerHTML = player.money.toLocaleString('en');
	document.getElementById("money-count2").innerHTML = player.money.toLocaleString('en');

	document.getElementById("payinganother").style.display = "none";
	
	/* Mark the question answered as done (so that the question isn't called again) */
	qnum.done = true;

	/* Increase the total number of questions done */
	qcount++;
	if (currentdiff == "easy") {
		easy.numdone++;
		if (easy.numdone == 30) {
			currentdiff = "medium";
		}
	} else if (currentdiff == "medium") {
		medium.numdone++;
		if (medium.numdone == 30) {
			currentdiff = "hard";
		}
	} else if (currentdiff == "hard") {
		hard.numdone++;
		if (hard.numdone == 25) {
			tie();
		}
	}
	
	/* Ask the player if they want to buy the space they are on (if the space is unowned) */
	positionnum = player.position.num;
	if (player.position.owner == "unowned") {
		if (player.position.num <= 9) {
			var card = "buy0" + positionnum;
		} else {
			var card = "buy" + positionnum;
		}
		prompt(card);
	} else if (player.position.owner == "grant") {
		/* Grant space */
		document.getElementById("grantmoney").innerHTML = player.position.rent.toLocaleString('en'); /* Current rent is the grant money */
		prompt('grantcard');
	} else {
		$("#earnings").animate( {
			top: "-500px"
		}, {
			duration: 750, /* 0.75 seconds */
			easing: "linear"
		});
		
		setTimeout(function() {
			whoisnext();
		}, 825); /* 0.825 second delay */
	}
}

/* Show how much the player earned/lost */
function show_earnings(qnum) {
	$("#earnings").animate( {
		top: "50px"
	}, {
		duration: 750, /* 0.75 seconds */
		easing: "linear",
		complete: function() {
			$("#earnings #hiding #earningspaper").animate( {
				top: "0px"
			}, {
				duration: 750, /* 0.75 seconds */
				easing: "linear",
				complete: function() {
					setTimeout(function() {
						/* Hide the question card */
						hide_card(qnum);
					}, 1500); /* 1.5 second delay */
				}
			});
		}
	});
}
/* Hide the question card */
function hide_card(qnum) {
	$("#earnings #hiding #earningspaper").animate( {
		top: "-200px"
	}, {
		duration: 750, /* 0.75 seconds */
		easing: "linear"
	});
	$("#card").animate( {
		top: "-100%"
	}, {
		duration: 825, /* .825 seconds */
		easing: "swing",
		complete: function() {
			document.getElementById("card").style.display = "none";
				
			/* Reset the card */
			$("#card #container").toggleClass("flipped");
			
			/* Remove keyboard shortcuts (this is so keys do not have mutliple functions assigned to them) */
			document.removeEventListener('keydown', answershortcut);

			/* Check the current difficulty and mark the current question as done */
			diffCheck(qnum);
		}
	});
	$("#ownerpaper").animate( {
		top: "-300px"
	}, {
		duration: 900, /* 0.9 seconds */
		easing: "linear"
	});
}

/* When to show the earnings */
function whentoshow(qnum) {
	if (playerorder[currentuser].position.owner == "grant") {
		/* Hide the question card */
		hide_card(qnum);
	} else if (playerorder[currentuser].position.owner == playerorder[currentuser].call) {
		if (toearn == 0) {
			/* Hide the question card */
			hide_card(qnum);
		} else {
			show_earnings(qnum);
		}
	} else {
		show_earnings(qnum);
	}
}

/* Answer Choice Keyboard Shortcuts */
function answershortcut(shortcut) {
	if (shortcut.keyCode === 65) { /* "a" was pressed */
		answerchoice("A");
	} else if (shortcut.keyCode === 66) { /* "b" was pressed */
		answerchoice("B");
	} else if (shortcut.keyCode === 67) { /* "c" was pressed */
		answerchoice("C");
	} else if (shortcut.keyCode === 68) { /* "d" was pressed */
		answerchoice("D");
	} else if (shortcut.keyCode === 84) { /* "t" was pressed */
		answerchoice("true");
	} else if (shortcut.keyCode === 70) { /* "f" was pressed */
		answerchoice("false");
	}
}
/* Set the appropriate correct/incorrect function */
function answerchoice(letter) {
	if (randqnum.type == "tf") {
		if (randqnum.correct == letter) {
			show_correct(randqnum);
		} else {
			show_incorrect(randqnum);
		}
	} else {
		/* These conditionals are repeated for normal and mixed type questions so that pressing "A", "B", "C", or "D" does not trigger the incorrect function for true/false type questions */
		if (randqnum.correct == letter) {
			show_correct(randqnum);
		} else {
			show_incorrect(randqnum);
		}
	}
}

/* Find the owner of a space so the current player can pay them rent */
function findowner(rent) {
	var player = playerorder[currentuser];

	document.getElementById("payinganother").style.display = "block";
	
	document.getElementById("topay-count").innerHTML = rent.toLocaleString('en');
	
	if (version == "multiplayer") {
		document.getElementById("calling").innerHTML = player.position.owner;
	}
	
	if (player.position.owner == "Player 1") {
		users.player1.money += Math.ceil(rent);
	} else if (player.position.owner == "Player 2") {
		users.player2.money += Math.ceil(rent);
	} else if (player.position.owner == "Player 3") {
		users.player3.money += Math.ceil(rent);
	} else if (player.position.owner == "Player 4") {
		users.player4.money += Math.ceil(rent);
	} else if (player.position.owner == "Player 5") {
		users.player5.money += Math.ceil(rent);
	} else if (player.position.owner == "Player 6") {
		users.player6.money += Math.ceil(rent);
	} else if (player.position.owner == "Fortune") {
		users.Fortune.money += Math.ceil(rent);
	}
}

/* Basic money subtraction */
function moneysubtraction(player, amountlost) {
	player.money -= amountlost;
	
	/* Check for bankruptcy */
	if (player.money < 0) {
		bankruptcy(player);
	}
}


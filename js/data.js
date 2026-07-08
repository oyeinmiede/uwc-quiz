/* ============================================================
COURSE CONFIG
============================================================ */
const COURSES = {
    TMC321: {
        code: "TMC321",
        name: "Personal Value System Development",
        examDate: "2026-07-16T08:00:00",
        color: "#6C5CE7",
        accent: "#a29bfe",
        emoji: "🛰️"
    },
    ENT321: {
        code: "ENT321",
        name: "Venture Creation/ Entrepreneurial Development Studies VI",
        examDate: "2026-07-08T11:30:00",
        color: "#00B894",
        accent: "#55efc4",
        emoji: "💡"
    },
    ADC321: {
        code: "ADC321",
        name: "Engaging in Business and Microlivestock Production II",
        examDate: "2026-07-10T15:00:00",
        color: "#E17055",
        accent: "#fab1a0",
        emoji: "🛡️",
        hasTypes: true
    },
    GST321: {
        code: "GST321",
        name: "Peace and Conflict Resolution",
        examDate: "2026-07-17T11:30:00",
        color: "#0984E3",
        accent: "#74b9ff",
        emoji: "📘"
    }
};

/* ============================================================
QUESTION BANKS
Format: { q: "question text", options: [4 strings], answer: index }
============================================================ */
const QUESTION_BANKS = {
    TMC321: [
        { "q": "In 'Following the Path of the Eagle', which animal is used as the central metaphor for the believer?", "options": ["Sparrow", "Eagle", "Chicken", "Dove"], "answer": 1 },
        { "q": "According to the notes, which scripture is the primary source for the eagle metaphor?", "options": ["Isaiah 40:31", "Deuteronomy 32:11-12", "Habakkuk 2:2", "Proverbs 23:7"], "answer": 1 },
        { "q": "What does Dr Oyedepo mean by 'Ground Power' in the eagle metaphor?", "options": ["Divine intervention without effort", "The thrust generated before takeoff", "A passive waiting on God", "Crowd support"], "answer": 1 },
        { "q": "Which trait is NOT listed as an eagle characteristic in the book review table?", "options": ["Soaring above storms", "Keen, focused vision", "Flocking in large groups", "Feather renewal (molting)"], "answer": 2 },
        { "q": "What is the book's stance on birthright versus lifestyle?", "options": ["Birthright guarantees lifestyle", "Lifestyle is irrelevant", "Birthright does not guarantee lifestyle", "Lifestyle determines birthright"], "answer": 2 },
        { "q": "Which phrase best captures the book's view of the eagle's flight?", "options": ["Passive glide", "Active, often painful climb", "Random wandering", "Group migration"], "answer": 1 },
        { "q": "What does 'feeding on fresh kill' symbolize for the believer?", "options": ["Relying on tradition", "Living by fresh revelations", "Eating literal meat", "Following cultural norms"], "answer": 1 },
        { "q": "Which theme emphasizes human effort combined with divine grace?", "options": ["The Eagle as Identity", "Ground Power", "The Lone Eagle", "Riding the Storm"], "answer": 1 },
        { "q": "Which quote reflects the book's rejection of passivity?", "options": ["Everything that flies generates the power within itself to fly.", "Wait and everything will come.", "Crowds will carry your destiny.", "Comfort guarantees success."], "answer": 0 },
        { "q": "What practical discipline does the book recommend for vision maintenance?", "options": ["Writing down vision", "Ignoring goals", "Following the crowd", "Changing vision weekly"], "answer": 0 },
        { "q": "Which scripture is cited to support solitary destiny?", "options": ["Isaiah 51:2", "Job 39:27-29", "Habakkuk 2:2", "Isaiah 40:31"], "answer": 0 },
        { "q": "What does the author say about storms?", "options": ["Avoid every storm at all costs.", "Storms are always punishment.", "Some storms can be used as updrafts for ascension.", "Storms prove failure."], "answer": 2 },
        { "q": "Which practical application is suggested for dealing with current storms?", "options": ["Pray against every challenge", "Identify how each storm could be an updraft", "Blame others for storms", "Ignore storms completely"], "answer": 1 },
        { "q": "What is the recommended frequency for solitary reflection in the practical application?", "options": ["Daily", "One hour weekly", "Once a year", "Every hour"], "answer": 1 },
        { "q": "Which book is suggested as further reading and is also by David Oyedepo?", "options": ["The Eagle's Secret", "The Pursuit of God", "Fulfilling Your Destiny", "The Hidden Covenants of Blessings"], "answer": 0 },
        { "q": "In the 'Ground Power' analogy, what real-world field does Dr Oyedepo borrow from?", "options": ["Biology", "Aeronautics", "Economics", "Architecture"], "answer": 1 },
        { "q": "Which statement summarizes 'Purpose Over Pay' theme?", "options": ["Choose jobs for salary only.", "Choose jobs for what you can offer, not just pay.", "Avoid work entirely.", "Chase money above all."], "answer": 1 },
        { "q": "Which quote captures the 'Purpose Over Pay' idea?", "options": ["If you chase money, you will sell your dignity.", "Money is everything.", "Pay defines purpose.", "Purpose is irrelevant."], "answer": 0 },
        { "q": "What does 'The Lone Eagle' theme primarily challenge?", "options": ["The need for large crowds for validation", "Individual responsibility", "Solitude as harmful", "Avoiding leadership"], "answer": 0 },
        { "q": "Which biblical example is used to illustrate solitary calling?", "options": ["Moses with Aaron", "Abraham called alone", "The twelve apostles together", "The crowds at Pentecost"], "answer": 1 },
        { "q": "Which of the following is a listed strength of the book?", "options": ["Highly technical language", "Balanced teaching between grace and effort", "Promotion of passivity", "Lengthy filler chapters"], "answer": 1 },
        { "q": "What does the author warn about people who live like 'chickens'?", "options": ["They are safe and successful", "They are earth-bound and fearful", "They soar higher than eagles", "They always lead crowds"], "answer": 1 },
        { "q": "Which scripture is recommended to memorize as a personal confession?", "options": ["Habakkuk 2:2", "Deuteronomy 32:11-12", "Proverbs 23:7", "Job 39:27-29"], "answer": 1 },
        { "q": "What is the book's view on victim mentality?", "options": ["It is justified", "It is rejected entirely", "It is encouraged", "It is neutral"], "answer": 1 },
        { "q": "Which practical step is advised before graduation?", "options": ["Write down your life vision", "Ignore career planning", "Follow the crowd", "Avoid mentors"], "answer": 0 },
        { "q": "In 'Transitioning from Money Craze to Impact Crave', what is 'money craze' defined as?", "options": ["Healthy saving habit", "An obsessive preoccupation with acquiring wealth", "A biblical virtue", "A neutral economic term"], "answer": 1 },
        { "q": "Which of these is NOT listed as a cause of money craze?", "options": ["Fear of lack", "Peer pressure", "Divine calling", "Social comparison"], "answer": 2 },
        { "q": "How does the notes define 'Impact Crave'?", "options": ["Desire for fame only", "Desire for significant results and service", "Desire to hoard wealth", "Desire to avoid work"], "answer": 1 },
        { "q": "Which case study illustrates the danger of pursuing fame and gain over destiny?", "options": ["Nathaniel Bassey", "Mohbad (Ileri Oluwa)", "Dr Cosmos Maduka", "Pastor Jerry Eze"], "answer": 1 },
        { "q": "Which example in the notes was sentenced to prison for online scamming?", "options": ["Nathaniel Bassey", "Hushpuppi (Ramon Abbas)", "Mohbad", "Dr David Oyedepo"], "answer": 1 },
        { "q": "What is the recommended redefinition of success in the 'Impact Crave' lecture?", "options": ["Measure by money earned", "Measure by lives touched", "Measure by social media followers", "Measure by possessions"], "answer": 1 },
        { "q": "Which scripture is quoted to warn about the love of riches leading to temptation?", "options": ["Ecclesiastes 10:19", "1 Timothy 6:9-10", "Proverbs 10:22", "Jeremiah 17:11"], "answer": 1 },
        { "q": "Which practical step is advised to transition from money craze to impact crave?", "options": ["Invest only in stocks", "Discover your purpose and passion", "Ignore skill development", "Chase quick riches"], "answer": 1 },
        { "q": "Which benefit is associated with impact-driven wealth?", "options": ["Loss of peace", "Divine favour and good reputation", "Immediate fame only", "Guaranteed trouble"], "answer": 1 },
        { "q": "Which proverb is used to describe the reward of the Lord making one rich without sorrow?", "options": ["Proverbs 10:22", "Proverbs 23:7", "Proverbs 22:29", "Proverbs 4:23"], "answer": 0 },
        { "q": "Which danger is NOT listed as a consequence of money craze?", "options": ["Permanent reputation loss", "Family breakdown", "Increased contentment", "Jail time"], "answer": 2 },
        { "q": "Which practical advice is given about asking the right question when pursuing work?", "options": ["Ask 'How much can I get?'", "Ask 'What problem can I solve?'", "Ask 'How can I avoid work?'", "Ask 'How can I impress others?'"], "answer": 1 },
        { "q": "Which case study is presented as someone who craved impact and was invited to minister in the US?", "options": ["Mohbad", "Nathaniel Bassey", "Hushpuppi", "A.W. Tozer"], "answer": 1 },
        { "q": "What does the notes say about money itself?", "options": ["Money is inherently evil", "Money is neutral; the love of money is the problem", "Money is always good", "Money should be avoided"], "answer": 1 },
        { "q": "Which scripture warns that riches obtained unjustly will be left and the person will be a fool?", "options": ["Jeremiah 17:11", "Isaiah 51:2", "Habakkuk 2:2", "Luke 16:10"], "answer": 0 },
        { "q": "Which practical step emphasizes capacity building?", "options": ["Spend time on books and skills that multiply impact", "Avoid learning new skills", "Rely solely on luck", "Ignore mentorship"], "answer": 0 },
        { "q": "In the money craze vs impact crave table, which is an example of a money-crazy act?", "options": ["Developing a life-saving skill", "Scamming via deepfakes", "Building a legitimate agency", "Working diligently and praying"], "answer": 1 },
        { "q": "Which biblical command is cited to support writing vision down?", "options": ["Habakkuk 2:2", "Isaiah 40:31", "Proverbs 23:7", "Deuteronomy 32:11-12"], "answer": 0 },
        { "q": "Which leader is mentioned as being mentored into billions by Dr Cosmos Maduka?", "options": ["Dr Stanley Uzochukwu", "Dr David Oyedepo", "Pastor Jerry Eze", "Nathaniel Bassey"], "answer": 0 },
        { "q": "What is the central message of 'Embracing the Value of Contentment'?", "options": ["Contentment is passive laziness", "Contentment is inward spiritual satisfaction trusting God's sovereignty", "Contentment means having no ambition", "Contentment is only for the wealthy"], "answer": 1 },
        { "q": "Which New Testament example is cited as having learned contentment in all situations?", "options": ["Apostle Paul", "John the Baptist", "Jesus' disciples", "Peter"], "answer": 0 },
        { "q": "Which Old Testament figure is used to illustrate contentment through suffering and loss?", "options": ["Job", "Abraham", "Joseph", "David"], "answer": 0 },
        { "q": "Which practical method is recommended to cultivate contentment?", "options": ["Limit comparison", "Increase material desires", "Chase social media fame", "Ignore gratitude"], "answer": 0 },
        { "q": "Which philosopher is quoted on wealth consisting not in having great possessions but few wants?", "options": ["Socrates", "Epictetus", "Plato", "Aristotle"], "answer": 1 },
        { "q": "Which modern factor is listed as a barrier to contentment?", "options": ["Comparison via social media", "Strong faith", "Gratitude", "Healthy ambition"], "answer": 0 },
        { "q": "Which benefit is associated with contentment in professional life?", "options": ["Increased burnout", "Avoiding job satisfaction", "Improved focus and reduced stress", "Higher unrealistic expectations"], "answer": 2 },
        { "q": "Which biblical hero is cited as an example of contentment with little?", "options": ["Widow of Zarephath", "King Solomon", "Goliath", "Nebuchadnezzar"], "answer": 0 },
        { "q": "Which quote is attributed to Bishop Oyedepo in the contentment slides?", "options": ["Contentment is irrelevant", "Contentment as a key to financial peace and spiritual stability", "Money is everything", "Ambition is sinful"], "answer": 1 },
        { "q": "Which practical step is NOT recommended for cultivating contentment?", "options": ["Practice practical gratitude", "Limit comparison", "Celebrate small wins", "Constantly compare yourself to others"], "answer": 3 },
        { "q": "Which scripture is used to show learned contentment by Paul?", "options": ["Philippians 4:11–13", "Isaiah 40:31", "Habakkuk 2:2", "Proverbs 23:7"], "answer": 0 },
        { "q": "Which statement best describes contentment vs complacency in the slides?", "options": ["Contentment equals indifference", "Contentment involves gratitude and growth mindset; complacency involves indifference and stagnation", "Complacency is the same as contentment", "Contentment discourages growth"], "answer": 1 },
        { "q": "Which historical figure's quote appears on the contentment slides about enjoying little things?", "options": ["Robert Brault", "David Oyedepo", "Lao Tzu", "Helen Keller"], "answer": 0 },
        { "q": "Which of these is a listed barrier to contentment?", "options": ["Gratitude", "Materialism", "Resilience", "Emotional stability"], "answer": 1 },
        { "q": "Which practical workplace benefit is linked to contentment?", "options": ["More burnout", "Avoiding job satisfaction", "Better relationships and financial discipline", "Less focus"], "answer": 2 },
        { "q": "Which book by Oyedepo is listed among those focusing on contentment?", "options": ["Understanding Financial Prosperity", "The Eagle's Secret", "The Pursuit of God", "Fulfilling Your Destiny"], "answer": 0 },
        { "q": "In 'Success to Significance', what is significance primarily built on?", "options": ["Wealth accumulation", "Values and service", "Public recognition", "Short-term achievements"], "answer": 1 },
        { "q": "Which author is quoted for the idea that life is not about personal achievements alone?", "options": ["Rick Warren", "David Oyedepo", "A.W. Tozer", "Epictetus"], "answer": 0 },
        { "q": "Which biblical verse is used to emphasize meditation on the law for prosperity?", "options": ["Joshua 1:8", "Proverbs 4:23", "Luke 16:10", "Isaiah 51:2"], "answer": 0 },
        { "q": "Which of the following is listed as a core element of value-based significance?", "options": ["Integrity", "Luck", "Popularity", "Wealth only"], "answer": 0 },
        { "q": "According to the 'Success to Significance' notes, what determines external outcomes?", "options": ["Internal values", "Random chance", "Public opinion", "Market trends"], "answer": 0 },
        { "q": "Which proverb is cited to stress the importance of a good name over riches?", "options": ["Proverbs 22:1", "Proverbs 10:22", "Proverbs 23:7", "Proverbs 4:23"], "answer": 0 },
        { "q": "Which scripture is quoted to support faithfulness in small things?", "options": ["Luke 16:10", "Habakkuk 2:2", "Isaiah 40:31", "Deuteronomy 32:11-12"], "answer": 0 },
        { "q": "Which practical pathway is recommended for building value-based significance?", "options": ["Practice consistent integrity", "Ignore discipline", "Seek fame only", "Avoid mentorship"], "answer": 0 },
        { "q": "What does the 'Success' column primarily measure in the comparison table?", "options": ["Impact and integrity", "Results and achievement", "Legacy", "Character"], "answer": 1 },
        { "q": "What does the 'Significance' column primarily measure?", "options": ["Recognition only", "Impact plus integrity", "Short-term success", "Wealth accumulation"], "answer": 1 },
        { "q": "Which of these is NOT listed as a value in the 'Values' word cloud?", "options": ["Integrity", "Teamwork", "Perfection", "Greed"], "answer": 3 },
        { "q": "Which practical advice is given for building a legacy?", "options": ["Build legacy through people and discipleship", "Focus only on personal gain", "Avoid teaching others", "Keep knowledge to yourself"], "answer": 0 },
        { "q": "Which author is cited for 'Success Strategies' and 'Success Systems' in the slides?", "options": ["David O. Oyedepo", "Rick Warren", "A.W. Tozer", "Epictetus"], "answer": 0 },
        { "q": "Which scripture is quoted to warn against conforming to the world and to encourage transformation?", "options": ["Romans 12:2", "Isaiah 40:31", "Habakkuk 2:2", "Proverbs 11:3"], "answer": 0 },
        { "q": "Which dimension in the success vs significance table lists 'Foundation' as 'Values'?", "options": ["Success", "Significance", "Both Success and Significance", "Neither"], "answer": 1 },
        { "q": "Which practical habit is recommended for lifelong development in the 'Success to Significance' notes?", "options": ["Develop lifelong learning habits", "Avoid new learning", "Rely on luck", "Stop reading"], "answer": 0 },
        { "q": "Which biblical principle is emphasized as guiding decisions and actions?", "options": ["Values", "Trends", "Popularity", "Wealth"], "answer": 0 },
        { "q": "Which of these is presented as a product of value-driven living?", "options": ["Temporary fame", "Significance", "Instant wealth", "Complacency"], "answer": 1 },
        { "q": "Which scripture is used to support the idea that integrity guides the upright?", "options": ["Proverbs 11:3", "Luke 16:10", "Joshua 1:8", "Habakkuk 2:2"], "answer": 0 },
        { "q": "Which phrase summarizes the conclusion of 'Success to Significance'?", "options": ["Success alone is enough", "True significance comes from success built on values, integrity, service", "Values are irrelevant", "Only wealth matters"], "answer": 1 },
        { "q": "Which practical action is recommended to align goals with values?", "options": ["Define core values and align goals with them", "Chase trends", "Ignore values", "Seek shortcuts"], "answer": 0 },
        { "q": "Which of the following is emphasized as necessary for sustainable success?", "options": ["A value system and structured living", "Random chance", "Public approval", "Short-term gains"], "answer": 0 },
        { "q": "Which book is referenced as asking 'What on earth am I here for?'", "options": ["The Purpose Driven Life by Rick Warren", "Success Strategies by Oyedepo", "The Eagle's Secret", "Understanding Financial Prosperity"], "answer": 0 },
        { "q": "Which of these is a recommended practice for service-oriented living?", "options": ["Love, integrity, responsibility", "Self-centered ambition", "Deception", "Avoiding responsibility"], "answer": 0 },
        { "q": "Which slide emphasizes that success without character is risky?", "options": ["Success to Significance conclusion", "Contentment introduction", "Money craze case studies", "Eagle metaphor table"], "answer": 0 },
        { "q": "Which practical recommendation appears in multiple lectures across the notes?", "options": ["Write down your vision", "Avoid mentors", "Chase money only", "Ignore scripture"], "answer": 0 },
        { "q": "Which of the following is a repeated scriptural foundation across the documents?", "options": ["Habakkuk 2:2", "Genesis 1:1", "Matthew 28:19", "Revelation 22:21"], "answer": 0 },
        { "q": "Which theme connects aeronautical concepts to spiritual truths?", "options": ["Ground Power", "Contentment", "Money Craze", "Success Systems"], "answer": 0 },
        { "q": "Which practical exercise is suggested to evaluate current storms?", "options": ["Write down three storms and determine how each could be an updraft", "Avoid thinking about storms", "Complain publicly", "Ignore problems"], "answer": 0 },
        { "q": "Which leader is noted for generating significant income through live-streamed prayer meetings?", "options": ["Pastor Jerry Eze", "Dr David Oyedepo", "Dr Cosmos Maduka", "Nathaniel Bassey"], "answer": 0 },
        { "q": "Which of the following is a recommended weekly spiritual discipline in the eagle notes?", "options": ["One hour weekly in solitary reflection", "Daily public performances", "Monthly parties", "Never being alone"], "answer": 0 },
        { "q": "Which concept warns against relying solely on crowds for destiny?", "options": ["The Lone Eagle", "Ground Power", "Contentment", "Success Systems"], "answer": 0 },
        { "q": "Which practical step is recommended for financial and spiritual alignment in 'Transitioning from Money Craze to Impact Crave'?", "options": ["Understand and live in the covenant of wealth", "Ignore covenant principles", "Chase quick schemes", "Avoid giving"], "answer": 0 },
        { "q": "Which of these is a central exhortation in the eagle material?", "options": ["Reject mediocrity and embrace God-ordained destiny", "Accept low-level living", "Depend solely on others", "Avoid vision planning"], "answer": 0 },
        { "q": "Which of the following is emphasized as necessary to 'mount up with wings as eagles'?", "options": ["Waiting passively", "Renewing strength through waiting on the Lord", "Following the crowd", "Accumulating possessions"], "answer": 1 },
        { "q": "Which practical recommendation appears in the contentment slides for daily practice?", "options": ["Choose gratitude daily", "Seek constant comparison", "Increase desires", "Ignore small wins"], "answer": 0 },
        { "q": "Which of the following is a danger of money craze listed in the notes?", "options": ["Permanent disability and sudden death", "Guaranteed happiness", "Spiritual growth", "Increased contentment"], "answer": 0 },
        { "q": "Which of these is a recommended measure of success in impact-driven living?", "options": ["Lives touched", "Bank balance only", "Number of possessions", "Social media likes"], "answer": 0 },
        { "q": "Which of the following best captures the relationship between divine empowerment and human effort in the notes?", "options": ["Divine grace plus human grit", "Divine action replaces human effort", "Human effort alone suffices", "Neither matters"], "answer": 0 },
        { "q": "Which of the following is a repeated practical instruction across the documents?", "options": ["Surround yourself with mentors and serious peers", "Avoid mentors", "Rely on scams", "Ignore vision writing"], "answer": 0 },
        { "q": "Which of these is a recommended attitude toward challenges in the eagle notes?", "options": ["See some challenges as launchpads for higher levels", "Avoid all challenges", "Blame others for challenges", "Ignore challenges"], "answer": 0 },
        { "q": "Which of the following is a central contrast in the 'Contentment' slides?", "options": ["Contentment vs Complacency", "Wealth vs Poverty", "Success vs Failure", "Faith vs Works"], "answer": 0 },
        { "q": "Which of the following is an explicit call to action in the eagle notes?", "options": ["Write down your life vision before graduation", "Delay vision planning", "Follow the crowd", "Avoid reflection"], "answer": 0 },
        { "q": "Which of the following best summarizes the overall message across the provided notes?", "options": ["Pursue value, vision, discipline, and service rather than mere wealth or crowd validation", "Chase money at all costs", "Avoid ambition entirely", "Rely only on public approval"], "answer": 0 }
    ],

    ENT321: [
        {
            q: "Innovation is the process of creating and implementing new ideas, products, services, or processes that add what?",
            options: ["Bureaucracy", "Value", "Inventions", "Divisions"],
            answer: 1
        },
        {
            q: "Innovation goes beyond mere invention because it strictly requires which two elements?",
            options: [
                "R&D and capital",
                "Execution and adoption",
                "Creativity and luck",
                "Motivation and vision"
            ],
            answer: 1
        },
        {
            q: "Which of the following is an objective of understanding an innovative culture?",
            options: [
                "Increasing organizational bureaucracy",
                "Learning key principles fostering innovation",
                "Eliminating cross-functional teams",
                "Driving short-term quarterly results"
            ],
            answer: 1
        },
        {
            q: "What does psychological safety in an innovative culture prevent?",
            options: [
                "Cross-industry insights",
                "Customer-centric mindsets",
                "Fear of ridicule or punishment",
                "Experimentation"
            ],
            answer: 2
        },
        {
            q: "A customer-centric mindset in innovation involves using which methodology?",
            options: [
                "Aggressive sales persuasion",
                "Lean startup methodology",
                "High price skimming",
                "Traditional hierarchy workflows"
            ],
            answer: 1
        },
        {
            q: "Which barrier to innovation is described as a force that \"stifles creativity\"?",
            options: ["Siloed teams", "Risk aversion", "Bureaucracy", "Prototyping"],
            answer: 1
        },
        {
            q: "How does bureaucracy act as a barrier to innovation?",
            options: [
                "By creating cross-functional teams",
                "By slowing down decision-making, which kills innovation",
                "By over-rewarding failure",
                "By flattening organizational hierarchies"
            ],
            answer: 1
        },
        {
            q: "Overemphasis on quarterly results that discourages long-term R&D describes which barrier?",
            options: [
                "Short-term focus",
                "Siloed teams",
                "Bureaucracy",
                "Risk aversion"
            ],
            answer: 0
        },
        {
            q: "Which of the following is a recommended step to build an innovation culture?",
            options: [
                "Increase management layers",
                "Flatten hierarchies to speed up decision-making",
                "Penalize failed experiments",
                "Reinforce strict boundaries between departments"
            ],
            answer: 1
        },
        {
            q: "To spark multi-industry creativity, what actionable step is advised?",
            options: [
                "Read internal reports only",
                "Network outside your field",
                "Isolate core teams",
                "Avoid cross-functional engagement"
            ],
            answer: 1
        },
        {
            q: "Complete the quote from the notes: \"Innovation is not about a single breakthrough but a culture that...\"",
            options: [
                "maximizes monthly sales volumes.",
                "nurtures breakthroughs every day.",
                "guarantees zero business failures.",
                "eliminates all financial risks."
            ],
            answer: 1
        },

        {
            q: "Selling is defined as the process of what?",
            options: [
                "Conducting strategic consumer market research",
                "Persuading a customer to purchase a specific product or service",
                "Creating long-term brand equity",
                "Altering societal habits through micro-financing"
            ],
            answer: 1
        },
        {
            q: "Which activity is specifically tied to the selling process?",
            options: [
                "Designing market research surveys",
                "Handling objections and closing sales",
                "Formulating the 4Ps strategic mix",
                "Establishing public brand reputation"
            ],
            answer: 1
        },
        {
            q: "What is the process of creating awareness, interest, and demand for a product or service?",
            options: [
                "Production planning",
                "Marketing",
                "Prototyping",
                "Concept testing"
            ],
            answer: 1
        },
        {
            q: "According to the notes, selling focuses on converting leads into sales, while marketing focuses on what?",
            options: [
                "Pushing existing products to the market",
                "Creating leads and building brand awareness",
                "Optimizing internal production systems",
                "Handling standard client objections"
            ],
            answer: 1
        },
        {
            q: "Which evolution of marketing focuses concurrently on profit, customer welfare, and society?",
            options: [
                "Digital Marketing",
                "Relationship Marketing",
                "Societal Marketing",
                "Production Concept"
            ],
            answer: 2
        },
        {
            q: "The Selling Concept is a philosophy heavily focused on moving existing products through what?",
            options: [
                "Sensing and responding to customer desires",
                "Aggressive promotion and persuasion",
                "Custom sustainable ecosystems",
                "Long-term relationship cultivation"
            ],
            answer: 1
        },
        {
            q: "Under the Selling Concept, what is the core business view?",
            options: [
                "Sense and Respond",
                "Make and Sell",
                "Analyze and Adapt",
                "Segment and Target"
            ],
            answer: 1
        },
        {
            q: "The Marketing Concept adopts which business view?",
            options: [
                "Make and Sell",
                "Sense and Respond",
                "Produce and Push",
                "Distribute and Dictate"
            ],
            answer: 1
        },
        {
            q: "What time frame defines the strategic perspective of the Marketing Concept?",
            options: ["Short-term", "Long-term", "Seasonal", "Bi-weekly"],
            answer: 1
        },
        {
            q: "What are the primary tools used within the comprehensive Marketing Concept?",
            options: [
                "Promotion, discounts, and persuasion alone",
                "The 4Ps: Product, Price, Place, Promotion",
                "Cold calling and quotas",
                "Sourcing factory raw materials"
            ],
            answer: 1
        },
        {
            q: "What represents a basic requirement for survival?",
            options: [
                "Personal tastes and preferences",
                "Needs",
                "Specific products backed by money",
                "Premium loyalty benefits"
            ],
            answer: 1
        },
        {
            q: "When a basic survival requirement is directed toward personal preferences and tastes, it becomes a:",
            options: ["Demand", "Need", "Want", "Transaction"],
            answer: 2
        },
        {
            q: "A specific product that meets a consumer's want, backed by the ability to buy, is called:",
            options: [
                "A demand",
                "A general desire",
                "An exchange relationship",
                "A lead"
            ],
            answer: 0
        },
        {
            q: "According to Peter Drucker, while selling aims to close deals, marketing aims to do what?",
            options: [
                "Maximize sales volume immediately",
                "Build relationships, drive engagement, and ultimately drive sales",
                "Provide product information only",
                "Handle objections directly"
            ],
            answer: 1
        },

        {
            q: "What is product development defined as by Krishnan & Ulrich (2001)?",
            options: [
                "Execution of aggressive market clearance pricing",
                "Transformation of a market opportunity into a product available for sale",
                "Management of basic accounting registers",
                "Elimination of external venture capital networks"
            ],
            answer: 1
        },
        {
            q: "How many distinct stages of product development are outlined in these lecture notes?",
            options: ["Five (5)", "Seven (7)", "Ten (10)", "Three (3)"],
            answer: 1
        },
        {
            q: "What is the very first stage in the product development lifecycle?",
            options: [
                "Testing and Validation",
                "Production Planning",
                "Idea Generation",
                "Product Definition"
            ],
            answer: 2
        },
        {
            q: "Brainstorming product concepts based on customer needs, competitor analysis, and R&D happens in which stage?",
            options: [
                "Evaluation",
                "Idea Generation",
                "Launch and Commercialization",
                "Feasibility Analysis"
            ],
            answer: 1
        },
        {
            q: "What does the \"S\" in the SCAMPER brainstorming technique stand for?",
            options: ["Strategy", "Substitute", "Synergy", "Short-term"],
            answer: 1
        },
        {
            q: "Transforming ideas into tangible concepts while assessing technical, financial, and market feasibility occurs in which stage?",
            options: [
                "Production Planning",
                "Idea Generation",
                "Concept Development and Feasibility Analysis (Product Definition)",
                "Post-Launch Evaluation"
            ],
            answer: 2
        },
        {
            q: "Which lean tool is mentioned as part of defining the product concept strategy?",
            options: [
                "Business model Canvas",
                "Traditional 50-page ledger",
                "Pay-Per-Click Ad Tracker",
                "Hierarchy Flowchart"
            ],
            answer: 0
        },
        {
            q: "Using CAD software and 3D modeling to construct prototypes happens during:",
            options: [
                "Idea Generation",
                "Evaluation",
                "Design and Prototyping",
                "Commercialization"
            ],
            answer: 2
        },
        {
            q: "Conducting internal testing, external testing, and checking regulatory compliance is part of:",
            options: [
                "Production Planning",
                "Testing and Validation",
                "Idea Generation",
                "Market Sourcing"
            ],
            answer: 1
        },
        {
            q: "Which stage determines resource allocation, supplier selection, and manufacturing workflows?",
            options: [
                "Idea Generation",
                "Concept Sourcing",
                "Production Planning",
                "Post-Launch Evaluation"
            ],
            answer: 2
        },
        {
            q: "Launching and commercialization involves introducing the product into the market using what framework?",
            options: [
                "The SCAMPER model",
                "Marketing Mix i.e 4Ps",
                "The Triangular Environment Framework",
                "Net Promoter Score ledger"
            ],
            answer: 1
        },
        {
            q: "Monitoring sales, customer feedback, and tracking ROI using the Net Promoter Score (NPS) occurs in:",
            options: [
                "Production Planning",
                "Post-Launch Evaluation",
                "Feasibility Assessment",
                "Design Phase"
            ],
            answer: 1
        },
        {
            q: "Which product is cited as reiterating the design process to balance cost, quality, and user experience?",
            options: [
                "Microsoft Windows",
                "Apple product (iPhone)",
                "Amazon Alexa",
                "Google Glass"
            ],
            answer: 1
        },

        {
            q: "A business venture is essentially created to pursue what?",
            options: [
                "Total market monopoly",
                "A specific opportunity or idea",
                "Corporate bureaucracy",
                "Government subsidies"
            ],
            answer: 1
        },
        {
            q: "What are the three components of the Triangular Diverse Environments?",
            options: [
                "Human, Social, and Financial capital",
                "Economic, Social / Cultural, and Technological environments",
                "Advertising, Pricing, and Delivery channels",
                "Sourcing, Production, and Evaluation steps"
            ],
            answer: 1
        },
        {
            q: "Access to capital, labor market conditions, inflation, and consumer purchasing power belong to which environment?",
            options: [
                "Cultural Environment",
                "Economic Environment",
                "Technological Environment",
                "Political Isolation"
            ],
            answer: 1
        },
        {
            q: "Societal norms, values, and beliefs that affect consumer behavior belong to which environment?",
            options: [
                "Social / Cultural Envts.",
                "Economic Environment",
                "Technological Environment",
                "Administrative Environment"
            ],
            answer: 0
        },
        {
            q: "Innovation, IT infrastructure, and digital tools drive efficiency and belong to which environment?",
            options: [
                "Economic Environment",
                "Social Environment",
                "Technological Envts.",
                "Regulatory Environment"
            ],
            answer: 2
        },
        {
            q: "Recognizing a gap in the market or unmet need is which step in new venture creation?",
            options: [
                "Resource Mobilization",
                "Opportunity Identification and Evaluation (Step 1)",
                "Formal Business Launch",
                "Regional Development"
            ],
            answer: 1
        },
        {
            q: "Step 2 of New Venture Creation involves developing a structured business plan and assessing what?",
            options: [
                "Technical, financial, and market value of the idea",
                "Internal management payroll schedules only",
                "Historical traditional micro-loans from 1950",
                "Direct pay-per-click ad spending daily"
            ],
            answer: 0
        },
        {
            q: "What constitutes Resource Mobilization in Step 3?",
            options: [
                "Implementation",
                "Gathering Human, Financial, and social Capital",
                "Evaluation",
                "Brainstorming"
            ],
            answer: 1
        },
        {
            q: "Under diverse contexts, what is a common source of resource mobilization for new ventures?",
            options: [
                "Venture Capital, Angel Investors and Crowdfunding",
                "Public crowding bonds",
                "Tax refunds exclusively",
                "Foreign national reserves"
            ],
            answer: 0
        },
        {
            q: "Implementation and Business Launch (Step 4) involves putting plans into action via what means?",
            options: [
                "E-Business or Traditional physical trading",
                "Only theoretical ideas with no action",
                "Strictly public stock exchange listings",
                "Zero operational delivery tracking"
            ],
            answer: 0
        },
        {
            q: "Managing the business post-launch and ensuring long-term sustainability refers to which step?",
            options: [
                "Idea generation",
                "Business Growth, Sustainability and Adaptation (Step 5)",
                "Initial concept testing",
                "Sourcing basic raw tools"
            ],
            answer: 1
        },

        {
            q: "What is E-Business?",
            options: [
                "Pushing standard retail stock via paper advertisements",
                "A commercial interaction which utilizes computer network to ensure engagement of trading activities",
                "Sourcing bank loans physically from micro-lenders",
                "Organizing indoor administrative physical staff boards"
            ],
            answer: 1
        },
        {
            q: "A limited internet accessible only to selected employees and authorized outsiders is an:",
            options: ["Intranet", "Extranet", "Public Web", "Core Database"],
            answer: 1
        },
        {
            q: "An organization’s private internet is known as an:",
            options: [
                "Extranet",
                "Intranet",
                "Open source data analytics platform",
                "Traditional paper filing tracking layout"
            ],
            answer: 1
        },
        {
            q: "E-Business enhances internal management processes such as:",
            options: [
                "Sourcing external venture capital lines",
                "Employee services, training, internal information-sharing, and recruiting",
                "Television commercials production",
                "Managing external roadside digital boards"
            ],
            answer: 1
        },
        {
            q: "E-Business enhances customer-focused processes such as:",
            options: [
                "Procurement and raw stock replenishment",
                "Promotional and marketing efforts, selling over the Internet",
                "Internal staff upskilling systems",
                "Structural layout of factory floors"
            ],
            answer: 1
        },
        {
            q: "Why is E-Business cheaper than traditional business?",
            options: [
                "It avoids all tax and regulatory filings completely.",
                "The cost to set up and transaction cost is effectively less.",
                "It requires zero internet access tools.",
                "It relies entirely on physical print brochures."
            ],
            answer: 1
        },
        {
            q: "What breaks down the time barriers that location-based businesses encounter?",
            options: [
                "Extranets",
                "Flexible Business Hours",
                "Supply Chain Management",
                "Intranets"
            ],
            answer: 1
        },
        {
            q: "E-commerce is fundamentally defined as:",
            options: [
                "Internal organizational training platforms",
                "The trading or facilitation of trading in products or services using computer networks",
                "Buying goods exclusively with physical cash",
                "Running television commercials"
            ],
            answer: 1
        },
        {
            q: "B2C stands for transactions between businesses and:",
            options: [
                "Individual consumers",
                "Other businesses",
                "Governments",
                "Manufacturers"
            ],
            answer: 0
        },
        {
            q: "What forces drive E-commerce?",
            options: [
                "Political lobbying groups only",
                "Economic, Marketing/Interaction, and Technological Forces",
                "Manual records and physical ledgers",
                "Hierarchical organizational structures"
            ],
            answer: 1
        },
        {
            q: "E-Marketing is also known as:",
            options: [
                "Digital Marketing, Internet marketing, or online marketing",
                "Societal marketing",
                "Traditional marketing",
                "Relationship marketing"
            ],
            answer: 0
        },
        {
            q: "Which of the following is an exclusive tactic to digital marketing?",
            options: [
                "Standard print newspapers",
                "In-app PPC ads and push notifications",
                "Direct physical billboards using hand-painted paper",
                "Door-to-door sales presentations"
            ],
            answer: 1
        },
        {
            q: "Digital displays used for outdoor advertising to showcase images or videos to a large audience are called:",
            options: ["In-app ads", "Electronic billboards", "Intranets", "Databases"],
            answer: 1
        },
        {
            q: "Protecting customer data falls under which E-business challenge?",
            options: [
                "Cybersecurity",
                "Supply Chain Management",
                "Taxation and Tariffs",
                "Regulatory Compliance"
            ],
            answer: 0
        },

        {
            q: "Entrepreneurial culture is defined as a set of values and attitudes that encourage what?",
            options: [
                "Absolute risk aversion and strict compliance loops",
                "Innovation, risk-taking, and proactive problem solving",
                "Slow, hierarchical administrative check routines",
                "Short-term profit extraction above all else"
            ],
            answer: 1
        },
        {
            q: "What percentage of employees in innovative cultures report higher job satisfaction according to Gallup (2023)?",
            options: ["50%", "70%", "95%", "40%"],
            answer: 1
        },
        {
            q: "Entrepreneurial firms drive what percentage of GDP in developed economies like China and the U.S.?",
            options: ["10%", "25%", "50%", "85%"],
            answer: 2
        },
        {
            q: "Anticipating and seizing opportunities is defined as which characteristic?",
            options: ["Autonomy", "Proactivity", "Resilience", "Agility"],
            answer: 1
        },
        {
            q: "The ability to make decisions independently within an entrepreneurial culture is called:",
            options: [
                "Autonomy",
                "Strict top-down management",
                "Calculated risk",
                "Resilience"
            ],
            answer: 0
        },
        {
            q: "Persistence in the face of challenges refers to:",
            options: ["Autonomy", "Resilience", "Proactivity", "Collaboration"],
            answer: 1
        },
        {
            q: "What is a key leadership role in fostering an entrepreneurial culture?",
            options: [
                "Enforcing strict penalties for experimental failures",
                "Ability to take calculated risk and commit to innovation",
                "Creating highly siloed operational departments",
                "Minimizing long-term collaborative projects"
            ],
            answer: 1
        },
        {
            q: "To create a safe space for risk, an organization must normalize what as part of growth?",
            options: [
                "Rigid corporate compliance",
                "Failure",
                "Bonuses tied to daily transaction speed",
                "Secret internal monitoring"
            ],
            answer: 1
        },
        {
            q: "Which of the following is a common challenge in fostering an entrepreneurial culture?",
            options: [
                "Excessive access to free unmapped funds",
                "Resistance to change and resources constraint in startups",
                "Too many flat management tiers",
                "Zero external market competition"
            ],
            answer: 1
        },

        {
            q: "Entrepreneurship thrives on identifying situations where:",
            options: [
                "Supply massively exceeds consumer demand",
                "Demand exceeds supply",
                "Government subsidies remove all competition",
                "Consumers stop buying items completely"
            ],
            answer: 1
        },
        {
            q: "A demand and supply gap occurs when the quantity of goods demanded:",
            options: [
                "Equals the quantity supplied",
                "Exceeds the quantity supplied",
                "Falls behind the quantity supplied",
                "Is completely unpredictable"
            ],
            answer: 1
        },
        {
            q: "What type of gap exists when demand is present but not expressed due to lack of awareness or access?",
            options: ["Excess Demand", "Latent Demand", "Seasonal Gap", "Quality Gap"],
            answer: 1
        },
        {
            q: "If existing products do not meet customer expectations, what gap occurs?",
            options: [
                "Latent Demand Gap",
                "Seasonal Gap",
                "Quality Gap",
                "Currency Gap"
            ],
            answer: 2
        },
        {
            q: "A segment of the market where demand is not fully satisfied is known as a:",
            options: [
                "Saturated market",
                "Market Gap",
                "Technological Gap",
                "Social Condition"
            ],
            answer: 1
        },
        {
            q: "Which of the following is a source of market gaps?",
            options: [
                "Excellent service delivery and low prices",
                "Poor service delivery, high prices, and lack of accessibility",
                "Perfect technical adoption matching across regions",
                "Mass abundance of local raw resource items"
            ],
            answer: 1
        },
        {
            q: "Unmet needs refer to customer problems that are:",
            options: [
                "Already fully satisfied",
                "Not adequately solved by existing products",
                "Created purely by marketing campaigns",
                "Ignored due to low profitability"
            ],
            answer: 1
        },
        {
            q: "The systematic collection and analysis of data about customers, competitors, and market conditions is called:",
            options: [
                "Product Prototyping",
                "Market research",
                "Technology Adoption",
                "Societal Marketing"
            ],
            answer: 1
        },
        {
            q: "Surveys, interviews, and focus groups are examples of:",
            options: [
                "Primary Research",
                "Secondary Research",
                "Prototyping Tools",
                "Climate Conditions"
            ],
            answer: 0
        },
        {
            q: "Reports, journals, and government publications are examples of:",
            options: [
                "Primary Research",
                "Secondary Research",
                "Focus Groups",
                "Unutilized Resources"
            ],
            answer: 1
        },
        {
            q: "Resources that are available but not effectively used for productive purposes are called:",
            options: [
                "Venture Capital",
                "Unutilized resources",
                "Latent Demands",
                "Extranets"
            ],
            answer: 1
        },
        {
            q: "Youth unemployment is an example of what type of unutilized resource?",
            options: [
                "Natural Resources",
                "Human Resources",
                "Financial Resources",
                "Technological Resources"
            ],
            answer: 1
        },
        {
            q: "The difference between available technology and its actual usage by individuals or organizations is called the:",
            options: [
                "Technology adoption gap",
                "Quality gap",
                "Latent demand",
                "Unutilized resource gap"
            ],
            answer: 0
        },
        {
            q: "Population growth, urbanization, and lifestyle changes are considered what kind of conditions?",
            options: [
                "Climate Conditions",
                "Social Conditions",
                "Economic Forces",
                "Technical Adoption Variables"
            ],
            answer: 1
        },
        {
            q: "Renewable energy and climate-smart agriculture are business opportunities arising from:",
            options: [
                "Social Conditions",
                "Climate Conditions",
                "Short-term market trends",
                "E-commerce logistics"
            ],
            answer: 1
        },

        {
            q: "Entrepreneurial finance involves:",
            options: [
                "Calculating national balance of payments",
                "Raising capital, managing business funds, investment decisions, and risk management",
                "Avoiding all risk management tools",
                "Managing large-scale public utilities"
            ],
            answer: 1
        },
        {
            q: "Venture capital is a form of financing provided by investors to:",
            options: [
                "Failing traditional brick-and-mortar storefronts",
                "New and high-growth businesses with strong potential",
                "Government infrastructure parastatals",
                "Informal short-term savings groups"
            ],
            answer: 1
        },
        {
            q: "What is a common disadvantage of taking venture capital?",
            options: [
                "Lack of business mentorship",
                "Loss of partial ownership and investors may influence decisions",
                "Strict obligations to repay loans with fixed high interest monthly",
                "Total isolation from innovative modern markets"
            ],
            answer: 1
        },
        {
            q: "Raising funds by selling shares or ownership interest in a business is called:",
            options: [
                "Debt financing",
                "Equity finance",
                "Microfinance loans",
                "Crowdfunding grants"
            ],
            answer: 1
        },
        {
            q: "What is an advantage of Equity Finance over standard bank credit options?",
            options: [
                "No repayment obligation and reduces debt burden",
                "Retaining 100% complete personal business ownership",
                "Total elimination of internal management conflicts",
                "Guaranteed instant profitability"
            ],
            answer: 0
        },
        {
            q: "Microfinance refers to the provision of small loans and financial services primarily to:",
            options: [
                "Venture Capital syndicates",
                "Low-income entrepreneurs and small businesses",
                "Public stock markets",
                "Angel investors"
            ],
            answer: 1
        },
        {
            q: "Which of the following is cited as an example of a microfinance institution supporting ventures in Nigeria?",
            options: [
                "Amazon retail network",
                "LAPO Microfinance Bank",
                "New York Stock Exchange",
                "Silicon Valley Y-Combinator"
            ],
            answer: 1
        },
        {
            q: "An advantage of using personal savings for a business is:",
            options: [
                "It carries high microfinance group interest.",
                "Full ownership is retained and there is no interest payment.",
                "It entirely removes personal financial exposure risk.",
                "It provides unlimited master capital pools."
            ],
            answer: 1
        },
        {
            q: "What is the objective of a business plan competition?",
            options: [
                "Enforce government taxes on new businesses",
                "Identify viable business ideas and provide seed funding",
                "Force startups into bankruptcy",
                "Restrict cross-industry networking"
            ],
            answer: 1
        },
        {
            q: "Entrepreneurial marketing refers to strategies that are:",
            options: [
                "Heavy on traditional print media",
                "Innovative and low-cost",
                "Reliant entirely on cold calling",
                "Slow to adapt to changing markets"
            ],
            answer: 1
        },
        {
            q: "Guerrilla marketing, content marketing, and influencer marketing are strategies associated with:",
            options: [
                "Production Concept",
                "Entrepreneurial Marketing",
                "Venture Capital acquisition",
                "Traditional Business Communication"
            ],
            answer: 1
        },
        {
            q: "What is a key challenge facing entrepreneurial financing in Nigeria?",
            options: [
                "Oversupply of low-interest long-term credit",
                "Poor access to capital, high interest rates, and inadequate collateral",
                "Lack of local innovative business opportunities",
                "Complete absence of personal savings"
            ],
            answer: 1
        },

        {
            q: "Negotiation is a process where two or more parties discuss issues in order to reach what?",
            options: [
                "A one-sided legal directive",
                "A mutually acceptable agreement",
                "An ongoing workplace conflict",
                "Maximum short-term advertising clicks"
            ],
            answer: 1
        },
        {
            q: "Which strategy occurs when one party attempts to maximize personal gain with little concern for the other?",
            options: [
                "Cooperative Strategy",
                "Competitive Strategy",
                "Compromise Strategy",
                "Avoidance Strategy"
            ],
            answer: 1
        },
        {
            q: "Collaboration, trust building, and a long-term relationship focus are features of which negotiation strategy?",
            options: [
                "Competitive Strategy",
                "Cooperative Strategy",
                "Avoidance Strategy",
                "E-marketing Strategy"
            ],
            answer: 1
        },
        {
            q: "When each party gives up something to reach an agreement, they are using a:",
            options: [
                "Avoidance Strategy",
                "Compromise Strategy",
                "Competitive Strategy",
                "Defensive Strategy"
            ],
            answer: 1
        },
        {
            q: "A party that delays or avoids negotiation due to fear of conflict or lack of preparation is using the:",
            options: [
                "Cooperative model",
                "Competitive method",
                "Avoidance Strategy",
                "Flattened framework"
            ],
            answer: 2
        },
        {
            q: "Using silence to pressure the other party into speaking or conceding is an example of a negotiation:",
            options: ["Tactic", "Flaw", "Resource mobilization", "Contract agreement"],
            answer: 0
        },
        {
            q: "The tactic where one negotiator appears friendly while another appears strict is called:",
            options: ["Bluffing", "Good Cop/Bad Cop", "Deadline Pressure", "Persuasion"],
            answer: 1
        },
        {
            q: "Letters, memos, face-to-face meetings, and telephone calls are examples of:",
            options: [
                "Modern Business Communication Methods",
                "Traditional Business Communication Methods",
                "E-business Extranets",
                "In-app marketing techniques"
            ],
            answer: 1
        },
        {
            q: "An advantage of modern business communication methods like email and video conferencing is:",
            options: [
                "Slower, manual record keeping",
                "Faster communication and wider global reach",
                "Elimination of all cybersecurity threats",
                "Higher operational costs"
            ],
            answer: 1
        },
        {
            q: "What is a common limitation of traditional business communication methods?",
            options: [
                "Heavy dependency on the internet",
                "Slower delivery and expensive in some cases",
                "Cybersecurity risks",
                "Information overload"
            ],
            answer: 1
        },
        {
            q: "Which of the following acts as a barrier to effective communication?",
            options: [
                "Using clear language",
                "Language barriers, poor listening skills, and noise",
                "Employing appropriate communication channels",
                "Fast internet speeds"
            ],
            answer: 1
        }
    ],

    ADC321_RABBIT: [
        { "q": "Which species is the domestic rabbit classified as?", "options": ["Oryctolagus cuniculus", "Lepus europaeus", "Cavia porcellus", "Rattus norvegicus"], "answer": 0 },
        { "q": "What is the common term for a mature male rabbit?", "options": ["Doe", "Buck", "Sire", "Stallion"], "answer": 1 },
        { "q": "What is the term for young or newborn rabbits?", "options": ["Kits", "Pups", "Calves", "Foals"], "answer": 0 },
        { "q": "Which family do rabbits belong to?", "options": ["Canidae", "Leporidae", "Muridae", "Bovidae"], "answer": 1 },
        { "q": "Which breed is described as all white with black tipping on nose, ears, feet and tail?", "options": ["New Zealand White", "California", "Dutch", "Flemish Giant"], "answer": 1 },
        { "q": "Which rabbit breed is most widely used worldwide for meat production?", "options": ["New Zealand White", "California", "American Chinchilla", "Dutch"], "answer": 0 },
        { "q": "Which breed is blue-grey with a white belly and often has a dewlap?", "options": ["Dutch", "American Chinchilla", "Flemish Giant", "New Zealand Red"], "answer": 1 },
        { "q": "Which breed has a wide white band around the shoulders and a white stripe down the face?", "options": ["Dutch", "California", "New Zealand White", "American Chinchilla"], "answer": 0 },
        { "q": "Which breed is usually light grey and not recommended for beginners?", "options": ["Flemish Giant", "Dutch", "California", "New Zealand White"], "answer": 0 },
        { "q": "Approximately how many recognized breeds of domesticated rabbit exist worldwide?", "options": ["Over 10", "Over 20", "Over 40", "Over 100"], "answer": 2 },
        { "q": "Which of the following is NOT a commonly used rabbit term?", "options": ["Buck", "Doe", "Foal", "Kittens"], "answer": 2 },
        { "q": "What is the definition of a breed?", "options": ["A group of animals with similar genetically determined characteristics", "Any animal of the same species", "A group of animals living in the same area", "A group of animals of different species"], "answer": 0 },
        { "q": "Animal breeding primarily aims to do what?", "options": ["Increase feed costs", "Improve desirable heritable qualities", "Reduce reproduction", "Eliminate all variation"], "answer": 1 },
        { "q": "What is mating in rabbits?", "options": ["Pairing of opposite-sex for reproduction", "Feeding schedule", "Housing arrangement", "Vaccination program"], "answer": 0 },
        { "q": "What is kindling?", "options": ["Weaning young rabbits", "The process of giving birth to young rabbits", "A feeding technique", "A grooming method"], "answer": 1 },
        { "q": "Which taxonomic class do rabbits belong to?", "options": ["Aves", "Reptilia", "Mammalia", "Amphibia"], "answer": 2 },
        { "q": "Where did domestic rabbits descend from?", "options": ["North America", "Mediterranean countries", "Australia", "South America"], "answer": 1 },
        { "q": "In which centuries were modern domestic rabbit breeds evolving?", "options": ["15th century", "18th century", "20th century", "21st century"], "answer": 1 },
        { "q": "Which organization introduced more rabbits to western Nigeria in the early 1960s?", "options": ["FAO", "USDA", "WHO", "UNICEF"], "answer": 1 },
        { "q": "Why are rabbits considered a cheap source of protein?", "options": ["They require no feed", "They can be quickly grown and are efficient", "They are wild animals", "They eat only grass"], "answer": 1 },
        { "q": "Which breed has a weight at maturity of about 4.1–5.4 kg according to the table?", "options": ["California", "New Zealand White", "Dutch", "Flemish Giant"], "answer": 1 },
        { "q": "Which breed typically has 48 litters per doe per year in the table?", "options": ["California", "New Zealand White", "American Chinchilla", "Flemish Giant"], "answer": 0 },
        { "q": "Which breed listed has the highest weight at maturity (5.9–7.3 kg)?", "options": ["Dutch", "California", "Flemish Giant", "New Zealand Red"], "answer": 2 },
        { "q": "Which breed is noted for having a ruff or dewlap?", "options": ["New Zealand White", "American Chinchilla", "Dutch", "California"], "answer": 1 },
        { "q": "What is the order name given for rabbits in the notes?", "options": ["Carnivora", "Lagomorpha", "Rodentia", "Artiodactyla"], "answer": 1 },
        { "q": "Which genus is the domestic rabbit placed in?", "options": ["Lepus", "Oryctolagus", "Cavia", "Mus"], "answer": 1 },
        { "q": "Which reproductive organ produces ova in the female rabbit?", "options": ["Testes", "Ovaries", "Uterus", "Vas deferens"], "answer": 1 },
        { "q": "How long is the average gestation period for common commercial rabbit breeds?", "options": ["20 days", "30 days", "45 days", "60 days"], "answer": 1 },
        { "q": "At approximately what age do testicles descend into the scrotum in male rabbits?", "options": ["2-4 weeks", "6-8 weeks", "10-12 weeks", "20-24 weeks"], "answer": 2 },
        { "q": "Why do testicles need to be cooler than body temperature?", "options": ["To prevent infection", "To produce viable sperm", "To increase body weight", "To change fur color"], "answer": 1 },
        { "q": "What tube transports sperm from the testicle to the urino-genital canal?", "options": ["Oviduct", "Vas deferens", "Ureter", "Fallopian tube"], "answer": 1 },
        { "q": "Which selection criterion is important when choosing breeding does?", "options": ["Poor mothering ability", "Good body size and shape", "Small litter size", "Visible illness"], "answer": 1 },
        { "q": "When selecting breeding stock, preference should be given to rabbits from what kind of litters?", "options": ["Small litters", "Largest litters", "Litters with only males", "Litters with only females"], "answer": 1 },
        { "q": "What should be checked in males before selection for breeding?", "options": ["Presence of dewlap", "Two testicles in scrotum", "Color of fur", "Length of ears"], "answer": 1 },
        { "q": "At what age are does on forage-based systems normally ready for mating?", "options": ["2-4 months", "4-6 months", "8-10 months", "12-14 months"], "answer": 2 },
        { "q": "At what age can bucks usually be used for mating?", "options": ["2-3 months", "4-5 months", "6-8 months", "10-12 months"], "answer": 2 },
        { "q": "What is a sensible maximum ratio of does to bucks for safety?", "options": ["20:1", "10:1", "1:1", "50:1"], "answer": 1 },
        { "q": "When is mating usually most successful during the day?", "options": ["Midday", "Early morning or evening", "Late night only", "Afternoon only"], "answer": 1 },
        { "q": "Where should the doe be taken for mating to avoid injury to the buck?", "options": ["Doe's hutch", "Buck's hutch", "Outside pen", "Veterinary clinic"], "answer": 1 },
        { "q": "What behavior indicates a doe is ready to mate?", "options": ["Running away", "Standing still and raising hindquarters", "Hiding in nest", "Aggressive biting"], "answer": 1 },
        { "q": "How is successful mating signaled in rabbits?", "options": ["Buck falls off the doe", "Doe runs away", "Buck vocalizes loudly", "Doe bites the buck"], "answer": 0 },
        { "q": "When can pregnancy first be reliably confirmed by palpation?", "options": ["1-2 days after mating", "8-10 days after mating", "60 days after mating", "Immediately after mating"], "answer": 1 },
        { "q": "At around how many days will the mammary gland develop significantly indicating pregnancy?", "options": ["7 days", "14 days", "28 days", "45 days"], "answer": 2 },
        { "q": "How many days before kindling should a nesting box be provided?", "options": ["1-2 days", "4-5 days", "10-12 days", "20 days"], "answer": 1 },
        { "q": "How are newborn rabbits described at birth?", "options": ["Furred and sighted", "Naked and blind", "Fully mobile", "Able to feed independently"], "answer": 1 },
        { "q": "When does kindling usually occur?", "options": ["During the day", "At night", "Only in winter", "Only in summer"], "answer": 1 },
        { "q": "How long should the doe be left undisturbed after kindling unless problems occur?", "options": ["2-3 hours", "2-3 days", "2-3 weeks", "1 month"], "answer": 1 },
        { "q": "At what age can sexing of rabbits be done reliably?", "options": ["At birth", "From weaning", "At 1 year", "Only after 2 years"], "answer": 1 },
        { "q": "What is the distinguishing feature when sexing a rabbit by opening the sexual aperture?", "options": ["Female shows round opening", "Male shows longitudinal slit", "Female shows longitudinal slit, male round opening", "Both show identical openings"], "answer": 2 },
        { "q": "What external sign indicates a fully grown male rabbit?", "options": ["Protruding testes between hind legs", "Longer ears than female", "Different fur color", "Larger dewlap than female"], "answer": 0 },
        { "q": "What is the recommended method of weaning?", "options": ["Remove the litter from the doe", "Remove the doe from the litter", "Gradually separate over weeks", "Wean at 2 days old"], "answer": 1 },
        { "q": "At what age should weaning typically occur?", "options": ["1-2 weeks", "4-8 weeks", "12-16 weeks", "20-24 weeks"], "answer": 1 },
        { "q": "Why is weekly weighing recommended after weaning for the doe?", "options": ["To check for pregnancy", "To ensure she regains body reserves", "To change fur color", "To determine age"], "answer": 1 },
        { "q": "Until what age can does usually continue breeding?", "options": ["6 months", "1 year", "3-4 years", "10 years"], "answer": 2 },
        { "q": "What is the typical litter size for rabbits as stated in the notes?", "options": ["1-2 kits", "3-4 kits", "6-8 kits", "10-12 kits"], "answer": 2 },
        { "q": "What is the typical kindling interval mentioned?", "options": ["1 week", "2 months", "6 months", "1 year"], "answer": 1 },
        { "q": "What is pseudo pregnancy in rabbits often caused by?", "options": ["Sterile copulation", "Viral infection", "Poor nutrition", "Genetic defect"], "answer": 0 },
        { "q": "How long may pseudo pregnancy last in rabbits?", "options": ["3-4 days", "16-17 days", "30-31 days", "60 days"], "answer": 1 },
        { "q": "Which method is described as the most reliable for pregnancy diagnosis when done by an experienced person?", "options": ["Test mating", "Weight gain method", "Palpation technique", "Ultrasound"], "answer": 2 },
        { "q": "Ovulation in rabbits occurs how long after copulation?", "options": ["Immediately", "10-13 hours", "48 hours", "7 days"], "answer": 1 },
        { "q": "What term describes rabbits that have no definite oestrus cycle but show rhythms in receptivity?", "options": ["Monoestrous", "Polyoestrous", "Seasonal breeders", "Induced ovulators"], "answer": 1 },
        { "q": "How long does the cycle last, with some days infertile, according to the notes?", "options": ["About 5 days", "About 12 days", "About 30 days", "About 60 days"], "answer": 1 },
        { "q": "Which sign is NOT listed as an indicator of heat in does?", "options": ["Congested, purple and moist vulva", "Restlessness", "Rubbing the chin on cage sides", "Complete loss of appetite"], "answer": 3 },
        { "q": "What is the recommended ratio of breeding males to females?", "options": ["1 male for 2 females", "1 male for 10 females", "1 male for 20 females", "1 male for 50 females"], "answer": 1 },
        { "q": "At what age are small breeds typically first bred?", "options": ["2 months", "4 months", "8 months", "12 months"], "answer": 1 },
        { "q": "At what age are medium breeds typically first bred?", "options": ["2 months", "4 months", "5-6 months", "10 months"], "answer": 2 },
        { "q": "Which of these is a characteristic of reproduction in rabbits?", "options": ["Monoestrous cycle", "Polyoestrous with about 12-day rhythm", "No hormonal control", "Seasonal only"], "answer": 1 },
        { "q": "Which of the following is a sign of heat behavior in does?", "options": ["Lifting the tail and lying in mating posture", "Sleeping more", "Eating less", "Growing thicker fur"], "answer": 0 },
        { "q": "What is the recommended action if the buck slides backwards off the doe during mating?", "options": ["Consider mating unsuccessful", "Assume mating successful", "Separate them permanently", "Change the buck"], "answer": 0 },
        { "q": "Which method can be used to detect pregnancy by feeling small marble-like bodies?", "options": ["Ultrasound", "Palpation technique", "Blood test", "Visual inspection"], "answer": 1 },
        { "q": "By which day can an experienced person determine pregnancy using palpation?", "options": ["2-4 days", "8-10 days", "20-22 days", "40 days"], "answer": 1 },
        { "q": "What should be placed inside the cage during the last week of pregnancy?", "options": ["Extra feed only", "A nest box lined with wood shavings or hay", "A heat lamp", "A mirror"], "answer": 1 },
        { "q": "What is the recommended practice after kindling if the doe has not covered the litter properly?", "options": ["Leave them exposed", "Use cotton wool to cover the litter", "Remove the kits immediately", "Wean them early"], "answer": 1 },
        { "q": "Which breed in the table has the shortest listed weight at maturity?", "options": ["Dutch (2.5-3.5 kg)", "California (3.5-5.0 kg)", "New Zealand White (4.1-5.4 kg)", "Flemish Giant (5.9-7.3 kg)"], "answer": 0 },
        { "q": "Which breed in the table has the fewest litters per doe per year?", "options": ["Flemish Giant (36)", "California (48)", "New Zealand White (50)", "Dutch (45-48)"], "answer": 0 },
        { "q": "Which breed is described as essentially a red New Zealand white type?", "options": ["New Zealand Red", "California", "Dutch", "American Chinchilla"], "answer": 0 },
        { "q": "Which of the following is NOT listed as a use for rabbits in the introduction?", "options": ["Meat production", "Laboratory animals", "Teaching tool", "Draft power for ploughing"], "answer": 3 },
        { "q": "What transports hormones to their target organs in the body?", "options": ["Nervous system", "Blood circulation system", "Lymphatic system", "Digestive tract"], "answer": 1 },
        { "q": "Which gland type produces hormones that control reproduction?", "options": ["Endocrine glands", "Exocrine glands", "Sebaceous glands", "Salivary glands"], "answer": 0 },
        { "q": "What is the recommended action if selecting breeding stock from more than one litter?", "options": ["Select the youngest only", "Select the heaviest but account for age differences", "Select the lightest", "Select randomly"], "answer": 1 },
        { "q": "Why should early morning or evening be preferred for mating?", "options": ["To avoid the hottest periods of the day", "Because rabbits are nocturnal only", "Because feed is available then", "To match human schedules"], "answer": 0 },
        { "q": "What is the effect of stressors like dogs and noise on pregnant does?", "options": ["They improve pregnancy", "They can harm pregnancy and should be avoided", "They have no effect", "They increase litter size"], "answer": 1 },
        { "q": "What is the typical action of a doe when preparing a nest before kindling?", "options": ["She brings in straw and plucks fur to line the nest", "She digs a hole outside", "She eats more feed only", "She stops moving"], "answer": 0 },
        { "q": "Which of the following is a correct statement about rabbit reproduction from the notes?", "options": ["Gestation is typically 60 days", "Gestation averages about 30 days in common commercial breeds", "Rabbits give birth to fully furred and sighted young", "Rabbits are monotocous"], "answer": 1 },
        { "q": "What is the best method to check that a doe is regaining body reserves after weaning?", "options": ["Visual inspection only", "Weekly weighing", "Checking fur color", "Measuring ear length"], "answer": 1 },
        { "q": "Which of these is a recommended practice for new keepers after initial mating?", "options": ["Never return the doe for a second mating", "Return the doe after an hour or so for a second mating", "Always separate the buck permanently", "Use only one mating per season"], "answer": 1 },
        { "q": "Which of the following breeds is noted as not intensively selected for growth rate?", "options": ["New Zealand Red", "New Zealand White", "California", "Flemish Giant"], "answer": 0 },
        { "q": "Which of the following is a correct pairing from the notes: 'Buck' corresponds to which sex?", "options": ["Female", "Male", "Young", "Old"], "answer": 1 }
    ],

    ADC321_SNAIL: [
        {
            "q": "What is Heliciculture?",
            "options": ["The process of raising aquatic plants", "The process of raising edible land snails", "The study of helicopters", "The farming of higher livestock like cattle"],
            "answer": 1
        },
        {
            "q": "Which of the following is NOT a main product of snail farming?",
            "options": ["Snail meat", "Caviar", "Snail secretion", "Snail wool"],
            "answer": 3
        },
        {
            "q": "Who is credited with mentioning the Lumaca romana (Roman snail) culturing method in 49 BC?",
            "options": ["Julius Caesar", "Fulivus Lippinus", "Aristotle", "Pliny the Elder"],
            "answer": 1
        },
        {
            "q": "Which of these is the scientific name for the Roman or Burgundy snail?",
            "options": ["Achatina fulica", "Cornu aspersum", "Helix pomatia", "Archachatina marginata"],
            "answer": 2
        },
        {
            "q": "What is the common name for Cornu aspersum?",
            "options": ["Brown garden snail", "Giant African land snail", "Roman snail", "Burgundy snail"],
            "answer": 0
        },
        {
            "q": "In tropical climates, snail farming is typically done with which species?",
            "options": ["Brown garden snails", "Giant African land snails", "Burgundy snails", "Roman snails"],
            "answer": 1
        },
        {
            "q": "Which of the following is a species of Giant African Land Snail?",
            "options": ["Achatina achatina", "Helix pomatia", "Cornu aspersum", "Helix aspersa"],
            "answer": 0
        },
        {
            "q": "What makes snail farming an attractive agribusiness according to the text?",
            "options": ["It requires massive startup capital", "It is high-risk", "Start-up capital is small and it is lucrative", "It requires extensive daily labor"],
            "answer": 2
        },
        {
            "q": "Why is snail farming considered one of the most neglected agribusinesses?",
            "options": ["Due to disease outbreaks", "Due to ignorance", "Due to extreme weather", "Due to lack of space"],
            "answer": 1
        },
        {
            "q": "How is the snail categorized in terms of international trade?",
            "options": ["It is an export commodity and foreign exchange earner", "It is strictly for local consumption", "It is banned from international trade", "It has no commercial value"],
            "answer": 0
        },
        {
            "q": "What was the estimated market size of snails in 2022?",
            "options": ["USD 100 million", "USD 593.4 million", "USD 1.58 billion", "USD 4 million"],
            "answer": 1
        },
        {
            "q": "What is the projected market size for snails by 2032?",
            "options": ["USD 593.4 million", "USD 1.58 billion", "USD 68.3 million", "USD 15 billion"],
            "answer": 1
        },
        {
            "q": "What was the total global import value of snails estimated to be in 2021?",
            "options": ["$4 million", "$15 million", "$68.3 million", "$593.4 million"],
            "answer": 2
        },
        {
            "q": "Which country was the top importer of snails in 2021?",
            "options": ["United States", "Spain", "France", "Nigeria"],
            "answer": 2
        },
        {
            "q": "What percentage of global snail import value did France account for in 2021?",
            "options": ["15.4%", "19.3%", "25.4%", "30.1%"],
            "answer": 2
        },
        {
            "q": "What percentage of global snail import value did Spain account for in 2021?",
            "options": ["19.3%", "25.4%", "35.2%", "12.5%"],
            "answer": 0
        },
        {
            "q": "What is the annual demand for snail meat in Nigeria?",
            "options": ["4 million kg", "7.5 million kg", "15 million kg", "1.58 billion kg"],
            "answer": 1
        },
        {
            "q": "How much does the United States import in snails annually?",
            "options": ["More than $1 million", "More than $4 million", "More than $10 million", "More than $68 million"],
            "answer": 1
        },
        {
            "q": "How many metric tons of snails does France require annually?",
            "options": ["5,000", "10,000", "15,000", "20,000"],
            "answer": 2
        },
        {
            "q": "Based on 2024 data, what is the price range for Baby Snails?",
            "options": ["₦80 - ₦100", "₦150 - ₦200", "₦200 - ₦500", "₦600 - ₦800"],
            "answer": 1
        },
        {
            "q": "What is the 2024 price range for Grower Snails?",
            "options": ["₦150 - ₦200", "₦200 - ₦500", "₦600 - ₦800", "₦800 - ₦1200"],
            "answer": 1
        },
        {
            "q": "In 2024, how much do Point of Lay Snails cost?",
            "options": ["₦150 - ₦200", "₦200 - ₦500", "₦600 - ₦800", "₦900 - ₦1200"],
            "answer": 2
        },
        {
            "q": "What is the price of Breeder Snails according to the 2024 data?",
            "options": ["₦200 - ₦500", "₦600 - ₦800", "₦800 - ₦1200", "₦900 - ₦1200"],
            "answer": 3
        },
        {
            "q": "How much do Table sized Snails cost?",
            "options": ["₦600 - ₦800", "₦800 - ₦1200", "₦2,000", "₦2,500"],
            "answer": 1
        },
        {
            "q": "What is the price for Jumbo Snails?",
            "options": ["₦800", "₦1,200", "₦2,000", "₦2,500"],
            "answer": 2
        },
        {
            "q": "What is the price for Extra Large Snails?",
            "options": ["₦1,500", "₦2,000", "₦2,500", "₦3,000"],
            "answer": 2
        },
        {
            "q": "What is the price range for Snail Eggs?",
            "options": ["₦50 - ₦70", "₦80 - ₦100", "₦150 - ₦200", "₦200 - ₦250"],
            "answer": 1
        },
        {
            "q": "Why is the process of collecting snails in nature declining?",
            "options": ["Wild snails have become poisonous", "The availability of snails in the wild has become more and more limited", "It is illegal globally", "Wild snails are too small"],
            "answer": 1
        },
        {
            "q": "What is the reproductive nature of snails?",
            "options": ["Asexual", "Parthenogenetic", "Hermaphroditic", "Dioecious"],
            "answer": 2
        },
        {
            "q": "How many times a year can one snail lay eggs?",
            "options": ["2 times", "4 times", "6 times", "10 times"],
            "answer": 2
        },
        {
            "q": "Generally, how many eggs do they lay each time?",
            "options": ["10 to 20 eggs", "40 to 60 eggs", "80 to 100 eggs", "500 to 1000 eggs"],
            "answer": 2
        },
        {
            "q": "What is the protein content percentage in snail meat?",
            "options": ["5-8%", "12-16%", "20-25%", "30-35%"],
            "answer": 1
        },
        {
            "q": "How much iron does snail meat contain?",
            "options": ["10-15 mg/kg", "25-30 mg/kg", "45-50 mg/kg", "60-75 mg/kg"],
            "answer": 2
        },
        {
            "q": "Which of the following is true regarding the cholesterol and fat content of snail meat?",
            "options": ["High in both", "High cholesterol, low fat", "Low cholesterol, low fat", "Low cholesterol, high fat"],
            "answer": 2
        },
        {
            "q": "Snail meat is similar in taste and texture to what type of food?",
            "options": ["Poultry", "Beef", "Pork", "Seafood"],
            "answer": 3
        },
        {
            "q": "Unlike typical seafood, snail meat is characteristically what?",
            "options": ["Salty", "Organic", "Tough", "High in sodium"],
            "answer": 1
        },
        {
            "q": "For which specific medical condition does the text explicitly mention snails can be helpful?",
            "options": ["Diabetes", "Asthma", "Arthritis", "Tuberculosis"],
            "answer": 1
        },
        {
            "q": "Which snail species is noted for providing skin creams used in the cosmetic industry?",
            "options": ["Helix Aspersa", "Achatina achatina", "Archachatina marginata", "Achatina fulica"],
            "answer": 0
        },
        {
            "q": "What is the secretion from Helix Aspersa under stress specifically used for?",
            "options": ["Making caviar", "Regeneration of wounded tissue", "Flavoring food", "Pest control"],
            "answer": 1
        },
        {
            "q": "What part of the snail's body is considered usable?",
            "options": ["Only the meat", "Only the shell and meat", "Every part of the body", "Only the slime"],
            "answer": 2
        },
        {
            "q": "Which of the following environmental factors is NOT associated with snail farming?",
            "options": ["Stress", "Noise", "Odor", "All of the above are NOT associated with snail farming"],
            "answer": 3
        },
        {
            "q": "What is the crucial first step before starting a snail farm?",
            "options": ["Buying the snails", "Creating a snail farming business plan", "Constructing the snailery", "Harvesting crops"],
            "answer": 1
        },
        {
            "q": "When is the best time to start up a snail farming business?",
            "options": ["During the dry season", "From March to May", "The rainy season, especially from July to October", "During the winter"],
            "answer": 2
        },
        {
            "q": "During which months do prices of snails typically multiply due to scarcity?",
            "options": ["July and August", "March and December", "January and February", "September and October"],
            "answer": 1
        },
        {
            "q": "What characterizes an extensive snail farming system?",
            "options": ["Closed and climate controlled", "Free-range and outdoors", "Indoors with artificial lighting", "Hydroponic setups"],
            "answer": 1
        },
        {
            "q": "What characterizes an intensive snail farming system?",
            "options": ["Free-range and outdoors", "Combined indoor and outdoor", "Closed and climate controlled", "Temporary enclosures"],
            "answer": 2
        },
        {
            "q": "In a semi-intensive system, how long are hatchlings allowed to stay in closed environments before being moved to free range?",
            "options": ["10 - 20 days", "42 - 56 days", "3 - 6 months", "1 - 2 years"],
            "answer": 1
        },
        {
            "q": "What is the suitable rearing density for hatchlings?",
            "options": ["> 100/m2", "50-70/m2", "20-40/m2", "7-10/m2"],
            "answer": 0
        },
        {
            "q": "What is the suitable rearing density for matured snails?",
            "options": ["> 100/m2", "50-70/m2", "20-40/m2", "7-10/m2"],
            "answer": 3
        },
        {
            "q": "What is the ideal temperature range for a snailery?",
            "options": ["15-20 °C", "25-30 °C", "35-40 °C", "10-15 °C"],
            "answer": 1
        },
        {
            "q": "What is the recommended day-length photoperiod for a snailery?",
            "options": ["8/16-hour", "10/14-hour", "12/12-hour", "24-hour darkness"],
            "answer": 2
        },
        {
            "q": "What is the recommended relative humidity for a snailery?",
            "options": ["30-40%", "50-60%", "75-95%", "100%"],
            "answer": 2
        },
        {
            "q": "What technique can be used to source snails directly from the forest?",
            "options": ["Playing loud noises to scare them out", "Clearing land and dropping fruits like pawpaw and plantain", "Using chemical attractants", "Digging deep trenches"],
            "answer": 1
        },
        {
            "q": "When using the forest sourcing technique, what time should the fruits be dropped?",
            "options": ["6/7am", "12/1pm", "4/5pm", "10/11pm"],
            "answer": 2
        },
        {
            "q": "When should you return to pick up the snails in the forest sourcing technique?",
            "options": ["5/6pm", "7/8pm", "Midnight", "The next morning"],
            "answer": 1
        },
        {
            "q": "What terms describe the feeding times of snails?",
            "options": ["Diurnal and crepuscular", "Nocturnal and crepuscular", "Diurnal and matutinal", "Nocturnal only"],
            "answer": 1
        },
        {
            "q": "Under what condition might snails feed during the day?",
            "options": ["When the sun is brightest", "When it rains or the cloud is dark", "When the temperature is over 35 °C", "When humidity drops below 50%"],
            "answer": 1
        },
        {
            "q": "Which of these is considered a suitable leaf for feeding snails?",
            "options": ["High cyanide cassava", "Pawpaw", "Poison ivy", "Eucalyptus"],
            "answer": 1
        },
        {
            "q": "Which of the following fruits is NOT explicitly listed as a feed option for snails?",
            "options": ["Avocado pear", "Sweet orange", "Lemon", "Cucumber"],
            "answer": 2
        },
        {
            "q": "What type of cassava leaves are suitable for snails?",
            "options": ["Low cyanide variety", "High cyanide variety", "Dried leaves only", "Fermented leaves only"],
            "answer": 0
        },
        {
            "q": "Which industrial waste can be fed to snails?",
            "options": ["Spent grains", "Plastic waste", "Metal shavings", "Used engine oil"],
            "answer": 0
        },
        {
            "q": "What common ingredient in household waste is extremely dangerous to snails?",
            "options": ["Sugar", "Salt (sodium chloride)", "Vinegar", "Baking soda"],
            "answer": 1
        },
        {
            "q": "What percentage of a compounded snail concentrate ration should be carbohydrate?",
            "options": ["11%", "24%", "41%", "47%"],
            "answer": 3
        },
        {
            "q": "What percentage of a compounded snail concentrate ration should be protein?",
            "options": ["11%", "24%", "41%", "47%"],
            "answer": 2
        },
        {
            "q": "What percentage of a compounded snail concentrate ration should be fats?",
            "options": ["0.4%", "0.6%", "11%", "24%"],
            "answer": 2
        },
        {
            "q": "What percentage of a compounded snail concentrate ration should be minerals (calcium)?",
            "options": ["0.4%", "0.6%", "11%", "41%"],
            "answer": 1
        },
        {
            "q": "What percentage of a compounded snail concentrate ration should be vitamins?",
            "options": ["0.4%", "0.6%", "1.0%", "5.0%"],
            "answer": 0
        },
        {
            "q": "Why do snails require a lot of calcium supplements?",
            "options": ["For better eyesight", "For growth and eggs production", "To improve the taste of their meat", "To speed up their movement"],
            "answer": 1
        },
        {
            "q": "Which of these is an appropriate source of calcium for snails?",
            "options": ["Ground oyster shell", "Table salt", "Baking soda", "Vitamin C tablets"],
            "answer": 0
        },
        {
            "q": "What kind of water should be avoided for snails?",
            "options": ["Rain water", "River water", "Well water", "Chlorinated water"],
            "answer": 3
        },
        {
            "q": "Which of the following is considered an enemy to snails?",
            "options": ["Earthworms", "Soldier ants", "Honey bees", "Butterflies"],
            "answer": 1
        },
        {
            "q": "What is a serious cause of mortality and diseases like fungus in snail pens?",
            "options": ["High temperatures", "Overcrowding", "Too much ventilation", "Loud noises"],
            "answer": 1
        },
        {
            "q": "What environmental condition causes snails to hibernate?",
            "options": ["Drought", "Floods", "High humidity", "Full moon"],
            "answer": 0
        },
        {
            "q": "How long can desert snails hibernate during a drought?",
            "options": ["Up to 6 months", "Up to 1 year", "Up to 2 years", "Up to 5 years"],
            "answer": 2
        },
        {
            "q": "What negative effect does high wind acceleration have on a snail farm?",
            "options": ["It blows the snails away", "It affects the moisture content and dries the soil", "It cracks their shells", "It causes them to stop laying eggs"],
            "answer": 1
        },
        {
            "q": "What is an ideal remedy to protect a snailery from high wind and scorching sun?",
            "options": ["Installing electric fans", "Planting trees around snail pens", "Building concrete domes", "Painting the pens white"],
            "answer": 1
        },
        {
            "q": "What should the moisture state of the soil environment be?",
            "options": ["Completely dry", "Moist always but not waterlogged", "Flooded with water", "Slightly damp only in the mornings"],
            "answer": 1
        },
        {
            "q": "How many eggs can the highly prolific Achatina achatina lay in one batch?",
            "options": ["50 - 100 eggs", "100 - 150 eggs", "200 - 400 eggs", "500 - 1000 eggs"],
            "answer": 2
        },
        {
            "q": "How many times a year does the Achatina achatina lay eggs?",
            "options": ["Once a year", "Two-three times a year", "Six times a year", "Every month"],
            "answer": 1
        },
        {
            "q": "Do Giant African land snails reproduce on their own since they are hermaphrodites?",
            "options": ["Yes, they can self-fertilize", "No, they need another snail to reproduce", "Yes, but only in the dry season", "No, they need a specific male snail"],
            "answer": 1
        },
        {
            "q": "What should the base of an egg incubation box be before adding soil?",
            "options": ["Solid wood", "Perforated", "Lined with plastic", "Heated"],
            "answer": 1
        },
        {
            "q": "What material is recommended for the lid of an egg incubation container?",
            "options": ["Solid glass", "Corrugated iron", "Mosquito netting", "Thick cardboard"],
            "answer": 2
        },
        {
            "q": "How deep should the holes for placing collected eggs be dug?",
            "options": ["1-2cm", "3-5cm", "10-20cm", "50cm"],
            "answer": 1
        },
        {
            "q": "How frequently should incubating eggs be watered?",
            "options": ["Every hour", "Every other day", "Once a week", "Never"],
            "answer": 1
        },
        {
            "q": "In a natural setting, how deep do snails dig holes to lay their eggs at night?",
            "options": ["1-3cm", "5-15cm", "20-30cm", "30-50cm"],
            "answer": 1
        },
        {
            "q": "How long does it take for snail eggs to hatch?",
            "options": ["1 to 5 days", "10 to 30 days", "40 to 60 days", "6 to 8 months"],
            "answer": 1
        },
        {
            "q": "What do hatchlings feed on before they come out of the soil?",
            "options": ["Plant roots", "Dirt", "Their egg shells", "Microorganisms"],
            "answer": 2
        },
        {
            "q": "How long should hatchlings remain in the soil after hatching?",
            "options": ["1-2 days", "3-5 days", "10-15 days", "1 month"],
            "answer": 1
        },
        {
            "q": "How long does it generally take for a snail to reach sexual maturity?",
            "options": ["1 to 3 months", "6 to 16 months", "2 years", "5 years"],
            "answer": 1
        },
        {
            "q": "How long does it take for a snail to be ready for harvesting?",
            "options": ["6 months", "Up to 2 years", "4 years", "6 weeks"],
            "answer": 1
        },
        {
            "q": "What is the maximum recorded lifespan for some snails?",
            "options": ["5 years", "10 years", "15 years", "25 years"],
            "answer": 3
        },
        {
            "q": "How can a farmer identify a fully matured, big snail?",
            "options": ["By the thickness of the rim of the shell", "By the color of its eyes", "By the speed it moves", "By the length of its tentacles"],
            "answer": 0
        },
        {
            "q": "Why is it advised not to harvest all matured snails at once?",
            "options": ["It crashes the market price", "Some need to be kept as breeding stock for continuity", "The older ones taste bad", "It takes too much time"],
            "answer": 1
        },
        {
            "q": "What is the estimated minimum start-up capital mentioned for a snail farm?",
            "options": ["N5,000", "N20,000", "N100,000", "N500,000"],
            "answer": 1
        },
        {
            "q": "According to the financial projection, how much could a farmer make per annum by producing 1,000,000 snails?",
            "options": ["N2,500,000", "N10,000,000", "N25,000,000", "N100,000,000"],
            "answer": 2
        },
        {
            "q": "Which of these animals is NOT listed as a snail enemy?",
            "options": ["Frogs", "Earthworms", "Toads", "Rats"],
            "answer": 1
        },
        {
            "q": "Which of the following tubers can be fed raw to snails?",
            "options": ["White yam", "Sweet potato", "Bitter yam", "Cassava"],
            "answer": 1
        },
        {
            "q": "Which of these flowers is suitable for feeding snails?",
            "options": ["Rose", "Sunflower", "Hibiscus", "Orchid"],
            "answer": 1
        },
        {
            "q": "What insect larvae are specifically mentioned as enemies of snails?",
            "options": ["Mosquito larvae", "Butterfly caterpillars", "Larvae of some beetles", "Fly maggots"],
            "answer": 2
        },
        {
            "q": "Which of these higher livestock has global agricultural systems heavily focused on, overshadowing animals like snails?",
            "options": ["Shrimps", "Insects", "Cattle", "Earthworms"],
            "answer": 2
        }
    ],

    GST321: [
        {
            "q": "According to the notes, what is conflict?",
            "options": [
                "A physical war between two sovereign states.",
                "A disagreement or struggle arising from differences in interests, beliefs, needs, values, or goals.",
                "An agreement reached by two conflicting parties.",
                "The absence of justice and equity in society."
            ],
            "answer": 1
        },
        {
            "q": "When does conflict become dangerous in a society?",
            "options": [
                "When it involves individuals rather than nations.",
                "When it leads to dialogue and compromise.",
                "When it leads to violence, destruction, hatred, or war.",
                "When it occurs in schools and workplaces."
            ],
            "answer": 2
        },
        {
            "q": "What do non-military means of conflict resolution refer to?",
            "options": [
                "Peaceful methods used to settle disputes without the use of armed force.",
                "Deploying national armed forces to maintain ceasefires.",
                "Using coercive measures to relapse a conflict situation.",
                "Providing security across a conflict zone using troops."
            ],
            "answer": 0
        },
        {
            "q": "Which of the following is considered a 'soft-option' approach to conflict resolution?",
            "options": [
                "Peace enforcement",
                "Peacekeeping",
                "Non-military means",
                "Militancy"
            ],
            "answer": 2
        },
        {
            "q": "What is the primary goal of negotiation in dispute settlement?",
            "options": [
                "To allow a neutral third party to impose a binding decision.",
                "To engage in direct dialogue to reach a mutually beneficial agreement.",
                "To divide a fixed amount of resources into a win-lose situation.",
                "To suppress the weaker party’s demands."
            ],
            "answer": 1
        },
        {
            "q": "What is the first stage of the negotiation process?",
            "options": [
                "Engaging in Dialogue",
                "Conflict Resolution Strategies",
                "Preparation and Planning",
                "Reconciliation"
            ],
            "answer": 2
        },
        {
            "q": "What is the focus of interest-based negotiation?",
            "options": [
                "Addressing the stated positions of the parties.",
                "Imposing a decision through a neutral judge.",
                "Understanding the underlying interests of all parties involved.",
                "Dividing a fixed amount of resources equally."
            ],
            "answer": 2
        },
        {
            "q": "In which conflict resolution method does a neutral third party facilitate communication but NOT impose a decision?",
            "options": [
                "Arbitration",
                "Litigation",
                "Mediation",
                "Peace enforcement"
            ],
            "answer": 2
        },
        {
            "q": "Which mediation technique involves changing the way an issue or statement is presented to promote constructive thinking?",
            "options": [
                "Active listening",
                "Brainstorming",
                "Reframing",
                "Bargaining"
            ],
            "answer": 2
        },
        {
            "q": "What is 'active listening' in the context of mediation?",
            "options": [
                "Generating multiple ideas without criticism.",
                "Changing the way a problem is viewed.",
                "Giving full attention, asking clarifying questions, and summarizing.",
                "Dividing a fixed amount of resources."
            ],
            "answer": 2
        },
        {
            "q": "What does distributive bargaining seek to achieve?",
            "options": [
                "A win-win situation.",
                "A win-lose situation by dividing up a fixed amount of resources.",
                "A compromise that benefits everyone.",
                "A collaborative problem-solving environment."
            ],
            "answer": 1
        },
        {
            "q": "How does arbitration differ from mediation?",
            "options": [
                "Arbitration involves a neutral third party who renders a binding decision.",
                "Arbitration allows the parties to retain full control over the outcome.",
                "Arbitration is only used in family and community settings.",
                "Arbitration encourages creative brainstorming without criticism."
            ],
            "answer": 0
        },
        {
            "q": "What characterizes international arbitration?",
            "options": [
                "It only occurs within a single country.",
                "It is solely governed by local employment laws.",
                "It involves parties from different countries and facilitates international trade.",
                "It is primarily used for domestic property issues."
            ],
            "answer": 2
        },
        {
            "q": "How did Desmond Tutu describe reconciliation?",
            "options": [
                "As a highly structured legal process.",
                "As the most natural thing in the world.",
                "As a win-lose bargaining situation.",
                "As an inevitable outcome of litigation."
            ],
            "answer": 1
        },
        {
            "q": "According to Martin Leiner, what is the overarching focus of reconciliation?",
            "options": [
                "Rebuilding relationships.",
                "Dividing physical territory.",
                "Enforcing peace through military power.",
                "Securing economic dominance."
            ],
            "answer": 0
        },
        {
            "q": "What defines terrorism?",
            "options": [
                "A group rising up against the government to seize power.",
                "The use of violence against civilians to achieve political, ideological, or religious goals.",
                "Violent conflict fought between groups within the same country over territory.",
                "Aggressive methods to oppose government authority over oil pipelines."
            ],
            "answer": 1
        },
        {
            "q": "Which of the following is cited as a cause of terrorism?",
            "options": [
                "High levels of quality education.",
                "Religious tolerance.",
                "Poverty, unemployment, and religious extremism.",
                "Equitable distribution of national resources."
            ],
            "answer": 2
        },
        {
            "q": "How is insurgency defined?",
            "options": [
                "A group rising up against the government or ruling power to seize power.",
                "Two sovereign countries going to war over a border.",
                "A bombing attack in a crowded market to create fear among civilians.",
                "A structured legal process to settle domestic disputes."
            ],
            "answer": 0
        },
        {
            "q": "Which is an example of insurgency mentioned in the notes?",
            "options": [
                "Militant groups in the Niger Delta attacking pipelines.",
                "The Nigerian Civil War between the government and Biafra.",
                "Boko Haram fighting against the Nigerian government to take control of areas.",
                "The Russia-Ukraine War."
            ],
            "answer": 2
        },
        {
            "q": "What is a civil war?",
            "options": [
                "A conflict between two entirely different countries.",
                "A violent conflict fought between groups within the same country.",
                "The use of aggressive methods by individuals to challenge local authorities.",
                "A disagreement between employers and employees over trade agreements."
            ],
            "answer": 1
        },
        {
            "q": "Which strategy is recommended for the prevention of civil war?",
            "options": [
                "Political oppression and dictatorship.",
                "Political inclusion and economic development.",
                "Increasing poverty and unemployment.",
                "Bypassing transparent elections."
            ],
            "answer": 1
        },
        {
            "q": "What is militancy?",
            "options": [
                "The peaceful negotiation of trade deals.",
                "A neutral third party deciding a legal case.",
                "The use of aggressive, often violent methods to advance a cause against established authority.",
                "A domestic arbitration process."
            ],
            "answer": 2
        },
        {
            "q": "Which example is used to illustrate militancy in the notes?",
            "options": [
                "Boko Haram taking control of territories.",
                "The Nigerian government fighting Biafra.",
                "Militant groups in the Niger Delta attacking oil pipelines.",
                "Farmer-herder crises in the Middle Belt."
            ],
            "answer": 2
        },
        {
            "q": "What is a major cause of Ethnic-Religious Conflict?",
            "options": [
                "Historical mistrust, competition for resources, and perceived threats to identity.",
                "Shared goals and collaborative problem solving.",
                "Equitable distribution of power.",
                "High levels of religious tolerance."
            ],
            "answer": 0
        },
        {
            "q": "Who stated that 'The life of man is solitary, poor, nasty, brutish, and short'?",
            "options": [
                "Karl Marx",
                "Thomas Hobbes",
                "Lewis Coser",
                "Johan Galtung"
            ],
            "answer": 1
        },
        {
            "q": "According to Karl Marx, what drives conflict?",
            "options": [
                "Human nature without order.",
                "Injustice anywhere in the world.",
                "Competing interests and class divisions.",
                "A lack of communication skills."
            ],
            "answer": 2
        },
        {
            "q": "What was Ronald Reagan’s core idea regarding peace and conflict?",
            "options": [
                "Conflict is inherently negative and must be eliminated.",
                "Peace is the ability to handle conflict by peaceful means, not its absence.",
                "Conflict only arises from class divisions.",
                "Violence is the inevitable outcome of conflict."
            ],
            "answer": 1
        },
        {
            "q": "Who famously said 'Injustice anywhere is a threat to justice everywhere'?",
            "options": [
                "Johan Galtung",
                "John Burton",
                "Martin Luther King Jr.",
                "Desmond Tutu"
            ],
            "answer": 2
        },
        {
            "q": "According to the Uppsala Conflict Data Program (UCDP), an armed conflict requires at least how many battle-related deaths in a calendar year?",
            "options": [
                "10",
                "25",
                "100",
                "1000"
            ],
            "answer": 1
        },
        {
            "q": "What is the 'Pre-Conflict' stage of the Conflict Cycle?",
            "options": [
                "Open violence and confrontation.",
                "Ceasefire, victory, or stalemate.",
                "Reconstruction, trauma, and reconciliation.",
                "Latent tensions, underlying grievances, and unmet needs."
            ],
            "answer": 3
        },
        {
            "q": "Which stage of the Conflict Cycle involves polarization, mobilization, and hardening of positions?",
            "options": [
                "Pre-Conflict",
                "Escalation",
                "Outcome",
                "Post-Conflict"
            ],
            "answer": 1
        },
        {
            "q": "Why is the Post-Conflict stage considered the most critical in the Conflict Cycle?",
            "options": [
                "It is when open violence is at its peak.",
                "It is when underlying tensions first appear.",
                "If grievances remain unresolved, the cycle returns to pre-conflict.",
                "It completely eliminates the possibility of future conflict."
            ],
            "answer": 2
        },
        {
            "q": "What did Paul Collier argue about civil wars?",
            "options": [
                "Countries that have had a civil war are far more likely to have another.",
                "Civil wars never end in a stalemate.",
                "A civil war completely destroys the possibility of future conflicts.",
                "Civil wars are easily resolved through domestic arbitration."
            ],
            "answer": 0
        },
        {
            "q": "According to Kenneth Boulding (1962), conflict situations arise when actors:",
            "options": [
                "Share identical values and beliefs.",
                "Perceive incompatibility between their goals and interests.",
                "Engage in cooperative behavior.",
                "Have all their fundamental human needs satisfied."
            ],
            "answer": 1
        },
        {
            "q": "What is the difference between a 'Conflict Situation' and 'Conflict'?",
            "options": [
                "A conflict situation is open violence, while conflict is latent tension.",
                "They are identical terms.",
                "A conflict situation is the atmosphere of tension, while conflict is the actual confrontation.",
                "Conflict situation only happens in interstate wars."
            ],
            "answer": 2
        },
        {
            "q": "Which conflict behaviour type represents a 'win-lose' approach?",
            "options": [
                "Avoidance",
                "Accommodation",
                "Competition",
                "Collaboration"
            ],
            "answer": 2
        },
        {
            "q": "Which behaviour type involves mutual concession, such as a power-sharing agreement?",
            "options": [
                "Compromise",
                "Avoidance",
                "Competition",
                "Accommodation"
            ],
            "answer": 0
        },
        {
            "q": "Who is associated with the 'Relative Deprivation Theory' (Perceived injustice leads to aggression)?",
            "options": [
                "Sigmund Freud",
                "Ted Robert Gurr",
                "John Burton",
                "Karl Marx"
            ],
            "answer": 1
        },
        {
            "q": "What is the 'individual security dilemma'?",
            "options": [
                "A situation where individuals willingly surrender their arms to the state.",
                "When self-protection by one person is misinterpreted as hostility, escalating mistrust.",
                "An agreement between two individuals to share scarce resources.",
                "The process of avoiding conflict by ignoring threats."
            ],
            "answer": 1
        },
        {
            "q": "According to the World Bank (2025), severe conflicts are estimated to lower GDP per capita by what percentage after five years?",
            "options": [
                "5%",
                "10%",
                "15%",
                "25%"
            ],
            "answer": 2
        },
        {
            "q": "How is a 'Theory' defined in the context of the notes?",
            "options": [
                "A random guess about a phenomenon.",
                "A systematised body of ideas constructed to explain a phenomenon.",
                "A physical tool used in conflict mediation.",
                "An arbitrary rule imposed by a judge."
            ],
            "answer": 1
        },
        {
            "q": "What is 'Negative Peace' according to Johan Galtung?",
            "options": [
                "The presence of harmony and justice.",
                "A state of constant tension without resolution.",
                "The absence of direct physical violence.",
                "A situation where conflict behavior is purely competitive."
            ],
            "answer": 2
        },
        {
            "q": "What is 'Positive Peace' according to Johan Galtung?",
            "options": [
                "The temporary pausing of a war.",
                "The absence of physical violence only.",
                "The presence of harmony and the elimination of structures that inhibit human potential.",
                "An escalation of latent tensions."
            ],
            "answer": 2
        },
        {
            "q": "Which theory states that 'aggression is the sure consequence of frustration'?",
            "options": [
                "Biological Theory of Conflict",
                "Human Needs Theory",
                "Frustration-Aggression Theory",
                "Economic Theory of Conflict"
            ],
            "answer": 2
        },
        {
            "q": "The Human Needs Theory assumes that conflict occurs when:",
            "options": [
                "Basic human needs are fulfilled.",
                "Basic human needs are denied by other groups or individuals.",
                "There is an overabundance of resources.",
                "People engage in distributive bargaining."
            ],
            "answer": 1
        },
        {
            "q": "The idea that some people desire conflict because it is profitable to them ('Conflict entrepreneurs') belongs to which theory?",
            "options": [
                "Economic Theory of Conflict",
                "Structural Conflict Theory",
                "Realist Theory",
                "Human Needs Theory"
            ],
            "answer": 0
        },
        {
            "q": "Which theory argues that conflict is natural because humans are animals that fight over things they cherish?",
            "options": [
                "Biological Theory of Conflict",
                "Theory of Justice",
                "Structural Conflict Theory",
                "Economic Theory of Conflict"
            ],
            "answer": 0
        },
        {
            "q": "The Structural Conflict Theory links social conflicts primarily to:",
            "options": [
                "Innate biological aggression.",
                "Competition for resources which are assumed to be scarce.",
                "Psychological trauma.",
                "Miscommunication between parties."
            ],
            "answer": 1
        },
        {
            "q": "Which theory traces its roots to classical political theory and views human nature as inherently selfish and power-seeking?",
            "options": [
                "Realist Theory",
                "Human Needs Theory",
                "Frustration-Aggression Theory",
                "Biological Theory"
            ],
            "answer": 0
        },
        {
            "q": "Who propounded the Realist Theory to explain state behavior and foreign policy?",
            "options": [
                "Galtung and Burton",
                "Carr and Morgenthau",
                "Diamond and McDonald",
                "Lederach and Gurr"
            ],
            "answer": 1
        },
        {
            "q": "Which scholar is credited with the development of the Peacebuilding Theory?",
            "options": [
                "Johan Galtung",
                "John Rawls",
                "John Paul Lederach",
                "Karl Marx"
            ],
            "answer": 2
        },
        {
            "q": "John Rawls is known for which theory that focuses on equity and fairness?",
            "options": [
                "Theory of Justice",
                "Theory of Peace",
                "Peacebuilding Theory",
                "Realist Theory"
            ],
            "answer": 0
        },
        {
            "q": "According to Weaver’s iceberg analogy of culture, what is represented 'below the waterline'?",
            "options": [
                "Language and customs.",
                "Observable behaviors and traditions.",
                "Beliefs, values, assumptions, and thought patterns.",
                "Economic wealth and political power."
            ],
            "answer": 2
        },
        {
            "q": "Which conflict is given as an example of a value-laden (religious/cultural) conflict in Nigeria?",
            "options": [
                "Niger Delta oil pipeline attacks",
                "The 1980 Maitatsine crisis",
                "The farmer-herder land disputes",
                "The End SARS protests"
            ],
            "answer": 1
        },
        {
            "q": "The Marxian theory of conflict posits that conflict of interest increases with:",
            "options": [
                "The equal distribution of resources.",
                "The rate of unequal distribution of scarce resources.",
                "The fulfillment of basic human needs.",
                "The strengthening of democratic institutions."
            ],
            "answer": 1
        },
        {
            "q": "What is 'Fulfillment Progression' as described by Maslow?",
            "options": [
                "When a need is satisfied, the individual is dominated by a drive for other unsatisfied needs.",
                "When a person completely stops desiring resources after getting wealthy.",
                "The process of a society naturally ending all conflicts.",
                "The psychological effect of post-traumatic stress."
            ],
            "answer": 0
        },
        {
            "q": "In inter-ethnic conflicts, what is often considered the driving force for group affiliation?",
            "options": [
                "The desire for international trade.",
                "The search for identity and sense of belonging.",
                "The implementation of a national sovereign conference.",
                "The need for modern technology."
            ],
            "answer": 1
        },
        {
            "q": "What does the 'Political Entrepreneur Approach' to causing conflict usually involve?",
            "options": [
                "Improving healthcare and education.",
                "Manipulating information to get votes and incite people.",
                "Distributing wealth equally among citizens.",
                "Engaging in active listening and reframing."
            ],
            "answer": 1
        },
        {
            "q": "How did North (1988) define 'institutions'?",
            "options": [
                "Physical buildings where government officials work.",
                "Humanly devised constraints on repeated human interactions (rules of the game).",
                "Military forces deployed for peacekeeping.",
                "The financial resources of a state."
            ],
            "answer": 1
        },
        {
            "q": "What happens when governmental institutions collapse?",
            "options": [
                "Conflict becomes inevitable as groups seek justice or redress.",
                "Society immediately transforms into positive peace.",
                "Integrative bargaining takes over naturally.",
                "The conflict cycle permanently ends."
            ],
            "answer": 0
        },
        {
            "q": "When did the concept of post-conflict peacebuilding emerge prominently?",
            "options": [
                "After World War I",
                "After the Cold War",
                "During the Industrial Revolution",
                "In the 18th Century"
            ],
            "answer": 1
        },
        {
            "q": "Who presented the 1992 'Agenda for Peace' to the UN Security Council?",
            "options": [
                "Kofi Annan",
                "Nelson Mandela",
                "Boutros Boutros-Ghali",
                "Desmond Tutu"
            ],
            "answer": 2
        },
        {
            "q": "What is a primary objective of post-conflict peacebuilding?",
            "options": [
                "To escalate tensions in rival states.",
                "To prevent societies from relapsing into violence.",
                "To suppress the media.",
                "To enforce distributive bargaining."
            ],
            "answer": 1
        },
        {
            "q": "What is the main goal of Truth Commissions?",
            "options": [
                "To divide natural resources evenly among citizens.",
                "To serve as military tribunals that execute war criminals.",
                "To uncover the truth about past atrocities and human rights abuses.",
                "To negotiate international trade agreements."
            ],
            "answer": 2
        },
        {
            "q": "How do Reconciliation Commissions differ from Truth Commissions?",
            "options": [
                "They focus more directly on rebuilding relationships and healing.",
                "They are permanent military courts.",
                "They only deal with economic crimes.",
                "They are strictly used during active warfare."
            ],
            "answer": 0
        },
        {
            "q": "What is a National Sovereign Conference?",
            "options": [
                "A secret military planning meeting.",
                "A large political assembly of diverse stakeholders to discuss national crises and reforms.",
                "A United Nations peacekeeping deployment.",
                "A financial summit for debt relief."
            ],
            "answer": 1
        },
        {
            "q": "What does DDR stand for in the context of post-conflict efforts?",
            "options": [
                "Domestic Dispute Resolution",
                "Disarmament, Demobilization, and Reintegration",
                "Direct Democratic Reformation",
                "Dialogue, Diplomacy, and Reconciliation"
            ],
            "answer": 1
        },
        {
            "q": "What does SSR stand for in peacebuilding?",
            "options": [
                "Social Security Rights",
                "Security Sector Reform",
                "State Sovereignty Recognition",
                "Sustainable Settlement Reintegration"
            ],
            "answer": 1
        },
        {
            "q": "What does Peace Education primarily teach?",
            "options": [
                "Advanced military tactics.",
                "Tolerance, dialogue, and nonviolent conflict resolution.",
                "How to manipulate information.",
                "Distributive bargaining techniques."
            ],
            "answer": 1
        },
        {
            "q": "Which of the following is listed as a challenge to post-conflict peacebuilding?",
            "options": [
                "Strong democratic institutions.",
                "Trauma and long-term psychological effects.",
                "Total absence of corruption.",
                "High levels of economic prosperity."
            ],
            "answer": 1
        },
        {
            "q": "Which branch of the military handles sea and ocean warfare?",
            "options": [
                "Army",
                "Air Force",
                "Navy",
                "Marines"
            ],
            "answer": 2
        },
        {
            "q": "What is the main purpose of the military?",
            "options": [
                "To facilitate domestic commercial trade.",
                "To prepare for and fight wars, protect borders, and defend the state.",
                "To manage local community elections.",
                "To act as mediators in family disputes."
            ],
            "answer": 1
        },
        {
            "q": "What is 'Peacekeeping'?",
            "options": [
                "The deployment of strategies to maintain ceasefires and protect civilians.",
                "Diplomatic dialogues happening before a conflict breaks out.",
                "The coercive use of heavy military force to defeat an enemy.",
                "Dividing resources in a win-lose situation."
            ],
            "answer": 0
        },
        {
            "q": "Which term describes diplomatic action to bring hostile parties to a negotiated agreement during an active conflict?",
            "options": [
                "Peacekeeping",
                "Peacemaking",
                "Peace Enforcement",
                "Militancy"
            ],
            "answer": 1
        },
        {
            "q": "What is 'Peace Enforcement'?",
            "options": [
                "Non-violent mediation by a neutral third party.",
                "Applying coercive measures, including military force, to stop violence.",
                "Teaching tolerance in schools.",
                "An agreement to share political power."
            ],
            "answer": 1
        },
        {
            "q": "Which is an advantage of military means to conflict resolution?",
            "options": [
                "It always addresses the root causes of a conflict.",
                "It completely eliminates long-term psychological trauma.",
                "It can stop violence quickly in emergency situations.",
                "It is inexpensive and requires few resources."
            ],
            "answer": 2
        },
        {
            "q": "Which is a disadvantage of using military means?",
            "options": [
                "It may fail to address the root cause of the conflict and generate resentment.",
                "It protects civilians too quickly.",
                "It preserves national sovereignty too strongly.",
                "It deters future aggression."
            ],
            "answer": 0
        },
        {
            "q": "What is the primary function of a Preventive Mechanism in conflict resolution?",
            "options": [
                "To escalate minor disputes into open warfare.",
                "To prevent disputes from arising or escalating into violent conflicts.",
                "To forcefully disarm civilians without dialogue.",
                "To impose martial law during peaceful protests."
            ],
            "answer": 1
        },
        {
            "q": "Former UN Secretary-General Kofi Annan argued that virtually all the work of the United Nations contributes to:",
            "options": [
                "Economic dominance.",
                "Conflict prevention.",
                "Peace enforcement.",
                "Military expansion."
            ],
            "answer": 1
        },
        {
            "q": "What are 'Early warning signals'?",
            "options": [
                "Final peace agreements signed by conflicting parties.",
                "Indicators or signs that suggest the likelihood of emerging conflicts or crises.",
                "Military weapons used during peace enforcement.",
                "The final stage of the conflict cycle."
            ],
            "answer": 1
        },
        {
            "q": "Which of the following is NOT listed as a popular early warning indicator?",
            "options": [
                "Electoral disputes",
                "Human right violations",
                "Proliferation of arms",
                "High rates of civic volunteerism"
            ],
            "answer": 3
        },
        {
            "q": "The effectiveness of an early warning system depends on stages like data collection, risk analysis, and:",
            "options": [
                "Transmission of information with recommendations.",
                "Immediate military airstrikes.",
                "Imposing trade embargoes.",
                "Ignoring the warnings until violence breaks out."
            ],
            "answer": 0
        },
        {
            "q": "Which is a major challenge of an early warning system?",
            "options": [
                "Having too much political will.",
                "Delay in responding to identified threats.",
                "Overfunding from international bodies.",
                "Perfectly accurate data."
            ],
            "answer": 1
        },
        {
            "q": "Who developed the concept of Multi-Track Diplomacy?",
            "options": [
                "Boutros Boutros-Ghali and Kofi Annan",
                "Karl Marx and Lewis Coser",
                "Louise Diamond and John McDonald",
                "Johan Galtung and John Burton"
            ],
            "answer": 2
        },
        {
            "q": "What is the core idea of Multi-Track Diplomacy?",
            "options": [
                "Peace is achieved solely through official government-to-government interactions.",
                "Military force is the only reliable way to end disputes.",
                "Peace involves coordinated efforts of multiple actors from different sectors of society.",
                "Only the United Nations can negotiate peace treaties."
            ],
            "answer": 2
        },
        {
            "q": "What does 'R2P' stand for?",
            "options": [
                "Right to Peace",
                "Responsibility to Protect",
                "Resolution for Peace",
                "Reintegration of Populations"
            ],
            "answer": 1
        },
        {
            "q": "R2P focuses on protecting populations from four specific crimes. Which of the following is ONE of them?",
            "options": [
                "Cyber warfare",
                "Ethnic cleansing",
                "Economic fraud",
                "Drug trafficking"
            ],
            "answer": 1
        },
        {
            "q": "Which of these is NOT one of the four crimes covered under the Responsibility to Protect (R2P)?",
            "options": [
                "Genocide",
                "War crimes",
                "Crimes against humanity",
                "Political corruption"
            ],
            "answer": 3
        },
        {
            "q": "When was the Responsibility to Protect (R2P) adopted by the international community?",
            "options": [
                "At the 1992 Agenda for Peace",
                "During the Cold War in 1947",
                "At the 2005 World Summit Outcome Document",
                "During the formation of the UN in 1945"
            ],
            "answer": 2
        },
        {
            "q": "Under R2P, what is the responsibility of the international community if a state manifestly fails to protect its populations?",
            "options": [
                "To ignore the situation to respect sovereignty.",
                "To respond in a timely and decisive manner to help protect populations.",
                "To supply weapons to rebel groups.",
                "To immediately annex the failing state."
            ],
            "answer": 1
        },
        {
            "q": "According to Galtung's Conflict Behaviour theory, which behavior involves completely ignoring a conflict (e.g., government silence on early warnings)?",
            "options": [
                "Avoidance",
                "Accommodation",
                "Competition",
                "Collaboration"
            ],
            "answer": 0
        },
        {
            "q": "Which term describes a negotiation strategy that seeks one or more settlements creating a 'win-win' situation?",
            "options": [
                "Distributive Bargaining",
                "Integrative Bargaining",
                "Arbitration",
                "Litigation"
            ],
            "answer": 1
        },
        {
            "q": "Which dimension of conflict focuses on misperception, fear, and trauma?",
            "options": [
                "Sociological Dimension",
                "Economic Dimension",
                "Psychological Dimension",
                "Biological Dimension"
            ],
            "answer": 2
        },
        {
            "q": "Which of the following acts as an 'Escalation Factor' in a conflict?",
            "options": [
                "Peace education",
                "Weapon proliferation",
                "Community mediation",
                "Ceasefires"
            ],
            "answer": 1
        },
        {
            "q": "What is an example of an 'Intrastate' conflict?",
            "options": [
                "Russia-Ukraine War",
                "India-Pakistan tensions",
                "Nigerian insurgency (e.g., Boko Haram)",
                "World War II"
            ],
            "answer": 2
        },
        {
            "q": "The Rwanda Genocide is primarily categorized as which type of conflict?",
            "options": [
                "Interstate",
                "Ethnic",
                "Religious",
                "Economic"
            ],
            "answer": 1
        },
        {
            "q": "Which of the following is a key component of Collaborative Problem Solving?",
            "options": [
                "Closed communication",
                "Shared Goals",
                "Rigid positioning",
                "Imposing decisions"
            ],
            "answer": 1
        },
        {
            "q": "What is the primary role of an arbitrator?",
            "options": [
                "To facilitate dialogue without making a decision.",
                "To render a binding decision after hearing both sides.",
                "To brainstorm creative solutions for the parties.",
                "To engage in distributive bargaining."
            ],
            "answer": 1
        },
        {
            "q": "According to Johan Galtung, the real issue with conflict is not its existence, but:",
            "options": [
                "How to eradicate it completely.",
                "How it is managed and transformed through non-violent means.",
                "Who wins and who loses.",
                "How quickly a military can intervene."
            ],
            "answer": 1
        },
        {
            "q": "The concept of 'alienation dispositions' is linked to the questioning of the distribution of scarce resources by which segment of a system?",
            "options": [
                "The dominant segment",
                "The subordinate segment",
                "The neutral mediators",
                "The international community"
            ],
            "answer": 1
        }
    ]
};
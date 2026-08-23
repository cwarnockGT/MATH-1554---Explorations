var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "explorations",
  "level": "1",
  "url": "explorations.html",
  "type": "Article",
  "number": "",
  "title": "MATH 1554 Explorations - Fall 2026",
  "body": " MATH 1554 Explorations - Fall 2026    These are the Exploration Assignments for Georgia Tech's MATH 1554 Linear Algebra used during the Fall 2026 semester.  Exploration Assignments are submitted through Gradescope and are due each Sunday, by midnight, starting on Week 3. There will be a total of 12 Exploration Assignments, each worth 3 pts, for a total of 36 MQEW pts.  The purpose of exploration activities is to help students gain a deeper understanding of course concepts, come to class more prepared, offer feedback to the instructors on student understanding and course activities, and help students become more aware of their level of understanding of course material. Explorations are open note, open book, you can use any online calculator or MATLAB or online resource such as Chegg, and you can talk about explorations with each other or your instructor - ask for clarification or hints on Piazza; however, your work on the exploration must be entirely your own , and instances of plagiarism will be reported to OSI for disciplinary action and you will receive a zero on the assignment in question.  More information on Exploration Assignments can be found in Section 7.3 of our course syllabus.   Instructions : For each assignment, complete the questions by hand on paper\/tablet. Write neatly, follow directions, and use complete sentences where necessary. You must submit original work , but you can share ideas. Handwritten homework is due on Sunday in Gradescope; no late submissions accepted. Your submission should be a single PDF, organized and labeled appropriately, and oriented correctly.      Note : When we say \"choose a random vector\", or similar language, in explorations, we don't truly mean random. We mean to avoid super simple vectors such as or vectors which make following the instructions very easy. Sometimes simple vector like these will be allowed, and even encouraged. But often in explorations, you will miss the point of the exercise if your vectors are too trivial.  Please, do not ask on Piazza if your vectors are general enough to get full credit. The explorations are assignments which require you to make a judgement call , to explore a particular concept of the course and not to come up with the simplest example which satisfies the minimum requirements of the assignment.     "
},
{
  "id": "instructions",
  "level": "2",
  "url": "explorations.html#instructions",
  "type": "Note",
  "number": "1",
  "title": "",
  "body": " Instructions : For each assignment, complete the questions by hand on paper\/tablet. Write neatly, follow directions, and use complete sentences where necessary. You must submit original work , but you can share ideas. Handwritten homework is due on Sunday in Gradescope; no late submissions accepted. Your submission should be a single PDF, organized and labeled appropriately, and oriented correctly.  "
},
{
  "id": "random",
  "level": "2",
  "url": "explorations.html#random",
  "type": "Note",
  "number": "2",
  "title": "",
  "body": "   Note : When we say \"choose a random vector\", or similar language, in explorations, we don't truly mean random. We mean to avoid super simple vectors such as or vectors which make following the instructions very easy. Sometimes simple vector like these will be allowed, and even encouraged. But often in explorations, you will miss the point of the exercise if your vectors are too trivial.  Please, do not ask on Piazza if your vectors are general enough to get full credit. The explorations are assignments which require you to make a judgement call , to explore a particular concept of the course and not to come up with the simplest example which satisfies the minimum requirements of the assignment.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

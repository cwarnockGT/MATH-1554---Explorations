var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "explorations-3",
  "level": "1",
  "url": "explorations-3.html",
  "type": "Section",
  "number": "1",
  "title": "Exploration 1, due February 1",
  "body": " Exploration 1, due February 1   Exploration 1, due February 1  Make sure to familariaze yourself with the Exploration Instructions found on the home page.     Choose two random vectors in which are not multiples of each other.      Choose a random third vector in and express as a linear combination of ; that is, find weights such that       Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.        Now, choose two random vectors in which are not multiples of each other. Can every vector be expressed as a linear combination of ? Justify your answer.      Choose a random third vector that can be expressed as a linear combination of . Find appropriate weights such that        Bonus (Not graded) : Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.      "
},
{
  "id": "exp-1-3",
  "level": "2",
  "url": "explorations-3.html#exp-1-3",
  "type": "Problem",
  "number": "1.1",
  "title": "",
  "body": "   Choose two random vectors in which are not multiples of each other.      Choose a random third vector in and express as a linear combination of ; that is, find weights such that       Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.    "
},
{
  "id": "exp-1-4",
  "level": "2",
  "url": "explorations-3.html#exp-1-4",
  "type": "Problem",
  "number": "1.2",
  "title": "",
  "body": "   Now, choose two random vectors in which are not multiples of each other. Can every vector be expressed as a linear combination of ? Justify your answer.      Choose a random third vector that can be expressed as a linear combination of . Find appropriate weights such that        Bonus (Not graded) : Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.    "
},
{
  "id": "explorations-4",
  "level": "1",
  "url": "explorations-4.html",
  "type": "Section",
  "number": "2",
  "title": "Exploration 2, due February 8",
  "body": " Exploration 2, due February 8   Exploration 2, due February 8   Make sure to familariaze yourself with the Exploration Instructions found on the home page.   Propositional logic: This week we will explore the basics of propositional logic in order to help develop some framework to practice True\/False questions when studying for the exam.  The assignment for this week is to complete , , and and upload your work to Gradescope. The additional (non-question) text is just to help you understand the assignment.   A mathematical statement (also called a proposition ) is a sentence which is either true or false.   Each of the following is a mathematical statement. Depending on the matrices or vectors involved, each may be true or false.   (1)   is consistent.  (2)   is row equivalent to .  (3)   has a non‑trivial solution.  (4)   The columns of are linearly dependent.  (5)   is onto.   For example, (1) is true if and , but false if and .    Pick one of the statements (2)–(5) above. Give:   a choice of vectors\/matrices that makes the statement true,  a choice that makes the same statement false.   Verify your answers using appropriate calculations.   Note: Please write the problem statement you are solving to help the grader.        Combining Statements  Statements can be combined using logical connectives such as and , or , and implies .   (6)   is row equivalent to  and  is consistent.  (7)   has a non‑trivial solution or  is onto.  (8a)   The columns of are linearly dependent implies  has a non‑trivial solution.  (8a)   If the columns of are linearly dependent, then  has a non‑trivial solution.   Implications are commonly written using if–then language. The statements (8a) and (8b) express the same idea using different wording.  An implication is true when the truth of the “if” part forces the “then” part to be true.  For example, if the columns of are linearly dependent, then there is a free variable in , yielding a non‑trivial solution. Thus, (8a) and (8b) are true.  An implication is false if there exists a counterexample where the “if” part is true but the “then” part is false.   (9)   If and , then .   This implication is false. For example, let and . Then and both satisfy , but .    Choose one true and one false implication from any practice exam.   Identify the “if” and “then” propositions.  If false, give a counterexample with explanation.  If true, give a short general explanation using correct terminology.    Note: Write the full problem statement to assist the grader.       Quantifiers  Some statements involve quantifiers . The two most common are:   for all (universal quantifier),  for some (existential quantifier).   Notice the quantifiers in the follow statements.   (10)   If is consistent for some  , then has a pivot in every row.  (11)   If does not have a pivot in every column and , then for every  we have .   Question Q3    For statements (10) and (11):   Identify the propositions.  Both statements are false. Provide a counterexample for one of them and explain why the counterexample works.    Hint: For (10), choose and such that is consistent but lacks a pivot in every row.   Hint: For (11), choose without a pivot in every column and vectors such that .      "
},
{
  "id": "def-proposition",
  "level": "2",
  "url": "explorations-4.html#def-proposition",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": " A mathematical statement (also called a proposition ) is a sentence which is either true or false.  "
},
{
  "id": "ex2-q1",
  "level": "2",
  "url": "explorations-4.html#ex2-q1",
  "type": "Problem",
  "number": "2.2",
  "title": "",
  "body": "  Pick one of the statements (2)–(5) above. Give:   a choice of vectors\/matrices that makes the statement true,  a choice that makes the same statement false.   Verify your answers using appropriate calculations.   Note: Please write the problem statement you are solving to help the grader.    "
},
{
  "id": "ex2-q2",
  "level": "2",
  "url": "explorations-4.html#ex2-q2",
  "type": "Problem",
  "number": "2.3",
  "title": "",
  "body": "  Choose one true and one false implication from any practice exam.   Identify the “if” and “then” propositions.  If false, give a counterexample with explanation.  If true, give a short general explanation using correct terminology.    Note: Write the full problem statement to assist the grader.   "
},
{
  "id": "ex2-q3",
  "level": "2",
  "url": "explorations-4.html#ex2-q3",
  "type": "Problem",
  "number": "2.4",
  "title": "",
  "body": "  For statements (10) and (11):   Identify the propositions.  Both statements are false. Provide a counterexample for one of them and explain why the counterexample works.    Hint: For (10), choose and such that is consistent but lacks a pivot in every row.   Hint: For (11), choose without a pivot in every column and vectors such that .   "
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

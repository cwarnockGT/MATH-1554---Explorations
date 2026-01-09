var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations     Topics and Objectives   Topics   Systems of Linear Equations  Matrix Notation  Elementary Row Operations  Existence and Uniqueness of Solutions     Objectives   Characterize a linear system by the number of solutions and consistency.  Apply elementary row operations to solve linear systems.  Express a system as an augmented matrix.       A Single Linear Equation  A linear equation has the form:     Here, and are the coefficients , are the variables (unknowns), and is the dimension (number of variables).  Examples:  is a line in two dimensions.  is a plane in three dimensions.       Systems of Linear Equations  A linear system consists of multiple linear equations in the same variables. For example:      Solution to a Linear System  The set of all values of that satisfy every equation in the system.   A system can have a unique solution, no solution, or infinitely many solutions.     Two Variables — Compare Systems  Consider the following systems. Sketch and classify each (non-parallel \/ parallel \/ identical lines).   System A: Classification: ____________ Sketch axes and both lines; mark intersection if any.   System B: Classification: ____________ Sketch axes and both lines; explain your reasoning.   System C: Classification: ____________ Sketch axes and the line(s); note coincidences if present.     Three-Dimensional Case  An equation defines a plane in . For three equations, the solution set is the intersection of three planes.  For each possible solution set, sketch and state the number of solutions:   Line: intersection of two non-parallel planes with the third also intersecting along that line. Number of solutions: ____________   Point: three planes intersect at a single point. Number of solutions: ____________   Empty: no common intersection (e.g., parallel or inconsistent planes). Number of solutions: ____________     Row Reduction by Elementary Row Operations  To solve a linear system, we use row operations on the augmented matrix:    Replacement\/Addition: add a multiple of one row to another.  Interchange: swap two rows.  Scaling: multiply a row by a nonzero scalar.    Apply these operations to systematically simplify the matrix to an equivalent (easier to read) form. Explain each step as you go.     Example 1 — Solve the System  Identify the solution set (show all steps and justify each row operation).     Final solution (parametric or unique): ______________________________________     Augmented Matrices  It’s redundant to write variables repeatedly; we use an augmented matrix to encode the system.  Original system:     Augmented matrix:     The vertical bar separates the coefficient matrix (for ) from the constants.     Consistent Systems and Row Equivalence   Consistent  A linear system is consistent if it has at least one .    Row Equivalence  Two matrices are row equivalent if a sequence of transforms one matrix into the other.   Note: If the augmented matrices of two linear systems are row equivalent, they have the same solution set.     Fundamental Questions  We will revisit these throughout the course:  Does a given linear system have a solution (i.e., is it consistent)?  If it is consistent, is the solution unique?    Briefly explain how row-reduction can help answer (1) and (2): ____________________________________________________________________________    "
},
{
  "id": "section-1-1-3-4",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-3-4",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Solution to a Linear System.",
  "body": " Solution to a Linear System  The set of all values of that satisfy every equation in the system.  "
},
{
  "id": "section-1-1-9-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-2",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Consistent.",
  "body": " Consistent  A linear system is consistent if it has at least one .  "
},
{
  "id": "section-1-1-9-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-3",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Row Equivalence.",
  "body": " Row Equivalence  Two matrices are row equivalent if a sequence of transforms one matrix into the other.  "
},
{
  "id": "sec-1-2",
  "level": "1",
  "url": "sec-1-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction and Echelon Forms",
  "body": " Row Reduction and Echelon Forms   Row Reductions and Echelon Forms      Topics   Row reduction algorithm  Pivots; basic and free variables  Echelon forms; existence and uniqueness      Learning Objectives   Characterize a linear system in terms of leading entries, free variables, pivots, pivot columns, and pivot positions.  Apply the row reduction algorithm to reduce a linear system to echelon form or reduced echelon form.  Apply row reduction to compute the coefficients of a polynomial.      Definition: Echelon Form and RREF   A rectangular matrix is in echelon form if:   All zero rows (if any) are at the bottom.  The first nonzero entry (the leading entry ) of a row is to the right of any leading entry in a row above it.  All entries below a leading entry are zero.   A matrix in echelon form is in row reduced echelon form (RREF) if additionally:   All leading entries equal .  Each leading entry is the only nonzero entry in its column.       Example: A Matrix in Echelon Form   Let denote a nonzero number, and denote any number.            Guided Practice: Which of the following are in RREF?   Determine whether each matrix is in RREF. Justify your answer carefully.                Definition: Pivot Position and Pivot Column   A pivot position in a matrix is a location in that corresponds to a leading in the RREF of . A pivot column is a column of that contains a pivot position.      Compute RREF and Identify Pivot Columns   Express the matrix in RREF and identify the pivot columns.         Row Reduction Algorithm (Steps to RREF)  The algorithm below produces a matrix in RREF.   Step 1a: Swap the first row with a lower one so the leftmost nonzero entry is in the first row.  Step 1b: Scale the first row so that its leading entry equals .  Step 1c: Use row replacement so all entries below this are .  Step 2a: Swap the second row with a lower one so the leftmost nonzero entry below the first row is in the second row.  Continue: Repeat to obtain echelon form with leading entries equal to .  Last step: Use row replacement so all entries above each leading entry are , starting from the right.      Basic and Free Variables   Consider the augmented matrix :     The leading ones are in the first, third, and fifth columns. Thus, the pivot variables of the system are , , and ; the free variables are and . Any choice of the free variables leads to a solution of the system.  Note: The matrix itself does not have “variables”; systems have variables.      Theorem: Existence and Uniqueness of Solutions   A linear system is consistent iff the last column of the augmented matrix does not have a pivot. Equivalently, the RREF of the augmented matrix does not contain a row of the form .  If a linear system is consistent, then:   It has a unique solution iff there are no free variables.  Otherwise, it has infinitely many solutions parameterized by the free variables.       Additional Workspace   Use this area for scratch work, reflections, or additional examples assigned in class.       Before turning in, check that you identified pivot columns correctly and classified solution sets using the presence\/absence of free variables.    "
},
{
  "id": "obj-1-2-topics",
  "level": "2",
  "url": "sec-1-2.html#obj-1-2-topics",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Row reduction algorithm  Pivots; basic and free variables  Echelon forms; existence and uniqueness   "
},
{
  "id": "obj-1-2",
  "level": "2",
  "url": "sec-1-2.html#obj-1-2",
  "type": "Objectives",
  "number": "",
  "title": "Learning Objectives",
  "body": " Learning Objectives   Characterize a linear system in terms of leading entries, free variables, pivots, pivot columns, and pivot positions.  Apply the row reduction algorithm to reduce a linear system to echelon form or reduced echelon form.  Apply row reduction to compute the coefficients of a polynomial.   "
},
{
  "id": "def-echelon-rref",
  "level": "2",
  "url": "sec-1-2.html#def-echelon-rref",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Definition: Echelon Form and RREF.",
  "body": " Definition: Echelon Form and RREF   A rectangular matrix is in echelon form if:   All zero rows (if any) are at the bottom.  The first nonzero entry (the leading entry ) of a row is to the right of any leading entry in a row above it.  All entries below a leading entry are zero.   A matrix in echelon form is in row reduced echelon form (RREF) if additionally:   All leading entries equal .  Each leading entry is the only nonzero entry in its column.    "
},
{
  "id": "ex-echelon",
  "level": "2",
  "url": "sec-1-2.html#ex-echelon",
  "type": "Example",
  "number": "1.2.2",
  "title": "Example: A Matrix in Echelon Form.",
  "body": " Example: A Matrix in Echelon Form   Let denote a nonzero number, and denote any number.      "
},
{
  "id": "def-pivot",
  "level": "2",
  "url": "sec-1-2.html#def-pivot",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Definition: Pivot Position and Pivot Column.",
  "body": " Definition: Pivot Position and Pivot Column   A pivot position in a matrix is a location in that corresponds to a leading in the RREF of . A pivot column is a column of that contains a pivot position.   "
},
{
  "id": "ex-basic-free",
  "level": "2",
  "url": "sec-1-2.html#ex-basic-free",
  "type": "Example",
  "number": "1.2.4",
  "title": "Basic and Free Variables.",
  "body": " Basic and Free Variables   Consider the augmented matrix :     The leading ones are in the first, third, and fifth columns. Thus, the pivot variables of the system are , , and ; the free variables are and . Any choice of the free variables leads to a solution of the system.  Note: The matrix itself does not have “variables”; systems have variables.   "
},
{
  "id": "thm-existence-uniqueness",
  "level": "2",
  "url": "sec-1-2.html#thm-existence-uniqueness",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "Theorem: Existence and Uniqueness of Solutions.",
  "body": " Theorem: Existence and Uniqueness of Solutions   A linear system is consistent iff the last column of the augmented matrix does not have a pivot. Equivalently, the RREF of the augmented matrix does not contain a row of the form .  If a linear system is consistent, then:   It has a unique solution iff there are no free variables.  Otherwise, it has infinitely many solutions parameterized by the free variables.    "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Chapter",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     bar  "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.0.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
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

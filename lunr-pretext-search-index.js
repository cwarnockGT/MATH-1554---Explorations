var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   Systems of Linear Equations    Topics and Objectives   Topics   Systems of Linear Equations  Matrix Notation  Elementary Row Operations  Existence and Uniqueness of Solutions     Goals   Characterize a linear system by the number of solutions and consistency.  Apply elementary row operations to solve linear systems.  Express a system as an augmented matrix.     A Single Linear Equation  A linear equation has the form: where, and are the coefficients , are the variables (unknowns), and is the dimension (number of variables).   Examples:  is a line in two dimensions.  is a plane in three dimensions.       Systems of Linear Equations  When we have more than one linear equation, we have a system of linear equations . For example, a system of two linear equations is:       Solution to a Linear System  The set of all possible values of that satisfy every equation in the system is the solution, or solution set, to the system.    How many solutions can a system have?     Two-Dimensional Case   Consider the following systems of two linear equations in two variables and determine how many solutions there are for each.                Conclusion: A system of linear equations in two variables can have solutions.       Three-Dimensional Case  An equation linear equation in three variables, , defines a plane in .    How many solutions can a system of two linear equations in three variables have?      How many solutions can a system of three linear equations in three variables have?     Conclusion: Every system of linear equations, no matter the number of equations and number of variables has solutions.     Row Reduction by Elementary Row Operations  As we saw in the previous examples, one way to solve a system of linear equations is by graphing. This is not practical for most examples, especially if we are working with four or more varialbes. A more useful approach to solving a linear system is to manipulate the equations through the use of row operations .    Replacement\/Addition: add a multiple of one row to another.  Interchange: swap two rows.  Scaling: multiply a row by a nonzero scalar.       Example of Row Reduction   Apply row operations to systematically simplify the system below to an equivalent (easier to read) form in order to more easily identify the solution(s).       Augmented Matrices  It’s redundant to write variables repeatedly, so we use a augmented matrix to simplify the notation for the system. For example, the previous system Can be writen as the augmented matrix The vertical bar separates the coefficient matrix (for ) from the constants.   Determine if the following system has a solution.       Consistent Systems and Row Equivalence   Consistent  A linear system is consistent if it has at least one solution . Otherwise, it is inconsistent .    Row Equivalence  Two matrices are row equivalent if a sequence of row operations transforms one matrix into the other.    Note : If the augmented matrices of two linear systems are row equivalent, they have the same solution set.   Fundamental Questions : Two questions that we will revisit many times throughout the course:  Does a given linear system have a solution? In other words, is it consistent?  If it is consistent, is the solution unique?      "
},
{
  "id": "section-1-1-2-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-2-2",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Systems of Linear Equations  Matrix Notation  Elementary Row Operations  Existence and Uniqueness of Solutions   "
},
{
  "id": "section-1-1-2-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-2-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Characterize a linear system by the number of solutions and consistency.  Apply elementary row operations to solve linear systems.  Express a system as an augmented matrix.   "
},
{
  "id": "section-1-1-2-4",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-2-4",
  "type": "Definition",
  "number": "1.1.1",
  "title": "A Single Linear Equation.",
  "body": " A Single Linear Equation  A linear equation has the form: where, and are the coefficients , are the variables (unknowns), and is the dimension (number of variables).  "
},
{
  "id": "section-1-1-3-4",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution, or solution set, "
},
{
  "id": "section-1-1-4-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-4-2",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Consider the following systems of two linear equations in two variables and determine how many solutions there are for each.                Conclusion: A system of linear equations in two variables can have solutions.   "
},
{
  "id": "section-1-1-5-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-5-3",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  How many solutions can a system of two linear equations in three variables have?   "
},
{
  "id": "section-1-1-5-4",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-5-4",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  How many solutions can a system of three linear equations in three variables have?   "
},
{
  "id": "section-1-1-6-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "row operations "
},
{
  "id": "section-1-1-6-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Replacement\/Addition: Interchange: Scaling: "
},
{
  "id": "section-1-1-7-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-7-2",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " Apply row operations to systematically simplify the system below to an equivalent (easier to read) form in order to more easily identify the solution(s).   "
},
{
  "id": "section-1-1-8-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "augmented matrix "
},
{
  "id": "section-1-1-8-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-8-3",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " Determine if the following system has a solution.   "
},
{
  "id": "section-1-1-9-2",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-2",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Consistent.",
  "body": " Consistent  A linear system is consistent if it has at least one solution . Otherwise, it is inconsistent .  "
},
{
  "id": "section-1-1-9-3",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-3",
  "type": "Definition",
  "number": "1.1.9",
  "title": "Row Equivalence.",
  "body": " Row Equivalence  Two matrices are row equivalent if a sequence of row operations transforms one matrix into the other.  "
},
{
  "id": "section-1-1-9-5",
  "level": "2",
  "url": "sec-1-1.html#section-1-1-9-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Questions "
},
{
  "id": "sec-1-2",
  "level": "1",
  "url": "sec-1-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Row Reduction and Echelon Forms",
  "body": " Row Reduction and Echelon Forms     Topics   Row reduction algorithm  Pivots, basic and free variables  Echelon forms, existence and uniqueness      Goals   Characterize a linear system in terms of leading entries, free variables, pivots, pivot columns, and pivot positions.  Apply the row reduction algorithm to reduce a linear system to echelon form or reduced echelon form.  Apply row reduction to compute the coefficients of a polynomial.      Echelon Form and Row Row Reduced Echelon Form   A rectangular matrix is in echelon form (REF) if:   All zero rows (if any) are at the bottom.  The first nonzero entry (or leading entry ) of a row is to the right of any leading entry in the row above it.  All entries below a leading entry are zero.   A matrix in echelon form is in row reduced echelon form (RREF) if additionally:   All leading entries equal .  Each leading entry is the only nonzero entry in its column.        Let denote a nonzero number, and denote any number.   is in REF.   is in RREF.       Determine whether each matrix is in RREF, REF, or neither.            Pivot Position and Pivot Column   A pivot position in a matrix is a location in that corresponds to a leading in the RREF of . A pivot column is a column of that contains a pivot position.       Express the matrix in row reduced echelon form and identify the pivot columns.         Row Reduction Algorithm (Steps to RREF)  The algorithm below produces a matrix in RREF.   Step 1a: Swap the first row with a lower one so the leftmost nonzero entry is in the first row.  Step 1b: Scale the first row so that its leading entry equals .  Step 1c: Use row replacement so all entries above and below this are .  Step 2a: Swap the second row with a lower one so the leftmost nonzero entry below the first row is in the second row.  Step 2b: Scale the second row so that its leading entry equals .  Step 2c: Use row replacement so all entries above and below this are .  Continue: Repeat these steps for each subsequent row until the matrix is in RREF.      Use the algorithm above to convert the following matrix into RREF.        Pivot Variables and Free Variables   Variables in a system that correspond to pivot column in the augmented matrix are called pivot variables . The other variables in the system are called free variables . This is because, if the system is consistent, then any choice of the free variables will lead to a valid solution.       Determine the pivot variables and the free variables for the system represented below.         Existence and Uniqueness of Solutions   A linear system is consistent if and only if the last column of the augmented matrix does not have a pivot. Equivalently, the RREF of the augmented matrix does not contain a row of the form .  If a linear system is consistent, then:   It has a unique solution if and only if (iff) there are .  Otherwise, it has many solutions parameterized by the free variables.      "
},
{
  "id": "obj-1-2-topics",
  "level": "2",
  "url": "sec-1-2.html#obj-1-2-topics",
  "type": "Objectives",
  "number": "1.2.1",
  "title": "Topics",
  "body": " Topics   Row reduction algorithm  Pivots, basic and free variables  Echelon forms, existence and uniqueness   "
},
{
  "id": "obj-1-2",
  "level": "2",
  "url": "sec-1-2.html#obj-1-2",
  "type": "Objectives",
  "number": "1.2.1",
  "title": "Goals",
  "body": " Goals   Characterize a linear system in terms of leading entries, free variables, pivots, pivot columns, and pivot positions.  Apply the row reduction algorithm to reduce a linear system to echelon form or reduced echelon form.  Apply row reduction to compute the coefficients of a polynomial.   "
},
{
  "id": "def-echelon-rref",
  "level": "2",
  "url": "sec-1-2.html#def-echelon-rref",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Echelon Form and Row Row Reduced Echelon Form.",
  "body": " Echelon Form and Row Row Reduced Echelon Form   A rectangular matrix is in echelon form (REF) if:   All zero rows (if any) are at the bottom.  The first nonzero entry (or leading entry ) of a row is to the right of any leading entry in the row above it.  All entries below a leading entry are zero.   A matrix in echelon form is in row reduced echelon form (RREF) if additionally:   All leading entries equal .  Each leading entry is the only nonzero entry in its column.    "
},
{
  "id": "ex-echelon",
  "level": "2",
  "url": "sec-1-2.html#ex-echelon",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  Let denote a nonzero number, and denote any number.   is in REF.   is in RREF.   "
},
{
  "id": "task-rref-check",
  "level": "2",
  "url": "sec-1-2.html#task-rref-check",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Determine whether each matrix is in RREF, REF, or neither.         "
},
{
  "id": "def-pivot",
  "level": "2",
  "url": "sec-1-2.html#def-pivot",
  "type": "Definition",
  "number": "1.2.4",
  "title": "Pivot Position and Pivot Column.",
  "body": " Pivot Position and Pivot Column   A pivot position in a matrix is a location in that corresponds to a leading in the RREF of . A pivot column is a column of that contains a pivot position.   "
},
{
  "id": "task-pivots",
  "level": "2",
  "url": "sec-1-2.html#task-pivots",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": "  Express the matrix in row reduced echelon form and identify the pivot columns.      "
},
{
  "id": "handout-1-2-9",
  "level": "2",
  "url": "sec-1-2.html#handout-1-2-9",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Use the algorithm above to convert the following matrix into RREF.      "
},
{
  "id": "handout-1-2-10",
  "level": "2",
  "url": "sec-1-2.html#handout-1-2-10",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Pivot Variables and Free Variables.",
  "body": " Pivot Variables and Free Variables   Variables in a system that correspond to pivot column in the augmented matrix are called pivot variables . The other variables in the system are called free variables . This is because, if the system is consistent, then any choice of the free variables will lead to a valid solution.   "
},
{
  "id": "ex-basic-free",
  "level": "2",
  "url": "sec-1-2.html#ex-basic-free",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "  Determine the pivot variables and the free variables for the system represented below.      "
},
{
  "id": "thm-existence-uniqueness",
  "level": "2",
  "url": "sec-1-2.html#thm-existence-uniqueness",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "Existence and Uniqueness of Solutions.",
  "body": " Existence and Uniqueness of Solutions   A linear system is consistent if and only if the last column of the augmented matrix does not have a pivot. Equivalently, the RREF of the augmented matrix does not contain a row of the form .  If a linear system is consistent, then:   It has a unique solution if and only if (iff) there are .  Otherwise, it has many solutions parameterized by the free variables.    "
},
{
  "id": "sec-1-3",
  "level": "1",
  "url": "sec-1-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Vector Equations",
  "body": " Vector Equations   Vector Equations   Introduction   Topics   Vectors in , and their basic properties  Linear combinations of vectors      Goals   Apply geometric and algebraic properties of vectors in to compute vector additions and scalar multiplications.  Characterize a set of vectors in terms of linear combinations , their span , and how they are related to each other geometrically.    We want to think about the algebra in linear algebra (systems of equations and their solution sets) in terms of geometry (points, lines, planes, etc.). Consider the following system. We could solve this system by graphing the lines represented by each equation and determining where they interesect.   Two lines in the plane with a single point of intersection.   Cartesian axes with two lines: one with positive slope (from the equation ) and one with negative slope (from ), intersecting at a point.     This geometric perspective gives better insight into properties of systems and their solution sets. To better see this, we introduce -dimensional space and the vectors that live in it.       Recall that denotes the collection of all real numbers. For a positive integer , define     When , we get , the number line.   The number line for .   A horizontal line with tick marks labeled from -3 to 3 representing the real numbers.     When , we can think of as a plane. Each point is an ordered pair of real numbers: its - and -coordinates. We could also view the elements of as vectors (arrows with length and direction). It turns out, viewing them as vector is a better approach.    Sketch the point and the vector .   Cartesian plane with grid, axes, and room to mark and .   A square grid with horizontal and vertical axes spanning from -4 to 4, ready to plot the point (3,2) and the arrow from the origin to (3,2).         Vector Algebra  When we think of an element of as a vector, we commonly write it as a column:   Suppose is an arbitrary real number, written , and let   Vectors have the following properties.    Scalar Multiple:     Vector Addition:     Vectors in higher dimensions satisfy the same operations componentwise.    Linear Combinations and Span     Given vectors and scalars , the vector is called a linear combination of with weights .  The set of all linear combinations of is called the span of these vectors.     Any two vectors in that are not scalar multiples of one another span . Thus, any vector in can be written as a linear combination of such a pair.   Linear combinations of two nonparallel vectors spanning the plane.   A lightly rotated square grid with the origin and multiples\/sums of two non-parallel vectors labeled, illustrating how combinations like , , etc., tile the plane.       Examples of Linear Combinations and Span    Let and . Determine three vectors which are linear combinations of and .      Let and . Determine if is in .      Example: Membership in a Span  In general, any two non-parallel vectors in span a plane through the origin. Every vector in that plane is a linear combination of the two.   Two nonparallel vectors in span a plane through the origin.   A translucent plane through the origin with two nonparallel vectors drawn from the origin; coordinate axes are shown for reference.       Is in the span of and ?       "
},
{
  "id": "obj-1-3-topics",
  "level": "2",
  "url": "sec-1-3.html#obj-1-3-topics",
  "type": "Objectives",
  "number": "",
  "title": "Topics",
  "body": " Topics   Vectors in , and their basic properties  Linear combinations of vectors   "
},
{
  "id": "obj-1-3",
  "level": "2",
  "url": "sec-1-3.html#obj-1-3",
  "type": "Objectives",
  "number": "",
  "title": "Goals",
  "body": " Goals   Apply geometric and algebraic properties of vectors in to compute vector additions and scalar multiplications.  Characterize a set of vectors in terms of linear combinations , their span , and how they are related to each other geometrically.   "
},
{
  "id": "fig-motivation-lines",
  "level": "2",
  "url": "sec-1-3.html#fig-motivation-lines",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Two lines in the plane with a single point of intersection.   Cartesian axes with two lines: one with positive slope (from the equation ) and one with negative slope (from ), intersecting at a point.    "
},
{
  "id": "Rn-2",
  "level": "2",
  "url": "sec-1-3.html#Rn-2",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  Recall that denotes the collection of all real numbers. For a positive integer , define    "
},
{
  "id": "fig-number-line",
  "level": "2",
  "url": "sec-1-3.html#fig-number-line",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " The number line for .   A horizontal line with tick marks labeled from -3 to 3 representing the real numbers.    "
},
{
  "id": "Rn-6",
  "level": "2",
  "url": "sec-1-3.html#Rn-6",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Sketch the point and the vector .   Cartesian plane with grid, axes, and room to mark and .   A square grid with horizontal and vertical axes spanning from -4 to 4, ready to plot the point (3,2) and the arrow from the origin to (3,2).      "
},
{
  "id": "def-linear-combination-span",
  "level": "2",
  "url": "sec-1-3.html#def-linear-combination-span",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "   Given vectors and scalars , the vector is called a linear combination of with weights .  The set of all linear combinations of is called the span of these vectors.    "
},
{
  "id": "fig-grid-combos",
  "level": "2",
  "url": "sec-1-3.html#fig-grid-combos",
  "type": "Figure",
  "number": "1.3.7",
  "title": "",
  "body": " Linear combinations of two nonparallel vectors spanning the plane.   A lightly rotated square grid with the origin and multiples\/sums of two non-parallel vectors labeled, illustrating how combinations like , , etc., tile the plane.    "
},
{
  "id": "examples-2",
  "level": "2",
  "url": "sec-1-3.html#examples-2",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Let and . Determine three vectors which are linear combinations of and .   "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "sec-1-3.html#examples-3",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": "  Let and . Determine if is in .   "
},
{
  "id": "fig-plane-span",
  "level": "2",
  "url": "sec-1-3.html#fig-plane-span",
  "type": "Figure",
  "number": "1.3.10",
  "title": "",
  "body": " Two nonparallel vectors in span a plane through the origin.   A translucent plane through the origin with two nonparallel vectors drawn from the origin; coordinate axes are shown for reference.    "
},
{
  "id": "ex-span-membership",
  "level": "2",
  "url": "sec-1-3.html#ex-span-membership",
  "type": "Example",
  "number": "1.3.11",
  "title": "",
  "body": "  Is in the span of and ?    "
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

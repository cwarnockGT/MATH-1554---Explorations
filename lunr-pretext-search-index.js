var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "explorations-3",
  "level": "1",
  "url": "explorations-3.html",
  "type": "Section",
  "number": "1",
  "title": "Exploration 1, due February 1",
  "body": " Exploration 1, due February 1   Exploration 1, due February 1     Choose two random vectors in which are not multiples of each other.      Choose a random third vector in and express as a linear combination of ; that is, find weights such that       Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.        Now, choose two random vectors in which are not multiples of each other. Can every vector be expressed as a linear combination of ? Justify your answer.      Choose a random third vector that can be expressed as a linear combination of . Find appropriate weights such that        Bonus (Not graded) : Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.      "
},
{
  "id": "exp-1-2",
  "level": "2",
  "url": "explorations-3.html#exp-1-2",
  "type": "Problem",
  "number": "1.1",
  "title": "",
  "body": "   Choose two random vectors in which are not multiples of each other.      Choose a random third vector in and express as a linear combination of ; that is, find weights such that       Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.    "
},
{
  "id": "exp-1-3",
  "level": "2",
  "url": "explorations-3.html#exp-1-3",
  "type": "Problem",
  "number": "1.2",
  "title": "",
  "body": "   Now, choose two random vectors in which are not multiples of each other. Can every vector be expressed as a linear combination of ? Justify your answer.      Choose a random third vector that can be expressed as a linear combination of . Find appropriate weights such that        Bonus (Not graded) : Sketch the vectors in and show, geometrically, how the linear combination from (b) makes sense.    "
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

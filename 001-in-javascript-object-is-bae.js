let etc

`-------------------------------------------------------`

const title = 
      'ARA EXPLAINS THE UNIVERSE IN HELLA PSEUDOCODE'

`(er... I mean explains JavaScript? ... whatever.)

WARNING: THIS IS SUPER CONCEPTUAL PSEUDOCODE
IF YOU ACTUALLY TRY TO RUN IT MOST OF IT WON'T WORK

---------------------------------------------------------

part 1: in JavaScript, Object = bae <3

Welcome to JAVASCRIPT CLUB.

the first rule of javascript club is you don't talk about
the real implications of how EVERYTHING is an object.

...apparently.

well, I WON'T LET TRADITION SILENCE--- err...
ok, I'll calm down. look at this shiny object!`

new Object

// => {}
// what a pristine Object!
// it's so shiny and pretty and new ^_^

`EVERYTHING can be expressed like this. Cool, right?
an object can have a name, or not...

${new Object({
  name: 'Arayi',
  attributes: {
    state: 'chilling the fuck out',
    expression: function () {
      return 'smiling'
    },
    clothing: function () {
      return 'pajamas'
    }
    otherFunctions: ['eat', 'sleep', 'code', ...etc],
    // etc...
  }
  appearance: [
              this.expression,
              this.clothing
              ] // -> ['smiling', 'pajamas']
})}

versus

${new Object({
  name: null,
  attributes: {
    state: 'protesting',
    expression: function () {
      return 'obscured'
    },
    clothing: function () {
      return 'guy fawkes mask and angry meme shirt'
    }
    otherFunctions: ['organize', 'march', 'chant', ...etc]
  }
})}

who doesn't want to be anonymous, sometimes?

but names are useful, too.

here's a function! look at it go! go, function, go!`

function testFunction(str) {
  return 'tested ' + str
}
// we can also write it in terms of nested objects
// if we really want.

function testFunction (str) {
  
  this.name: {name: 'testFunction'},
  this.length: {length: 1},
  this.parameters: {parameters: "str"},
  this.contents: {contents: { return 'tested ' + str } },
  this.this: {this: this},
  // LOL don't think about this too hard
  // ... pun totally intended, I'm sorry.

  this.tangent: {

 ` Actually, at this point I want to take an interlude
   and talk about TWO THINGS:`

  let first = 'not fucking with the fabric of reality'
  let second = 'being confident in yourself as a developer'

  `WARNING: PROCEED WITH CAUTION MODIFYING DEFAULT BEHAVIORS
  
    It's possible to change the way basic parts of JS
    interact with other things. Arrays with backwards
    indices, Objects whose keys must be a Function instead
    of a String, iterators that return a random non-repeated index for
    their 'next()' call...
  
    If you didn't understand that, you can probably just
    stick to using the basic parts of JavaScript that you're
    already using. If you're not careful, you could end up
    breaking the entirety of reality. I mean JavaScript.`

  let caveat = 'but THAT IS PERFECTLY OKAY!! no worries :]'

  `There's a school of thought that firmly believes
    it's best only to use the "easy" parts of JavaScript,
    and that includes plenty of super-senior developers.
  
    But there's no denying that the language can be incredibly
    powerful when used to its fullest extent, especially with some
    of the more advanced features in ES6 and later.
  
    Someday, you MAY become ready to control
    the universe like that with metaprogramming.
  
    But that kind of power is dangerous. Let's leave it alone for now.`
  }
}

// So back to learning about Objects and what we can do with them!

// another word for a nested object is a "closure"

// mostly, when people talk about "closures" in JS,
// they specifically mean a FUNCTION within a CONTEXT

{
  {name: 'outsideFunction', info: etc},
  contents: function insideFunction () { return 'does stuff' }
}

// or a FUNCTION within a FUNCTION

function outsideFunction () {
  return function insideFunction () {
    // it's functions all the way down...
  }
}

// but once you know that EVERYTHING is an object,
// the distinctions start to blur a little, as shown above.


const so_now = 'Imagine the infinite potential contained in every {} :]'

// You get what I'm trying to say here, right? Riiiiiight?

// Anyway, hooray for objects! I mean, they're totally the
// ultimate foundation of everything in JavaScript.

{} = 'the ultimate prototype!' // cheers to you, little object. :]

// ...

// lol

// anyway, this has hella implications for how JS behaves
// everywhere all over the place.

// literally EVERYTHING is an object!!! (I'm excited about this TBH)
// that file, that string, that array, that variable, that function,
// .. well, that object, too, obviously.

// objects also GET EVALUATED
// that means the interpreter reads and runs them

// so when you `node test.js` and test.js looks like

console.log('test')

// all it's doing is reading and executing

{
  console.log('test')
}

`kinda like the most basic kind of anonymous (nameless!) function you can imagine. because objects can either have a name or not, just like your basic difference between:`

{}

// and

const thing = {name: 'thing', prototype: Const, reference: this}

`so if you run this in the terminal...`

const commands = ['> node',
'> const thing = {name: "thing", prototype, etc, more hella pseudocode}',
'> const namedThing = thing']

function Pretty_Cool_Right () { '?' }

`the namedThing has a name, but it's just a copied over version
of the original thing.

this kind of works like the English language,
where pronouns are just a specal kind of name

soooo... here's some hella pseudocode`

const animal // BASIC ANIMAL PROTOYPE!

let human, me, melody, she

human.prototype = animal // refers to some Animal prototype
me.prototype = human // refers up to Human prototype...
melody.prototype = me // refers up again...
she.prototype = melody // and yet again!

`is kind of a synonym for:`
class Animal {}
class Human extends Animal {}
class Me extends Human {}
class Melody extends Me {}
class She extends Melody {
  constructor (input) {
  // do some stuff... THIS is the most complex
  // problem in AI so no way are we coding it out :P
  }

  // oh wait...
  behavior (situation) {
    // acts "like a girl"
  }
}

`.... oh, shit.
so there's the problem with class inheritance right there:
if you don't put the inheritance in the right order,
you start to get some bugs in your logic, lol.

So on that note, I'm hungry. Thanks for reading. :]
`

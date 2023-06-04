let favShow = 'Game of Thrones';
undefined
favShow
'Game of Thrones'
favShow.length
15
favShow.indexOf('of')
5
favShow[5]
'o'
favShow[6]
'f'
favShow[-1]
undefined
favShow[favShow.length-1]
's'
let words = favShow.split(' ');
undefined
words
(3) ['Game', 'of', 'Thrones']
words[1]
'of'
words[0]
'Game'
words[2]
'Thrones'
favShow.slice(1)
'ame of Thrones'
favShow.slice(5)
'of Thrones'
favShow.slice(5,7)
'of'
let sentance = 'The QuIck BrowN FOx JuMps OvEr a LaZY dOg'
undefined
sentance
'The QuIck BrowN FOx JuMps OvEr a LaZY dOg'
sentance.toUpperCase();
'THE QUICK BROWN FOX JUMPS OVER A LAZY DOG'
sentance.toLowerCase();
'the quick brown fox jumps over a lazy dog'
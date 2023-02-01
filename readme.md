la fonction renvera le nombre qui lui est passé, sauf dans les cas où:
- le nombre est un multiple de 5, car on renvera 'big'
- le nombre est un multiple de 7, car on renvera 'bang'
- le nombre est un multiple de 11, car on renvera 'boom'

- le nombre est un multiple de 5 et de 7, car on revera 'bigbang'
- le nombre est un multiple de 5 et de 11, car on revera 'bigboom'
- le nombre est un multiple de 7 et de 11, car on revera 'bangboom'

- le nombre est un multiple de 5, de 7 et de 2, car on renvera 'bangbig'
- le nombre est un multiple de 5, 11 et 2, car on revera 'boombig'
- le nombre est un multiple de 7, 11 et 2, car on revera 'boombang'

- le nombre est un multiple de 5, 7 et 11, car on revera 'bigbangboom'
- le nombre est un multiple de 5, de 7, de 11 et de 2, car on renvera 'boombangbig'

- Exemples:
  1 => 1
  2 => 2
  5 => 'big'
- 7 => 'bang'
  21 => 'bang'
  25 => 'big'
  35 => 'bigbang'
  280 => 'bangbig'
- 7000 => 'bangbig'
- 234411 => 234411
- 55 => 'bigboom'
- 77 => 'bangboom'
- 110 => 'boombig'
- 154 => 'boombang'
- 385 => 'bigbangboom'
- 770 => 'boombangbim'


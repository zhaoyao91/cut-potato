function cutPotato(potato, cut, mother) {
  const bowl = [];
  let curPotato = potato;
  while (!mother(curPotato, bowl)) {
    const [nextPotato, slice] = cut(curPotato, bowl);
    curPotato = nextPotato;
    bowl.push(slice);
  }
  return bowl;
}

module.exports = cutPotato;

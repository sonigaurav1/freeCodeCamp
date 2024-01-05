function impartial(x, y, z) {
    return x + y + z;
  }
  
  const partialFn = impartial.bind(this, 8, 2);
  
  console.log(partialFn(10)); // 13
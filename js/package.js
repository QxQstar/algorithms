function packages(n,goods) {
  let bp = []
  for(let i = 0; i <= n ;i++) bp[i] = 0

  for(let i = 0; i < goods.length;i++) {
    const good = goods[i]
    for(let j = n; j >= good.w; j--) {
      bp[j] = Math.max(bp[j],bp[j - good.w] + good.v)
    }
  }
  console.log(bp)
}

packages(10,[{w:5,v:1},{w:2,v:3},{w:5,v:3},{w:4,v:2},{w:3,v:5}])

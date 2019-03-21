# Cut Potato

A generic version of `reduce`

## Introduction

### The problem of `reduce`

In traditional `reduce`, the target to be reduced must be an array or array like, this is limited.


### The **Cut Potato** pattern

The **Cut Potato** pattern let you reduce anything.

Imagine you are cutting a **potato** into **slices** and put them into a **bowl**, beside you is your 
**mother**, watching the **current potato** and will stop you when she feels it is enough.

## Install

```
npm install cut-potato
```

## Usage

```@js
const cutPotato = require('cut-potato')

const bowl = cutPotato(potato, cut, mother)
```

See [The Cut Potato Pattern](#the-cut-potato-pattern) to know the algorithm.

## API

```@flow js
type Potato = any
type Slice = any
type Bowl = Slice[]

type CutFn = (curPotato: Potato, curBowl: Bowl) => [nextPotato: Potato, slice: Slice]
type MotherFn = (curPotato: Potato, curBowl: Bowl) => shouldStop: bool
type CutPotatoFn = (potato: Potato, cut: CutFn, mother: MotherFn) => bowl: Bowl

(cutPotato: CutPotatoFn)
```

## License

MIT

# Challenge: Transpose two-dimensional arrays

### Link:

> www.codewars.com/kata/592b1e4c96cc12de1e0000b1

### Details:

Given a table with a following schema

#### Table "public.matrices"
```
 Column |  Type  | Modifiers
--------+--------+-----------
 matrix | text[] | not null
```

which holds a set of two-dimensional text arrays i.e.

#### matrix
```
-------------------
 {{1,2,3},{4,5,6}}
 {{a,b,c},{d,e,f}}
(2 rows)
```

your goal is to wite a SELECT statement or a CTE that returns array data in a transposed form

#### matrix
```
---------------------
 {{1,4},{2,5},{3,6}}
 {{a,d},{b,e},{c,f}}
(2 rows)
```

You can't use / create user definded functions and resort to procedural PL/pgSQL.

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/3%20kyu/Total%20area%20covered%20by%20rectangles/Solutions/JS.js)

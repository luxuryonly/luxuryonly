#!/bin/bash
cd ./Landscape || exit

n=0
for filename in *; do
  mv "$filename" ./kitten"$n".webp
  ((n++))
done

#!/bin/bash
cd ./talismanScottish || exit

n=0
for filename in *; do
  cwebp -q 80 "$filename" -o ./talisman"$n".webp
  rm "$filename"
  # mv "$filename" ./darsi"$n".webp
  ((n++))
done

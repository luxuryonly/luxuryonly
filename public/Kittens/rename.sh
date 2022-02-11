 #!/bin/bash
cd British || exit

n=0
for filename in *; do
#   cwebp -q 80 "$filename" -o ./scottish"$n".webp
#   rm "$filename"
  mv "$filename" ./british"$n".webp
  ((n++))
done

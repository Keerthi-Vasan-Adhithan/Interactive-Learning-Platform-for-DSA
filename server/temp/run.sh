#!/bin/bash

LANGUAGE=$1
CODE_FILE=$2
INPUT_FILE=$3

# Debug output to stderr
echo "Running in container: LANGUAGE=$LANGUAGE, CODE_FILE=$CODE_FILE, INPUT_FILE=$INPUT_FILE" >&2
echo "Checking file access..." >&2
ls -l "$CODE_FILE" >&2
ls -l "$INPUT_FILE" >&2
echo "Code file contents:" >&2
cat "$CODE_FILE" >&2
echo "Input file contents:" >&2
cat "$INPUT_FILE" >&2

case $LANGUAGE in
  "cpp")
    g++ "$CODE_FILE" -o program && ./program < "$INPUT_FILE"
    ;;
  "java")
    javac "$CODE_FILE" && java -cp . Main < "$INPUT_FILE"
    ;;
  "python")
    echo "Running Python script..." >&2
    cat "$INPUT_FILE" | python3 "$CODE_FILE"
    ;;
  "javascript")
    node "$CODE_FILE" < "$INPUT_FILE"
    ;;
  *)
    echo "Unsupported language" >&2
    exit 1
    ;;
esac
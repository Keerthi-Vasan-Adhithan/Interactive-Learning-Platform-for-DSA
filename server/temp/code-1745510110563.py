import ast

try:
    # Read input as a string and parse it into a list
    input_str = input()
    arr = ast.literal_eval(input_str)

    # Write your code here
    def find_maximum(arr):
        return max(arr)

    print(find_maximum(arr))
except Exception as e:
    print(f"Error parsing input: {e}")
  
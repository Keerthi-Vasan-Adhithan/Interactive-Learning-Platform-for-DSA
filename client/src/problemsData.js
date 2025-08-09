const problemsData = [
  // Arrays
  {
    id: 1,
    title: "Find the Maximum Element",
    topic: "arrays",
    description: "Write a function to find the maximum element in an array.",
    tags: ["Basics", "Iteration"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "arr = [1, 5, 3, 9, 2]", output: "9" },
      { input: "arr = [-1, -5, -3]", output: "-1" },
      { input: "arr = [10]", output: "10" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [1, 5, 3, 9, 2]",
        output: "9",
        explanation: "Explanation: The maximum element in the array is 9."
      },
      {
        description: "Example 2:",
        input: "arr = [-1, -5, -3]",
        output: "-1",
        explanation: "Explanation: The maximum element in the array is -1."
      },
      {
        description: "Example 3:",
        input: "arr = [10]",
        output: "10",
        explanation: "Explanation: The maximum element in the array is 10."
      }
    ],
    constraints: [
      "1 <= arr.length <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
    ],
    followUp: "Follow-up: Can you find the maximum in a single pass with O(1) space complexity?"
  },
  {
    id: 2,
    title: "Reverse an Array",
    topic: "arrays",
    description: "Write a function to reverse an array in-place.",
    tags: ["Two-Pointers"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "arr = [1, 2, 3, 4, 5]", output: "[5, 4, 3, 2, 1]" },
      { input: "arr = [10]", output: "[10]" },
      { input: "arr = []", output: "[]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [1, 2, 3, 4, 5]",
        output: "[5, 4, 3, 2, 1]",
        explanation: "Explanation: The array is reversed in-place to [5, 4, 3, 2, 1]."
      },
      {
        description: "Example 2:",
        input: "arr = [10]",
        output: "[10]",
        explanation: "Explanation: A single-element array remains unchanged."
      },
      {
        description: "Example 3:",
        input: "arr = []",
        output: "[]",
        explanation: "Explanation: An empty array remains empty."
      }
    ],
    constraints: [
      "0 <= arr.length <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
    ],
    followUp: "Follow-up: Can you reverse the array using constant extra space?"
  },
  {
    id: 3,
    title: "Sum of Elements",
    topic: "arrays",
    description: "Write a function to calculate the sum of all elements in an array.",
    tags: ["Basics"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "arr = [1, 2, 3, 4]", output: "10" },
      { input: "arr = [-1, 1]", output: "0" },
      { input: "arr = []", output: "0" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [1, 2, 3, 4]",
        output: "10",
        explanation: "Explanation: 1 + 2 + 3 + 4 = 10."
      },
      {
        description: "Example 2:",
        input: "arr = [-1, 1]",
        output: "0",
        explanation: "Explanation: -1 + 1 = 0."
      },
      {
        description: "Example 3:",
        input: "arr = []",
        output: "0",
        explanation: "Explanation: The sum of an empty array is 0."
      }
    ],
    constraints: [
      "0 <= arr.length <= 10^5",
      "-10^9 <= arr[i] <= 10^9"
    ],
    followUp: "Follow-up: Can you compute the sum in a single pass?"
  },
  {
    id: 4,
    title: "Two Sum Problem",
    topic: "arrays",
    description: "Given an array of integers arr and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
    tags: ["Hash Map", "Two-Pointers"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "arr = [2, 7, 11, 15], target = 9", output: "[0, 1]" },
      { input: "arr = [3, 2, 4], target = 6", output: "[1, 2]" },
      { input: "arr = [3, 3], target = 6", output: "[0, 1]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [2, 7, 11, 15], target = 9",
        output: "[0, 1]",
        explanation: "Explanation: Because arr[0] + arr[1] == 9, we return [0, 1]."
      },
      {
        description: "Example 2:",
        input: "arr = [3, 2, 4], target = 6",
        output: "[1, 2]",
        explanation: "Explanation: Because arr[1] + arr[2] == 6, we return [1, 2]."
      },
      {
        description: "Example 3:",
        input: "arr = [3, 3], target = 6",
        output: "[0, 1]",
        explanation: "Explanation: Because arr[0] + arr[1] == 6, we return [0, 1]."
      }
    ],
    constraints: [
      "2 <= arr.length <= 10^4",
      "-10^9 <= arr[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    followUp: "Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?"
  },
  {
    id: 5,
    title: "Rotate Array",
    topic: "arrays",
    description: "Given an array arr, rotate the array to the right by k steps, where k is non-negative.",
    tags: ["Cyclic Rotation"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "arr = [1, 2, 3, 4, 5], k = 2", output: "[4, 5, 1, 2, 3]" },
      { input: "arr = [1, 2, 3], k = 0", output: "[1, 2, 3]" },
      { input: "arr = [1], k = 1", output: "[1]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [1, 2, 3, 4, 5], k = 2",
        output: "[4, 5, 1, 2, 3]",
        explanation: "Explanation: Rotate 1 step to the right: [5, 1, 2, 3, 4]. Rotate another step: [4, 5, 1, 2, 3]."
      },
      {
        description: "Example 2:",
        input: "arr = [1, 2, 3], k = 0",
        output: "[1, 2, 3]",
        explanation: "Explanation: No rotation since k = 0."
      },
      {
        description: "Example 3:",
        input: "arr = [1], k = 1",
        output: "[1]",
        explanation: "Explanation: A single element array remains unchanged."
      }
    ],
    constraints: [
      "1 <= arr.length <= 10^5",
      "-10^9 <= arr[i] <= 10^9",
      "0 <= k <= 10^5"
    ],
    followUp: "Follow-up: Can you rotate the array in-place with O(1) extra space?"
  },
  {
    id: 6,
    title: "Kadane's Algorithm",
    topic: "arrays",
    description: "Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    tags: ["Dynamic Programming"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]", output: "6" },
      { input: "arr = [1]", output: "1" },
      { input: "arr = [-1, -2, -3]", output: "-1" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        output: "6",
        explanation: "Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6."
      },
      {
        description: "Example 2:",
        input: "arr = [1]",
        output: "1",
        explanation: "Explanation: The subarray [1] has the largest sum = 1."
      },
      {
        description: "Example 3:",
        input: "arr = [-1, -2, -3]",
        output: "-1",
        explanation: "Explanation: The subarray [-1] has the largest sum = -1."
      }
    ],
    constraints: [
      "1 <= arr.length <= 10^5",
      "-10^4 <= arr[i] <= 10^4"
    ],
    followUp: "Follow-up: Can you solve this using O(n) time complexity?"
  },
  {
    id: 7,
    title: "Trapping Rain Water",
    topic: "arrays",
    description: "Given an array height representing the heights of bars, calculate the amount of water that can be trapped between the bars after raining.",
    tags: ["Two-Pointers", "Stack"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]", output: "6" },
      { input: "height = [4, 2, 0, 3, 2, 5]", output: "9" },
      { input: "height = [1, 2]", output: "0" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        output: "6",
        explanation: "Explanation: The trapped water is 6 units (e.g., between bars 0 and 2, 1 and 3, etc.)."
      },
      {
        description: "Example 2:",
        input: "height = [4, 2, 0, 3, 2, 5]",
        output: "9",
        explanation: "Explanation: The trapped water is 9 units."
      },
      {
        description: "Example 3:",
        input: "height = [1, 2]",
        output: "0",
        explanation: "Explanation: No water can be trapped as there are not enough bars."
      }
    ],
    constraints: [
      "1 <= height.length <= 10^5",
      "0 <= height[i] <= 10^4"
    ],
    followUp: "Follow-up: Can you solve this using O(1) extra space?"
  },
  {
    id: 8,
    title: "Merge Intervals",
    topic: "arrays",
    description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return the new array of non-overlapping intervals.",
    tags: ["Intervals", "Sorting"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]", output: "[[1, 6], [8, 10], [15, 18]]" },
      { input: "intervals = [[1, 4], [4, 5]]", output: "[[1, 5]]" },
      { input: "intervals = [[1, 4]]", output: "[[1, 4]]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]",
        output: "[[1, 6], [8, 10], [15, 18]]",
        explanation: "Explanation: Intervals [1, 3] and [2, 6] overlap, so they merge into [1, 6]."
      },
      {
        description: "Example 2:",
        input: "intervals = [[1, 4], [4, 5]]",
        output: "[[1, 5]]",
        explanation: "Explanation: Intervals [1, 4] and [4, 5] are merged into [1, 5]."
      },
      {
        description: "Example 3:",
        input: "intervals = [[1, 4]]",
        output: "[[1, 4]]",
        explanation: "Explanation: No overlapping intervals, so the array remains unchanged."
      }
    ],
    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4"
    ],
    followUp: "Follow-up: Can you solve this with O(n log n) time complexity using sorting?"
  },
  {
    id: 31,
    title: "Array Partition",
    topic: "arrays",
    description: "Given an array arr, determine if it can be partitioned into two subarrays with equal sums.",
    tags: ["Partition"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "arr = [1, 2, 3, 4, 5, 5]", output: "true" },
      { input: "arr = [1, 2, 3, 4]", output: "false" },
      { input: "arr = [2, 2]", output: "true" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [1, 2, 3, 4, 5, 5]",
        output: "true",
        explanation: "Explanation: The array can be partitioned into [1, 4, 5] and [2, 3, 5], both summing to 10."
      },
      {
        description: "Example 2:",
        input: "arr = [1, 2, 3, 4]",
        output: "false",
        explanation: "Explanation: No partition exists where both subarrays sum to 5."
      },
      {
        description: "Example 3:",
        input: "arr = [2, 2]",
        output: "true",
        explanation: "Explanation: The array can be partitioned into [2] and [2], both summing to 2."
      }
    ],
    constraints: [
      "1 <= arr.length <= 10^3",
      "-10^3 <= arr[i] <= 10^3"
    ],
    followUp: "Follow-up: Can you solve this in O(n) time complexity?"
  },
  {
    id: 32,
    title: "Find Duplicates",
    topic: "arrays",
    description: "Given an array arr of integers where each element is in the range [1, n], find all elements that appear twice. You may use only constant extra space.",
    tags: ["Hash Map"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "arr = [4, 3, 2, 7, 8, 2, 3, 1]", output: "[2, 3]" },
      { input: "arr = [1, 1, 2]", output: "[1]" },
      { input: "arr = [1]", output: "[]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [4, 3, 2, 7, 8, 2, 3, 1]",
        output: "[2, 3]",
        explanation: "Explanation: 2 and 3 appear twice in the array."
      },
      {
        description: "Example 2:",
        input: "arr = [1, 1, 2]",
        output: "[1]",
        explanation: "Explanation: 1 appears twice in the array."
      },
      {
        description: "Example 3:",
        input: "arr = [1]",
        output: "[]",
        explanation: "Explanation: No duplicates exist."
      }
    ],
    constraints: [
      "1 <= arr.length <= 10^5",
      "1 <= arr[i] <= arr.length"
    ],
    followUp: "Follow-up: Can you solve this without using extra space beyond the output array?"
  },
  {
    id: 33,
    title: "Longest Increasing Subsequence",
    topic: "arrays",
    description: "Given an array arr, find the length of the longest increasing subsequence (LIS).",
    tags: ["Dynamic Programming"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "arr = [10, 9, 2, 5, 3, 7, 101, 18]", output: "4" },
      { input: "arr = [0, 1, 0, 3, 2, 3]", output: "4" },
      { input: "arr = [7, 7, 7, 7]", output: "1" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "arr = [10, 9, 2, 5, 3, 7, 101, 18]",
        output: "4",
        explanation: "Explanation: One possible LIS is [2, 5, 7, 101], so the length is 4."
      },
      {
        description: "Example 2:",
        input: "arr = [0, 1, 0, 3, 2, 3]",
        output: "4",
        explanation: "Explanation: One possible LIS is [0, 1, 2, 3], so the length is 4."
      },
      {
        description: "Example 3:",
        input: "arr = [7, 7, 7, 7]",
        output: "1",
        explanation: "Explanation: The longest increasing subsequence is [7], so the length is 1."
      }
    ],
    constraints: [
      "1 <= arr.length <= 2500",
      "-10^4 <= arr[i] <= 10^4"
    ],
    followUp: "Follow-up: Can you optimize the space complexity to O(n)?"
  },

  // Strings
  {
    id: 9,
    title: "Reverse a String",
    topic: "strings",
    description: "Write a function to reverse a string.",
    tags: ["Basics"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: `s = "hello"`, output: `"olleh"` },
      { input: `s = "ILP"`, output: `"PLI"` },
      { input: `s = ""`, output: `""` },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s = "hello"`,
        output: `"olleh"`,
        explanation: "Explanation: The reversed string of 'hello' is 'olleh'."
      },
      {
        description: "Example 2:",
        input: `s = "ILP"`,
        output: `"PLI"`,
        explanation: "Explanation: The reversed string of 'ILP' is 'PLI'."
      },
      {
        description: "Example 3:",
        input: `s = ""`,
        output: `""`,
        explanation: "Explanation: The reversed string of an empty string is empty."
      }
    ],
    constraints: [
      "0 <= s.length <= 10^5",
      "s consists of printable ASCII characters."
    ],
    followUp: "Follow-up: Can you reverse the string in-place with O(1) extra space?"
  },
  {
    id: 10,
    title: "Check Palindrome",
    topic: "strings",
    description: "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    tags: ["Two-Pointers"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: `s = "radar"`, output: "true" },
      { input: `s = "hello"`, output: "false" },
      { input: `s = "a"`, output: "true" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s = "radar"`,
        output: "true",
        explanation: "Explanation: 'radar' reads the same forward and backward, so it is a palindrome."
      },
      {
        description: "Example 2:",
        input: `s = "hello"`,
        output: "false",
        explanation: "Explanation: 'hello' does not read the same forward and backward."
      },
      {
        description: "Example 3:",
        input: `s = "a"`,
        output: "true",
        explanation: "Explanation: A single character is a palindrome."
      }
    ],
    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists of printable ASCII characters."
    ],
    followUp: "Follow-up: Can you ignore spaces and punctuation with O(1) extra space?"
  },
  {
    id: 11,
    title: "Longest Substring Without Repeating",
    topic: "strings",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    tags: ["Sliding Window"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: `s = "abcabcbb"`, output: "3" },
      { input: `s = "bbbbb"`, output: "1" },
      { input: `s = "pwwkew"`, output: "3" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s = "abcabcbb"`,
        output: "3",
        explanation: "Explanation: The longest substring without repeating characters is 'abc' with length 3."
      },
      {
        description: "Example 2:",
        input: `s = "bbbbb"`,
        output: "1",
        explanation: "Explanation: The longest substring without repeating characters is 'b' with length 1."
      },
      {
        description: "Example 3:",
        input: `s = "pwwkew"`,
        output: "3",
        explanation: "Explanation: The longest substring without repeating characters is 'wke' with length 3."
      }
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols, and spaces."
    ],
    followUp: "Follow-up: Can you solve this with O(1) space complexity?"
  },
  {
    id: 12,
    title: "String to Integer (atoi)",
    topic: "strings",
    description: "Implement the atoi function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
    tags: ["Parsing"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: `s = "42"`, output: "42" },
      { input: `s = "   -42"`, output: "-42" },
      { input: `s = "4193 with words"`, output: "4193" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s = "42"`,
        output: "42",
        explanation: "Explanation: The string '42' is converted to the integer 42."
      },
      {
        description: "Example 2:",
        input: `s = "   -42"`,
        output: "-42",
        explanation: "Explanation: The string '   -42' is converted to the integer -42."
      },
      {
        description: "Example 3:",
        input: `s = "4193 with words"`,
        output: "4193",
        explanation: "Explanation: The string '4193 with words' is converted to the integer 4193."
      }
    ],
    constraints: [
      "0 <= s.length <= 200",
      "s consists of English letters (lower-case and upper-case), digits (0-9), spaces, or the symbols '+' and '-'."
    ],
    followUp: "Follow-up: Can you handle overflow cases without using built-in functions?"
  },
  {
    id: 13,
    title: "Regular Expression Matching",
    topic: "strings",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n- '.' Matches any single character.\n- '*' Matches zero or more of the preceding element.\nThe matching should cover the entire input string (not partial).",
    tags: ["Dynamic Programming"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: `s = "aa", p = "a"`, output: "false" },
      { input: `s = "aa", p = "a*"`, output: "true" },
      { input: `s = "ab", p = ".*"`, output: "true" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s = "aa", p = "a"`,
        output: "false",
        explanation: "Explanation: 'a' does not match the entire string 'aa'."
      },
      {
        description: "Example 2:",
        input: `s = "aa", p = "a*"`,
        output: "true",
        explanation: "Explanation: '*' matches zero or more 'a', so it matches 'aa'."
      },
      {
        description: "Example 3:",
        input: `s = "ab", p = ".*"`,
        output: "true",
        explanation: "Explanation: '.' matches any character, and '*' allows multiple, so it matches 'ab'."
      }
    ],
    constraints: [
      "1 <= s.length <= 20",
      "1 <= p.length <= 30",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
      "It is guaranteed for each appearance of the character '*', there will be a previous valid character to match."
    ],
    followUp: "Follow-up: Can you optimize the space complexity to O(1)?"
  },
  {
    id: 34,
    title: "Anagram Check",
    topic: "strings",
    description: "Given two strings s1 and s2, return true if s2 is an anagram of s1, otherwise return false.",
    tags: ["Hash Map"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: `s1 = "listen", s2 = "silent"`, output: "true" },
      { input: `s1 = "hello", s2 = "world"`, output: "false" },
      { input: `s1 = "rat", s2 = "tar"`, output: "true" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s1 = "listen", s2 = "silent"`,
        output: "true",
        explanation: "Explanation: Both strings contain the same letters with the same frequency."
      },
      {
        description: "Example 2:",
        input: `s1 = "hello", s2 = "world"`,
        output: "false",
        explanation: "Explanation: The letters and frequencies differ."
      },
      {
        description: "Example 3:",
        input: `s1 = "rat", s2 = "tar"`,
        output: "true",
        explanation: "Explanation: Both strings contain the same letters with the same frequency."
      }
    ],
    constraints: [
      "1 <= s1.length, s2.length <= 5 * 10^4",
      "s1 and s2 consist of lowercase English letters."
    ],
    followUp: "Follow-up: Can you solve this with O(1) space complexity?"
  },
  {
    id: 35,
    title: "Longest Palindromic Substring",
    topic: "strings",
    description: "Given a string s, return the longest palindromic substring in s.",
    tags: ["Dynamic Programming"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: `s = "babad"`, output: `"bab"` },
      { input: `s = "cbbd"`, output: `"bb"` },
      { input: `s = "a"`, output: `"a"` },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s = "babad"`,
        output: `"bab"`,
        explanation: "Explanation: One possible longest palindromic substring is 'bab'."
      },
      {
        description: "Example 2:",
        input: `s = "cbbd"`,
        output: `"bb"`,
        explanation: "Explanation: The longest palindromic substring is 'bb'."
      },
      {
        description: "Example 3:",
        input: `s = "a"`,
        output: `"a"`,
        explanation: "Explanation: The longest palindromic substring is 'a'."
      }
    ],
    constraints: [
      "1 <= s.length <= 1000",
      "s consists of only digits and English letters."
    ],
    followUp: "Follow-up: Can you find all palindromic substrings in O(n) time?"
  },
  {
    id: 36,
    title: "Word Break Problem",
    topic: "strings",
    description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.",
    tags: ["Dynamic Programming"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: `s = "leetcode", dict = ["leet", "code"]`, output: "true" },
      { input: `s = "applepenapple", dict = ["apple", "pen"]`, output: "true" },
      { input: `s = "catsandog", dict = ["cats", "dog", "sand", "and", "cat"]`, output: "false" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: `s = "leetcode", dict = ["leet", "code"]`,
        output: "true",
        explanation: "Explanation: 'leetcode' can be segmented as 'leet code'."
      },
      {
        description: "Example 2:",
        input: `s = "applepenapple", dict = ["apple", "pen"]`,
        output: "true",
        explanation: "Explanation: 'applepenapple' can be segmented as 'apple pen apple'."
      },
      {
        description: "Example 3:",
        input: `s = "catsandog", dict = ["cats", "dog", "sand", "and", "cat"]`,
        output: "false",
        explanation: "Explanation: 'catsandog' cannot be segmented."
      }
    ],
    constraints: [
      "1 <= s.length <= 300",
      "1 <= wordDict.length <= 1000",
      "1 <= wordDict[i].length <= 20",
      "s and wordDict[i] consist of only lowercase English letters.",
      "All the strings of wordDict are unique."
    ],
    followUp: "Follow-up: Can you return all possible segmentations?"
  },

  // Linked Lists
  {
    id: 14,
    title: "Insert at End",
    topic: "linked-lists",
    description: "Given a linked list and a value val, insert a node with value val at the end of the linked list.",
    tags: ["Basics"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "list = 1->2->3, val = 4", output: "1->2->3->4" },
      { input: "list = null, val = 1", output: "1" },
      { input: "list = 5, val = 6", output: "5->6" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "list = 1->2->3, val = 4",
        output: "1->2->3->4",
        explanation: "Explanation: A new node with value 4 is added at the end."
      },
      {
        description: "Example 2:",
        input: "list = null, val = 1",
        output: "1",
        explanation: "Explanation: A new list with a single node 1 is created."
      },
      {
        description: "Example 3:",
        input: "list = 5, val = 6",
        output: "5->6",
        explanation: "Explanation: A new node with value 6 is appended."
      }
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 10^5].",
      "-10^9 <= val <= 10^9"
    ],
    followUp: "Follow-up: Can you do this in O(1) time if you have a tail pointer?"
  },
  {
    id: 15,
    title: "Delete a Node",
    topic: "linked-lists",
    description: "Given a linked list and a value val, delete the first node with the given value.",
    tags: ["Traversal"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "list = 1->2->3->4, val = 3", output: "1->2->4" },
      { input: "list = 1->2, val = 1", output: "2" },
      { input: "list = 1, val = 1", output: "null" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "list = 1->2->3->4, val = 3",
        output: "1->2->4",
        explanation: "Explanation: The node with value 3 is deleted."
      },
      {
        description: "Example 2:",
        input: "list = 1->2, val = 1",
        output: "2",
        explanation: "Explanation: The head node with value 1 is deleted."
      },
      {
        description: "Example 3:",
        input: "list = 1, val = 1",
        output: "null",
        explanation: "Explanation: The only node is deleted, resulting in an empty list."
      }
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 10^5].",
      "-10^9 <= val <= 10^9",
      "The value val is guaranteed to exist in the list."
    ],
    followUp: "Follow-up: Can you handle multiple occurrences of val efficiently?"
  },
  {
    id: 16,
    title: "Reverse a Linked List",
    topic: "linked-lists",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    tags: ["Traversal"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "list = 1->2->3->4->5", output: "5->4->3->2->1" },
      { input: "list = 1->2", output: "2->1" },
      { input: "list = null", output: "null" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "list = 1->2->3->4->5",
        output: "5->4->3->2->1",
        explanation: "Explanation: The list is reversed to 5->4->3->2->1."
      },
      {
        description: "Example 2:",
        input: "list = 1->2",
        output: "2->1",
        explanation: "Explanation: The list is reversed to 2->1."
      },
      {
        description: "Example 3:",
        input: "list = null",
        output: "null",
        explanation: "Explanation: An empty list remains empty."
      }
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 5000].",
      "-5000 <= Node.val <= 5000"
    ],
    followUp: "Follow-up: Can you reverse the list in-place with O(1) space?"
  },
  {
    id: 17,
    title: "Detect Cycle",
    topic: "linked-lists",
    description: "Given the head of a linked list, return true if there is a cycle in the linked list, otherwise return false.",
    tags: ["Floyd's Cycle"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "list = 1->2->3->4->2 (cycle)", output: "true" },
      { input: "list = 1->2->3", output: "false" },
      { input: "list = 1 (no cycle)", output: "false" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "list = 1->2->3->4->2 (cycle)",
        output: "true",
        explanation: "Explanation: There is a cycle where 4 points back to 2."
      },
      {
        description: "Example 2:",
        input: "list = 1->2->3",
        output: "false",
        explanation: "Explanation: No cycle exists."
      },
      {
        description: "Example 3:",
        input: "list = 1 (no cycle)",
        output: "false",
        explanation: "Explanation: A single node has no cycle."
      }
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5"
    ],
    followUp: "Follow-up: Can you find the starting node of the cycle?"
  },
  {
    id: 18,
    title: "Merge K Sorted Lists",
    topic: "linked-lists",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    tags: ["Heap"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "lists = [1->4->5, 1->3->4, 2->6]", output: "1->1->2->3->4->4->5->6" },
      { input: "lists = []", output: "null" },
      { input: "lists = [1]", output: "1" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "lists = [1->4->5, 1->3->4, 2->6]",
        output: "1->1->2->3->4->4->5->6",
        explanation: "Explanation: The lists are merged into a single sorted list."
      },
      {
        description: "Example 2:",
        input: "lists = []",
        output: "null",
        explanation: "Explanation: An empty array of lists results in null."
      },
      {
        description: "Example 3:",
        input: "lists = [1]",
        output: "1",
        explanation: "Explanation: A single list remains unchanged."
      }
    ],
    constraints: [
      "k == lists.length",
      "0 <= k <= 10^4",
      "0 <= list.length <= 500",
      "-10^4 <= list[i].val <= 10^4",
      "Each list[i] is sorted in ascending order."
    ],
    followUp: "Follow-up: Can you optimize the time complexity to O(n log k) where n is the total number of nodes?"
  },
  {
    id: 37,
    title: "Find Middle Node",
    topic: "linked-lists",
    description: "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    tags: ["Two-Pointers"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "list = 1->2->3->4->5", output: "3" },
      { input: "list = 1->2->3->4", output: "2" },
      { input: "list = 1", output: "1" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "list = 1->2->3->4->5",
        output: "3",
        explanation: "Explanation: The middle node is 3."
      },
      {
        description: "Example 2:",
        input: "list = 1->2->3->4",
        output: "2",
        explanation: "Explanation: The second middle node is 2 (since there are two middle nodes: 2 and 3)."
      },
      {
        description: "Example 3:",
        input: "list = 1",
        output: "1",
        explanation: "Explanation: The middle node is 1."
      }
    ],
    constraints: [
      "The number of nodes in the list is in the range [1, 100].",
      "-100 <= Node.val <= 100"
    ],
    followUp: "Follow-up: Can you find the middle node in a single pass?"
  },
  {
    id: 38,
    title: "Intersection of Two Lists",
    topic: "linked-lists",
    description: "Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.",
    tags: ["Two-Pointers"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "list1 = 1->2->3->4, list2 = 5->3->4", output: "3" },
      { input: "list1 = 1->2, list2 = 3->4", output: "null" },
      { input: "list1 = 1->2->3, list2 = 3", output: "3" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "list1 = 1->2->3->4, list2 = 5->3->4",
        output: "3",
        explanation: "Explanation: The intersection node is 3."
      },
      {
        description: "Example 2:",
        input: "list1 = 1->2, list2 = 3->4",
        output: "null",
        explanation: "Explanation: No intersection exists."
      },
      {
        description: "Example 3:",
        input: "list1 = 1->2->3, list2 = 3",
        output: "3",
        explanation: "Explanation: The intersection node is 3."
      }
    ],
    constraints: [
      "The number of nodes in list1 is in the range [1, 1000].",
      "The number of nodes in list2 is in the range [1, 1000].",
      "1 <= Node.val <= 10^5"
    ],
    followUp: "Follow-up: Can you solve this without modifying the lists?"
  },
  {
    id: 39,
    title: "Flatten a Multilevel Linked List",
    topic: "linked-lists",
    description: "Given a linked list where each node may have a next pointer and a child pointer, flatten it into a single-level linked list.\n\nThe flattened list should be in the same order as it would be if all child pointers were expanded.",
    tags: ["Recursion"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "list = 1->2->3 (2->4)", output: "1->2->4->3" },
      { input: "list = 1->2->3", output: "1->2->3" },
      { input: "list = null", output: "null" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "list = 1->2->3 (2->4)",
        output: "1->2->4->3",
        explanation: "Explanation: The child 4 of node 2 is flattened into 1->2->4->3."
      },
      {
        description: "Example 2:",
        input: "list = 1->2->3",
        output: "1->2->3",
        explanation: "Explanation: No child pointers, so the list remains unchanged."
      },
      {
        description: "Example 3:",
        input: "list = null",
        output: "null",
        explanation: "Explanation: An empty list remains empty."
      }
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 10^4].",
      "-1000 <= Node.val <= 1000",
      "The depth of the tree will not exceed 1000."
    ],
    followUp: "Follow-up: Can you flatten it in-place?"
  },

  // Trees
  {
    id: 19,
    title: "Inorder Traversal",
    topic: "trees",
    description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    tags: ["Traversal"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "tree = [1, null, 2, 3]", output: "[1, 3, 2]" },
      { input: "tree = []", output: "[]" },
      { input: "tree = [1]", output: "[1]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [1, null, 2, 3]",
        output: "[1, 3, 2]",
        explanation: "Explanation: Inorder traversal is left->root->right: [1, 3, 2]."
      },
      {
        description: "Example 2:",
        input: "tree = []",
        output: "[]",
        explanation: "Explanation: An empty tree has no nodes."
      },
      {
        description: "Example 3:",
        input: "tree = [1]",
        output: "[1]",
        explanation: "Explanation: A single node tree returns [1]."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    followUp: "Follow-up: Can you do it iteratively?"
  },
  {
    id: 20,
    title: "Preorder Traversal",
    topic: "trees",
    description: "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
    tags: ["Traversal"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "tree = [1, null, 2, 3]", output: "[1, 2, 3]" },
      { input: "tree = []", output: "[]" },
      { input: "tree = [1]", output: "[1]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [1, null, 2, 3]",
        output: "[1, 2, 3]",
        explanation: "Explanation: Preorder traversal is root->left->right: [1, 2, 3]."
      },
      {
        description: "Example 2:",
        input: "tree = []",
        output: "[]",
        explanation: "Explanation: An empty tree has no nodes."
      },
      {
        description: "Example 3:",
        input: "tree = [1]",
        output: "[1]",
        explanation: "Explanation: A single node tree returns [1]."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    followUp: "Follow-up: Can you do it iteratively?"
  },
  {
    id: 21,
    title: "Binary Tree Level Order Traversal",
    topic: "trees",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    tags: ["BFS"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "tree = [3, 9, 20, null, null, 15, 7]", output: "[[3], [9, 20], [15, 7]]" },
      { input: "tree = [1]", output: "[[1]]" },
      { input: "tree = []", output: "[]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [3, 9, 20, null, null, 15, 7]",
        output: "[[3], [9, 20], [15, 7]]",
        explanation: "Explanation: Level order traversal is [[3], [9, 20], [15, 7]]."
      },
      {
        description: "Example 2:",
        input: "tree = [1]",
        output: "[[1]]",
        explanation: "Explanation: Level order traversal is [[1]]."
      },
      {
        description: "Example 3:",
        input: "tree = []",
        output: "[]",
        explanation: "Explanation: An empty tree has no levels."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000"
    ],
    followUp: "Follow-up: Can you do it without using a queue?"
  },
  {
    id: 22,
    title: "Validate BST",
    topic: "trees",
    description: "Given the root of a binary tree, determine if it is a valid Binary Search Tree (BST). A valid BST is defined as follows:\n- The left subtree of a node contains only nodes with values less than the node's value.\n- The right subtree of a node contains only nodes with values greater than the node's value.\n- Both the left and right subtrees must also be binary search trees.",
    tags: ["Validation"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "tree = [2, 1, 3]", output: "true" },
      { input: "tree = [5, 1, 4, null, null, 3, 6]", output: "false" },
      { input: "tree = [1]", output: "true" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [2, 1, 3]",
        output: "true",
        explanation: "Explanation: The tree is a valid BST."
      },
      {
        description: "Example 2:",
        input: "tree = [5, 1, 4, null, null, 3, 6]",
        output: "false",
        explanation: "Explanation: The node 4's left child 3 is greater than 4, invalidating the BST."
      },
      {
        description: "Example 3:",
        input: "tree = [1]",
        output: "true",
        explanation: "Explanation: A single node is a valid BST."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [1, 10^4].",
      "-2^31 <= Node.val <= 2^31 - 1"
    ],
    followUp: "Follow-up: Can you validate it in O(n) time with O(1) space?"
  },
  {
    id: 23,
    title: "Lowest Common Ancestor",
    topic: "trees",
    description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\nThe lowest common ancestor is defined between nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).",
    tags: ["Recursion"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "tree = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1", output: "3" },
      { input: "tree = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4", output: "5" },
      { input: "tree = [1, 2], p = 1, q = 2", output: "1" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1",
        output: "3",
        explanation: "Explanation: The LCA of nodes 5 and 1 is 3."
      },
      {
        description: "Example 2:",
        input: "tree = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4",
        output: "5",
        explanation: "Explanation: The LCA of nodes 5 and 4 is 5."
      },
      {
        description: "Example 3:",
        input: "tree = [1, 2], p = 1, q = 2",
        output: "1",
        explanation: "Explanation: The LCA of nodes 1 and 2 is 1."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [2, 10^5].",
      "-10^9 <= Node.val <= 10^9",
      "All Node.val are unique.",
      "p != q",
      "p and q will exist in the tree."
    ],
    followUp: "Follow-up: Can you find the LCA without storing parent pointers?"
  },
  {
    id: 40,
    title: "Postorder Traversal",
    topic: "trees",
    description: "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
    tags: ["Traversal"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "tree = [1, null, 2, 3]", output: "[3, 2, 1]" },
      { input: "tree = []", output: "[]" },
      { input: "tree = [1]", output: "[1]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [1, null, 2, 3]",
        output: "[3, 2, 1]",
        explanation: "Explanation: Postorder traversal is left->right->root: [3, 2, 1]."
      },
      {
        description: "Example 2:",
        input: "tree = []",
        output: "[]",
        explanation: "Explanation: An empty tree has no nodes."
      },
      {
        description: "Example 3:",
        input: "tree = [1]",
        output: "[1]",
        explanation: "Explanation: A single node tree returns [1]."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    followUp: "Follow-up: Can you do it iteratively?"
  },
  {
    id: 41,
    title: "Maximum Depth of Binary Tree",
    topic: "trees",
    description: "Given the root of a binary tree, return its maximum depth.\n\nThe maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    tags: ["Recursion"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "tree = [3, 9, 20, null, null, 15, 7]", output: "3" },
      { input: "tree = [1, null, 2]", output: "2" },
      { input: "tree = []", output: "0" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [3, 9, 20, null, null, 15, 7]",
        output: "3",
        explanation: "Explanation: The maximum depth is 3 (from root to 15 or 7)."
      },
      {
        description: "Example 2:",
        input: "tree = [1, null, 2]",
        output: "2",
        explanation: "Explanation: The maximum depth is 2 (from root to 2)."
      },
      {
        description: "Example 3:",
        input: "tree = []",
        output: "0",
        explanation: "Explanation: An empty tree has depth 0."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-100 <= Node.val <= 100"
    ],
    followUp: "Follow-up: Can you solve it iteratively?"
  },
  {
    id: 42,
    title: "Serialize and Deserialize Binary Tree",
    topic: "trees",
    description: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.\n\nDesign an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
    tags: ["Serialization"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "tree = [1, 2, 3, null, null, 4, 5]", output: "[1, 2, 3, null, null, 4, 5]" },
      { input: "tree = []", output: "[]" },
      { input: "tree = [1]", output: "[1]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "tree = [1, 2, 3, null, null, 4, 5]",
        output: "[1, 2, 3, null, null, 4, 5]",
        explanation: "Explanation: The tree is serialized and deserialized back to the same structure."
      },
      {
        description: "Example 2:",
        input: "tree = []",
        output: "[]",
        explanation: "Explanation: An empty tree is serialized to an empty string."
      },
      {
        description: "Example 3:",
        input: "tree = [1]",
        output: "[1]",
        explanation: "Explanation: A single node tree is serialized and deserialized correctly."
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10^4].",
      "-1000 <= Node.val <= 1000"
    ],
    followUp: "Follow-up: Can you design a compact serialization format?"
  },

  // Graphs
  {
    id: 24,
    title: "DFS Traversal",
    topic: "graphs",
    description: "Given an undirected graph represented by an adjacency list, perform a Depth-First Search (DFS) traversal starting from node 0 and return the traversal order.",
    tags: ["DFS"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]]", output: "[0, 1, 3, 2]" },
      { input: "graph = [[1], [0]]", output: "[0, 1]" },
      { input: "graph = [[]]", output: "[0]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]]",
        output: "[0, 1, 3, 2]",
        explanation: "Explanation: One possible DFS order is [0, 1, 3, 2]."
      },
      {
        description: "Example 2:",
        input: "graph = [[1], [0]]",
        output: "[0, 1]",
        explanation: "Explanation: The DFS order is [0, 1]."
      },
      {
        description: "Example 3:",
        input: "graph = [[]]",
        output: "[0]",
        explanation: "Explanation: A single node has no neighbors."
      }
    ],
    constraints: [
      "1 <= graph.length <= 10^5",
      "0 <= graph[i].length < graph.length",
      "0 <= graph[i][j] < graph.length",
      "graph[i] does not contain duplicates.",
      "The graph is undirected (if graph[i] contains j, then graph[j] contains i)."
    ],
    followUp: "Follow-up: Can you detect cycles during DFS?"
  },
  {
    id: 25,
    title: "BFS Traversal",
    topic: "graphs",
    description: "Given an undirected graph represented by an adjacency list, perform a Breadth-First Search (BFS) traversal starting from node 0 and return the traversal order.",
    tags: ["BFS"],
    status: "Unsolved",
    level: "Beginner",
    testCases: [
      { input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]]", output: "[0, 1, 2, 3]" },
      { input: "graph = [[1], [0]]", output: "[0, 1]" },
      { input: "graph = [[]]", output: "[0]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]]",
        output: "[0, 1, 2, 3]",
        explanation: "Explanation: BFS order is [0, 1, 2, 3]."
      },
      {
        description: "Example 2:",
        input: "graph = [[1], [0]]",
        output: "[0, 1]",
        explanation: "Explanation: BFS order is [0, 1]."
      },
      {
        description: "Example 3:",
        input: "graph = [[]]",
        output: "[0]",
        explanation: "Explanation: A single node has no neighbors."
      }
    ],
    constraints: [
      "1 <= graph.length <= 10^5",
      "0 <= graph[i].length < graph.length",
      "0 <= graph[i][j] < graph.length",
      "graph[i] does not contain duplicates.",
      "The graph is undirected (if graph[i] contains j, then graph[j] contains i)."
    ],
    followUp: "Follow-up: Can you find the shortest path during BFS?"
  },
  {
    id: 26,
    title: "Find Shortest Path",
    topic: "graphs",
    description: "Given a weighted undirected graph represented by an adjacency list and weights, find the shortest path from start to end node using Dijkstra's algorithm.",
    tags: ["Dijkstra"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]], start = 0, end = 3, weights = [1, 2, 3, 4]", output: "1" },
      { input: "graph = [[1], [0]], start = 0, end = 1, weights = [1]", output: "1" },
      { input: "graph = [[1, 2], [0, 2], [0, 1]], start = 0, end = 2, weights = [10, 20, 30]", output: "2" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]], start = 0, end = 3, weights = [1, 2, 3, 4]",
        output: "1",
        explanation: "Explanation: Shortest path from 0 to 3 is 1 (via node 1)."
      },
      {
        description: "Example 2:",
        input: "graph = [[1], [0]], start = 0, end = 1, weights = [1]",
        output: "1",
        explanation: "Explanation: Shortest path from 0 to 1 is 1."
      },
      {
        description: "Example 3:",
        input: "graph = [[1, 2], [0, 2], [0, 1]], start = 0, end = 2, weights = [10, 20, 30]",
        output: "2",
        explanation: "Explanation: Shortest path from 0 to 2 is 2 (via node 1 with weight 20)."
      }
    ],
    constraints: [
      "1 <= graph.length <= 500",
      "0 <= graph[i].length < graph.length",
      "0 <= graph[i][j] < graph.length",
      "1 <= weights.length <= 10^4",
      "1 <= weights[i] <= 10^4",
      "The graph is undirected and connected."
    ],
    followUp: "Follow-up: Can you handle negative weights?"
  },
  {
    id: 27,
    title: "Detect Cycle in Graph",
    topic: "graphs",
    description: "Given a directed graph represented by an adjacency list, detect if it contains a cycle using Depth-First Search (DFS).",
    tags: ["DFS"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "graph = [[1], [2], [0], [4], []]", output: "true" },
      { input: "graph = [[1], [2], [3], []]", output: "false" },
      { input: "graph = [[]]", output: "false" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "graph = [[1], [2], [0], [4], []]",
        output: "true",
        explanation: "Explanation: There is a cycle: 0->1->2->0."
      },
      {
        description: "Example 2:",
        input: "graph = [[1], [2], [3], []]",
        output: "false",
        explanation: "Explanation: No cycle exists."
      },
      {
        description: "Example 3:",
        input: "graph = [[]]",
        output: "false",
        explanation: "Explanation: A single node has no cycle."
      }
    ],
    constraints: [
      "1 <= graph.length <= 10^5",
      "0 <= graph[i].length < graph.length",
      "0 <= graph[i][j] < graph.length"
    ],
    followUp: "Follow-up: Can you find the nodes involved in the cycle?"
  },
  {
    id: 28,
    title: "Topological Sort",
    topic: "graphs",
    description: "Given a directed acyclic graph (DAG) represented by an adjacency list, return a valid topological sort order. If there are multiple valid orders, return any of them.",
    tags: ["DFS"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "graph = [[], [3], [3], [], [0, 1], [0, 2]]", output: "[5, 4, 2, 3, 1, 0]" },
      { input: "graph = [[1], []]", output: "[0, 1]" },
      { input: "graph = [[]]", output: "[0]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "graph = [[], [3], [3], [], [0, 1], [0, 2]]",
        output: "[5, 4, 2, 3, 1, 0]",
        explanation: "Explanation: One possible topological order is [5, 4, 2, 3, 1, 0]."
      },
      {
        description: "Example 2:",
        input: "graph = [[1], []]",
        output: "[0, 1]",
        explanation: "Explanation: The topological order is [0, 1]."
      },
      {
        description: "Example 3:",
        input: "graph = [[]]",
        output: "[0]",
        explanation: "Explanation: A single node has order [0]."
      }
    ],
    constraints: [
      "1 <= graph.length <= 2000",
      "0 <= graph[i].length < graph.length",
      "0 <= graph[i][j] < graph.length",
      "The graph is a DAG (no cycles)."
    ],
    followUp: "Follow-up: Can you use Kahn's algorithm with a queue?"
  },
  {
    id: 29,
    title: "Minimum Spanning Tree",
    topic: "graphs",
    description: "Given an undirected weighted graph represented by an adjacency list and weights, find the total weight of the Minimum Spanning Tree (MST) using Kruskal's algorithm.",
    tags: ["Kruskal"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]], weights = [1, 2, 3, 4]", output: "4" },
      { input: "graph = [[1], [0]], weights = [5]", output: "5" },
      { input: "graph = [[1, 2], [0, 2], [0, 1]], weights = [1, 1, 1]", output: "2" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "graph = [[1, 2], [0, 3], [0, 3], [1, 2]], weights = [1, 2, 3, 4]",
        output: "4",
        explanation: "Explanation: Using Kruskal's algorithm, the MST includes edges (0-1, weight 1), (0-2, weight 2), and (1-3, weight 1), totaling 4."
      },
      {
        description: "Example 2:",
        input: "graph = [[1], [0]], weights = [5]",
        output: "5",
        explanation: "Explanation: The MST includes the only edge (0-1, weight 5), totaling 5."
      },
      {
        description: "Example 3:",
        input: "graph = [[1, 2], [0, 2], [0, 1]], weights = [1, 1, 1]",
        output: "2",
        explanation: "Explanation: The MST includes edges (0-1, weight 1) and (0-2, weight 1), totaling 2."
      }
    ],
    constraints: [
      "1 <= graph.length <= 500",
      "0 <= graph[i].length < graph.length",
      "0 <= graph[i][j] < graph.length",
      "1 <= weights.length <= 10^4",
      "1 <= weights[i] <= 10^4",
      "The graph is undirected and connected."
    ],
    followUp: "Follow-up: Can you implement Prim's algorithm instead?"
  },
  {
    id: 30,
    title: "Flood Fill",
    topic: "graphs",
    description: "Given a 2D grid representing an image, an initial position (sr, sc), and a new color, perform a flood fill on the image starting from the given position.\n\nA flood fill replaces the color of the starting pixel and all adjacent pixels of the same color with the new color. Two pixels are adjacent if they share a side (up, down, left, or right).",
    tags: ["DFS", "BFS"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2", output: "[[2, 2, 2], [2, 2, 0], [2, 0, 1]]" },
      { input: "image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, newColor = 2", output: "[[2, 2, 2], [2, 2, 2]]" },
      { input: "image = [[1]], sr = 0, sc = 0, newColor = 2", output: "[[2]]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2",
        output: "[[2, 2, 2], [2, 2, 0], [2, 0, 1]]",
        explanation: "Explanation: Starting at (1, 1) with color 1, all adjacent pixels with color 1 are changed to 2."
      },
      {
        description: "Example 2:",
        input: "image = [[0, 0, 0], [0, 0, 0]], sr = 0, sc = 0, newColor = 2",
        output: "[[2, 2, 2], [2, 2, 2]]",
        explanation: "Explanation: All pixels are of color 0, so all are changed to 2."
      },
      {
        description: "Example 3:",
        input: "image = [[1]], sr = 0, sc = 0, newColor = 2",
        output: "[[2]]",
        explanation: "Explanation: A single pixel is changed from 1 to 2."
      }
    ],
    constraints: [
      "1 <= image.length <= 100",
      "1 <= image[0].length <= 100",
      "0 <= image[i][j] <= 100",
      "0 <= sr < image.length",
      "0 <= sc < image[0].length",
      "0 <= newColor <= 100"
    ],
    followUp: "Follow-up: Can you solve it using BFS instead of DFS?"
  },
  {
    id: 43,
    title: "Number of Islands",
    topic: "graphs",
    description: "Given a 2D grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.",
    tags: ["DFS", "BFS"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "grid = [['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]", output: "1" },
      { input: "grid = [['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]", output: "3" },
      { input: "grid = [['1']]", output: "1" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "grid = [['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]",
        output: "1",
        explanation: "Explanation: There is one island in the grid."
      },
      {
        description: "Example 2:",
        input: "grid = [['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]",
        output: "3",
        explanation: "Explanation: There are three islands in the grid."
      },
      {
        description: "Example 3:",
        input: "grid = [['1']]",
        output: "1",
        explanation: "Explanation: A single '1' forms one island."
      }
    ],
    constraints: [
      "1 <= grid.length <= 300",
      "1 <= grid[0].length <= 300",
      "grid[i][j] is '0' or '1'"
    ],
    followUp: "Follow-up: Can you find the area of each island?"
  },
  {
    id: 44,
    title: "Clone Graph",
    topic: "graphs",
    description: "Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list of its neighbors.",
    tags: ["DFS", "BFS"],
    status: "Unsolved",
    level: "Intermediate",
    testCases: [
      { input: "graph = [[2, 4], [1, 3], [2, 4], [1, 3]]", output: "[[2, 4], [1, 3], [2, 4], [1, 3]]" },
      { input: "graph = [[1], [0]]", output: "[[1], [0]]" },
      { input: "graph = [[]]", output: "[[]]" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "graph = [[2, 4], [1, 3], [2, 4], [1, 3]]",
        output: "[[2, 4], [1, 3], [2, 4], [1, 3]]",
        explanation: "Explanation: The cloned graph has the same structure as the input graph."
      },
      {
        description: "Example 2:",
        input: "graph = [[1], [0]]",
        output: "[[1], [0]]",
        explanation: "Explanation: The cloned graph has two nodes with the same connections."
      },
      {
        description: "Example 3:",
        input: "graph = [[]]",
        output: "[[]]",
        explanation: "Explanation: A single node with no neighbors is cloned."
      }
    ],
    constraints: [
      "1 <= number of nodes <= 100",
      "Each node.val is unique and in the range [1, number of nodes].",
      "The graph is connected and undirected."
    ],
    followUp: "Follow-up: Can you solve it using BFS instead of DFS?"
  },
  {
    id: 45,
    title: "Course Schedule",
    topic: "graphs",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array of prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n\nReturn true if you can finish all courses, otherwise return false.",
    tags: ["DFS", "Topological Sort"],
    status: "Unsolved",
    level: "Advanced",
    testCases: [
      { input: "numCourses = 2, prerequisites = [[1, 0]]", output: "true" },
      { input: "numCourses = 2, prerequisites = [[1, 0], [0, 1]]", output: "false" },
      { input: "numCourses = 1, prerequisites = []", output: "true" },
    ],
    examples: [
      {
        description: "Example 1:",
        input: "numCourses = 2, prerequisites = [[1, 0]]",
        output: "true",
        explanation: "Explanation: You can take course 0, then course 1, so it is possible."
      },
      {
        description: "Example 2:",
        input: "numCourses = 2, prerequisites = [[1, 0], [0, 1]]",
        output: "false",
        explanation: "Explanation: There is a cycle, so it is impossible to finish all courses."
      },
      {
        description: "Example 3:",
        input: "numCourses = 1, prerequisites = []",
        output: "true",
        explanation: "Explanation: No prerequisites, so it is possible."
      }
    ],
    constraints: [
      "1 <= numCourses <= 2000",
      "0 <= prerequisites.length <= 5000",
      "prerequisites[i].length == 2",
      "0 <= ai, bi < numCourses",
      "All the pairs prerequisites[i] are unique."
    ],
    followUp: "Follow-up: Can you return the order in which to take the courses?"
  }
];

export default problemsData;
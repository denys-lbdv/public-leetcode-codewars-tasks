## Word Break

https://leetcode.com/problems/word-break?envType=problem-list-v2&envId=hash-table

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.

## Solution Article

Approach 1: Breadth-First Search
Intuition

Let's imagine the indices of s as a graph. Each index can be thought of as a node, which represents building s up to the index.

Adding a word to an existing string is like an edge between nodes. For a node start, we can move to node end if the substring of s between start, end exists in wordDict.

For example, let's say we have s = "leetcode" and wordDict = ["leet", "code"]. We are currently at node 4, which implies that we have built "leet" (the first 4 characters of s). We can move to node 8, because the substring of s with indices [4, 8) is "code", which is in wordDict.

We start at node 0, which represents the empty string. We want to reach node s.length, which implies that we have built the entire string. We can run a BFS to accomplish this traversal. If you're not familiar with BFS, check out the relevant Explore Card.

At each node start, we iterate over all the nodes end that come after start. For each end, we check if the substring between start, end is in wordDict. If it is, we can add end to the queue.

We will first convert wordDict into a set so that we can perform the checks in constant time. We will also use a data structure seen to prevent us from visiting a node more than once.

Algorithm

Convert wordDict into a set words.
Initialize a queue with 0 and a set seen.
While the queue is not empty:
Remove the first element, start.
If start == s.length, return true.
Iterate end from start + 1 up to and including s.length. For each end, if end has not been visited yet,
Check the substring starting at start and ending before end. If it is in words, add end to the queue and mark it in seen.
Return false if the BFS finishes without reaching the final node.

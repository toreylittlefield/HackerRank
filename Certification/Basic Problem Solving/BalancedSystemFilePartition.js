/**
 * Link: https://www.hackerrank.com/test/33gp893pqhs/questions/9f2r2r1pi1p
 * Name: Balanced System File Partition
 * "1. Balanced System Files Partition\n\nThe directory structure of a system disk partition is represented as a tree. Its n directories are numbered from 0 to n-1, where the root directory has the number 0. The structure of the tree is defined by a parent array, where parent[i] = j means that the directory i is a direct subdirectory of j. Since the root directory does not have a parent, it will be represented as parent[0] = -1. The value in files_size[i] denotes the sum of the sizes in kilobytes of the files located in directory i, but excluding its subdirectories. The size of the content of a directory is defined as the size of all files contained in this directory, plus the sum of the sizes of all of its subdirectories. Partition the tree into two smaller ones by cutting one branch so that the sizes of the resulting subtrees are as close as possible.\n\n \n\nExample\n\nparent = [-1, 0, 0, 1, 1, 2]\n\nfiles_size = [1, 2, 2, 1, 1, 1] \n\n \n\nThe structure of the system is shown in the diagram below. The nodes are labeled as <directory>/<file_size>.\n\n \n\nCut the branch between directories 1 and 0.\n\nThe partition {0, 2, 5} has size files_size[0] + files_size[2] + files_size[5] = 1 + 2 + 1 = 4.\n\nThe partition {1, 3, 4} has size files_size[1] + files_size[3] + files_size[4] = 2 + 1 + 1 = 4.\n\nThe absolute difference between the sizes of the two new trees is 4 - 4 = 0.\n\nSince no other partition can have a smaller absolute difference, the final answer is 0.\n\n \n\nFunction Description \n\nComplete the function mostBalancedPartition in the editor below.\n\n \n\nThe function has the following parameter(s):\n\n    int parent[n]: each parent[i] is the parent directory of directory i\n\n    int files_size[n]: each file_sizes[i] is the sum of file sizes in directory i\n\n \n\nReturns\n\n    int: the minimum absolute difference in the size of content between two subtrees\n\n \n\nConstraints\n\n2 ≤ n ≤ 105\n1 ≤ files_size[i] ≤ 104\nparent[0] = -1\nparent[i] < i for 1 ≤ i < n\nThe depth of each directory tree is at most 500.\n\n \n\nInput Format Format for Custom Testing\nSample Case 0\n\nSample Input\n\nSTDIN     Function \n-----     -------- \n4     →   parent[] size n = 4\n-1    →   parent[] = [ -1, 0, 1, 2 ]\n0\n1\n2\n4     →   files_size[] size n = 4\n1     →   files_size[] = [ 1, 4, 3, 4 ]\n4\n3\n4\n\n\nSample Output\n\n2\n\n \n\nExplanation\n\n \n\nThe structure of the system is shown in the diagram below.\n\nCut the branch between directories 1 and 2. This will result in partitions {0, 1} with size 1 + 4 = 5 and {2, 3} with size 3 + 4 = 7. The absolute difference between their sizes is |5 - 7| = 2.\n\n \n\nSample Case 1"
 */

// Example 1: Expect 0
// const parent = [-1,0,0,1,1,2]
// const file_sizes = [1,2,2,1,1,1];

// Example 2: Expect 2
// const parent = [-1,0,1,2]
// const file_sizes = [1,4,3,4]

// Example 3: Expect 19
const parent = [-1,0,0,0]
const file_sizes = [10,11,10,10]

function mostBalancedPartition(parent, files_size) {
    // track the min size which we want to return
    let minDiff = Infinity;

    // create the tree with the parent input
    const tree = createTree(parent);

    const rootSum = getSum(0);

    // get the array of parents to loop over
    const parentArr = Object.keys(tree);


    // loop through each parent and calculate the sum of file_size and find the difference,
    // compare this difference to the lowest difference found as minDiff
    parentArr.forEach( parentNode => {
        const childNodes = tree[parentNode];
        if (!childNodes) return;

        // loop over the child nodes for this parent and get the fileSizes
        // for(let idx = 0 ; idx < childNodes.length; idx++){
        childNodes.forEach( child => {

            // get the sum for the children (here multiple by 2, as the rootSum already includes the sum of these nodes)
            const childrenSum = 2 * getSum(child);

            // calculate the difference between between this partition of child nodes and the rootSum to get the minimum difference
            minDiff = Math.min(Math.abs( childrenSum - rootSum ), minDiff);
        })
    });

    // the minDiff of the file sizes to return basic on the problem's criteria
    return minDiff;

    /**
     * @description create the tree object as key: int[] pairs
     * @param {object} parent 
     * @returns {object} returns the tree structure with parent nodes as keys and children indexes as values in an array
     */
    function createTree(parent){
        const treeStructure = {};

        // find the parent / child nodes and store them with parent as the key
        for (let idx = 1; idx < parent.length ; idx++){
            const childNode = parent[idx];

            // if child node already exists in the parent push the index the []
            if (treeStructure[childNode]) {
                treeStructure[childNode].push(idx);

            // create a new [] for this child node and push the index into the []
            } else {
                treeStructure[childNode] = [];
                treeStructure[childNode].push(idx);
            };
        };

        // return our tree
        return treeStructure;
    };

    /**
     * @description function to sum the file sizes for a node and it's children
     * @param {object} node
     * @returns {number} sum of node & child nodes
     */
    function getSum(node) {
        // if theres no child nodes of this parent node just return the parent file size
        if (!tree[node]) {
            return files_size[node];
        };

        // file size sum of all child nodes (the value to return)
        let sumFileSize = 0;

        // use a stack to iterate over the nodes to find the lead node
        let nodeStack = [node];

        while (nodeStack.length) {
          const childNode = nodeStack.pop();

          // total the fileSizes
          sumFileSize += files_size[childNode];

          // check if other child nodes exists and push them onto the stack
          if(tree[childNode]){
              nodeStack.push(...tree[childNode]);
          };

        };
        return sumFileSize;
      };
};

console.log(mostBalancedPartition(parent, file_sizes))
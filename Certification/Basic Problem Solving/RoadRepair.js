/**
 * Link: https://www.hackerrank.com/test/33gp893pqhs/questions/4ckcpfj371o
 * Name: Road Repair
 * "2. Road Repair\n\nA number of points along the highway are in need of repair. An equal number of crews are available, stationed at various points along the highway. They must move along the highway to reach an assigned point. Given that one crew must be assigned to each job, what is the minimum total amount of distance traveled by all crews before they can begin work?\n\n \n\nFor example, given crews at points {1,3,5} and required repairs at {3,5,7}, one possible minimum assignment would be {1→ 3, 3 → 5, 5 → 7} for a total of 6 units traveled.\n\n \n\nFunction Description\n\nComplete the function getMinCost in the editor below. The function should return the minimum possible total distance traveled as an integer.\n\n \n\ngetMinCost has the following parameter(s):\n\n    crewId[crewId[0],...crewId[n-1]] : a vector of integers\n\n    jobId[jobId[0],...jobId[n-1]] : a vector of integers\n\n \n\nConstraints\n\n1 < n < 105\ncrewId[i] : 1 < crewId[i] < 109\njobId[i] : 1 < jobId[i] < 109\nInput Format For Custom Testing\nSample Case 0\n\nSample Input For Custom Testing\n\n5\n5\n3\n1\n4\n6\n5\n9\n8\n3\n15\n1\n\n\n \n\nSample Output\n\n17\n\nExplanation\n\nBy index, crewId[i] → jobId[i], { (0 → 0) , (1 → 2) , (2 → 4) , (3 → 3) , (4 → 1) } is one possible assignment for a minimum cost of 17. Showing element values, this is { (5 → 9) , (3 → 3) , (1 → 1) , (4 → 15) , (6 → 8) } yielding a total travel distance of 4 + 0 + 0 + 11 + 2 = 17.\n\nSample Case 1"
 */

// Example 1: Expect 17
// const crew_id = [ 5, 3, 1, 4, 6 ]
// const job_id = [ 9, 8, 3, 15, 1 ]

// Example 2: Expect 18
const crew_id = [ 4,5,1,4,2]
const job_id = [4,4,7,9,10 ]

// Passing Solution but naive solution with O(nlog(n)+klog(k)) & assumming that crew_id & job_id are the same length (size)
function getMinCost(crew_id, job_id) {

    // variable to track the minimum total distance traveled
    let minTotalDistance = 0;

    // by sorting both in arrays (crew_id & job_id) in ascending order we will know the minimum distances needed to travel
    crew_id.sort((a,b) => a - b);
    job_id.sort((a,b) => a - b);

    // iterate and calc the absolute difference between the starting and ending (job) distance to calculate the total min distance
    crew_id.forEach((startDis, index) => {
        const jobDis = job_id[index];
        const diff = Math.abs(startDis - jobDis);
        minTotalDistance += diff;
    });

    // return the min total distance traveled by the crews
    return minTotalDistance;
}

console.log(getMinCost(crew_id, job_id))
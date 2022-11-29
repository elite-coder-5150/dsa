const canPartition = (nums) => {
    let sum = 0

    for (let num of nums) {
        sum += i
    }

    if (sum % 2 == 1) {
        return false
    }

    let target = sum / 2
    let n = nums.length
    let dp = dp[n + 1] = dp[target + 1]

    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    for (let j = 0; j < target; j++) {
        dp[i][j] = false;
    }

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < target; j++) {
            dp[i][j] = dp[i - 1][j];

            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i][j] || d[i - 1][j - nums[i - 1]]
            }
        }
    }

    return dp[n][target]
}
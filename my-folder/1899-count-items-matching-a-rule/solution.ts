function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const ruleMap = {
        type: 0,
        color: 1,
        name: 2,
    };

    return items.filter((el) => el[ruleMap[ruleKey]] === ruleValue).length;
};

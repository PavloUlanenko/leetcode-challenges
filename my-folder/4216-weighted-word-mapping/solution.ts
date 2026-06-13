function mapWordWeights(words: string[], weights: number[]): string {
    let res = '';
    
    for (let i = 0; i < words.length; i++) {
        let sum = 0;
        const word = words[i];
        
        for (let j = 0; j < word.length; j++) {
            const letterIndex = word.charCodeAt(j) - 97;
            sum += weights[letterIndex];
        }
        
        const mod = sum % 26;
        res += String.fromCharCode(122 - mod);
    }
    
    return res;
}

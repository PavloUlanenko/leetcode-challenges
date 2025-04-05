class ATM {
    denominations: number[] = [20, 50, 100, 200, 500]
    storage: number[] = [];

    constructor() {
        this.storage = this.fillEmptyToWithdraw();
    }

    fillEmptyToWithdraw(): number[] {
        return Array.from({ length: this.denominations.length }).fill(0) as number[];
    }

    deposit(banknotesCount: number[]): void {
        for (let i=0; i<banknotesCount.length; i++) {
            this.storage[i] += banknotesCount[i];
        }
    }

    withdraw(amount: number): number[] {
        const toWithdraw = this.fillEmptyToWithdraw();
        let leftover = amount;

        for (let i = this.storage.length - 1; i >= 0; i--) {
            const denom = this.denominations[i];
            const maxNotes = Math.min(this.storage[i], Math.floor(leftover / denom));
            toWithdraw[i] = maxNotes;
            leftover -= maxNotes * denom;
        }

        if (leftover > 0) return [-1];

        // Update storage after successful withdrawal
        for (let i = 0; i < toWithdraw.length; i++) {
            this.storage[i] -= toWithdraw[i];
        }

        return toWithdraw;
    }
}

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */

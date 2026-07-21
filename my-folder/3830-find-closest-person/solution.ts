function findClosest(x: number, y: number, z: number): number {
    const distanceA = Math.abs(z-x);
    const distanceB = Math.abs(z-y);

    return distanceA === distanceB ? 0 : distanceA < distanceB ? 1 : 2;
};

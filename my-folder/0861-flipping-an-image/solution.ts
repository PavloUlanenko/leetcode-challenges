function flipImage(image: number[][]) {
    for (let i=0; i<image.length; i++) {
        let j = 0;
        let k = image[i].length - 1;

        while (j<k) {
            [image[i][k], image[i][j]] = [image[i][j], image[i][k]];
            j++;
            k--;
        }
    }
}

function invertImage(image: number[][]) {
    for (let i=0; i<image.length; i++) {
        for (let j=0; j<image[i].length; j++) {
            if (image[i][j] === 0) {
                image[i][j] = 1;
            } else {
                image[i][j] = 0;
            }
        }
    }
}

function flipAndInvertImage(image: number[][]): number[][] {
    flipImage(image);
    invertImage(image);

    return image;
};

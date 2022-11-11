interface IGetTop10Products {
    (): Promise<Array<string>>;
}

export const getTop10Products: IGetTop10Products = () => {
    return new Promise((resolve, reject) => {
        const arr = Array.from(Array(10), (x, index) => index + 1 + "");
        setTimeout(() => resolve(arr), 1000);
    });
};

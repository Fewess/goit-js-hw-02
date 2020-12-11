const items = ['Mango', 'Poly', 'Ajax'];

const logItems = (array) => {
    for (let i = 0; i < array.length; i++) {
        const message = `${ i + 1 } - ${ array[i] }`;

        console.log(message);
    }
};

logItems(items)
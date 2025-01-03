const connectToDatabase = async () => {
    const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Database connected');
        }, 2000);
    })
    return dummyPromise;    
}

export default connectToDatabase;
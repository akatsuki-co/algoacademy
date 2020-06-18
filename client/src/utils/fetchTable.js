export default async (language) => {
    try {
        const results = await fetch("http://localhost:5000/api/v1/table/?language=" + language);
        const table = await results.json()
        return table
    }
    catch (err) {
        console.log(err)
    }
}


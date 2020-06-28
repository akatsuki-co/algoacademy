export default async (language) => {
  try {
    const host = process.env.REACT_APP_HOST
    const results = await fetch(
      `${host}/api/v1/table?language=${language}`
    )
    const table = await results.json()
    return table
  } catch (err) {
    console.log(err)
  }
}

import connection from "../connection"

export const selectUserById = async (id: number): Promise<any> => {
  try {
    const result = await connection('User')
      .where('user_id', id)
    return result[0]

  } catch (error) {
    console.log(error)
  }
}
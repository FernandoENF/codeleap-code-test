export function enterUsername(username: string) {
  return {
    type: 'ENTER_USERNAME',
    payload: {
      user: {
        username,
      },
    },
  }
}

export function removeUsername() {
  return {
    type: 'REMOVE_USERNAME',
  }
}

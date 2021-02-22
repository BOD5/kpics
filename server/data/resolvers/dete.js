export default {
  date: (arg) => {
    const date = new Date(arg);
    const strD =
		`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

    return strD;
  },
  time: (arg) => {
    const date = new Date(arg);
    const strD = `${date.getHours()}:${date.getMinutes()}`;

    return strD;
  }
};
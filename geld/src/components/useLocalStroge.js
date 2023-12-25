export default function useLocalStroge(props) {
  const setItem = (value) => {
    try {
      window.localStorage.setItem(props, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  const getItem = () => {
    try {
      const item = window.localStorage.getItem(props);
      return item ? JSON.parse(item) : undefined;

    } catch (error) {
      console.log(error);
    }
  };
  return { getItem, setItem };
}

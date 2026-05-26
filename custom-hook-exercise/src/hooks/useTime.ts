const useTime = <T,>(type: string): T => {

  const date = new Date();

  if (type === "day") {

    return date.toLocaleDateString(
      "en-US",
      { weekday: "long" }
    ) as T;

  }

  if (type === "hour") {

    return date.getHours().toString() as T;

  }

  return "" as T;
};

export default useTime;
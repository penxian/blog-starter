import dayjs from "dayjs";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = dayjs(dateString);
  return <time dateTime={dateString}>{date.format("YYYY/MM/DD")}</time>;
};

export default DateFormatter;

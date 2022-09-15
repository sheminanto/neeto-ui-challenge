import dayjs from "dayjs";

export const formatTime = dateTime => dayjs(dateTime).format("MMM, D, YYYY");

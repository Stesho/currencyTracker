export const getCurrentTimeIn12HoursFormat = () => {
  const date = new Date();
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

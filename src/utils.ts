export const getGreeting = (date: Date, newReadme: string): string => {
  let readme: string = newReadme;
  if (date.getUTCHours() >= 8 && date.getUTCHours() < 12) {
    readme = newReadme.replace('Good Night', 'Good Morning');
  } else if (date.getUTCHours() >= 12 && date.getUTCHours() < 18) {
    readme = newReadme.replace('Good Morning', 'Good Afternoon');
  } else if (date.getUTCHours() >= 18 || date.getUTCHours() < 8) {
    readme = newReadme.replace('Good Afternoon', 'Good Night');
  }
  return readme;
};

export const replaceReadme = (date: Date, readme: string): string => {
  const day = (date.getUTCDate() + 1 < 10 ? '0' : '') + (date.getUTCDate() + 1);
  const month = (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getUTCMonth() + 1);
  return readme.replace(/[0-9]{2}[/][0-9]{2}[/][0-9]{4}/, `${day}/${month}/${date.getUTCFullYear()}`);
};

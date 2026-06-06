function capitalizeFirstLetter(str) {
  const trimmed = str.trim();

  if (!trimmed) return "";

  return trimmed[0].toUpperCase() + trimmed.slice(1);
}

export { capitalizeFirstLetter };

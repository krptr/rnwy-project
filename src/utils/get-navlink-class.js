function getNavlinkClass({ isActive }) {
  return `text-sm hover:text-primary text-[9px] uppercase tracking-widest ${isActive ? "text-primary" : "text-on-surface"}`;
}

function getNavlinkClassForMobile({ isActive }) {
  return `text-base tracking-widest w-full block px-6 py-3 rounded-2xl transition-colors ${
    isActive
      ? "text-on-primary bg-primary"
      : "text-on-surface hover:bg-outline-variant"
  }`;
}

export { getNavlinkClass, getNavlinkClassForMobile };

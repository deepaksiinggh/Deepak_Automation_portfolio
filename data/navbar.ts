interface NavItem {
  id: string;
  label: string;
  isExternal?: boolean;
  href?: string;
}

export const navItems: NavItem[] = [
  { id: "home",      label: "HOME" },
  { id: "about",     label: "ABOUT" },
  { id: "services",  label: "SERVICES" },
  { id: "portfolio", label: "PROJECTS" },
  { id: "skills",    label: "SKILLS" },
  { id: "contact",   label: "CONTACT" },
];

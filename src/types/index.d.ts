export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink?: string;
  demoLink?: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = {
  name: string;
  icon: string;
  level: string;
  usage: string;
};

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TCertification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon?: string;
  url?: string;
};

export type TSocialLink = {
  name: string;
  url: string;
  icon: "github" | "linkedin";
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};

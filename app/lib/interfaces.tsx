export interface simpleblogcardsanity {
  title: string;
  slug: string;
  smallDescription: string;
  author: string;
  createdAt: Date;
  content: string;
  titleImage: string;
}

export interface simplecardsanity {
  title: string;
  slug: string;
  description: string;
  content: string;
  titleImage: string;
  author: string;
  createdAt: Date;
}

export interface simpleStudentTestimonyblogCard {
  name: string;
  description: string;
  studImage: string;
  testimony: string;
}

export interface simpleFeatureStudentblogCard {
  name: string;
  descriptions: string;
  studImage: string;
}
export interface simpleTeamsBlogCard {
  name: string;
  description: string;
  teamsImage: string;
  position: string;
}

export interface oneBlogCardsanity {
  title: string;
  description: string;
  slug: string;
  titleImage: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
  content: string[];
  author: string;
  createdAt: Date;
}

export interface ApplySchemaTypes {
  _type: string;
  status: string;
  fullName: string;
  number: string;
  gender: string;
  schoolQualification: string;
  programOfInterest: string;
  email: string;
  age: number;
  residence: string;
  other: string;
  intentionsBefore: string;
  intentionsAfter: string;
  guardianNumber: string;
  otherForguardian: string;
  guardianEmail: string;
  guardianName: string;
}

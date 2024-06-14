type Squad = {
  id: string;
  name: string;
  active: boolean;
  users?: User[]
}

type Squads = [Squad]

type User = {
  id: string;
  squadId?: string;
  firstName: string;
  lastName: string;
  preferredName?: string;
  email?: string;
  phoneNumber?: string;
  photoUrl?: string;
  active: boolean;
  categories?: Category[];
  contacts?: Contact[];
  squad?: Squad

  // TODO: require contact info
};

// type Users = [User];

type Category = {
  id: string;
  userId: string;
  category: string;
  active: boolean;
  contacts?: Contact[];
  user?: User;
}

// type Categories = [Category]

type Contact = {
  id: string;
  userId: string;
  categoryId: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  photoUrl?: string;
  active: boolean;
  contactFields?: ContactField[];
  user?: User;
  category?: Category;
}

// type Contacts = [Contact]

type ContactField =  {
  id: string;
  contactId: string;
  key: string;
  value: string;
  active: boolean;
  contact?: Contact;
}

// type ContactFields = [ContactField]


// TODO implement on backend!
// type Tag = {
//   id: string;
//   contactId: string;
//   tag: string;
//   active: boolean;
// }
//
// type Tags = [Tag]

type SquadResponse = {
  id: string;
  name: string;
  active: boolean;
  users?: UserResponse[]
}

// type SquadsResponse = [SquadResponse]

type UserResponse = {
  id: string;
  squad_id?: string;
  first_name: string;
  last_name: string;
  preferred_name?: string;
  email?: string;
  phone_number?: string;
  photo_url?: string;
  active: boolean;
  categories?: CategoryResponse[];
  contacts?: ContactResponse[];
  squad?: SquadResponse

  // TODO: require contact info
};

// type UsersResponse = [UserResponse];

type CategoryResponse = {
  id: string;
  user_id: string;
  category: string;
  active: boolean;
  contacts: ContactResponse[];
  user: UserResponse;
}

// type CategoriesResponse = [CategoryResponse]

type ContactResponse = {
  id: string;
  user_id: string;
  name: string;
  email?: string;
  phone_number?: string;
  category_id: string;
  photo_url?: string;
  active: boolean;
  fields?: ContactFieldResponse[];
  user?: UserResponse;
  category?: CategoryResponse;
}

// type ContactsResponse = [ContactResponse]

type ContactFieldResponse =  {
  id: string;
  contact_id: string;
  key: string;
  value: string;
  active: boolean;
  contact?: ContactResponse;
}

// type ContactFieldsResponse = [ContactFieldResponse]


// TODO implement on backend!
// type TagResponse = {
//   id: string;
//   contactId: string;
//   tag: string;
//   active: boolean;
// }
//
// type TagsResponse = [TagResponse]

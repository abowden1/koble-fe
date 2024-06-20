type Squad = {
  id?: string;
  name: string;
  active?: boolean;
  users?: User[]
}

type Squads = [Squad]

type User = {
  id?: string;
  squadId?: string;
  firstName: string;
  lastName: string;
  preferredName?: string;
  email?: string;
  phoneNumber?: string;
  photoUrl?: string;
  active?: boolean;
  categories?: Category[];
  contacts?: Contact[];
  squad?: Squad

  // TODO: require contact info
};

// type Users = [User];

type Category = {
  id?: string;
  userId: string;
  category: string;
  active?: boolean;
  contacts?: Contact[];
  user?: User;
}

// type Categories = [Category]

type Contact = {
  id?: string;
  userId: string;
  categoryId: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  photoUrl?: string;
  active?: boolean;
  contactFields?: ContactField[];
  user?: User;
  category?: Category;
  tags?: Tag[];
  notes?: Note[]
}

// type Contacts = [Contact]

type ContactField =  {
  id?: string;
  contactId: string;
  key: string;
  value: string;
  active?: boolean;
  contact?: Contact;
}


type Tag = {
  id: string;
  contactId: string;
  tag: string;
  active?: boolean;
}

type Note = {
  id: string;
  contactId: string;
  note: string;
  active?: boolean;
  createdAt: string;
}


type SquadApi = {
  id?: string;
  name: string;
  active?: boolean;
  users?: UserApi[]
}


type UserApi = {
  id?: string;
  squad_id?: string;
  first_name: string;
  last_name: string;
  preferred_name?: string;
  email?: string;
  phone_number?: string;
  photo_url?: string;
  active?: boolean;
  categories?: CategoryApi[];
  contacts?: ContactApi[];
  squad?: SquadApi

  // TODO: require contact info
};


type CategoryApi = {
  id?: string;
  user_id: string;
  category: string;
  active?: boolean;
  contacts: ContactApi[];
  user: UserApi;
}


type ContactApi = {
  id?: string;
  user_id: string;
  name: string;
  email?: string;
  phone_number?: string;
  category_id: string;
  photo_url?: string;
  active?: boolean;
  fields?: ContactFieldApi[];
  user?: UserApi;
  category?: CategoryApi;
  tags?: TagApi[];
  notes?: NoteApi[]
}


type ContactFieldApi =  {
  id?: string;
  contact_id: string;
  key: string;
  value: string;
  active?: boolean;
  contact?: ContactApi;
}



type TagApi = {
  id: string;
  contact_id: string;
  tag: string;
  active: boolean;
}

type NoteApi = {
  id: string;
  contact_id: string;
  note: string;
  active?: boolean;
  created_at: Date;
}

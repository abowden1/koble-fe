export function SquadApiResponseMapper(squad: SquadApi): Squad {
    return {
        id: squad.id,
        name: squad.name,
        active: squad.active,
        users: squad.users ? UsersApiResponseMapper(squad.users) : undefined
    }
}

export function UserApiResponseMapper(user: UserApi): User {
    return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        preferredName: user.preferred_name,
        email: user.email,
        phoneNumber: user.phone_number,
        photoUrl: user.photo_url,
        active: user.active
    }
}

export function UsersApiResponseMapper(users: UserApi[]): User[] {
    return users.map(user => (
        UserApiResponseMapper(user)
    ))
}

export function CategoryApiResponseMapper(category: CategoryApi): Category {
    return {
        id: category.id,
        userId: category.user_id,
        category: category.category,
        active: category.active,
        contacts: category.contacts ? ContactsApiResponseMapper(category.contacts) : undefined,
        user: category.user ? UserApiResponseMapper(category.user) : undefined
    }
}

export function CategoriesApiResponseMapper(categories: CategoryApi[]): Category[] {
    return categories.map(category => (
        CategoryApiResponseMapper(category)
    ))
}

export function ContactApiResponseMapper(contact: ContactApi): Contact {
    return {
        id: contact.id,
        userId: contact.user_id,
        categoryId: contact.category_id,
        name: contact.name,
        email: contact.email,
        phoneNumber: contact.phone_number,
        photoUrl: contact.photo_url,
        active: contact.active,
        contactFields: contact.fields ? ContactFieldsApiResponseMapper(contact.fields) : undefined,
        user: contact.user ? UserApiResponseMapper(contact.user) : undefined,
        category: contact.category ? CategoryApiResponseMapper(contact.category) : undefined,
        tags: contact.tags ? TagsApiResponseMapper(contact.tags) : undefined,
        notes: contact.notes ? NotesApiResponseMapper(contact.notes) : undefined,
    }
}

export function ContactsApiResponseMapper(contacts: ContactApi[]): Contact[] {
    return contacts.map(contact => (
        ContactApiResponseMapper(contact)
    ))
}

export function ContactFieldApiResponseMapper(field: ContactFieldApi): ContactField {
    return {
        id: field.id,
        contactId: field.contact_id,
        key: field.key,
        value: field.value,
        active: field.active,
        contact: field.contact ? ContactApiResponseMapper(field.contact) : undefined
    }
}

export function ContactFieldsApiResponseMapper(contactFields: ContactFieldApi[]): ContactField[] {
    return contactFields.map(field => (
        ContactFieldApiResponseMapper(field)
    ))
}


export function TagApiResponseMapper(tag: TagApi): Tag {
    return {
            id: tag.id,
            contactId: tag.contact_id,
            tag: tag.tag,
            active: tag.active
        }
}

export function TagsApiResponseMapper(tags: TagApi[]): Tag[] {
    return tags.map(tag => (
        TagApiResponseMapper(tag)
    ))
}

export function NoteApiResponseMapper(note: NoteApi): Note {
    return {
            id: note.id,
            contactId: note.contact_id,
            note: note.note,
            active: note.active,
            createdAt: note.created_at
        }
}

export function NotesApiResponseMapper(notes: NoteApi[]): Note[] {
    return notes.map(note => (
        NoteApiResponseMapper(note)
    ))
}